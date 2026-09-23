import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { focus } from '../content/site'

/** Quiet focus strip — proof via work, not a slogan grid */
export function FocusSection() {
  const reduce = useReducedMotion()

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          className="glass max-w-2xl rounded-2xl border-l-2 border-l-accent/40 px-6 py-8 sm:px-8 sm:py-10"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">{focus.eyebrow}</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-ink sm:text-3xl">
            {focus.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">{focus.body}</p>
          <Link
            to="/work/granicus-design-system"
            className="mt-6 inline-flex font-mono text-sm text-ink-muted transition hover:text-accent"
          >
            Read the case study →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
