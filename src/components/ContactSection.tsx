import { site } from '../content/site'

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Contact</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Let&apos;s talk
        </h2>
        <p className="mt-4 max-w-xl text-ink-muted">
          Open to conversations with peers and hiring managers about frontend craft, React systems,
          and product UI.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
          <a
            href={`mailto:${site.email}`}
            className="text-xl font-semibold text-ink transition hover:text-accent sm:text-2xl"
          >
            {site.email}
          </a>
          <div className="flex gap-5 font-mono text-sm text-ink-muted">
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">
              LinkedIn
            </a>
            <a href={site.github} target="_blank" rel="noreferrer" className="hover:text-accent">
              GitHub
            </a>
            <span>{site.location}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
