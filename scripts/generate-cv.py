#!/usr/bin/env python3
"""Generate a site-aligned one-page CV at public/Naveen-DB-CV.pdf"""

from pathlib import Path
from typing import List, Optional, Tuple

from fpdf import FPDF

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "Naveen-DB-CV.pdf"
FONTS = Path(__file__).resolve().parent / "fonts"

INK = (10, 10, 11)
MUTED = (92, 101, 112)
BODY = (32, 36, 42)
SOFT = (214, 218, 224)
HEADER = (55, 61, 73)  # charcoal slate band
ON_HEADER = (255, 255, 255)
ON_HEADER_SOFT = (210, 214, 220)


class CV(FPDF):
    def footer(self):
        self.set_y(-10)
        self.set_font("Mono", "", 7)
        self.set_text_color(*MUTED)
        label = "naveendb.in"
        tw = self.get_string_width(label)
        x = (self.w - tw) / 2
        self.set_xy(x, -10)
        self.cell(tw, 5, label, link="https://naveendb.in", align="C")


def hairline(pdf: CV, width: float, *, y=None, color=SOFT, weight=0.25):
    if y is None:
        y = pdf.get_y()
    pdf.set_draw_color(*color)
    pdf.set_line_width(weight)
    pdf.line(pdf.l_margin, y, pdf.l_margin + width, y)


def right_link_row(
    pdf: CV,
    x: float,
    y: float,
    max_w: float,
    parts: List[Tuple[str, Optional[str]]],
    h: float = 4.0,
    sep: str = "  /  ",
):
    """Draw a right-aligned row of labeled external links."""
    widths = [pdf.get_string_width(label) for label, _ in parts]
    sep_w = pdf.get_string_width(sep)
    total = sum(widths) + sep_w * max(0, len(parts) - 1)
    cursor = x + max_w - total
    for i, ((label, url), tw) in enumerate(zip(parts, widths)):
        pdf.set_xy(cursor, y)
        if url:
            pdf.cell(tw, h, label, link=url)
        else:
            pdf.cell(tw, h, label)
        cursor += tw
        if i < len(parts) - 1:
            pdf.set_xy(cursor, y)
            pdf.cell(sep_w, h, sep)
            cursor += sep_w


def section(pdf: CV, width: float, title: str):
    pdf.ln(3.2)
    pdf.set_font("Mono", "", 7.4)
    pdf.set_text_color(*INK)
    pdf.cell(width, 4.2, title.upper())
    pdf.ln(4.6)
    hairline(pdf, width, color=INK, weight=0.55)
    pdf.ln(3.6)


def bullets(pdf: CV, width: float, items: list[str]):
    pdf.set_font("Sans", "", 9.1)
    pdf.set_text_color(*BODY)
    for item in items:
        x0 = pdf.l_margin
        y0 = pdf.get_y()
        pdf.set_fill_color(*INK)
        pdf.rect(x0 + 0.5, y0 + 1.55, 1.05, 1.05, style="F")
        pdf.set_xy(x0 + 4.0, y0)
        pdf.multi_cell(width - 4.0, 4.25, item)
        pdf.ln(0.55)


def job_index_mark(pdf: CV, n: int, y: float) -> float:
    """Ink square index mark. Returns content inset."""
    size = 5.0
    x = pdf.l_margin
    pdf.set_fill_color(*INK)
    pdf.rect(x, y + 0.2, size, size, style="F")
    pdf.set_font("Mono", "", 6.8)
    pdf.set_text_color(255, 255, 255)
    pdf.set_xy(x, y + 0.95)
    pdf.cell(size, 3.3, str(n), align="C")
    return size + 3.0


def job(
    pdf: CV,
    width: float,
    index: int,
    company: str,
    dates: str,
    role: str,
    location: str,
    items: list,
):
    y0 = pdf.get_y()
    inset = job_index_mark(pdf, index, y0)
    content_w = width - inset
    x_content = pdf.l_margin + inset

    # Company | dates
    pdf.set_xy(x_content, y0)
    pdf.set_font("Sans", "B", 10.4)
    pdf.set_text_color(*INK)
    left_w = content_w * 0.62
    pdf.cell(left_w, 5, company)
    pdf.set_font("Mono", "", 7.4)
    pdf.set_text_color(*MUTED)
    pdf.cell(content_w - left_w, 5, dates, align="R")
    pdf.ln(5)

    pdf.set_x(x_content)
    pdf.set_font("SansMed", "", 9.6)
    pdf.set_text_color(*INK)
    pdf.cell(content_w, 4.4, role)
    pdf.ln(4.2)

    pdf.set_x(x_content)
    pdf.set_font("Sans", "", 8.6)
    pdf.set_text_color(*MUTED)
    pdf.cell(content_w, 4, location)
    pdf.ln(4.6)

    # Bullets aligned to content column
    pdf.set_font("Sans", "", 9.1)
    pdf.set_text_color(*BODY)
    for item in items:
        y = pdf.get_y()
        pdf.set_fill_color(*INK)
        pdf.rect(x_content + 0.5, y + 1.55, 1.05, 1.05, style="F")
        pdf.set_xy(x_content + 4.0, y)
        pdf.multi_cell(content_w - 4.0, 4.25, item)
        pdf.ln(0.55)

    pdf.ln(2.0)


def skills_two_col(pdf: CV, width: float, left: list[str], right: list[str]):
    col_gap = 8
    col_w = (width - col_gap) / 2
    start_y = pdf.get_y()
    x0 = pdf.l_margin

    def draw_col(x: float, items: list[str]) -> float:
        y = start_y
        for item in items:
            pdf.set_fill_color(*INK)
            pdf.rect(x + 0.4, y + 1.5, 1.05, 1.05, style="F")
            pdf.set_xy(x + 3.8, y)
            pdf.set_font("Sans", "", 9.1)
            pdf.set_text_color(*BODY)
            pdf.cell(col_w - 3.8, 4.3, item)
            y += 5.0
        return y

    y_left = draw_col(x0, left)
    y_right = draw_col(x0 + col_w + col_gap, right)
    pdf.set_y(max(y_left, y_right) + 0.5)


def main():
    sans_r = FONTS / "Outfit-400.ttf"
    sans_m = FONTS / "Outfit-500.ttf"
    sans_b = FONTS / "Outfit-700.ttf"
    mono = FONTS / "SFNSMono-400.ttf"

    for path in (sans_r, sans_m, sans_b, mono):
        if not path.exists():
            raise SystemExit(f"Missing font: {path}")

    pdf = CV(format="A4", unit="mm")
    pdf.add_font("Sans", "", str(sans_r))
    pdf.add_font("Sans", "B", str(sans_b))
    pdf.add_font("SansMed", "", str(sans_m))
    pdf.add_font("Mono", "", str(mono))

    pdf.set_auto_page_break(auto=True, margin=12)
    pdf.set_margins(16, 0, 16)
    pdf.add_page()
    width = pdf.w - pdf.l_margin - pdf.r_margin

    # Light paper
    pdf.set_fill_color(255, 255, 255)
    pdf.rect(0, 0, 210, 297, style="F")

    # ---- Dark header band (no logo mark) ----
    # Left: name + role · Right: contact stack
    header_h = 34
    pdf.set_fill_color(*HEADER)
    pdf.rect(0, 0, 210, header_h, style="F")

    left_w = width * 0.52
    right_w = width - left_w

    pdf.set_xy(pdf.l_margin, 10)
    pdf.set_font("Sans", "B", 26)
    pdf.set_text_color(*ON_HEADER)
    pdf.cell(left_w, 9, "NAVEEN DB")

    # Contact block, right-aligned
    contact_x = pdf.l_margin + left_w
    pdf.set_xy(contact_x, 9.5)
    pdf.set_font("Sans", "", 8.8)
    pdf.set_text_color(*ON_HEADER)
    pdf.cell(right_w, 4.2, "Bangalore, India", align="R")

    pdf.set_font("Sans", "", 8.8)
    pdf.set_text_color(*ON_HEADER)
    right_link_row(
        pdf,
        contact_x,
        14.2,
        right_w,
        [
            ("naveendb92@gmail.com", "mailto:naveendb92@gmail.com"),
            ("+91 99169 72978", "tel:+919916972978"),
        ],
        h=4.2,
    )

    pdf.set_font("Sans", "", 8.2)
    pdf.set_text_color(*ON_HEADER_SOFT)
    right_link_row(
        pdf,
        contact_x,
        18.9,
        right_w,
        [
            ("naveendb.in", "https://naveendb.in"),
            ("LinkedIn", "https://www.linkedin.com/in/naveendb92"),
            ("GitHub", "https://github.com/naveendb-fe"),
        ],
        h=4.0,
    )

    pdf.set_xy(pdf.l_margin, 20.5)
    pdf.set_font("SansMed", "", 10)
    pdf.set_text_color(*ON_HEADER_SOFT)
    pdf.cell(left_w, 4.5, "Senior Frontend Engineer")

    # Body starts below the band
    pdf.set_y(header_h + 6)

    # ---- Summary ----
    section(pdf, width, "Summary")
    pdf.set_font("Sans", "", 9.5)
    pdf.set_text_color(*BODY)
    pdf.multi_cell(
        width,
        4.45,
        "Senior frontend engineer with 10+ years building product UI and design systems. "
        "Currently at Granicus Inc. owning and evolving the Granicus Design System - "
        "shared React foundations, components, patterns, and docs so teams ship consistent, "
        "accessible interfaces. Earlier: enterprise analytics and IoT surfaces at Accenture AI, "
        "Kogentix, and Flutura.",
    )

    # ---- Skills (two columns) ----
    section(pdf, width, "Skills")
    skills_two_col(
        pdf,
        width,
        ["React", "Next.js", "Vue", "Angular", "TypeScript", "Redux"],
        [
            "CSS / SCSS",
            "Design systems",
            "Accessibility",
            "Storybook",
            "Jest / Testing Library",
            "Figma",
        ],
    )

    # ---- Experience ----
    section(pdf, width, "Experience")
    job(
        pdf,
        width,
        1,
        "Granicus Inc.",
        "Sep 2022 - Present",
        "Senior Frontend Engineer",
        "Bangalore",
        [
            "Own and evolve the Granicus Design System: tokens, foundations, React components, patterns, and contribution guidelines.",
            "Align design and engineering through Figma libraries and Storybook so libraries and code stay in sync.",
            "Raise the bar on accessibility, consistency, and predictable interaction across multi-product adoption.",
            "Document patterns as recipes for common flows - forms, filters, progressive disclosure, notifications.",
        ],
    )
    job(
        pdf,
        width,
        2,
        "Accenture AI",
        "Dec 2018 - Sep 2022",
        "Front-end Engineer",
        "Bangalore  ·  via Kogentix acquisition",
        [
            "Shipped analytics and insights product UI for enterprise clients with Next.js, React, and Vue.",
            "Led frontend on Delivery Inaccuracy (Next.js reporting) and MCInsights (Vue insights shell).",
            "Built React expense UI (Zero Quartile) with Redux and D3 visualizations for spend profiling.",
            "Worked daily with design, engineering, and stakeholders across multi-disciplinary teams.",
        ],
    )
    job(
        pdf,
        width,
        3,
        "Kogentix Inc.",
        "Jun 2017 - Nov 2018",
        "UI Engineer",
        "Bangalore",
        [
            "Built Angular + TypeScript interfaces for Asset Insights (IoT) and AMP (Automated ML Platform).",
            "Owned Rule Engine module work with design and engineering partners.",
        ],
    )
    job(
        pdf,
        width,
        4,
        "Flutura Decision Sciences & Analytics",
        "Aug 2015 - May 2017",
        "Programmer / Frontend Developer",
        "Bangalore",
        [
            "Developed IoT and analytics UIs for supply-chain and solar operations on Django/jQuery stacks.",
            "Joined weekly client product and implementation discussions.",
        ],
    )

    # ---- Education ----
    section(pdf, width, "Education")
    pdf.set_font("Sans", "B", 10.2)
    pdf.set_text_color(*INK)
    left_w = width * 0.7
    pdf.cell(left_w, 5, "Cambridge Institute of Technology")
    pdf.set_font("Mono", "", 7.4)
    pdf.set_text_color(*MUTED)
    pdf.cell(width - left_w, 5, "2011 - 2015", align="R")
    pdf.ln(5)
    pdf.set_font("SansMed", "", 9.4)
    pdf.set_text_color(*INK)
    pdf.cell(width, 4.4, "B.E. Computer Science Engineering")
    pdf.ln(4.2)
    pdf.set_font("Sans", "", 8.6)
    pdf.set_text_color(*MUTED)
    pdf.cell(width, 4, "Bangalore")

    pdf.output(str(OUT))
    print(f"Wrote {OUT} ({OUT.stat().st_size:,} bytes, {pdf.page_no()} page)")


if __name__ == "__main__":
    main()
