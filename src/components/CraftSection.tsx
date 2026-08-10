import { craft } from '../content/site'

export function CraftSection() {
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Craft</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          How I build
        </h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:gap-x-14 lg:gap-y-12">
          {craft.map((item) => (
            <div key={item.title}>
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-ink-muted leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
