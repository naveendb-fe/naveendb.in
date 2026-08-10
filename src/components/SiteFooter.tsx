import { site } from '../content/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-line/70 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="font-mono text-xs">Built with Vite + React · {site.location}</p>
      </div>
    </footer>
  )
}
