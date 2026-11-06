import { Link } from 'react-router-dom'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion'
import { useRef, type MouseEvent } from 'react'
import { hero, site } from '../content/site'
import { HeroVisual } from './HeroVisual'

export function Hero() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const sx = useSpring(mx, { stiffness: 70, damping: 22 })
  const sy = useSpring(my, { stiffness: 70, damping: 22 })
  const spotlight = useMotionTemplate`radial-gradient(640px circle at ${sx}% ${sy}%, var(--hero-spot), transparent 58%)`

  function onMove(e: MouseEvent<HTMLElement>) {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mx.set(((e.clientX - rect.left) / rect.width) * 100)
    my.set(((e.clientY - rect.top) / rect.height) * 100)
  }

  const brandWords = hero.brand.split(' ')

  return (
    <section
      ref={ref}
      className="relative overflow-hidden grain hero-atmosphere"
      onMouseMove={onMove}
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-80" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 hero-sheen" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 hero-vignette" aria-hidden="true" />
      {!reduce ? (
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-95"
          aria-hidden="true"
          style={{ background: spotlight }}
        />
      ) : null}
      {/* Soft horizon — quiet depth cue */}
      <div
        className="pointer-events-none absolute inset-x-0 top-[42%] h-px bg-gradient-to-r from-transparent via-rule to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-[1] mx-auto grid min-h-[calc(100svh-3.75rem)] max-w-6xl items-center gap-12 px-5 pb-24 pt-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28 lg:pt-10">
        <div>
          <motion.p
            className="eyebrow"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            Bangalore · Frontend
          </motion.p>

          <h1 className="display mt-5 text-[clamp(3.25rem,11vw,6.5rem)] text-ink">
            {brandWords.map((word, i) => (
              <motion.span
                key={word}
                className="mr-[0.18em] inline-block"
                initial={reduce ? false : { opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="mt-7 max-w-md text-xl font-medium tracking-[-0.02em] text-ink sm:text-2xl"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.55 }}
          >
            {hero.headline}
          </motion.p>

          <motion.p
            className="mt-4 max-w-md text-base leading-relaxed text-ink-muted"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36, duration: 0.5 }}
          >
            {hero.supporting}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-3"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.44, duration: 0.45 }}
          >
            <Link to="/work" className="btn-primary">
              View work
            </Link>
            <a
              href={site.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              View CV
            </a>
          </motion.div>

          <motion.ul
            className="mt-12 flex flex-wrap gap-2"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.45 }}
          >
            {hero.stack.map((item) => (
              <li
                key={item}
                className="rounded border border-rule bg-surface/50 px-2.5 py-1 font-mono text-[11px] tracking-wide text-ink-muted backdrop-blur-sm"
              >
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        <HeroVisual pointerX={sx} pointerY={sy} reduceMotion={!!reduce} />
      </div>
    </section>
  )
}
