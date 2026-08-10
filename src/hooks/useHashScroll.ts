import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scroll to hash targets on load and when the hash changes (e.g. /#work). */
export function useHashScroll() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) {
      if (pathname === '/') return
      window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
      return
    }
    const id = hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [hash, pathname])
}
