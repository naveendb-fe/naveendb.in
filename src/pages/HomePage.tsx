import { Seo } from '../components/Seo'
import { Hero } from '../components/Hero'
import { WorkSection } from '../components/WorkSection'
import { CraftSection } from '../components/CraftSection'
import { AboutSection } from '../components/AboutSection'
import { NotesSection } from '../components/NotesSection'
import { ContactSection } from '../components/ContactSection'
import { SiteFooter } from '../components/SiteFooter'

export function HomePage() {
  return (
    <>
      <Seo />
      <main>
        <Hero />
        <WorkSection />
        <CraftSection />
        <AboutSection />
        <NotesSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
