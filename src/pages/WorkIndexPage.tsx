import { Seo } from '../components/Seo'
import { PageEnter } from '../components/PageEnter'
import { WorkList } from '../components/WorkList'
import { caseStudies } from '../content/work'

export function WorkIndexPage() {
  return (
    <>
      <Seo
        title="Work"
        description="Selected product work — Delivery Inaccuracy, MCInsights, Zero Quartile, IoT asset management, and earlier analytics UIs."
        path="/work"
      />
      <PageEnter>
        <main className="pb-24 pt-12 sm:pt-16">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Work</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Case studies
            </h1>
            <p className="mt-4 max-w-2xl text-ink-muted">
              Product work across Accenture AI, Kogentix, and Flutura — sourced from the projects
              shipped on naveendb.in.
            </p>
            <div className="mt-12">
              <WorkList items={caseStudies} />
            </div>
          </div>
        </main>
      </PageEnter>
    </>
  )
}
