import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Seo } from '../components/Seo'
import { PageEnter } from '../components/PageEnter'
import { getCaseStudy } from '../content/work'

export function WorkPage() {
  const { slug } = useParams()
  const study = slug ? getCaseStudy(slug) : undefined

  if (!study) {
    return <Navigate to="/work" replace />
  }

  return (
    <>
      <Seo title={study.title} description={study.metaDescription} path={`/work/${study.slug}`} />
      <PageEnter>
        <main className="pb-24 pt-12 sm:pt-16">
          <article className="mx-auto max-w-3xl px-5 sm:px-8">
            <Link
              to="/work"
              className="font-mono text-sm text-ink-muted transition hover:text-accent"
            >
              ← Back to work
            </Link>
            <motion.header
              className="mt-10"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-mono text-xs text-accent">
                {study.company} · {study.year}
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                {study.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-muted">{study.summary}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {study.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-line bg-surface px-3 py-1 font-mono text-xs text-ink-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.header>

            <div className="mt-14 space-y-6">
              {(
                [
                  ['Problem', study.problem],
                  ['Approach', study.approach],
                  ['Outcome', study.outcome],
                ] as const
              ).map(([label, body]) => (
                <section key={label} className="surface rounded-xl p-6 sm:p-7">
                  <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                    {label}
                  </h2>
                  <p className="mt-3 leading-relaxed text-ink-muted">{body}</p>
                </section>
              ))}
            </div>
          </article>
        </main>
      </PageEnter>
    </>
  )
}
