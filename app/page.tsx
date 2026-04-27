import {
  Hero,
  ActiveEventsSection,
  SiteHubGrid,
  NetworkOverviewSection,
  TrendingNews,
  TrustSignals,
  FinalCTA,
} from './components/homepage'
import { SiteFooter } from './sections/SiteFooter'
import { SectionDivider } from './components/ui'

export default function Page() {
  return (
    <main>
      <Hero />
      <ActiveEventsSection />
      <SiteHubGrid />
      <SectionDivider />
      <NetworkOverviewSection />
      <SectionDivider />
      <TrendingNews />
      <SectionDivider />
      <TrustSignals />
      <SectionDivider variant="strong" />
      <FinalCTA />
      <SiteFooter />
    </main>
  )
}
