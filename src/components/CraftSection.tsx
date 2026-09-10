import { craft } from '../content/site'

export function CraftSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? 'py-16 sm:py-20' : 'py-20 sm:py-24'}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Craft</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          How I build
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {craft.map((item) => (
            <div key={item.title} className="surface rounded-xl p-5">
              <h3 className="text-base font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
