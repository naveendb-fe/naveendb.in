import { notes, site } from '../content/site'

export function NotesSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Notes</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink">Writing</h2>
        <ul className="mt-8 space-y-6">
          {notes.map((note) => (
            <li key={note.href}>
              <a
                href={note.href}
                target="_blank"
                rel="noreferrer"
                className="group block max-w-2xl"
              >
                <h3 className="text-lg font-semibold text-ink transition group-hover:text-accent">
                  {note.title}
                </h3>
                <p className="mt-2 text-ink-muted">{note.blurb}</p>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6 font-mono text-xs text-ink-muted">
          More on{' '}
          <a className="text-accent hover:underline" href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </p>
      </div>
    </section>
  )
}
