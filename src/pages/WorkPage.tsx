import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Seo } from '../components/Seo'
import { SiteFooter } from '../components/SiteFooter'
import { getCaseStudy } from '../content/work'

export function WorkPage() {
  const { slug } = useParams()
  const study = slug ? getCaseStudy(slug) : undefined

  if (!study) {
    return <Navigate to="/#work" replace />
  }

  return (
    <>
      <Seo title={study.title} description={study.metaDescription} path={`/work/${study.slug}`} />
      <main className="pt-28">
        <article className="mx-auto max-w-3xl px-5 pb-24 sm:px-8">
          <Link
            to="/#work"
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
                  className="rounded-full border border-line px-3 py-1 font-mono text-xs text-ink-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </motion.header>

          <div className="mt-16 space-y-12">
            <section>
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-ink">Problem</h2>
              <p className="mt-3 text-ink-muted leading-relaxed">{study.problem}</p>
            </section>
            <section>
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-ink">Approach</h2>
              <p className="mt-3 text-ink-muted leading-relaxed">{study.approach}</p>
            </section>
            <section>
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-ink">Outcome</h2>
              <p className="mt-3 text-ink-muted leading-relaxed">{study.outcome}</p>
            </section>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
