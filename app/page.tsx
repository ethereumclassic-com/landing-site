import {
  Hero,
  NetworkOverviewSection,
  NetworkArchitectureSection,
  RegulatoryOverviewSection,
  ActiveEventsSection,
  SiteHubGrid,
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
      <NetworkOverviewSection />
      <NetworkArchitectureSection />
      <SectionDivider />
      <RegulatoryOverviewSection />
      <SectionDivider />
      <ActiveEventsSection />
      <SectionDivider />
      <SiteHubGrid />
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
