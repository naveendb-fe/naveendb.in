import { motion, useReducedMotion } from 'framer-motion'

const modules = [
  { id: '01', label: 'Foundations', meta: 'Color · type · space' },
  { id: '02', label: 'Components', meta: 'React · Storybook' },
  { id: '03', label: 'Patterns', meta: 'Forms · filters · a11y' },
  { id: '04', label: 'Guidelines', meta: 'Design · contribute' },
] as const

const signals = [
  { label: 'System', value: 'GDS' },
  { label: 'Stack', value: 'React' },
  { label: 'Quality', value: 'a11y' },
] as const

export function HeroVisual() {
  const reduce = useReducedMotion()

  return (
    <div
      className="relative mx-auto h-full min-h-[340px] w-full max-w-lg sm:min-h-[420px] lg:max-w-none"
      aria-hidden="true"
    >
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute -right-12 top-0 h-72 w-72 rounded-full border border-line/70 sm:h-96 sm:w-96"
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        />
        <div className="absolute right-6 top-14 h-48 w-48 rounded-full border border-dashed border-line/80 sm:h-60 sm:w-60" />

        <motion.div
          className="surface absolute inset-x-0 bottom-6 top-10 flex flex-col overflow-hidden rounded-2xl sm:inset-x-1 sm:bottom-8 sm:top-12"
          initial={reduce ? false : { y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* chrome */}
          <div className="flex items-center justify-between border-b border-line/70 px-4 py-3 sm:px-5">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-line" />
              <span className="h-2 w-2 rounded-full bg-line" />
              <span className="h-2 w-2 rounded-full bg-ink/35" />
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden font-mono text-[10px] tracking-wider text-ink-muted uppercase sm:inline">
                granicus
              </span>
              <span className="font-mono text-[10px] tracking-wider text-ink uppercase">
                gds.system
              </span>
            </div>
          </div>

          {/* body */}
          <div className="grid min-h-0 flex-1 grid-cols-[4.5rem_1fr] sm:grid-cols-[5.25rem_1fr]">
            {/* side rail */}
            <div className="flex flex-col gap-2 border-r border-line/70 bg-ink/[0.02] px-2 py-3 sm:px-2.5 sm:py-4">
              {['H', 'W', 'A', 'C'].map((letter, i) => (
                <motion.div
                  key={letter}
                  className={[
                    'flex h-8 items-center justify-center rounded-md font-mono text-[10px] sm:h-9',
                    i === 0
                      ? 'bg-ink text-paper'
                      : 'border border-line/70 text-ink-muted',
                  ].join(' ')}
                  initial={reduce ? false : { opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 + i * 0.05, duration: 0.35 }}
                >
                  {letter}
                </motion.div>
              ))}
              <div className="mt-auto space-y-1.5 px-1 pb-1">
                <div className="h-1 rounded-full bg-ink/50" />
                <div className="h-1 w-2/3 rounded-full bg-line" />
              </div>
            </div>

            {/* main canvas */}
            <div className="flex min-h-0 flex-col px-3 py-3 sm:px-4 sm:py-4">
              <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 font-mono text-[10px] leading-relaxed sm:text-[11px]">
                <span className="text-ink-muted">01</span>
                <p>
                  <span className="text-ink-muted">role</span>{' '}
                  <span className="text-ink">Senior Frontend</span>
                </p>
                <span className="text-ink-muted">02</span>
                <p>
                  <span className="text-ink-muted">focus</span>{' '}
                  <span className="text-ink">Design system</span>
                </p>
                <span className="text-ink-muted">03</span>
                <p>
                  <span className="text-ink-muted">org</span>{' '}
                  <span className="text-ink">Granicus Inc.</span>
                </p>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {signals.map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="rounded-lg border border-line/80 px-2 py-2 sm:px-2.5"
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 + i * 0.06, duration: 0.4 }}
                  >
                    <p className="font-mono text-[9px] tracking-wider text-ink-muted uppercase">
                      {item.label}
                    </p>
                    <p className="mt-1 text-xs font-semibold tracking-tight text-ink sm:text-sm">
                      {item.value}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 min-h-0 flex-1 overflow-hidden border-t border-line/70 pt-3">
                <div className="mb-2 flex items-center justify-between">
                  <p className="font-mono text-[10px] tracking-wider text-ink-muted uppercase">
                    Modules
                  </p>
                  <p className="font-mono text-[10px] text-ink-muted">4 active</p>
                </div>
                <ul className="space-y-1.5">
                  {modules.map((mod, i) => (
                    <motion.li
                      key={mod.id}
                      className="flex items-center gap-2 rounded-md border border-line/70 px-2.5 py-2"
                      initial={reduce ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45 + i * 0.05, duration: 0.35 }}
                    >
                      <span className="font-mono text-[10px] text-ink-muted tabular-nums">
                        {mod.id}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-medium text-ink">{mod.label}</p>
                        <p className="truncate font-mono text-[9px] text-ink-muted">{mod.meta}</p>
                      </div>
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ink/45" />
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mt-3 space-y-1.5 pb-10 sm:pb-12">
                <div className="h-1 overflow-hidden rounded-full bg-line/50">
                  <motion.div
                    className="h-full rounded-full bg-ink/65"
                    initial={reduce ? { width: '78%' } : { width: 0 }}
                    animate={{ width: '78%' }}
                    transition={{ delay: 0.7, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <div className="h-1 overflow-hidden rounded-full bg-line/50">
                  <motion.div
                    className="h-full rounded-full bg-ink/35"
                    initial={reduce ? { width: '52%' } : { width: 0 }}
                    animate={{ width: '52%' }}
                    transition={{ delay: 0.82, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* floating status */}
        <motion.div
          className="surface absolute bottom-1 right-0 w-[48%] rounded-xl p-3.5 sm:bottom-2 sm:-right-1 sm:w-48"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.55 }}
        >
          <div className="flex items-center justify-between">
            <p className="font-mono text-[10px] tracking-wider text-ink-muted uppercase">Now</p>
            <span className="rounded border border-line px-1.5 py-0.5 font-mono text-[9px] text-ink-muted">
              live
            </span>
          </div>
          <p className="mt-1.5 text-sm font-semibold tracking-tight text-ink">
            Granicus Design System
          </p>
          <div className="mt-3 flex gap-1">
            <span className="h-1 flex-1 rounded-full bg-ink/55" />
            <span className="h-1 flex-1 rounded-full bg-ink/25" />
            <span className="h-1 flex-1 rounded-full bg-line" />
          </div>
        </motion.div>

        <motion.div
          className="absolute left-0 top-4 h-px w-28 bg-ink/45 sm:w-36"
          initial={reduce ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.65 }}
          style={{ transformOrigin: 'left' }}
        />
      </motion.div>
    </div>
  )
}
