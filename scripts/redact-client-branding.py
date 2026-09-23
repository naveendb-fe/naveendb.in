#!/usr/bin/env python3
"""OCR-based client branding redaction for portfolio screenshots."""

from __future__ import annotations

import re
import subprocess
import tempfile
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
WORK = ROOT / "public" / "work"
BACKUP = ROOT / "scripts" / ".branding-backup"
TESSERACT = "/opt/homebrew/bin/tesseract"

BRAND_RE = re.compile(
    r"mcdonalds?|mcd\b|mcdelivery|mc\s*delivery|egg\s*mc\s*muffin|mcmuffin|"
    r"big\s*mac|mcnugget|hash\s*brown|"
    r"ubereats|uber\s*eats|grubhub|postmates|doordash|"
    r"brampton|\bqueen\b",
    re.I,
)

STORE_RE = re.compile(
    r"\b\d{3,4}\s*:\s*[A-Z][A-Z0-9\- ]+|restaurant\s+\d{3,4}|store\s+\d{3,4}",
    re.I,
)


def load_font(size: int):
    for name in (
        "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
    ):
        try:
            return ImageFont.truetype(name, size)
        except OSError:
            continue
    return ImageFont.load_default()


def backup_once(path: Path) -> None:
    BACKUP.mkdir(parents=True, exist_ok=True)
    dest = BACKUP / path.relative_to(WORK)
    dest.parent.mkdir(parents=True, exist_ok=True)
    if not dest.exists():
        dest.write_bytes(path.read_bytes())


def ocr_words(path: Path):
    with tempfile.TemporaryDirectory() as td:
        out_base = Path(td) / "ocr"
        subprocess.run(
            [TESSERACT, str(path), str(out_base), "--psm", "11", "tsv"],
            check=True,
            capture_output=True,
        )
        lines = out_base.with_suffix(".tsv").read_text(errors="ignore").splitlines()
    if not lines:
        return []
    header = lines[0].split("\t")
    idx = {name: i for i, name in enumerate(header)}
    words = []
    for row in lines[1:]:
        cols = row.split("\t")
        if len(cols) < len(header):
            continue
        text = cols[idx["text"]].strip()
        if not text:
            continue
        try:
            conf = float(cols[idx["conf"]])
        except ValueError:
            conf = -1.0
        if conf < 35:
            continue
        words.append(
            {
                "text": text,
                "left": int(cols[idx["left"]]),
                "top": int(cols[idx["top"]]),
                "width": int(cols[idx["width"]]),
                "height": int(cols[idx["height"]]),
            }
        )
    return words


def group_lines(words, y_tol=14):
    if not words:
        return []
    ordered = sorted(words, key=lambda w: (w["top"], w["left"]))
    lines = []
    cur = [ordered[0]]
    for w in ordered[1:]:
        if abs(w["top"] - cur[0]["top"]) <= y_tol:
            cur.append(w)
        else:
            lines.append(sorted(cur, key=lambda x: x["left"]))
            cur = [w]
    lines.append(sorted(cur, key=lambda x: x["left"]))
    return lines


def line_text(line):
    return " ".join(w["text"] for w in line)


def line_box(line, pad=5):
    return (
        min(w["left"] for w in line) - pad,
        min(w["top"] for w in line) - pad,
        max(w["left"] + w["width"] for w in line) + pad,
        max(w["top"] + w["height"] for w in line) + pad,
    )


def sample(im: Image.Image, x: int, y: int):
    x = min(max(int(x), 0), im.width - 1)
    y = min(max(int(y), 0), im.height - 1)
    return im.getpixel((x, y))[:3]


def cover(draw, box, color, *, label=None, label_color=(35, 35, 35)):
    x0, y0, x1, y1 = box
    draw.rectangle((x0, y0, x1, y1), fill=color)
    if not label:
        return
    h = max(12, y1 - y0)
    size = max(12, min(34, int(h * 0.55)))
    f = load_font(size)
    try:
        tw = draw.textlength(label, font=f)
    except Exception:
        tw = size * len(label) * 0.5
    tx = x0 + max(4, (x1 - x0 - tw) / 2)
    ty = y0 + max(1, (y1 - y0 - size) / 2 - 1)
    draw.text((tx, ty), label, fill=label_color, font=f)


def replacement_for(text: str) -> str:
    t = text.lower()
    if "uber" in t or "grub" in t or "postmate" in t or "doordash" in t:
        return "Partner"
    if "mcdelivery" in t or "mc delivery" in t:
        return "Delivery"
    if "mcmuffin" in t or "egg mc" in t:
        return "Customer Retention Analysis"
    if "mcdonald" in t or re.search(r"\bmcd\b", t):
        return "Delivery Performance"
    if "brampton" in t or "queen" in t or STORE_RE.search(text):
        return "Store 1001"
    return "Report"


def scrub_gold_watermark(im: Image.Image):
    px = im.load()
    w, h = im.size
    for y in range(int(h * 0.1), int(h * 0.95)):
        for x in range(int(w * 0.22), w):
            r, g, b = px[x, y]
            if r > 215 and g > 185 and b < 195 and (r - b) > 30 and abs(r - g) < 50:
                px[x, y] = (248, 244, 230)


def find_red_logo_boxes(im: Image.Image):
    w, h = im.size
    hits = []
    step = 3
    for y in range(0, h, step):
        for x in range(0, w, step):
            r, g, b = im.getpixel((x, y))[:3]
            if r > 150 and g < 100 and b < 100 and r - g > 55:
                hits.append((x, y))
    boxes = []
    used = [False] * len(hits)
    for i, (x, y) in enumerate(hits):
        if used[i]:
            continue
        cluster = [(x, y)]
        used[i] = True
        changed = True
        while changed:
            changed = False
            for j, (xj, yj) in enumerate(hits):
                if used[j]:
                    continue
                if any(abs(xj - cx) < 40 and abs(yj - cy) < 40 for cx, cy in cluster):
                    used[j] = True
                    cluster.append((xj, yj))
                    changed = True
        xs = [p[0] for p in cluster]
        ys = [p[1] for p in cluster]
        if len(cluster) < 8:
            continue
        x0, x1 = min(xs) - 6, max(xs) + 10
        y0, y1 = min(ys) - 6, max(ys) + 10
        bw, bh = x1 - x0, y1 - y0
        if 14 <= bw <= 160 and 14 <= bh <= 160:
            boxes.append((x0, y0, x1, y1))
    return boxes


def redact_image(path: Path, *, watermark: bool = False):
    backup_once(path)
    bak = BACKUP / path.relative_to(WORK)
    src = bak if bak.exists() else path

    print(f"OCR {src.relative_to(ROOT)} ...")
    words = ocr_words(src)
    lines = group_lines(words)
    im = Image.open(src).convert("RGB")
    draw = ImageDraw.Draw(im)

    hits = 0
    for line in lines:
        text = line_text(line)
        if BRAND_RE.search(text) or STORE_RE.search(text):
            box = line_box(line, pad=6)
            color = sample(im, box[0] + 2, max(0, box[1] - 4))
            r, g, b = color
            dark = (r + g + b) / 3 < 80
            label = replacement_for(text)
            cover(
                draw,
                box,
                (32, 32, 32) if dark else color,
                label=label,
                label_color=(240, 240, 240) if dark else (35, 35, 35),
            )
            hits += 1
            print(f"  [{text}] -> {label}")

    # Token-level pass for short brand fragments OCR split across words
    for w in words:
        if BRAND_RE.search(w["text"]):
            box = (
                w["left"] - 4,
                w["top"] - 4,
                w["left"] + w["width"] + 4,
                w["top"] + w["height"] + 4,
            )
            color = sample(im, box[0], max(0, box[1] - 3))
            r, g, b = color
            dark = (r + g + b) / 3 < 80
            cover(
                draw,
                box,
                (32, 32, 32) if dark else color,
                label=replacement_for(w["text"]),
                label_color=(240, 240, 240) if dark else (35, 35, 35),
            )
            hits += 1

    if watermark:
        scrub_gold_watermark(im)
        for box in find_red_logo_boxes(im):
            cover(draw, box, (30, 30, 30))
            hits += 1

    im.save(path, optimize=True)
    print(f"saved {path.relative_to(ROOT)} ({hits} covers)\n")


def main():
    delivery = WORK / "delivery-inaccuracy"
    for name in ("accuracy-report.png", "market-comparison.png", "area-of-opportunity.png"):
        redact_image(delivery / name)

    mc = WORK / "mcinsights"
    for name in ("1.png", "2.png", "5.png"):
        redact_image(mc / name, watermark=True)

    print("Done.")


if __name__ == "__main__":
    main()
