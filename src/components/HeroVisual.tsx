import { useEffect, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from 'framer-motion'

const states = ['Default', 'Hover', 'Focus', 'Loading'] as const

const tokens = [
  { id: 'color', label: 'color.action', value: '#0A0A0B' },
  { id: 'space', label: 'space.3', value: '12px' },
  { id: 'type', label: 'type.label', value: '14 / 500' },
  { id: 'radius', label: 'radius.sm', value: '4px' },
] as const

type HeroVisualProps = {
  pointerX?: MotionValue<number>
  pointerY?: MotionValue<number>
  reduceMotion?: boolean
}

export function HeroVisual({ pointerX, pointerY, reduceMotion }: HeroVisualProps) {
  const reduceHook = useReducedMotion()
  const reduce = reduceMotion ?? !!reduceHook
  const fallbackX = useMotionValue(50)
  const fallbackY = useMotionValue(50)
  const x = pointerX ?? fallbackX
  const y = pointerY ?? fallbackY

  const rotateX = useTransform(y, (v) => (50 - v) * 0.06)
  const rotateY = useTransform(x, (v) => (v - 50) * 0.08)
  const frameX = useTransform(x, (v) => (v - 50) * -0.18)
  const frameY = useTransform(y, (v) => (v - 50) * -0.12)
  const cardX = useTransform(x, (v) => (v - 50) * 0.28)
  const cardY = useTransform(y, (v) => (v - 50) * 0.2)
  const chipX = useTransform(x, (v) => (v - 50) * 0.14)

  const [stateIndex, setStateIndex] = useState(0)
  const activeState = states[stateIndex]

  useEffect(() => {
    if (reduce) return
    const id = window.setInterval(() => {
      setStateIndex((i) => (i + 1) % states.length)
    }, 1800)
    return () => window.clearInterval(id)
  }, [reduce])

  return (
    <div
      className="relative mx-auto h-full min-h-[360px] w-full max-w-lg [perspective:1400px] sm:min-h-[480px] lg:max-w-none"
      aria-hidden="true"
    >
      {/* Atmosphere */}
      <motion.div
        className="absolute -right-8 top-0 h-72 w-72 rounded-full border border-line/60 sm:-right-6 sm:h-96 sm:w-96"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
      />
      <div className="absolute right-10 top-20 h-44 w-44 rounded-full border border-dashed border-line/70 sm:h-56 sm:w-56" />
      <motion.div
        className="absolute bottom-16 left-2 h-24 w-24 rounded-full border border-line/50"
        animate={reduce ? undefined : { scale: [1, 1.06, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        style={
          reduce
            ? undefined
            : {
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }
        }
      >
        {/* Main product plane — real GDS proof */}
        <motion.div
          className="absolute inset-x-0 top-6 bottom-14 overflow-hidden rounded-2xl border border-line/80 bg-surface shadow-[0_28px_80px_-40px_rgba(10,10,11,0.55)] sm:inset-x-1 sm:top-8 sm:bottom-16"
          initial={reduce ? false : { y: 36, opacity: 0, scale: 0.96 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={reduce ? undefined : { x: frameX, y: frameY }}
        >
          <div className="flex items-center justify-between border-b border-line/70 px-4 py-2.5">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-line" />
              <span className="h-2 w-2 rounded-full bg-line" />
              <span className="h-2 w-2 rounded-full bg-ink/35" />
            </div>
            <span className="font-mono text-[10px] tracking-[0.18em] text-ink-muted uppercase">
              gds · docs
            </span>
          </div>

          <div className="relative h-[calc(100%-2.25rem)] overflow-hidden bg-ink/[0.03]">
            <img
              src="/work/gds/docs-home.png"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-top"
              loading="eager"
              decoding="async"
            />
            {/* Soft vignette so overlays read cleanly */}
            <div className="absolute inset-0 bg-gradient-to-t from-paper via-transparent to-paper/20" />
            <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-paper/70 to-transparent" />

            {/* Scan line */}
            {!reduce ? (
              <motion.div
                className="absolute inset-x-0 h-px bg-ink/25"
                initial={{ top: '12%' }}
                animate={{ top: ['12%', '78%', '12%'] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
              />
            ) : null}

            {/* Annotation callouts on the screenshot */}
            <motion.div
              className="absolute left-3 top-[38%] hidden max-w-[9.5rem] rounded-md border border-line/80 bg-paper/95 px-2.5 py-2 shadow-sm backdrop-blur-sm sm:left-4 sm:block"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.45 }}
              style={reduce ? undefined : { x: chipX }}
            >
              <p className="font-mono text-[9px] tracking-wider text-ink-muted uppercase">Inspect</p>
              <p className="mt-1 text-[11px] font-medium leading-snug text-ink">
                Shared foundations for every product surface
              </p>
              <span className="absolute -right-3 top-1/2 h-px w-3 bg-ink/40" />
            </motion.div>

            <motion.div
              className="absolute right-3 top-[22%] rounded-md border border-line/80 bg-paper/95 px-2 py-1.5 font-mono text-[10px] text-ink shadow-sm backdrop-blur-sm sm:right-4"
              initial={reduce ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
            >
              contrast AA · pass
            </motion.div>
          </div>
        </motion.div>

        {/* Living component card — state machine */}
        <motion.div
          className="surface absolute -left-1 top-2 z-10 w-[58%] rounded-xl p-3.5 sm:left-0 sm:top-3 sm:w-56 sm:p-4"
          initial={reduce ? false : { opacity: 0, y: 18, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={reduce ? undefined : { x: cardX, y: cardY }}
        >
          <div className="flex items-center justify-between gap-2">
            <p className="font-mono text-[10px] tracking-[0.16em] text-ink-muted uppercase">
              Button
            </p>
            <AnimatePresence mode="wait">
              <motion.span
                key={activeState}
                className="rounded border border-line px-1.5 py-0.5 font-mono text-[9px] text-ink"
                initial={reduce ? false : { opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {activeState}
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="mt-4 flex min-h-11 items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeState}
                initial={reduce ? false : { opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.22 }}
                className={[
                  'inline-flex min-w-[7.5rem] items-center justify-center rounded px-4 py-2 text-sm font-medium tracking-tight',
                  activeState === 'Default' ? 'bg-ink text-paper' : '',
                  activeState === 'Hover' ? 'bg-ink/85 text-paper shadow-[0_10px_24px_-14px_rgba(10,10,11,0.7)]' : '',
                  activeState === 'Focus'
                    ? 'bg-ink text-paper outline outline-2 outline-offset-2 outline-ink/50'
                    : '',
                  activeState === 'Loading' ? 'bg-ink/70 text-paper/90' : '',
                ].join(' ')}
              >
                {activeState === 'Loading' ? (
                  <span className="flex items-center gap-2">
                    <span className="h-3 w-3 animate-spin rounded-full border border-paper/30 border-t-paper" />
                    Saving
                  </span>
                ) : (
                  'Continue'
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-4 flex gap-1">
            {states.map((state, i) => (
              <span
                key={state}
                className={[
                  'h-1 flex-1 rounded-full transition-colors duration-300',
                  i === stateIndex ? 'bg-ink' : 'bg-line',
                ].join(' ')}
              />
            ))}
          </div>
        </motion.div>

        {/* Token strip */}
        <motion.ul
          className="absolute bottom-2 left-0 right-0 z-10 flex flex-wrap gap-1.5 sm:bottom-3 sm:gap-2"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
        >
          {tokens.map((token, i) => (
            <motion.li
              key={token.id}
              className="rounded-md border border-line/80 bg-paper/95 px-2 py-1.5 shadow-sm backdrop-blur-sm"
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62 + i * 0.06, duration: 0.35 }}
            >
              <p className="font-mono text-[9px] tracking-wide text-ink-muted">{token.label}</p>
              <p className="font-mono text-[10px] font-medium text-ink">{token.value}</p>
            </motion.li>
          ))}
        </motion.ul>

        {/* Accent rule */}
        <motion.div
          className="absolute left-0 top-0 h-px w-24 bg-ink/45 sm:w-32"
          initial={reduce ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.65 }}
          style={{ transformOrigin: 'left' }}
        />
      </motion.div>
    </div>
  )
}
