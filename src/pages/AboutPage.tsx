import { Seo } from '../components/Seo'
import { PageEnter } from '../components/PageEnter'
import { SectionHeading } from '../components/SectionHeading'
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
        description="Senior frontend engineer at Granicus Inc. building the Granicus Design System — React, TypeScript, accessibility."
        path="/about"
      />
      <PageEnter>
        <main className="pb-24 pt-14 sm:pt-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionHeading as="h1" eyebrow="About" title={about.lead} />
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">{about.body}</p>

            <div className="mt-20">
              <p className="eyebrow">Experience</p>
              <ol className="mt-8">
                {experience.map((job, index) => (
                  <li
                    key={job.company}
                    className="grid gap-3 border-t border-line/80 py-8 sm:grid-cols-[6rem_1fr] sm:gap-10"
                  >
                    <span className="font-mono text-xs text-ink-muted tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="font-mono text-[11px] tracking-wide text-ink-muted">
                        {job.period}
                      </p>
                      <p className="mt-2 text-xl font-semibold tracking-tight text-ink">
                        {job.role}
                      </p>
                      <p className="mt-1 text-ink-muted">{job.company}</p>
                      <p className="mt-3 max-w-2xl leading-relaxed text-ink-muted">{job.summary}</p>
                    </div>
                  </li>
                ))}
                <li className="border-t border-line/80" />
              </ol>

              <div className="mt-6 border border-line/80 px-5 py-5 sm:px-6">
                <p className="eyebrow">Education</p>
                <p className="mt-4 text-sm text-ink">
                  {education.degree} · {education.school} · {education.period}
                </p>
                {educationEarlier.map((item) => (
                  <p key={item.school} className="mt-2 text-sm text-ink-muted">
                    {item.degree} · {item.school} · {item.period}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-20">
              <p className="eyebrow">Recommendations</p>
              <div className="mt-8 grid gap-0 border-t border-l border-line/80 md:grid-cols-2">
                {testimonials.map((t) => (
                  <blockquote
                    key={t.name}
                    className="border-r border-b border-line/80 p-6 sm:p-8"
                  >
                    <p className="text-[1.05rem] leading-relaxed text-ink-muted">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <footer className="mt-6 text-sm">
                      <span className="font-semibold text-ink">{t.name}</span>
                      <span className="text-ink-muted"> — {t.context}</span>
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>

            <div className="mt-20">
              <p className="eyebrow">Writing</p>
              <ul className="mt-8 border-t border-line/80">
                {notes.map((note) => (
                  <li key={note.href} className="border-b border-line/80">
                    <a
                      href={note.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group block max-w-2xl py-7"
                    >
                      <h3 className="text-lg font-semibold tracking-tight text-ink transition group-hover:translate-x-1">
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
                  className="underline decoration-line underline-offset-4 transition hover:decoration-ink"
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
