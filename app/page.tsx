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
import { fetchHashrateTHs, fetchAllHashrateHistories } from '@/lib/hashrate'

// ISR: one upstream fetch per revalidate window is shared by every visitor,
// instead of each browser asking for the same figures on load.
export const revalidate = 3600

export default async function Page() {
  const [currentTHs, histories] = await Promise.all([
    fetchHashrateTHs(),
    fetchAllHashrateHistories(),
  ])
  const hashrate = { currentTHs, histories }

  return (
    <main>
      <Hero hashrate={hashrate} />
      <NetworkOverviewSection initialHashrateTHs={currentTHs} />
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
