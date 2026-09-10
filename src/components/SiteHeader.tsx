import { Link, NavLink } from 'react-router-dom'
import { site } from '../content/site'

const links = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
] as const

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:h-16 sm:px-8">
        <Link
          to="/"
          className="text-[15px] font-semibold tracking-tight text-ink transition hover:text-accent"
        >
          {site.name}
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [
                  'relative px-2.5 py-1.5 text-sm transition sm:px-3',
                  isActive
                    ? 'font-medium text-ink after:absolute after:inset-x-2.5 after:bottom-0.5 after:h-px after:bg-accent sm:after:inset-x-3'
                    : 'text-ink-muted hover:text-ink',
                ].join(' ')
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={site.cvPath}
            download
            className="ml-1 rounded-md bg-ink px-3 py-1.5 text-sm font-medium text-paper transition hover:bg-accent sm:ml-2"
          >
            CV
          </a>
        </nav>
      </div>
    </header>
  )
}
