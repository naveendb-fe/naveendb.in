import { Seo } from '../components/Seo'
import { PageEnter } from '../components/PageEnter'
import { site } from '../content/site'

export function ContactPage() {
  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with Naveen DB — email, LinkedIn, GitHub, and CV."
        path="/contact"
      />
      <PageEnter>
        <main className="pb-24 pt-12 sm:pt-16">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Contact</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Let&apos;s talk
            </h1>
            <p className="mt-4 max-w-xl text-ink-muted">
              Open to conversations with peers and hiring managers about frontend craft, React
              systems, and product UI.
            </p>

            <div className="surface mt-12 max-w-2xl rounded-xl p-6 sm:p-8">
              <a
                href={`mailto:${site.email}`}
                className="text-xl font-semibold text-ink transition hover:text-accent sm:text-2xl"
              >
                {site.email}
              </a>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm text-ink-muted">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-accent"
                >
                  LinkedIn
                </a>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-accent"
                >
                  GitHub
                </a>
                <span>{site.location}</span>
              </div>
              <a
                href={site.cvPath}
                download
                className="mt-8 inline-flex items-center rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-paper transition hover:bg-accent"
              >
                Download CV
              </a>
            </div>
          </div>
        </main>
      </PageEnter>
    </>
  )
}
