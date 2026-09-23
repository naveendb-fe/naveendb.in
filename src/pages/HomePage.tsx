import { Seo } from '../components/Seo'
import { Hero } from '../components/Hero'
import { FocusSection } from '../components/FocusSection'
import { WorkList } from '../components/WorkList'
import { HomeContactCta } from '../components/HomeContactCta'
import { PageEnter } from '../components/PageEnter'
import { SectionHeading } from '../components/SectionHeading'
import { getFeaturedWork } from '../content/work'

export function HomePage() {
  const featured = getFeaturedWork()

  return (
    <>
      <Seo />
      <PageEnter>
        <main>
          <Hero />

          <section className="relative border-y border-ink/10 bg-surface/40 py-20 sm:py-24">
            <div className="mx-auto max-w-6xl px-5 sm:px-8">
              <SectionHeading
                align="split"
                eyebrow="Selected work"
                title="Depth over a long list"
                description="Two primary case studies — the design system I work on now, and a reporting product from earlier enterprise work."
              />
              <div className="mt-4">
                <WorkList items={featured} showViewAll />
              </div>
            </div>
          </section>

          <FocusSection />
          <HomeContactCta />
        </main>
      </PageEnter>
    </>
  )
}
