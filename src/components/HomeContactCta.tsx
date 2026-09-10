import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../content/site'

export function HomeContactCta() {
  const reduce = useReducedMotion()

  return (
    <section className="pb-24 pt-6 sm:pb-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          className="relative overflow-hidden border border-line/80 bg-ink px-6 py-12 text-paper sm:px-12 sm:py-16"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
            aria-hidden="true"
          />
          <p className="relative font-mono text-[11px] tracking-[0.22em] text-paper/55 uppercase">
            Contact
          </p>
          <h2 className="relative mt-4 max-w-lg text-3xl font-semibold tracking-[-0.03em] text-paper sm:text-4xl">
            Let&apos;s talk about frontend craft
          </h2>
          <p className="relative mt-4 max-w-md text-paper/65">
            Open to conversations about React systems, product UI, and durable engineering.
          </p>
          <div className="relative mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-md bg-paper px-5 py-2.5 text-sm font-medium text-ink transition hover:bg-paper/90"
            >
              Get in touch
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center rounded-md border border-paper/25 px-5 py-2.5 text-sm font-medium text-paper/85 transition hover:border-paper/50 hover:text-paper"
            >
              {site.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
