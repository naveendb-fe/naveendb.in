import { useEffect, useId, useState } from 'react'
import type { CaseStudyImage } from '../content/work'

const PREVIEW_COUNT = 3 // 1 hero + 2 thumbs

export function CaseStudyGallery({ images }: { images: CaseStudyImage[] }) {
  const [active, setActive] = useState<number | null>(null)
  const titleId = useId()

  useEffect(() => {
    if (active === null) return

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') {
        setActive((i) => (i === null ? i : (i + 1) % images.length))
      }
      if (e.key === 'ArrowLeft') {
        setActive((i) => (i === null ? i : (i - 1 + images.length) % images.length))
      }
    }

    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [active, images.length])

  if (images.length === 0) return null

  const hero = images[0]
  const thumbs = images.slice(1, PREVIEW_COUNT)
  const hasMore = images.length > PREVIEW_COUNT
  const lightbox = active !== null ? images[active] : null

  return (
    <section className="border-b border-line/80 py-10">
      <div className="flex items-end justify-between gap-4">
        <p className="font-mono text-[11px] tracking-[0.18em] text-ink-muted uppercase">Screens</p>
        {images.length > 1 ? (
          <button
            type="button"
            className="font-mono text-[11px] tracking-wide text-ink-muted underline-offset-4 transition hover:text-ink hover:underline"
            onClick={() => setActive(0)}
          >
            View all ({images.length})
          </button>
        ) : null}
      </div>

      <figure className="mt-6 overflow-hidden border border-line/80 bg-surface">
        <button
          type="button"
          className="block w-full text-left transition hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          onClick={() => setActive(0)}
          aria-label={`Enlarge: ${hero.caption}`}
        >
          <img
            src={hero.src}
            alt={hero.alt}
            className="block h-auto w-full"
            loading="eager"
            decoding="async"
          />
        </button>
        <figcaption className="border-t border-line/80 px-4 py-3 font-mono text-[11px] text-ink-muted sm:px-5">
          {hero.caption}
        </figcaption>
      </figure>

      {thumbs.length > 0 ? (
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {thumbs.map((image, index) => (
            <figure key={image.src} className="overflow-hidden border border-line/80 bg-surface">
              <button
                type="button"
                className="block w-full text-left transition hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                onClick={() => setActive(index + 1)}
                aria-label={`Enlarge: ${image.caption}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="block aspect-[16/10] w-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
              </button>
              <figcaption className="border-t border-line/80 px-3 py-2.5 font-mono text-[11px] text-ink-muted">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      ) : null}

      {hasMore ? (
        <div className="mt-4">
          <button
            type="button"
            className="inline-flex w-full items-center justify-center border border-line/80 px-4 py-3 font-mono text-[11px] tracking-[0.14em] text-ink-muted uppercase transition hover:border-ink/40 hover:text-ink"
            onClick={() => setActive(0)}
          >
            View all {images.length} screens
          </button>
        </div>
      ) : null}

      {lightbox ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/80 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-h-full w-full max-w-5xl overflow-auto bg-paper"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-line/80 px-4 py-3">
              <p id={titleId} className="min-w-0 truncate font-mono text-[11px] text-ink-muted">
                {lightbox.caption}
              </p>
              <button
                type="button"
                className="shrink-0 font-mono text-sm text-ink-muted transition hover:text-ink"
                onClick={() => setActive(null)}
              >
                Close
              </button>
            </div>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="block h-auto max-h-[80vh] w-full object-contain"
            />
            {images.length > 1 ? (
              <div className="flex justify-between border-t border-line/80 px-4 py-3 font-mono text-sm text-ink-muted">
                <button
                  type="button"
                  className="hover:text-ink"
                  onClick={() =>
                    setActive((i) => (i === null ? 0 : (i - 1 + images.length) % images.length))
                  }
                >
                  ← Prev
                </button>
                <span>
                  {(active ?? 0) + 1} / {images.length}
                </span>
                <button
                  type="button"
                  className="hover:text-ink"
                  onClick={() => setActive((i) => (i === null ? 0 : (i + 1) % images.length))}
                >
                  Next →
                </button>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </section>
  )
}
