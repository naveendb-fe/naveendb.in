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

            <div className="mt-8 space-y-4">
              {sections.map(([label, body], index) => (
                <motion.section
                  key={label}
                  className="rounded-2xl border border-white/[0.1] bg-elevated/45 px-5 py-7 sm:px-7 sm:py-8"
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-8% 0px' }}
                  transition={{ delay: index * 0.04, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <span
                      className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-ink font-mono text-[11px] font-medium text-paper tabular-nums"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0">
                      <h2 className="text-xl font-semibold tracking-[-0.025em] text-ink sm:text-2xl">
                        {label}
                      </h2>
                      <p className="mt-3 max-w-[38rem] text-[1.05rem] leading-[1.75] text-ink/80">
                        {body}
                      </p>
                    </div>
                  </div>
                </motion.section>
              ))}

              {study.decisions?.length ? (
                <motion.section
                  className="rounded-2xl border border-white/[0.1] bg-elevated/45 px-5 py-7 sm:px-7 sm:py-8"
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-8% 0px' }}
                  transition={{ delay: 0.12, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <span
                      className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-accent/40 bg-accent-soft font-mono text-[11px] font-medium text-accent tabular-nums"
                      aria-hidden="true"
                    >
                      {String(sections.length + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h2 className="text-xl font-semibold tracking-[-0.025em] text-ink sm:text-2xl">
                        Decisions
                      </h2>
                      <ul className="mt-5 space-y-3">
                        {study.decisions.map((item, i) => (
                          <li
                            key={item}
                            className="flex gap-3 rounded-xl border border-white/[0.08] bg-surface/50 px-4 py-3.5"
                          >
                            <span className="mt-0.5 font-mono text-[11px] text-accent tabular-nums">
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            <p className="text-[1.02rem] leading-[1.7] text-ink/80">{item}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.section>
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
