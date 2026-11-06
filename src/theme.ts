export type Theme = 'light' | 'dark'

export const THEME_STORAGE_KEY = 'theme'

const THEME_COLOR: Record<Theme, string> = {
  light: '#f3f0ea',
  dark: '#070809',
}

export function isTheme(value: string | null): value is Theme {
  return value === 'light' || value === 'dark'
}

export function readTheme(): Theme {
  const current = document.documentElement.dataset.theme ?? null
  return isTheme(current) ? current : 'dark'
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.dataset.theme = theme
  root.style.colorScheme = theme
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[theme])
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    /* private mode */
  }
}

export function toggleTheme(current: Theme): Theme {
  const next: Theme = current === 'dark' ? 'light' : 'dark'
  applyTheme(next)
  return next
}
