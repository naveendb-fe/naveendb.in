import { Seo } from '../components/Seo'
import { PageEnter } from '../components/PageEnter'
import { SectionHeading } from '../components/SectionHeading'
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
        <main className="pb-24 pt-14 sm:pt-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionHeading
              as="h1"
              eyebrow="Contact"
              title="Let's talk"
              description="Open to conversations with peers and hiring managers about frontend craft, React systems, and product UI."
            />

            <div className="mt-14 max-w-2xl border border-line/80">
              <a
                href={`mailto:${site.email}`}
                className="group block border-b border-line/80 px-6 py-8 transition hover:bg-ink/[0.02] sm:px-8"
              >
                <p className="eyebrow">Email</p>
                <p className="mt-3 text-2xl font-semibold tracking-tight text-ink transition group-hover:translate-x-1 sm:text-3xl">
                  {site.email}
                </p>
              </a>
              <div className="grid sm:grid-cols-3">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-line/80 px-6 py-6 transition hover:bg-ink/[0.02] sm:border-r sm:px-8"
                >
                  <p className="eyebrow">Social</p>
                  <p className="mt-2 font-medium text-ink">LinkedIn →</p>
                </a>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-line/80 px-6 py-6 transition hover:bg-ink/[0.02] sm:border-r sm:px-8"
                >
                  <p className="eyebrow">Code</p>
                  <p className="mt-2 font-medium text-ink">GitHub →</p>
                </a>
                <div className="border-b border-line/80 px-6 py-6 sm:px-8">
                  <p className="eyebrow">Based in</p>
                  <p className="mt-2 font-medium text-ink">{site.location}</p>
                </div>
              </div>
              <div className="px-6 py-6 sm:px-8">
                <a href={site.cvPath} download className="btn-primary">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </main>
      </PageEnter>
    </>
  )
}
