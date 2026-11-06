import { useState } from 'react'
import { readTheme, toggleTheme, type Theme } from '../theme'

export function ThemeToggle({ className = '' }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>(() => readTheme())
  const isLight = theme === 'light'

  return (
    <button
      type="button"
      className={[
        'inline-flex h-9 w-9 items-center justify-center rounded border border-rule bg-surface/70 text-ink transition-colors hover:border-rule-strong hover:text-accent',
        className,
      ].join(' ')}
      aria-pressed={isLight}
      aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
      onClick={() => setTheme((current) => toggleTheme(current))}
    >
      {isLight ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="2.25" stroke="currentColor" strokeWidth="1.25" />
      <path
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        d="M8 1.75v1.5M8 12.75v1.5M1.75 8h1.5M12.75 8h1.5M3.4 3.4l1.06 1.06M11.54 11.54l1.06 1.06M12.6 3.4l-1.06 1.06M4.46 11.54l-1.06 1.06"
      />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M10.6 2.4a5.15 5.15 0 1 0 3 8.7 5.6 5.6 0 0 1-3-8.7Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
    </svg>
  )
}
