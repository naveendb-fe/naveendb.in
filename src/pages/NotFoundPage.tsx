import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { PageEnter } from '../components/PageEnter'

type NotFoundPageProps = {
  /** When true, skip outer chrome duplication (used from WorkPage) */
  embedded?: boolean
}

export function NotFoundPage({ embedded = false }: NotFoundPageProps) {
  const body = (
    <main className="page-shell pb-24 pt-20 sm:pt-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-xl rounded-2xl border border-white/[0.1] bg-elevated/55 px-5 py-8 sm:px-8 sm:py-10">
          <p className="eyebrow">404</p>
          <h1 className="display mt-4 text-4xl text-ink sm:text-5xl">Page not found</h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink-muted">
            That route doesn’t exist. Try work, about, or contact — or head home.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/" className="btn-primary">
              Home
            </Link>
            <Link to="/work" className="btn-ghost">
              Work
            </Link>
          </div>
        </div>
      </div>
    </main>
  )

  if (embedded) {
    return (
      <>
        <Seo title="Not found" description="Page not found." path="/404" />
        <PageEnter>{body}</PageEnter>
      </>
    )
  }

  return (
    <>
      <Seo title="Not found" description="Page not found." path="/404" />
      <PageEnter>{body}</PageEnter>
    </>
  )
}
