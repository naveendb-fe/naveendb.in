import { Seo } from '../components/Seo'
import { Hero } from '../components/Hero'
import { CraftSection } from '../components/CraftSection'
import { WorkList } from '../components/WorkList'
import { HomeContactCta } from '../components/HomeContactCta'
import { PageEnter } from '../components/PageEnter'
import { getFeaturedWork } from '../content/work'

export function HomePage() {
  const featured = getFeaturedWork()

  return (
    <>
      <Seo />
      <PageEnter>
        <main>
          <Hero />
          <section className="pb-8 pt-4 sm:pb-12">
            <div className="mx-auto max-w-6xl px-5 sm:px-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Selected work
              </p>
              <h2 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                Selected product work
              </h2>
              <div className="mt-10">
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
