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
import { buildNetworkPayload } from '@/lib/network-payload'
import { networkStatsFromPayload } from '@/lib/network-stats'
import { fetchPricePayload } from '@/lib/price-payload'

// ISR: one upstream fetch per revalidate window is shared by every visitor,
// instead of each browser asking for the same figures on load.
export const revalidate = 3600

export default async function Page() {
  const [currentTHs, histories, network, market] = await Promise.all([
    fetchHashrateTHs(),
    fetchAllHashrateHistories(),
    // Without these the section loads its figures in the browser, as it did before they were served here.
    buildNetworkPayload().catch((error) => {
      console.error('home: network figures unavailable', error)
      return null
    }),
    fetchPricePayload('usd').catch((error) => {
      console.error('home: market figures unavailable', error)
      return null
    }),
  ])
  const hashrate = { currentTHs, histories }

  return (
    <div>
      <Hero hashrate={hashrate} />
      <NetworkOverviewSection
        initialHashrateTHs={currentTHs ?? undefined}
        initialStats={network ? networkStatsFromPayload(network) : null}
        initialVolume24h={market?.volume24h ?? null}
      />
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
    </div>
  )
}
