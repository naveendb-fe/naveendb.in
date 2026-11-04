import { Link, useParams } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { CaseStudyGallery } from '../components/CaseStudyGallery'
import { Seo } from '../components/Seo'
import { PageEnter } from '../components/PageEnter'
import { getAdjacentCaseStudies, getCaseStudy } from '../content/work'
import { NotFoundPage } from './NotFoundPage'

export function WorkPage() {
  const { slug } = useParams()
  const study = slug ? getCaseStudy(slug) : undefined
  const reduce = useReducedMotion()

  if (!study) {
    return <NotFoundPage embedded />
  }

  const { prev, next } = getAdjacentCaseStudies(study.slug)

  const sections = [
    ['Problem', study.problem],
    ['Approach', study.approach],
    ['Outcome', study.outcome],
  ] as const

  return (
    <>
      <Seo title={study.title} description={study.metaDescription} path={`/work/${study.slug}`} />
      <PageEnter>
        <main className="page-shell pb-24 pt-14 sm:pt-20">
          <article className="mx-auto max-w-3xl px-5 sm:px-8">
            <Link
              to="/work"
              className="inline-flex font-mono text-sm text-ink-muted transition hover:text-accent"
            >
              ← Back to work
            </Link>

            <motion.header
              className="mt-10 rounded-2xl border border-white/[0.1] bg-elevated/60 px-5 py-8 sm:px-8 sm:py-10"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <p className="font-mono text-[11px] tracking-wide text-ink-muted">
                {study.company} · {study.year}
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-ink sm:text-5xl">
                {study.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-muted">{study.summary}</p>
              {study.role ? (
                <p className="mt-6 max-w-2xl border-l-2 border-accent/40 pl-4 text-sm leading-relaxed text-ink">
                  <span className="font-mono text-[11px] tracking-wide text-ink-muted uppercase">
                    Role
                  </span>
                  <span className="mt-1 block">{study.role}</span>
                </p>
              ) : null}
              <ul className="mt-8 flex flex-wrap gap-2">
                {study.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded border border-white/[0.1] bg-surface/80 px-3 py-1 font-mono text-[11px] tracking-wide text-ink-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.header>

            <div className="mt-2">
              {sections.map(([label, body], index) => (
                <section key={label} className="border-b border-white/[0.08] py-10">
                  <p className="font-mono text-[11px] tracking-[0.18em] text-ink-muted uppercase">
                    {String(index + 1).padStart(2, '0')} · {label}
                  </p>
                  <p className="mt-4 max-w-[38rem] text-[1.05rem] leading-[1.75] text-ink-muted">
                    {body}
                  </p>
                </section>
              ))}

              {study.decisions?.length ? (
                <section className="border-b border-white/[0.08] py-10">
                  <p className="font-mono text-[11px] tracking-[0.18em] text-ink-muted uppercase">
                    Decisions
                  </p>
                  <ul className="mt-4 max-w-[38rem] space-y-4">
                    {study.decisions.map((item) => (
                      <li
                        key={item}
                        className="border-l border-accent/30 pl-4 text-[1.05rem] leading-[1.75] text-ink-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
            </div>

            {study.images?.length ? <CaseStudyGallery images={study.images} /> : null}

            <nav
              className="mt-10 grid gap-6 border-t border-white/[0.1] pt-10 sm:grid-cols-2"
              aria-label="Adjacent case studies"
            >
              {prev ? (
                <Link to={`/work/${prev.slug}`} className="group block">
                  <p className="font-mono text-[11px] tracking-wide text-ink-muted">Previous</p>
                  <p className="mt-2 text-lg font-semibold tracking-tight text-ink transition group-hover:translate-x-0.5 group-hover:text-accent">
                    ← {prev.title}
                  </p>
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link to={`/work/${next.slug}`} className="group block sm:text-right">
                  <p className="font-mono text-[11px] tracking-wide text-ink-muted">Next</p>
                  <p className="mt-2 text-lg font-semibold tracking-tight text-ink transition group-hover:text-accent group-hover:-translate-x-0.5 sm:group-hover:translate-x-0">
                    {next.title} →
                  </p>
                </Link>
              ) : null}
            </nav>
          </article>
        </main>
      </PageEnter>
    </>
  )
}
