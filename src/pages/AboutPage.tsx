import { Seo } from '../components/Seo'
import { PageEnter } from '../components/PageEnter'
import {
  about,
  education,
  educationEarlier,
  experience,
  notes,
  site,
  testimonials,
} from '../content/site'

export function AboutPage() {
  return (
    <>
      <Seo
        title="About"
        description="Senior frontend engineer focused on React, TypeScript, accessibility, and durable product systems."
        path="/about"
      />
      <PageEnter>
        <main className="pb-24 pt-12 sm:pt-16">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">About</p>
            <h1 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {about.lead}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">{about.body}</p>

            <div className="mt-16">
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
                Experience
              </h2>
              <ol className="mt-6 space-y-0 border-l border-line pl-6">
                {experience.map((job) => (
                  <li key={job.company} className="relative pb-10 last:pb-0">
                    <span className="absolute -left-[1.55rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-surface" />
                    <p className="font-mono text-xs text-ink-muted">{job.period}</p>
                    <p className="mt-1 text-lg font-semibold text-ink">
                      {job.role} · {job.company}
                    </p>
                    <p className="mt-2 max-w-2xl text-ink-muted">{job.summary}</p>
                  </li>
                ))}
              </ol>
              <div className="surface mt-10 space-y-4 rounded-xl px-5 py-4">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink-muted">
                  Education
                </p>
                <p className="text-sm text-ink">
                  {education.degree} · {education.school} · {education.period}
                </p>
                {educationEarlier.map((item) => (
                  <p key={item.school} className="text-sm text-ink-muted">
                    {item.degree} · {item.school} · {item.period}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-16 grid gap-5 md:grid-cols-2">
              {testimonials.map((t) => (
                <blockquote key={t.name} className="surface rounded-xl p-6">
                  <p className="leading-relaxed text-ink-muted">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="mt-4 text-sm text-ink">
                    <span className="font-semibold">{t.name}</span>
                    <span className="text-ink-muted"> — {t.context}</span>
                  </footer>
                </blockquote>
              ))}
            </div>

            <div className="mt-16">
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
                Writing
              </h2>
              <ul className="mt-6 space-y-5">
                {notes.map((note) => (
                  <li key={note.href}>
                    <a
                      href={note.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group block max-w-2xl"
                    >
                      <h3 className="text-lg font-semibold text-ink transition group-hover:text-accent">
                        {note.title}
                      </h3>
                      <p className="mt-2 text-ink-muted">{note.blurb}</p>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-mono text-xs text-ink-muted">
                More on{' '}
                <a
                  className="text-accent hover:underline"
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </main>
      </PageEnter>
    </>
  )
}
