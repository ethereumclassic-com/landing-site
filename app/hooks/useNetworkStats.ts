'use client'

import { useNetworkStatsContext } from '@/app/context/NetworkStatsContext'

export interface NetworkStats {
  price: number
  priceChange24h: number
  marketCap: number
  totalBlocks: number
  totalTransactions: number
  totalAddresses: number
  avgBlockTime: number // in seconds
  networkUtilization: number
  gasPrice: {
    slow: number
    average: number
    fast: number
  }
  avgBlockReward: number // in ETC
  lastUpdated: string
  source?: 'blockscout' | 'fallback'
}

export interface RecentBlock {
  height: number
  hash: string
  timestamp: string
  txCount: number
  miner: string
  reward: number
  gasUsed: number
  gasLimit: number
}

export interface UseNetworkStatsOptions {
  refreshInterval?: number
  autoRefresh?: boolean
  includeBlocks?: boolean
  blockCount?: number
}

export interface UseNetworkStatsReturn {
  stats: NetworkStats | null
  blocks: RecentBlock[]
  loading: boolean
  error: string | null
  lastUpdated: Date | null
  refresh: () => Promise<void>
  formatted: {
    price: string
    priceChange: string
    marketCap: string
    blockHeight: string
    transactions: string
    addresses: string
    blockTime: string
    blockReward: string
    gasPrice: string
  } | null
}

function formatLargeNumber(num: number, prefix = ''): string {
  if (num >= 1e12) return `${prefix}${(num / 1e12).toFixed(2)}T`
  if (num >= 1e9) return `${prefix}${(num / 1e9).toFixed(2)}B`
  if (num >= 1e6) return `${prefix}${(num / 1e6).toFixed(1)}M`
  if (num >= 1e3) return `${prefix}${(num / 1e3).toFixed(1)}K`
  return `${prefix}${num.toLocaleString()}`
}

// All callers read from the single global NetworkStatsProvider — one fetch, zero drift.
export function useNetworkStats(_options?: UseNetworkStatsOptions): UseNetworkStatsReturn {
  const { stats, blocks, loading, error, lastUpdated, refresh } = useNetworkStatsContext()

  const formatted = stats
    ? {
        price: `$${(stats.price ?? 0).toFixed(2)}`,
        priceChange: `${(stats.priceChange24h ?? 0) >= 0 ? '+' : ''}${(stats.priceChange24h ?? 0).toFixed(2)}%`,
        marketCap: formatLargeNumber(stats.marketCap ?? 0, '$'),
        blockHeight: (stats.totalBlocks ?? 0).toLocaleString(),
        transactions: formatLargeNumber(stats.totalTransactions ?? 0),
        addresses: formatLargeNumber(stats.totalAddresses ?? 0),
        blockTime: `${(stats.avgBlockTime ?? 13.5).toFixed(1)}s`,
        blockReward: `${(stats.avgBlockReward ?? 2.05).toFixed(2)} ETC`,
        gasPrice: `${(stats.gasPrice?.average ?? 2).toFixed(2)} Gwei`,
      }
    : null

  return { stats, blocks, loading, error, lastUpdated, refresh, formatted }
}

export function useGasPrices(_options?: Omit<UseNetworkStatsOptions, 'includeBlocks'>) {
  const { stats, loading, error, refresh } = useNetworkStatsContext()
  return {
    slow: stats?.gasPrice?.slow ?? null,
    average: stats?.gasPrice?.average ?? null,
    fast: stats?.gasPrice?.fast ?? null,
    loading,
    error,
    refresh,
  }
}

export default useNetworkStats
