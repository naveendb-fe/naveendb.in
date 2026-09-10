import { motion, useReducedMotion } from 'framer-motion'
import { craft } from '../content/site'
import { SectionHeading } from './SectionHeading'

export function CraftSection({ compact = false }: { compact?: boolean }) {
  const reduce = useReducedMotion()

  return (
    <section className={compact ? 'py-16 sm:py-20' : 'py-20 sm:py-24'}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Craft" title="How I build" />
        <div className="mt-12 grid border-t border-l border-line/80 sm:grid-cols-2 lg:grid-cols-4">
          {craft.map((item, index) => (
            <motion.div
              key={item.title}
              className="border-r border-b border-line/80 p-6 sm:p-7"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
            >
              <p className="font-mono text-[11px] text-ink-muted tabular-nums">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-4 text-base font-semibold tracking-tight text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
