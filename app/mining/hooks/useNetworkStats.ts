'use client'

import { useState, useEffect } from 'react'
import { NETWORK_CONSTANTS } from '../lib/calculations'

// Types matching the /api/network response
export interface LiveNetworkStats {
  price: number
  priceFormatted: string
  priceChange24h: number
  priceChangeFormatted: string
  marketCap: number
  marketCapFormatted: string
  blockHeight: number
  blockHeightFormatted: string
  totalTransactions: number
  totalTransactionsFormatted: string
  avgBlockTime: number
  avgBlockTimeFormatted: string
  blockReward: number
  blockRewardFormatted: string
  gasPrice: number
  gasPriceFormatted: string
  source: 'blockscout' | 'fallback'
  lastUpdated: string
}

// Derived stats for mining calculations
export interface MiningNetworkStats {
  networkHashrateMH: number
  blockReward: number
  blockTimeSeconds: number
  blocksPerDay: number
  etcPriceUSD: number
  source: 'live' | 'fallback'
  lastUpdated: string
}

/**
 * Hook to fetch live network stats for mining calculations
 * Falls back to static constants if API unavailable
 */
export function useNetworkStats() {
  const [stats, setStats] = useState<MiningNetworkStats>({
    ...NETWORK_CONSTANTS,
    source: 'fallback',
    lastUpdated: new Date().toISOString(),
  })
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    async function fetchStats() {
      try {
        const response = await fetch('/api/network')

        if (!response.ok) {
          throw new Error('Failed to fetch network stats')
        }

        const data: LiveNetworkStats = await response.json()

        if (isMounted) {
          // Calculate blocks per day from block time
          const blocksPerDay = data.avgBlockTime > 0
            ? Math.round(86400 / data.avgBlockTime)
            : NETWORK_CONSTANTS.blocksPerDay

          setStats({
            networkHashrateMH: NETWORK_CONSTANTS.networkHashrateMH, // Blockscout doesn't provide hashrate
            blockReward: data.blockReward || NETWORK_CONSTANTS.blockReward,
            blockTimeSeconds: data.avgBlockTime || NETWORK_CONSTANTS.blockTimeSeconds,
            blocksPerDay,
            etcPriceUSD: data.price || NETWORK_CONSTANTS.etcPriceUSD,
            source: data.source === 'blockscout' ? 'live' : 'fallback',
            lastUpdated: data.lastUpdated,
          })
          setError(null)
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Unknown error')
          // Keep using fallback constants
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    fetchStats()

    // Refresh every hour (data is cached for 24 hours server-side)
    const interval = setInterval(fetchStats, 60 * 60 * 1000)

    return () => {
      isMounted = false
      clearInterval(interval)
    }
  }, [])

  return { stats, isLoading, error }
}

/**
 * Server-side function to get network stats
 * For use in server components or API routes
 */
export async function getNetworkStats(): Promise<MiningNetworkStats> {
  try {
    // In server context, fetch directly from internal API
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const response = await fetch(`${baseUrl}/api/network`, {
      next: { revalidate: 300 }, // Cache for 5 minutes
    })

    if (!response.ok) {
      throw new Error('Failed to fetch network stats')
    }

    const data: LiveNetworkStats = await response.json()

    const blocksPerDay = data.avgBlockTime > 0
      ? Math.round(86400 / data.avgBlockTime)
      : NETWORK_CONSTANTS.blocksPerDay

    return {
      networkHashrateMH: NETWORK_CONSTANTS.networkHashrateMH,
      blockReward: data.blockReward || NETWORK_CONSTANTS.blockReward,
      blockTimeSeconds: data.avgBlockTime || NETWORK_CONSTANTS.blockTimeSeconds,
      blocksPerDay,
      etcPriceUSD: data.price || NETWORK_CONSTANTS.etcPriceUSD,
      source: data.source === 'blockscout' ? 'live' : 'fallback',
      lastUpdated: data.lastUpdated,
    }
  } catch {
    // Return fallback constants on error
    return {
      ...NETWORK_CONSTANTS,
      source: 'fallback',
      lastUpdated: new Date().toISOString(),
    }
  }
}
