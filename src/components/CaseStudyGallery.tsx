import { useEffect, useId, useState } from 'react'
import type { CaseStudyImage } from '../content/work'

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

  const lightbox = active !== null ? images[active] : null
  const countLabel = images.length === 1 ? '1 screen' : `${images.length} screens`

  return (
    <section className="border-b border-white/[0.08] py-10">
      <button
        type="button"
        className="group glass flex w-full cursor-pointer items-center justify-between gap-4 rounded-xl px-5 py-5 text-left transition hover:border-accent/30 hover:bg-elevated/80 sm:px-6"
        onClick={() => setActive(0)}
        aria-haspopup="dialog"
      >
        <div>
          <p className="font-mono text-[11px] tracking-[0.18em] text-ink-muted uppercase">
            Screens
          </p>
          <p className="mt-2 text-base font-medium tracking-tight text-ink transition group-hover:text-accent">
            View {countLabel}
          </p>
          <p className="mt-1 text-sm text-ink-muted">Product captures from the case study.</p>
        </div>
        <span
          className="shrink-0 font-mono text-sm text-ink-muted transition group-hover:translate-x-0.5 group-hover:text-accent"
          aria-hidden="true"
        >
          Open →
        </span>
      </button>

      {lightbox ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-paper/92 p-4 backdrop-blur-md sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-h-full w-full max-w-5xl overflow-auto rounded-xl border border-white/[0.12] bg-elevated shadow-[var(--shadow-elevated)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/[0.1] px-4 py-3">
              <p id={titleId} className="min-w-0 truncate font-mono text-[11px] text-ink-muted">
                {lightbox.caption}
              </p>
              <button
                type="button"
                className="shrink-0 cursor-pointer font-mono text-sm text-ink-muted transition hover:text-accent"
                onClick={() => setActive(null)}
              >
                Close
              </button>
            </div>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="block h-auto max-h-[80vh] w-full object-contain bg-paper"
            />
            {images.length > 1 ? (
              <div className="flex justify-between border-t border-white/[0.1] px-4 py-3 font-mono text-sm text-ink-muted">
                <button
                  type="button"
                  className="cursor-pointer hover:text-accent"
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
                  className="cursor-pointer hover:text-accent"
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
