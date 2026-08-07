import { NOMINAL_BLOCK_TIME_SECONDS } from './chain'
import { getBlockRewardForEra, CURRENT_ERA } from '@/app/research/data/emission'

/**
 * Display formatting for network stats, shared by the server and the client.
 *
 * Extracted from useNetworkStats so a server component can render the same
 * strings into the initial HTML that the client hook would produce after its
 * fetch resolves. A second copy would drift, and the drift would be invisible:
 * both sides render plausible numbers, just different ones.
 */

/** The subset of NetworkStats this formatter reads. */
export interface FormattableStats {
  price?: number
  priceChange24h?: number
  marketCap?: number
  totalBlocks?: number
  totalTransactions?: number
  totalAddresses?: number
  avgBlockTime?: number
  avgBlockReward?: number
  gasPrice?: { slow: number; average: number; fast: number }
}

export interface FormattedNetworkStats {
  price: string
  priceChange: string
  marketCap: string
  blockHeight: string
  transactions: string
  addresses: string
  blockTime: string
  blockReward: string
  gasPrice: string
}

export function formatLargeNumber(num: number, prefix = ''): string {
  if (num >= 1_000_000_000) return `${prefix}${(num / 1_000_000_000).toFixed(2)}B`
  if (num >= 1_000_000) return `${prefix}${(num / 1_000_000).toFixed(2)}M`
  if (num >= 1_000) return `${prefix}${(num / 1_000).toFixed(2)}K`
  return `${prefix}${num.toFixed(0)}`
}

export function formatNetworkStatsForDisplay(
  stats: FormattableStats | null | undefined,
): FormattedNetworkStats | null {
  if (!stats) return null
  return {
    price: `$${(stats.price ?? 0).toFixed(2)}`,
    priceChange: `${(stats.priceChange24h ?? 0) >= 0 ? '+' : ''}${(stats.priceChange24h ?? 0).toFixed(2)}%`,
    marketCap: formatLargeNumber(stats.marketCap ?? 0, '$'),
    blockHeight: (stats.totalBlocks ?? 0).toLocaleString(),
    transactions: formatLargeNumber(stats.totalTransactions ?? 0),
    addresses: formatLargeNumber(stats.totalAddresses ?? 0),
    blockTime: `${(stats.avgBlockTime ?? NOMINAL_BLOCK_TIME_SECONDS).toFixed(1)}s`,
    blockReward: `${(stats.avgBlockReward ?? getBlockRewardForEra(CURRENT_ERA)).toFixed(2)} ETC`,
    gasPrice: `${(stats.gasPrice?.average ?? 2).toFixed(2)} Gwei`,
  }
}
