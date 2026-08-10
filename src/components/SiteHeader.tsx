import { Link, useLocation } from 'react-router-dom'
import { site } from '../content/site'

const links = [
  { label: 'Work', hash: '#work' },
  { label: 'About', hash: '#about' },
  { label: 'Contact', hash: '#contact' },
] as const

export function SiteHeader() {
  const { pathname } = useLocation()
  const home = pathname === '/'

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
        <div className="flex h-10 w-full items-center justify-between rounded-full border border-line/60 bg-paper/75 px-4 backdrop-blur-md sm:px-5">
          <Link
            to="/"
            className="font-medium tracking-tight text-ink transition hover:text-accent"
          >
            {site.name}
          </Link>
          <nav className="flex items-center gap-1 sm:gap-2" aria-label="Primary">
            {links.map((link) => (
              <a
                key={link.hash}
                href={home ? link.hash : `/${link.hash}`}
                className="rounded-full px-2.5 py-1.5 text-sm text-ink-muted transition hover:text-ink sm:px-3"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.cvPath}
              download
              className="ml-1 rounded-full bg-ink px-3 py-1.5 text-sm text-paper transition hover:bg-accent sm:ml-2"
            >
              CV
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
