import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { getFeaturedWork } from '../content/work'

export function WorkSection() {
  const featured = getFeaturedWork()
  const reduce = useReducedMotion()

  return (
    <section id="work" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Selected work</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Craft at civic scale
        </h2>
        <ul className="mt-12 divide-y divide-line/70 border-y border-line/70">
          {featured.map((item, index) => (
            <motion.li
              key={item.slug}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
            >
              <Link
                to={`/work/${item.slug}`}
                className="group grid gap-3 py-8 transition sm:grid-cols-[1fr_auto] sm:items-end"
              >
                <div>
                  <p className="font-mono text-xs text-ink-muted">
                    {item.company} · {item.year}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink transition group-hover:text-accent sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-ink-muted">{item.summary}</p>
                </div>
                <span className="font-mono text-sm text-accent opacity-0 transition group-hover:opacity-100 sm:translate-x-0 sm:group-hover:translate-x-1">
                  Open →
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
