'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

/**
 * Live Network Stats Hook
 *
 * Fetches live network data from /api/network endpoint which uses Blockscout
 * Refreshes every 60 seconds by default
 *
 * Usage:
 *   const { stats, loading, error, refresh } = useNetworkStats()
 */

export interface NetworkStats {
  // Price data
  price: number
  priceChange24h: number
  marketCap: number

  // Network data
  totalBlocks: number
  totalTransactions: number
  totalAddresses: number
  avgBlockTime: number // in seconds
  networkUtilization: number

  // Gas prices (in Gwei)
  gasPrice: {
    slow: number
    average: number
    fast: number
  }

  // Mining data
  avgBlockReward: number // in ETC

  // Metadata
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
  /** Refresh interval in milliseconds (default: 60000 = 1 minute) */
  refreshInterval?: number
  /** Auto-refresh enabled (default: true) */
  autoRefresh?: boolean
  /** Fetch recent blocks (default: false) */
  includeBlocks?: boolean
  /** Number of recent blocks to fetch (default: 10) */
  blockCount?: number
}

export interface UseNetworkStatsReturn {
  stats: NetworkStats | null
  blocks: RecentBlock[]
  loading: boolean
  error: string | null
  lastUpdated: Date | null
  refresh: () => Promise<void>

  // Formatted values for display
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

const defaultOptions: UseNetworkStatsOptions = {
  refreshInterval: 60000,
  autoRefresh: true,
  includeBlocks: false,
  blockCount: 10,
}

// Format large numbers
function formatLargeNumber(num: number, prefix = ''): string {
  if (num >= 1e12) return `${prefix}${(num / 1e12).toFixed(2)}T`
  if (num >= 1e9) return `${prefix}${(num / 1e9).toFixed(2)}B`
  if (num >= 1e6) return `${prefix}${(num / 1e6).toFixed(1)}M`
  if (num >= 1e3) return `${prefix}${(num / 1e3).toFixed(1)}K`
  return `${prefix}${num.toLocaleString()}`
}

export function useNetworkStats(
  options: UseNetworkStatsOptions = {}
): UseNetworkStatsReturn {
  const { refreshInterval, autoRefresh, includeBlocks, blockCount } = {
    ...defaultOptions,
    ...options,
  }

  const [stats, setStats] = useState<NetworkStats | null>(null)
  const [blocks, setBlocks] = useState<RecentBlock[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const mountedRef = useRef(true)

  const fetchStats = useCallback(async () => {
    if (!mountedRef.current) return

    setLoading(true)
    setError(null)

    try {
      const statsUrl = includeBlocks
        ? `/api/network?includeBlocks=true&blockCount=${blockCount}`
        : '/api/network'

      const response = await fetch(statsUrl)
      if (!response.ok) {
        throw new Error(`Failed to fetch network stats: ${response.statusText}`)
      }

      const data = await response.json()

      if (mountedRef.current) {
        // Map API response to NetworkStats interface
        // API returns: blockHeight, totalTransactions, avgBlockTime, blockReward, gasPrice, etc.
        const mappedStats: NetworkStats = {
          price: data.price ?? 0,
          priceChange24h: data.priceChange24h ?? 0,
          marketCap: data.marketCap ?? 0,
          totalBlocks: data.blockHeight ?? 0,
          totalTransactions: data.totalTransactions ?? 0,
          totalAddresses: data.totalAddresses ?? 0,
          avgBlockTime: data.avgBlockTime ?? 13.5,
          networkUtilization: data.networkUtilization ?? 0,
          gasPrice: data.gasPrice ?? { slow: 1, average: 2, fast: 5 },
          avgBlockReward: data.blockReward ?? 2.05,
          lastUpdated: data.lastUpdated ?? new Date().toISOString(),
          source: data.source,
        }
        setStats(mappedStats)
        setBlocks(data.blocks || [])
        setLastUpdated(new Date())
      }
    } catch (err) {
      if (mountedRef.current) {
        setError(err instanceof Error ? err.message : 'Failed to fetch network stats')
      }
    } finally {
      if (mountedRef.current) {
        setLoading(false)
      }
    }
  }, [includeBlocks, blockCount])

  // Initial fetch
  useEffect(() => {
    fetchStats()

    return () => {
      mountedRef.current = false
    }
  }, [fetchStats])

  // Auto-refresh
  useEffect(() => {
    if (autoRefresh && refreshInterval) {
      intervalRef.current = setInterval(fetchStats, refreshInterval)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [autoRefresh, refreshInterval, fetchStats])

  // Reset mounted ref on remount
  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  }, [])

  // Format stats for display with safe fallbacks
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

  return {
    stats,
    blocks,
    loading,
    error,
    lastUpdated,
    refresh: fetchStats,
    formatted,
  }
}

/**
 * Hook for gas prices only (lighter weight)
 */
export function useGasPrices(options: Omit<UseNetworkStatsOptions, 'includeBlocks'> = {}) {
  const { stats, loading, error, refresh } = useNetworkStats({ ...options, includeBlocks: false })

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
