import { about, education, experience, testimonials } from '../content/site'

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">About</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {about.lead}
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">{about.body}</p>

        <div className="mt-16">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Experience</h3>
          <ol className="mt-6 space-y-8 border-l border-line/80 pl-6">
            {experience.map((job) => (
              <li key={job.company} className="relative">
                <span className="absolute -left-[1.6rem] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
                <p className="font-mono text-xs text-ink-muted">{job.period}</p>
                <p className="mt-1 text-lg font-semibold text-ink">
                  {job.role} · {job.company}
                </p>
                <p className="mt-2 max-w-2xl text-ink-muted">{job.summary}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 font-mono text-sm text-ink-muted">
            {education.degree} · {education.school} · {education.period}
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="border-t border-line/70 pt-6">
              <p className="text-ink-muted leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-4 text-sm text-ink">
                <span className="font-semibold">{t.name}</span>
                <span className="text-ink-muted"> — {t.context}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
