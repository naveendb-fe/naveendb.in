import { Link, Navigate, useParams } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { CaseStudyGallery } from '../components/CaseStudyGallery'
import { Seo } from '../components/Seo'
import { PageEnter } from '../components/PageEnter'
import { getCaseStudy } from '../content/work'

export function WorkPage() {
  const { slug } = useParams()
  const study = slug ? getCaseStudy(slug) : undefined
  const reduce = useReducedMotion()

  if (!study) {
    return <Navigate to="/work" replace />
  }

  const sections = [
    ['Problem', study.problem],
    ['Approach', study.approach],
    ['Outcome', study.outcome],
  ] as const

  return (
    <>
      <Seo title={study.title} description={study.metaDescription} path={`/work/${study.slug}`} />
      <PageEnter>
        <main className="pb-24 pt-14 sm:pt-20">
          <article
            className={[
              'mx-auto px-5 sm:px-8',
              study.images?.length ? 'max-w-4xl' : 'max-w-3xl',
            ].join(' ')}
          >
            <Link
              to="/work"
              className="inline-flex font-mono text-sm text-ink-muted transition hover:text-ink"
            >
              ← Back to work
            </Link>
            <motion.header
              className="mt-10 border-b border-line/80 pb-10"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-mono text-[11px] tracking-wide text-ink-muted">
                {study.company} · {study.year}
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-ink sm:text-5xl">
                {study.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-muted">{study.summary}</p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {study.stack.map((tech) => (
                  <li
                    key={tech}
                    className="border border-line/80 px-3 py-1 font-mono text-[11px] tracking-wide text-ink-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.header>

            {study.images?.length ? <CaseStudyGallery images={study.images} /> : null}

            <div className="mt-0">
              {sections.map(([label, body], index) => (
                <section
                  key={label}
                  className="grid gap-4 border-b border-line/80 py-10 sm:grid-cols-[7rem_1fr] sm:gap-10"
                >
                  <p className="font-mono text-[11px] tracking-[0.18em] text-ink-muted uppercase">
                    {String(index + 1).padStart(2, '0')} · {label}
                  </p>
                  <p className="text-[1.05rem] leading-relaxed text-ink-muted">{body}</p>
                </section>
              ))}
            </div>
          </article>
        </main>
      </PageEnter>
    </>
  )
}
