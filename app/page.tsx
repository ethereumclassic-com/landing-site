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
import { fetchMiningNetworkStats } from '@/lib/etc-rpc'

function getBlockReward(blockHeight: number): string {
  const era = Math.floor(blockHeight / 5_000_000)
  return `${(5 * Math.pow(0.8, era)).toFixed(3)} ETC`
}

export default async function Page() {
  const stats = await fetchMiningNetworkStats()
  const miningStats = {
    hashrate: stats.hashrateFormatted,
    difficulty: stats.difficultyFormatted,
    blockTime: stats.blockTimeFormatted,
    blockReward: getBlockReward(stats.blockHeight),
    dailyBlocks: Math.round(86400 / stats.blockTime).toLocaleString(),
  }

  return (
    <main>
      <Hero miningStats={miningStats} />
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
