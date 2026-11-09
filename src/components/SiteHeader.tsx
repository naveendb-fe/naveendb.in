import { useEffect, useId, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { site } from '../content/site'
import { ThemeToggle } from './ThemeToggle'

const links = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
] as const

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="chrome-bar sticky top-0 z-50 border-b">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:bg-ink focus:px-3 focus:py-2 focus:text-sm focus:text-paper"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:h-16 sm:px-8">
        <Link
          to="/"
          className="group relative display text-[15px] tracking-[-0.03em] text-ink"
          onClick={() => setOpen(false)}
        >
          {site.name}
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [
                  'relative px-3 py-1.5 text-sm transition-colors',
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
                      className="absolute inset-x-3 bottom-0.5 h-px bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  ) : null}
                </>
              )}
            </NavLink>
          ))}
          <a
            href={site.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary ml-2 px-3 py-1.5"
          >
            CV
          </a>
          <ThemeToggle className="ml-2" />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={site.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-3 py-1.5 text-xs"
          >
            CV
          </a>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded border border-rule-strong bg-surface/60 text-ink"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span aria-hidden="true" className="font-mono text-lg leading-none">
              {open ? '×' : '☰'}
            </span>
          </button>
          <ThemeToggle />
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id={panelId}
            className="border-t border-rule-strong bg-elevated md:hidden"
            aria-label="Mobile"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="px-5 py-4">
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      [
                        'block border-b border-rule py-4 text-base',
                        isActive ? 'text-ink' : 'text-ink-muted',
                      ].join(' ')
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
