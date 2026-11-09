import type { NetworkStats } from '@/app/hooks/useNetworkStats'
import type { NetworkPayload } from './network-payload'
import { NOMINAL_BLOCK_TIME_SECONDS } from './chain'
import { getBlockRewardForEra, CURRENT_ERA } from '@/app/research/data/emission'

/** Reward fallback, derived so it follows the chain across a fifthing. */
const FALLBACK_BLOCK_REWARD = getBlockRewardForEra(CURRENT_ERA)

/**
 * The figures the pages read, from an /api/network body (lib/network-payload.ts). Shared by the stats context
 * in the browser and by server components that render the same figures before it loads, so both map one way.
 */
export function networkStatsFromPayload(
  data: Partial<NetworkPayload> & { networkUtilization?: number },
): NetworkStats {
  return {
    price: data.price ?? 0,
    priceChange24h: data.priceChange24h ?? 0,
    marketCap: data.marketCap ?? 0,
    totalBlocks: data.blockHeight ?? 0,
    totalTransactions: data.totalTransactions ?? 0,
    totalAddresses: data.totalAddresses ?? 0,
    avgBlockTime: data.avgBlockTime ?? NOMINAL_BLOCK_TIME_SECONDS,
    networkUtilization: data.networkUtilization ?? 0,
    gasPrice: data.gasPrice ?? { slow: 1, average: 2, fast: 5 },
    avgBlockReward: data.blockReward ?? FALLBACK_BLOCK_REWARD,
    lastUpdated: data.lastUpdated ?? new Date().toISOString(),
    source: data.source,
  }
}
