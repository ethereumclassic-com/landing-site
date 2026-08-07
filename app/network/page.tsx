import NetworkHealthClient from './NetworkHealthClient'
import { fetchPoolDistribution } from '@/lib/pool-distribution'
import { fetchNetworkStats, getFallbackStats } from '@/lib/blockscout'
import { formatNetworkStatsForDisplay } from '@/lib/format-network-stats'

// One upstream read per hour, shared by every visitor. Previously each visitor
// fetched /api/network and /api/pools from the browser, so the figures on a
// network-status page were absent from the HTML a crawler sees.
export const revalidate = 3600

export default async function NetworkPage() {
  const [distribution, stats] = await Promise.all([
    fetchPoolDistribution(),
    fetchNetworkStats(),
  ])

  return (
    <NetworkHealthClient
      initial={{
        formatted: formatNetworkStatsForDisplay(stats ?? getFallbackStats()),
        pools: distribution.pools,
        networkTHs: distribution.networkTHs,
      }}
    />
  )
}
