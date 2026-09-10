import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { hero, site } from '../content/site'
import { HeroVisual } from './HeroVisual'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="relative overflow-hidden grain">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" aria-hidden="true" />
      <div className="mx-auto grid min-h-[calc(100svh-3.75rem)] max-w-6xl items-center gap-12 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pb-24 lg:pt-8">
        <div>
          <motion.p
            className="text-[clamp(2.75rem,8vw,4.75rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-ink"
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {hero.brand}
          </motion.p>
          <motion.h1
            className="mt-6 max-w-md text-xl font-medium tracking-tight text-ink sm:text-2xl"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {hero.headline}
          </motion.h1>
          <motion.p
            className="mt-4 max-w-md text-base leading-relaxed text-ink-muted"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.55 }}
          >
            {hero.supporting}
          </motion.p>
          <motion.div
            className="mt-9 flex flex-wrap items-center gap-3"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26, duration: 0.5 }}
          >
            <Link to="/work" className="btn-primary">
              View work
            </Link>
            <a href={site.cvPath} download className="btn-ghost">
              Download CV
            </a>
          </motion.div>
          <motion.p
            className="mt-10 font-mono text-[11px] tracking-[0.18em] text-ink-muted uppercase"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.38, duration: 0.5 }}
          >
            {hero.stack.join('  ·  ')}
          </motion.p>
        </div>
        <HeroVisual />
      </div>
    </section>
  )
}
