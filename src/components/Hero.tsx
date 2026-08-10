import { motion } from 'framer-motion'
import { hero, site } from '../content/site'
import { HeroVisual } from './HeroVisual'

export function Hero() {
  return (
    <section className="relative min-h-[100svh] grain">
      <div className="mx-auto grid min-h-[100svh] max-w-6xl items-center gap-10 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pb-20">
        <div>
          <motion.p
            className="font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl md:text-7xl"
            style={{ fontFamily: 'var(--font-sans)' }}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {hero.brand}
          </motion.p>
          <motion.h1
            className="mt-5 max-w-xl text-xl text-ink-muted sm:text-2xl"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.6 }}
          >
            {hero.headline}
          </motion.h1>
          <motion.p
            className="mt-4 max-w-lg text-base leading-relaxed text-ink-muted/90"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.55 }}
          >
            {hero.supporting}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.5 }}
          >
            <a
              href="#work"
              className="inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition hover:bg-accent"
            >
              View work
            </a>
            <a
              href={site.cvPath}
              download
              className="inline-flex items-center rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition hover:border-accent hover:text-accent"
            >
              Download CV
            </a>
          </motion.div>
          <motion.p
            className="mt-8 font-mono text-xs tracking-wide text-ink-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {hero.stack.join(' · ')}
          </motion.p>
        </div>
        <HeroVisual />
      </div>
    </section>
  )
}
