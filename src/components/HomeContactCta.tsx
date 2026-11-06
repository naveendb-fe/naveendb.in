import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../content/site'

export function HomeContactCta() {
  const reduce = useReducedMotion()

  return (
    <section className="ink-band relative overflow-hidden">
      <div className="grid-fine grid-band pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-[11px] tracking-[0.22em] text-accent/80 uppercase">Contact</p>
          <h2 className="display mt-5 max-w-xl text-4xl text-ink sm:text-5xl">
            Design systems, React UI, or a conversation
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-muted">
            Based in Bangalore. Happy to talk with hiring managers and peers about frontend craft.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link to="/contact" className="btn-primary">
              Get in touch
            </Link>
            <a href={`mailto:${site.email}`} className="btn-ghost">
              {site.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
