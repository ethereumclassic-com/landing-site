'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

/**
 * Live ETC Price Hook
 *
 * Fetches live price data from /api/price endpoint which uses CoinGecko
 * Refreshes every 60 seconds by default
 *
 * Usage:
 *   const { price, change24h, marketCap, loading, error, refresh } = usePrice('usd')
 */

export interface PriceData {
  price: number
  change24h: number
  marketCap: number
  volume24h: number
  high24h: number
  low24h: number
  currency: string
  timestamp: string
  source: 'coingecko' | 'fallback'
  prices?: Record<string, number>
  changes?: Record<string, number>
  // Cross-asset USD prices — derived from ETC ratios in the same CoinGecko bulk call
  eth_usd?: number
  btc_usd?: number
  fiat_to_usd?: Record<string, number>
}

export interface UsePriceOptions {
  /** Refresh interval in milliseconds (default: 60000 = 1 minute) */
  refreshInterval?: number
  /** Auto-refresh enabled (default: true) */
  autoRefresh?: boolean
  /** Initial fetch on mount (default: true) */
  fetchOnMount?: boolean
}

export interface UsePriceReturn {
  data: PriceData | null
  price: number | null
  priceFormatted: string
  change24h: number | null
  changeFormatted: string
  marketCap: number | null
  marketCapFormatted: string
  volume24h: number | null
  volumeFormatted: string
  loading: boolean
  error: string | null
  lastUpdated: Date | null
  source: 'coingecko' | 'fallback' | null
  refresh: () => Promise<void>
}

const defaultOptions: UsePriceOptions = {
  refreshInterval: 60000, // 1 minute
  autoRefresh: true,
  fetchOnMount: true,
}

// Format large numbers (e.g., $1.98B, $45M)
function formatLargeNumber(num: number): string {
  if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`
  if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`
  if (num >= 1e6) return `$${(num / 1e6).toFixed(1)}M`
  if (num >= 1e3) return `$${(num / 1e3).toFixed(1)}K`
  return `$${num.toFixed(2)}`
}

// Format price with appropriate decimals
function formatPrice(price: number, currency: string): string {
  const cryptoCurrencies = ['btc', 'eth', 'bnb']
  if (cryptoCurrencies.includes(currency.toLowerCase())) {
    return price.toFixed(6)
  }
  return `$${price.toFixed(2)}`
}

// Format percentage change
function formatChange(change: number): string {
  const sign = change >= 0 ? '+' : ''
  return `${sign}${change.toFixed(2)}%`
}

export function usePrice(
  currency: string = 'usd',
  options: UsePriceOptions = {}
): UsePriceReturn {
  const { refreshInterval, autoRefresh, fetchOnMount } = { ...defaultOptions, ...options }

  const [data, setData] = useState<PriceData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const mountedRef = useRef(true)

  const fetchPrice = useCallback(async () => {
    if (!mountedRef.current) return

    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/price?currency=${currency}`)
      if (!response.ok) {
        throw new Error(`Failed to fetch price: ${response.statusText}`)
      }

      const priceData: PriceData = await response.json()

      if (mountedRef.current) {
        setData(priceData)
        setLastUpdated(new Date())
      }
    } catch (err) {
      if (mountedRef.current) {
        setError(err instanceof Error ? err.message : 'Failed to fetch price')
      }
    } finally {
      if (mountedRef.current) {
        setLoading(false)
      }
    }
  }, [currency])

  // Initial fetch
  useEffect(() => {
    if (fetchOnMount) {
      fetchPrice()
    }

    return () => {
      mountedRef.current = false
    }
  }, [fetchPrice, fetchOnMount])

  // Auto-refresh
  useEffect(() => {
    if (autoRefresh && refreshInterval) {
      intervalRef.current = setInterval(fetchPrice, refreshInterval)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [autoRefresh, refreshInterval, fetchPrice])

  // Reset mounted ref on remount
  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  }, [])

  return {
    data,
    price: data?.price ?? null,
    priceFormatted: data ? formatPrice(data.price, currency) : '...',
    change24h: data?.change24h ?? null,
    changeFormatted: data ? formatChange(data.change24h) : '...',
    marketCap: data?.marketCap ?? null,
    marketCapFormatted: data ? formatLargeNumber(data.marketCap) : '...',
    volume24h: data?.volume24h ?? null,
    volumeFormatted: data ? formatLargeNumber(data.volume24h) : '...',
    loading,
    error,
    lastUpdated,
    source: data?.source ?? null,
    refresh: fetchPrice,
  }
}

/**
 * Hook for fetching all prices at once (useful for converters)
 */
export function useAllPrices(options: UsePriceOptions = {}): {
  prices: Record<string, number> | null
  changes: Record<string, number> | null
  eth_usd: number | null
  btc_usd: number | null
  fiat_to_usd: Record<string, number> | null
  loading: boolean
  error: string | null
  refresh: () => Promise<void>
} {
  const { data, loading, error, refresh } = usePrice('usd', options)

  return {
    prices: data?.prices ?? null,
    changes: data?.changes ?? null,
    eth_usd: data?.eth_usd ?? null,
    btc_usd: data?.btc_usd ?? null,
    fiat_to_usd: data?.fiat_to_usd ?? null,
    loading,
    error,
    refresh,
  }
}

export default usePrice
