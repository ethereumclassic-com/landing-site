import NetworkAnalysisClient from './NetworkAnalysisClient'
import { buildNetworkPayload } from '@/lib/network-payload'
import { fetchHashrateTHs } from '@/lib/hashrate'

// One upstream read per hour, shared by every visitor, rather than two client
// round trips per visit on a page whose content is the figures themselves.
export const revalidate = 3600

export default async function ResearchNetworkPage() {
  const [payload, hashrateTHs] = await Promise.all([
    buildNetworkPayload(),
    fetchHashrateTHs(),
  ])

  return (
    <NetworkAnalysisClient
      initial={{
        stats: payload,
        hashrateDisplay: `${hashrateTHs.toFixed(1)} TH/s`,
      }}
    />
  )
}
