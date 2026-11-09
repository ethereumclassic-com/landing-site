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
  /** Null when neither Blockscout nor CoinGecko supplied a price. */
  etcPriceUSD: number | null
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
    etcPriceUSD: null,
    source: 'fallback',
    lastUpdated: new Date().toISOString(),
  })
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    async function fetchStats() {
      try {
        const [response, hashrate] = await Promise.all([
          fetch('/api/network'),
          fetch('/api/hashrate')
            .then((r) => (r.ok ? (r.json() as Promise<{ currentTHs?: number; live?: boolean }>) : null))
            .catch(() => null),
        ])

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
            // Derived from difficulty and block time by lib/hashrate, behind /api/hashrate.
            networkHashrateMH:
              hashrate?.live && hashrate.currentTHs ? hashrate.currentTHs * 1_000_000 : NETWORK_CONSTANTS.networkHashrateMH,
            // The protocol subsidy: a block's total reward also carries its fees.
            blockReward: NETWORK_CONSTANTS.blockReward,
            blockTimeSeconds: data.avgBlockTime || NETWORK_CONSTANTS.blockTimeSeconds,
            blocksPerDay,
            etcPriceUSD: data.price > 0 ? data.price : null,
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
      etcPriceUSD: data.price > 0 ? data.price : null,
      source: data.source === 'blockscout' ? 'live' : 'fallback',
      lastUpdated: data.lastUpdated,
    }
  } catch {
    // Return fallback constants on error
    return {
      ...NETWORK_CONSTANTS,
      etcPriceUSD: null,
      source: 'fallback',
      lastUpdated: new Date().toISOString(),
    }
  }
}
