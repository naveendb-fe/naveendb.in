import { Seo } from '../components/Seo'
import { PageEnter } from '../components/PageEnter'
import { SectionHeading } from '../components/SectionHeading'
import { WorkList } from '../components/WorkList'
import { getArchiveWork, getPrimaryWork } from '../content/work'

export function WorkIndexPage() {
  const primary = getPrimaryWork()
  const archive = getArchiveWork()

  return (
    <>
      <Seo
        title="Work"
        description="Case studies — Granicus Design System, Delivery Inaccuracy, and earlier product UI archive."
        path="/work"
      />
      <PageEnter>
        <main className="pb-24 pt-14 sm:pt-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionHeading
              as="h1"
              eyebrow="Work"
              title="Case studies"
              description="Primary depth first. Earlier product work lives in the archive below."
            />

            <div className="mt-14">
              <p className="eyebrow">Primary</p>
              <div className="mt-6">
                <WorkList items={primary} />
              </div>
            </div>

            <div className="mt-20">
              <p className="eyebrow">Archive</p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-muted">
                Earlier Accenture AI, Kogentix, and Flutura product surfaces — shorter notes, not full visual case studies.
              </p>
              <div className="mt-6">
                <WorkList items={archive} startIndex={primary.length + 1} />
              </div>
            </div>
          </div>
        </main>
      </PageEnter>
    </>
  )
}
