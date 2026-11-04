import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { focus } from '../content/site'

/** Focus strip — current craft emphasis with a clear path into the case study */
export function FocusSection() {
  const reduce = useReducedMotion()

  return (
    <section className="panel-band relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          className="overflow-hidden rounded-2xl border border-white/[0.1] bg-elevated/60"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid lg:grid-cols-[1.35fr_0.85fr]">
            <div className="border-b border-white/[0.08] px-6 py-9 sm:px-8 sm:py-11 lg:border-b-0 lg:border-r lg:border-white/[0.08]">
              <p className="eyebrow">{focus.eyebrow}</p>
              <h2 className="display mt-4 max-w-xl text-3xl text-ink sm:text-4xl lg:text-[2.75rem]">
                {focus.title}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/80 sm:text-[1.05rem]">
                {focus.body}
              </p>
              <Link to="/work/granicus-design-system" className="btn-primary mt-8">
                Read the case study
              </Link>
            </div>

            <div className="flex flex-col justify-between gap-8 bg-surface/40 px-6 py-9 sm:px-8 sm:py-11">
              <div>
                <p className="font-mono text-[11px] tracking-[0.18em] text-ink-muted uppercase">
                  Now
                </p>
                <p className="mt-3 text-lg font-semibold tracking-tight text-ink">
                  Granicus Design System
                </p>
                <p className="mt-1 font-mono text-[11px] tracking-wide text-ink-muted">
                  Granicus Inc. · 2022 — Present
                </p>
              </div>

              <ul className="space-y-3 border-t border-white/[0.08] pt-6">
                {['Tokens & foundations', 'React components', 'Patterns & docs'].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 font-mono text-[12px] tracking-wide text-ink-muted"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
