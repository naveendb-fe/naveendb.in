import type { CaseStudyImage } from '../content/work'

export function CaseStudyGallery({ images }: { images: CaseStudyImage[] }) {
  if (images.length === 0) return null

  const [hero, ...rest] = images

  return (
    <section className="border-b border-line/80 py-10">
      <p className="font-mono text-[11px] tracking-[0.18em] text-ink-muted uppercase">
        Screens
      </p>
      <figure className="mt-6 overflow-hidden border border-line/80 bg-surface">
        <img
          src={hero.src}
          alt={hero.alt}
          className="block h-auto w-full"
          loading="eager"
          decoding="async"
        />
        <figcaption className="border-t border-line/80 px-4 py-3 font-mono text-[11px] text-ink-muted sm:px-5">
          {hero.caption}
        </figcaption>
      </figure>

      {rest.length > 0 ? (
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {rest.map((image) => (
            <figure key={image.src} className="overflow-hidden border border-line/80 bg-surface">
              <img
                src={image.src}
                alt={image.alt}
                className="block aspect-[16/10] w-full object-cover object-top"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="border-t border-line/80 px-3 py-2.5 font-mono text-[11px] text-ink-muted">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      ) : null}
    </section>
  )
}
