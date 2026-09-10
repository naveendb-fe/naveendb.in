import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import type { CaseStudy } from '../content/work'

type WorkListProps = {
  items: CaseStudy[]
  showViewAll?: boolean
  startIndex?: number
}

export function WorkList({ items, showViewAll = false, startIndex = 1 }: WorkListProps) {
  const reduce = useReducedMotion()

  return (
    <div>
      <ul className="border-t border-line/80">
        {items.map((item, index) => {
          const num = String(startIndex + index).padStart(2, '0')
          return (
            <motion.li
              key={item.slug}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-6% 0px' }}
              transition={{ delay: index * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="border-b border-line/80"
            >
              <Link
                to={`/work/${item.slug}`}
                className="group relative grid gap-4 py-8 transition sm:grid-cols-[3.5rem_1fr_auto] sm:items-baseline sm:gap-6 sm:py-9"
              >
                <span className="absolute inset-y-0 left-0 w-0 bg-ink/[0.03] transition-all duration-300 group-hover:w-full" />
                <span className="relative font-mono text-xs text-ink-muted tabular-nums">{num}</span>
                <div className="relative min-w-0">
                  <p className="font-mono text-[11px] tracking-wide text-ink-muted">
                    {item.company} · {item.year}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-ink transition duration-300 group-hover:translate-x-1 sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-[0.95rem]">
                    {item.summary}
                  </p>
                </div>
                <span className="relative hidden font-mono text-sm text-ink-muted transition duration-300 group-hover:translate-x-1 group-hover:text-ink sm:inline">
                  →
                </span>
              </Link>
            </motion.li>
          )
        })}
      </ul>
      {showViewAll ? (
        <div className="mt-10">
          <Link to="/work" className="btn-ghost">
            View all work
          </Link>
        </div>
      ) : null}
    </div>
  )
}
