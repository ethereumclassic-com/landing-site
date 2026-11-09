import MiningPoolsClient from './MiningPoolsClient'
import { fetchPoolDistribution } from '@/lib/pool-distribution'
import { fetchHashrateTHs } from '@/lib/hashrate'
import { fetchPoolHashrates } from '@/lib/pool-hashrate'
import { poolRows } from '../data/pools'
import { poolHistoryByWeek } from '@/lib/pool-history'

// Pool shares are live from Blockscout block attribution, read once per hour on
// the server rather than rendered from a static array that had drifted 19pp.
export const revalidate = 3600

export default async function MiningPoolsPage() {
  const [{ pools }, hashrateTHs, hashrates] = await Promise.all([fetchPoolDistribution(), fetchHashrateTHs(), fetchPoolHashrates()])
  return (
    <MiningPoolsClient
      livePools={pools}
      hashrateTHs={hashrateTHs}
      rows={poolRows(hashrates)}
      history={poolHistoryByWeek()}
    />
  )
}
