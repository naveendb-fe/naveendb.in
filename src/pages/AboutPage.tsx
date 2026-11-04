import { Seo } from '../components/Seo'
import { PageEnter } from '../components/PageEnter'
import { SectionHeading } from '../components/SectionHeading'
import { about, education, experience, notes, site, testimonials } from '../content/site'

export function AboutPage() {
  return (
    <>
      <Seo
        title="About"
        description="Senior frontend engineer in Bangalore — design systems, React, and accessible product UI. Currently at Granicus Inc."
        path="/about"
      />
      <PageEnter>
        <main className="page-shell pb-24 pt-14 sm:pt-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="rounded-2xl border border-white/[0.1] bg-elevated/55 px-5 py-8 sm:px-8 sm:py-10">
              <SectionHeading as="h1" eyebrow="About" title={about.lead} />
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">{about.body}</p>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink">{about.now}</p>
            </div>

            <div className="mt-14">
              <p className="eyebrow">Experience</p>
              <ol className="mt-6 overflow-hidden rounded-2xl border border-white/[0.1] bg-elevated/50">
                {experience.map((job, index) => (
                  <li
                    key={`${job.company}-${job.period}`}
                    className="grid gap-3 border-b border-white/[0.08] px-5 py-8 last:border-b-0 sm:grid-cols-[6rem_1fr] sm:gap-10 sm:px-6"
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
              </ol>

              <div className="mt-6 rounded-xl border border-white/[0.08] bg-elevated/40 px-5 py-5 sm:px-6">
                <p className="eyebrow">Education</p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
                  {education.degree} · {education.school} · {education.period}
                </p>
              </div>
            </div>

            <div className="mt-20">
              <p className="eyebrow">Recommendations</p>
              <div className="mt-6 space-y-4">
                {testimonials.map((t) => (
                  <blockquote
                    key={t.name}
                    className="glass max-w-2xl rounded-xl border-l-2 border-l-accent/35 px-5 py-5 sm:px-6"
                  >
                    <p className="text-[1.05rem] leading-relaxed text-ink-muted">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <footer className="mt-4 text-sm">
                      <span className="font-semibold text-ink">{t.name}</span>
                      <span className="text-ink-muted"> — {t.context}</span>
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>

            <div className="mt-20">
              <p className="eyebrow">Writing</p>
              <ul className="mt-6 overflow-hidden rounded-2xl border border-white/[0.1] bg-elevated/50">
                {notes.map((note) => (
                  <li key={note.href} className="border-b border-white/[0.08] last:border-b-0">
                    <a
                      href={note.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group block max-w-2xl px-5 py-7 transition hover:bg-accent/[0.05] sm:px-6"
                    >
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] tracking-wide text-ink-muted">
                        <span>{note.topic}</span>
                        <span className="h-px w-4 bg-line" aria-hidden="true" />
                        <span>{note.date}</span>
                        <span className="h-px w-4 bg-line" aria-hidden="true" />
                        <span>Medium</span>
                      </div>
                      <h3 className="mt-3 text-lg font-semibold tracking-tight text-ink transition group-hover:translate-x-1 group-hover:text-accent">
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
                  className="underline decoration-line underline-offset-4 transition hover:decoration-accent hover:text-accent"
                  href={site.medium}
                  target="_blank"
                  rel="noreferrer"
                >
                  Medium
                </a>
              </p>
            </div>
          </div>
        </main>
      </PageEnter>
    </>
  )
}
