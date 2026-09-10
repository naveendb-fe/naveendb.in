import { Link } from 'react-router-dom'
import { site } from '../content/site'

const links = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
] as const

export function SiteFooter() {
  return (
    <footer className="border-t border-line/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-tight text-ink">{site.name}</p>
            <p className="mt-1 text-sm text-ink-muted">Senior Frontend Engineer · {site.location}</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted" aria-label="Footer">
            {links.map((link) => (
              <Link key={link.to} to={link.to} className="transition hover:text-ink">
                {link.label}
              </Link>
            ))}
            <a href={site.cvPath} download className="transition hover:text-ink">
              CV
            </a>
          </nav>
        </div>
        <div className="flex flex-col gap-2 border-t border-line/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-muted">
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="font-mono text-[11px] tracking-wide text-ink-muted">
            Vite · React · TypeScript
          </p>
        </div>
      </div>
    </footer>
  )
}
