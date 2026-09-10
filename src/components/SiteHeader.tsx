import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { site } from '../content/site'

const links = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
] as const

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-paper/75 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:h-[3.75rem] sm:px-8">
        <Link
          to="/"
          className="group relative text-[15px] font-semibold tracking-tight text-ink"
        >
          {site.name}
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-ink transition-all duration-300 group-hover:w-full" />
        </Link>
        <nav className="flex items-center gap-0.5 sm:gap-1" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [
                  'relative px-2.5 py-1.5 text-sm transition-colors sm:px-3',
                  isActive ? 'text-ink' : 'text-ink-muted hover:text-ink',
                ].join(' ')
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-2.5 bottom-0.5 h-px bg-ink sm:inset-x-3"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  ) : null}
                </>
              )}
            </NavLink>
          ))}
          <a href={site.cvPath} download className="btn-primary ml-2 px-3 py-1.5 sm:ml-3">
            CV
          </a>
        </nav>
      </div>
    </header>
  )
}
