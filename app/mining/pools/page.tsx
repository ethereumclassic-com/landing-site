import MiningPoolsClient from './MiningPoolsClient'
import { fetchPoolDistribution } from '@/lib/pool-distribution'
import { fetchHashrateTHs } from '@/lib/hashrate'

// Pool shares are live from Blockscout block attribution, read once per hour on
// the server rather than rendered from a static array that had drifted 19pp.
export const revalidate = 3600

export default async function MiningPoolsPage() {
  const [{ pools }, hashrateTHs] = await Promise.all([fetchPoolDistribution(), fetchHashrateTHs()])
  return <MiningPoolsClient livePools={pools} hashrateTHs={hashrateTHs} />
}
