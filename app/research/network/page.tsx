import NetworkAnalysisClient from './NetworkAnalysisClient'
import { buildNetworkPayload } from '@/lib/network-payload'
import { fetchHashrateTHs } from '@/lib/hashrate'
import { fetchPoolDistribution } from '@/lib/pool-distribution'

// One upstream read per hour, shared by every visitor, rather than two client
// round trips per visit on a page whose content is the figures themselves.
export const revalidate = 3600

export default async function ResearchNetworkPage() {
  const [payload, hashrateTHs, distribution] = await Promise.all([
    buildNetworkPayload(),
    fetchHashrateTHs(),
    fetchPoolDistribution(),
  ])

  return (
    <NetworkAnalysisClient
      initial={{
        stats: payload,
        pools: distribution.pools,
        hashrateDisplay: `${hashrateTHs.toFixed(1)} TH/s`,
      }}
    />
  )
}
