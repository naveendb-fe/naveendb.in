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
  { id: 'color', label: 'color.action', value: '#F2F3F5' },
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
      <motion.div
        className="absolute -right-8 top-0 h-72 w-72 rounded-full border border-line/80 sm:-right-6 sm:h-96 sm:w-96"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
      />
      <div className="absolute right-10 top-20 h-44 w-44 rounded-full border border-dashed border-accent/25 sm:h-56 sm:w-56" />
      <motion.div
        className="absolute bottom-16 left-2 h-24 w-24 rounded-full border border-line/70"
        animate={reduce ? undefined : { scale: [1, 1.06, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="pointer-events-none absolute right-4 top-12 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />

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
        {/* Abstract system preview — CSS only, no product screenshot */}
        <motion.div
          className="absolute inset-x-0 top-6 bottom-14 overflow-hidden rounded-2xl border border-white/[0.08] bg-surface shadow-[0_28px_80px_-36px_rgba(0,0,0,0.85),0_0_0_1px_rgba(158,197,200,0.06)] sm:inset-x-1 sm:top-8 sm:bottom-16"
          initial={reduce ? false : { y: 36, opacity: 0, scale: 0.96 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={reduce ? undefined : { x: frameX, y: frameY }}
        >
          <div className="flex items-center justify-between border-b border-white/[0.06] bg-paper/40 px-4 py-2.5">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-line" />
              <span className="h-2 w-2 rounded-full bg-line" />
              <span className="h-2 w-2 rounded-full bg-accent/60" />
            </div>
            <span className="font-mono text-[10px] tracking-[0.18em] text-ink-muted uppercase">
              system · preview
            </span>
          </div>

          <div className="relative h-[calc(100%-2.25rem)] overflow-hidden bg-gradient-to-b from-paper/80 via-surface to-paper px-4 py-5 sm:px-5 sm:py-6">
            <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px]" />

            <div className="relative">
              <div className="flex flex-wrap items-start gap-2">
                <h3 className="max-w-[14rem] text-[1.15rem] font-semibold leading-tight tracking-[-0.03em] text-ink sm:max-w-[16rem] sm:text-[1.35rem]">
                  One shared system for every product
                </h3>
                <span className="mt-0.5 rounded border border-accent/30 bg-accent-soft px-1.5 py-0.5 font-mono text-[9px] tracking-wide text-accent">
                  contrast AA · pass
                </span>
              </div>
              <p className="mt-3 max-w-[15rem] text-[11px] leading-relaxed text-ink-muted sm:max-w-[17rem] sm:text-xs">
                Working code, libraries, and guidelines so teams ship interfaces that stay
                consistent and accessible.
              </p>

              <div className="mt-5 flex items-center justify-between gap-3 rounded-md border border-white/[0.07] bg-paper/50 px-3 py-2.5">
                <p className="text-[11px] font-medium text-ink sm:text-xs">
                  Accessibility checklist before shipping
                </p>
                <span className="font-mono text-[10px] text-accent">→</span>
              </div>

              <div className="mt-5">
                <p className="font-mono text-[9px] tracking-[0.16em] text-ink-muted uppercase">
                  Start with foundations
                </p>
                <div className="mt-2.5 grid grid-cols-3 gap-2">
                  {['Design', 'Develop', 'Migrate'].map((label) => (
                    <div
                      key={label}
                      className="rounded-md border border-white/[0.06] bg-paper/40 px-2 py-3 text-center"
                    >
                      <div className="mx-auto h-6 w-6 rounded border border-line/80 bg-surface/80" />
                      <p className="mt-2 font-mono text-[9px] tracking-wide text-ink-muted">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {!reduce ? (
              <motion.div
                className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
                initial={{ top: '12%' }}
                animate={{ top: ['12%', '78%', '12%'] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
              />
            ) : null}

            <motion.div
              className="absolute left-3 top-[42%] hidden max-w-[9.5rem] rounded-md border border-white/[0.1] bg-surface/95 px-2.5 py-2 shadow-[0_12px_32px_-16px_rgba(0,0,0,0.8)] backdrop-blur-sm sm:left-4 sm:block"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.45 }}
              style={reduce ? undefined : { x: chipX }}
            >
              <p className="font-mono text-[9px] tracking-wider text-accent uppercase">Inspect</p>
              <p className="mt-1 text-[11px] font-medium leading-snug text-ink">
                Shared foundations for every product surface
              </p>
              <span className="absolute -right-3 top-1/2 h-px w-3 bg-accent/50" />
            </motion.div>
          </div>
        </motion.div>

        {/* Living component card — state machine */}
        <motion.div
          className="glass absolute -left-1 top-2 z-10 w-[58%] rounded-xl p-3.5 sm:left-0 sm:top-3 sm:w-56 sm:p-4"
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
                className="rounded border border-line px-1.5 py-0.5 font-mono text-[9px] text-accent"
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
                  activeState === 'Hover'
                    ? 'bg-ink/90 text-paper shadow-[0_10px_28px_-12px_rgba(158,197,200,0.55)]'
                    : '',
                  activeState === 'Focus'
                    ? 'bg-ink text-paper outline outline-2 outline-offset-2 outline-accent/60'
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
                  i === stateIndex ? 'bg-accent' : 'bg-line',
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
              className="rounded-md border border-white/[0.08] bg-surface/90 px-2 py-1.5 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.7)] backdrop-blur-sm"
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62 + i * 0.06, duration: 0.35 }}
            >
              <p className="font-mono text-[9px] tracking-wide text-ink-muted">{token.label}</p>
              <p className="font-mono text-[10px] font-medium text-accent">{token.value}</p>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="absolute left-0 top-0 h-px w-24 bg-gradient-to-r from-accent/70 to-transparent sm:w-32"
          initial={reduce ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.65 }}
          style={{ transformOrigin: 'left' }}
        />
      </motion.div>
    </div>
  )
}
