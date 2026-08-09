import MiningPoolsClient from './MiningPoolsClient'
import { fetchPoolDistribution } from '@/lib/pool-distribution'

// Pool shares are live from Blockscout block attribution, read once per hour on
// the server rather than rendered from a static array that had drifted 19pp.
export const revalidate = 3600

export default async function MiningPoolsPage() {
  const { pools } = await fetchPoolDistribution()
  return <MiningPoolsClient livePools={pools} />
}
