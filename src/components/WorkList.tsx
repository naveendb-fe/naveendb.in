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
      <ul className="border-t border-ink/15">
        {items.map((item, index) => {
          const num = String(startIndex + index).padStart(2, '0')
          return (
            <motion.li
              key={item.slug}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ delay: index * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="border-b border-ink/15"
            >
              <Link
                to={`/work/${item.slug}`}
                className="group relative grid gap-3 py-9 transition sm:grid-cols-[4.5rem_minmax(0,1fr)_7rem] sm:items-start sm:gap-8 sm:py-11"
              >
                <span className="absolute inset-y-0 left-0 w-0 bg-ink/[0.035] transition-[width] duration-300 ease-out group-hover:w-full" />

                <span className="relative font-mono text-sm text-ink-muted tabular-nums sm:pt-1">
                  {num}
                </span>

                <div className="relative min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <p className="font-mono text-[11px] tracking-wide text-ink-muted">
                      {item.company}
                    </p>
                    <span className="hidden h-px w-6 bg-line sm:inline-block" />
                    <p className="font-mono text-[11px] tracking-wide text-ink-muted sm:hidden">
                      {item.year}
                    </p>
                  </div>
                  <h3 className="display mt-2 text-2xl tracking-[-0.03em] text-ink transition duration-300 group-hover:translate-x-1.5 sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-[0.95rem]">
                    {item.summary}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {item.stack.slice(0, 4).map((tech) => (
                      <li
                        key={tech}
                        className="border border-line/90 px-2 py-0.5 font-mono text-[10px] tracking-wide text-ink-muted transition group-hover:border-ink/35 group-hover:text-ink"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative hidden flex-col items-end gap-3 sm:flex sm:pt-1">
                  <span className="font-mono text-xs text-ink-muted tabular-nums">{item.year}</span>
                  <span className="font-mono text-sm text-ink-muted transition duration-300 group-hover:translate-x-1 group-hover:text-ink">
                    Open →
                  </span>
                </div>
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
