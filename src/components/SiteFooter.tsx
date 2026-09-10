import { Link } from 'react-router-dom'
import { site } from '../content/site'

const links = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
] as const

export function SiteFooter() {
  return (
    <footer className="border-t border-line/70 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-muted">
            © {new Date().getFullYear()} {site.name}
          </p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-muted" aria-label="Footer">
            {links.map((link) => (
              <Link key={link.to} to={link.to} className="transition hover:text-accent">
                {link.label}
              </Link>
            ))}
            <a href={site.cvPath} download className="transition hover:text-accent">
              CV
            </a>
          </nav>
        </div>
        <p className="font-mono text-xs text-ink-muted">
          Built with Vite + React · {site.location}
        </p>
      </div>
    </footer>
  )
}
