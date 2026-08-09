import MiningStatsClient from './MiningStatsClient'
import { fetchPoolDistribution } from '@/lib/pool-distribution'

// One upstream read per hour, shared by every visitor. The pool shares on this
// page were hardcoded and had drifted by up to 19 percentage points.
export const revalidate = 3600

export default async function MiningStatsPage() {
  const { pools } = await fetchPoolDistribution()
  return <MiningStatsClient livePools={pools} />
}
