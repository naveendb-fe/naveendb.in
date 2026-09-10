import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import type { CaseStudy } from '../content/work'

type WorkListProps = {
  items: CaseStudy[]
  showViewAll?: boolean
}

export function WorkList({ items, showViewAll = false }: WorkListProps) {
  const reduce = useReducedMotion()

  return (
    <div>
      <ul className="divide-y divide-line/70 border-y border-line/70">
        {items.map((item, index) => (
          <motion.li
            key={item.slug}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ delay: index * 0.06, duration: 0.4 }}
          >
            <Link
              to={`/work/${item.slug}`}
              className="group grid gap-3 py-7 transition sm:grid-cols-[1fr_auto] sm:items-end sm:py-8"
            >
              <div>
                <p className="font-mono text-xs text-ink-muted">
                  {item.company} · {item.year}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink transition group-hover:text-accent sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">
                  {item.summary}
                </p>
              </div>
              <span className="font-mono text-sm text-accent opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100">
                Open →
              </span>
            </Link>
          </motion.li>
        ))}
      </ul>
      {showViewAll ? (
        <div className="mt-8">
          <Link
            to="/work"
            className="inline-flex items-center rounded-md border border-line bg-surface px-4 py-2 text-sm font-medium text-ink transition hover:border-accent hover:text-accent"
          >
            View all work
          </Link>
        </div>
      ) : null}
    </div>
  )
}
