import { Seo } from '../components/Seo'
import { PageEnter } from '../components/PageEnter'
import { SectionHeading } from '../components/SectionHeading'
import { WorkList } from '../components/WorkList'
import { caseStudies } from '../content/work'

export function WorkIndexPage() {
  return (
    <>
      <Seo
        title="Work"
        description="Selected work — Granicus Design System, Delivery Inaccuracy, MCInsights, and earlier product UIs."
        path="/work"
      />
      <PageEnter>
        <main className="pb-24 pt-14 sm:pt-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionHeading
              as="h1"
              eyebrow="Work"
              title="Case studies"
              description="Granicus Design System today, plus earlier product work across Accenture AI, Kogentix, and Flutura."
            />
            <div className="mt-14">
              <WorkList items={caseStudies} />
            </div>
          </div>
        </main>
      </PageEnter>
    </>
  )
}
