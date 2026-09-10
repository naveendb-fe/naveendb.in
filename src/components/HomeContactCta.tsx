import { Link } from 'react-router-dom'
import { site } from '../content/site'

export function HomeContactCta() {
  return (
    <section className="pb-20 pt-4 sm:pb-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="surface rounded-xl px-6 py-10 sm:px-10 sm:py-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Contact</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Let&apos;s talk
          </h2>
          <p className="mt-3 max-w-xl text-ink-muted">
            Open to conversations about frontend craft, React systems, and product UI.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-paper transition hover:bg-accent"
            >
              Get in touch
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center rounded-md border border-line bg-paper px-5 py-2.5 text-sm font-medium text-ink transition hover:border-accent hover:text-accent"
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
