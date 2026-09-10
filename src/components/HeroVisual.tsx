import { motion } from 'framer-motion'

export function HeroVisual() {
  return (
    <div
      className="relative h-full min-h-[280px] w-full overflow-hidden sm:min-h-[360px]"
      aria-hidden="true"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <div className="absolute -right-6 top-4 h-52 w-52 rounded-full border border-accent/25 sm:h-64 sm:w-64" />
        <div className="absolute right-12 top-14 h-36 w-36 rounded-full border border-line sm:h-48 sm:w-48" />
        <motion.div
          className="surface absolute bottom-10 left-0 right-8 top-16 rounded-xl p-4 sm:p-5"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-4 flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-line" />
            <span className="h-2 w-2 rounded-full bg-line" />
            <span className="h-2 w-2 rounded-full bg-accent/70" />
          </div>
          <div className="space-y-2 font-mono text-[11px] leading-relaxed text-ink-muted sm:text-xs">
            <p>
              <span className="text-accent">const</span> craft = {'{'}
            </p>
            <p className="pl-4">
              ui: <span className="text-ink">&apos;civic-scale&apos;</span>,
            </p>
            <p className="pl-4">
              a11y: <span className="text-ink">true</span>,
            </p>
            <p className="pl-4">
              stack: [<span className="text-ink">&apos;React&apos;</span>,{' '}
              <span className="text-ink">&apos;TypeScript&apos;</span>],
            </p>
            <p>{'}'}</p>
          </div>
          <motion.div
            className="surface absolute -bottom-4 -right-3 h-24 w-36 rounded-lg p-3 sm:h-28 sm:w-44"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            <div className="mb-2 h-1.5 w-10 rounded-full bg-accent/50" />
            <div className="space-y-1.5">
              <div className="h-1.5 w-full rounded-full bg-line/80" />
              <div className="h-1.5 w-[80%] rounded-full bg-line/60" />
              <div className="h-1.5 w-[60%] rounded-full bg-line/50" />
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute left-4 top-8 h-px w-24 bg-accent/60 sm:w-32"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          style={{ transformOrigin: 'left' }}
        />
      </motion.div>
    </div>
  )
}
