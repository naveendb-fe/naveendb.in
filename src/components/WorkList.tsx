import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import type { CaseStudy } from '../content/work'

type WorkListProps = {
  items: CaseStudy[]
  showViewAll?: boolean
  startIndex?: number
  /** primary = featured depth; archive = denser secondary list */
  variant?: 'primary' | 'archive'
}

export function WorkList({
  items,
  showViewAll = false,
  startIndex = 1,
  variant = 'primary',
}: WorkListProps) {
  const reduce = useReducedMotion()
  const isArchive = variant === 'archive'

  return (
    <div>
      <ul
        className={[
          'overflow-hidden rounded-2xl border border-white/[0.1] backdrop-blur-sm',
          isArchive ? 'bg-elevated/40' : 'bg-elevated/55',
        ].join(' ')}
      >
        {items.map((item, index) => {
          const num = String(startIndex + index).padStart(2, '0')
          const isLast = index === items.length - 1
          const isLead = !isArchive && index === 0

          return (
            <motion.li
              key={item.slug}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ delay: index * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={[
                isLast ? '' : 'border-b border-white/[0.08]',
                isLead ? 'bg-surface/35' : '',
              ].join(' ')}
            >
              <Link
                to={`/work/${item.slug}`}
                className={[
                  'group relative grid gap-3 transition sm:grid-cols-[4.5rem_minmax(0,1fr)_7rem] sm:items-start sm:gap-8',
                  isArchive
                    ? 'px-4 py-6 sm:px-5 sm:py-7'
                    : 'px-4 py-9 sm:px-6 sm:py-11',
                ].join(' ')}
              >
                <span className="absolute inset-y-0 left-0 w-0 bg-accent/[0.06] transition-[width] duration-300 ease-out group-hover:w-full" />
                <span className="absolute inset-y-3 left-0 w-0.5 scale-y-0 bg-accent transition-transform duration-300 group-hover:scale-y-100" />

                <span className="relative sm:pt-1">
                  {isArchive ? (
                    <span className="font-mono text-sm text-ink-muted tabular-nums">{num}</span>
                  ) : (
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-ink font-mono text-[11px] font-medium text-paper tabular-nums">
                      {num}
                    </span>
                  )}
                </span>

                <div className="relative min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    {isLead ? (
                      <span className="rounded border border-accent/35 bg-accent-soft px-1.5 py-0.5 font-mono text-[10px] tracking-wide text-accent">
                        Featured
                      </span>
                    ) : null}
                    <p className="font-mono text-[11px] tracking-wide text-ink-muted">
                      {item.company}
                    </p>
                    <span className="hidden h-px w-6 bg-line sm:inline-block" />
                    <p className="font-mono text-[11px] tracking-wide text-ink-muted sm:hidden">
                      {item.year}
                    </p>
                  </div>
                  <h3
                    className={[
                      'display mt-2 tracking-[-0.03em] text-ink transition duration-300 group-hover:translate-x-1.5',
                      isArchive ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl',
                    ].join(' ')}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={[
                      'mt-3 max-w-2xl leading-relaxed',
                      isArchive
                        ? 'text-sm text-ink-muted'
                        : 'text-sm text-ink/75 sm:text-[0.95rem]',
                    ].join(' ')}
                  >
                    {item.summary}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {item.stack.slice(0, isArchive ? 3 : 4).map((tech) => (
                      <li
                        key={tech}
                        className="rounded border border-white/[0.08] px-2 py-0.5 font-mono text-[10px] tracking-wide text-ink-muted transition group-hover:border-accent/30 group-hover:text-accent"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative hidden flex-col items-end gap-3 sm:flex sm:pt-1">
                  <span className="font-mono text-xs text-ink-muted tabular-nums">{item.year}</span>
                  <span className="font-mono text-sm text-ink-muted transition duration-300 group-hover:translate-x-1 group-hover:text-accent">
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
