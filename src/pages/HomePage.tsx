import { Seo } from '../components/Seo'
import { Hero } from '../components/Hero'
import { CraftSection } from '../components/CraftSection'
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
          <section className="pb-10 pt-6 sm:pb-14 sm:pt-8">
            <div className="mx-auto max-w-6xl px-5 sm:px-8">
              <SectionHeading
                eyebrow="Selected work"
                title="Product work that shipped"
                description="A few highlights — denser workflows, clearer systems, and interfaces people can trust."
              />
              <div className="mt-12">
                <WorkList items={featured} showViewAll />
              </div>
            </div>
          </section>
          <CraftSection compact />
          <HomeContactCta />
        </main>
      </PageEnter>
    </>
  )
}
