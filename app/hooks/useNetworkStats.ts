'use client'

import { useNetworkStatsContext } from '@/app/context/NetworkStatsContext'
import { formatNetworkStatsForDisplay } from '@/lib/format-network-stats'

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

/**
 * Retained for call-site compatibility. The refresh cadence is owned by
 * NetworkStatsProvider (10 minutes) so every consumer shares one request —
 * passing a different interval here does nothing.
 */
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


// All callers read from the single global NetworkStatsProvider — one fetch, zero drift.
export function useNetworkStats(_options?: UseNetworkStatsOptions): UseNetworkStatsReturn {
  const { stats, blocks, loading, error, lastUpdated, refresh } = useNetworkStatsContext()

  const formatted = formatNetworkStatsForDisplay(stats)

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
