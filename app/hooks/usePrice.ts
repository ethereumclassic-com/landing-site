'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

/**
 * Live ETC Price Hook
 *
 * Fetches live price data from the /api/price endpoint, which reads CoinGecko, or Blockscout when
 * CoinGecko is unavailable. A figure neither supplies is null and formats as "—".
 * Refreshes every 60 seconds by default
 *
 * Usage:
 *   const { price, change24h, marketCap, loading, error, refresh } = usePrice('usd')
 */

export interface PriceData {
  /** Null when no source supplies this figure: CoinGecko is down and Blockscout lacks it. */
  price: number | null
  change24h: number | null
  marketCap: number | null
  volume24h: number | null
  high24h: number | null
  low24h: number | null
  currency: string
  timestamp: string
  /** coingecko: all figures. blockscout: ETC/USD, its 24h change and market cap. fallback: none. */
  source: 'coingecko' | 'blockscout' | 'fallback'
  prices?: Record<string, number>
  changes?: Record<string, number>
  // ETH and BTC prices in USD, from the same CoinGecko call; null without CoinGecko
  eth_usd?: number | null
  btc_usd?: number | null
  fiat_to_usd?: Record<string, number>
}

export interface UsePriceOptions {
  /** Refresh interval in milliseconds (default: 60000 = 1 minute) */
  refreshInterval?: number
  /** Auto-refresh enabled (default: true) */
  autoRefresh?: boolean
  /** Initial fetch on mount (default: true) */
  fetchOnMount?: boolean
  /**
   * Server-fetched price to render immediately. Lets a server component put
   * real figures in the initial HTML while this hook still refreshes them on
   * its interval — without it, every consumer paints a skeleton first.
   */
  initialData?: PriceData | null
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
  source: PriceData['source'] | null
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
  const { refreshInterval, autoRefresh, fetchOnMount, initialData } = { ...defaultOptions, ...options }

  const [data, setData] = useState<PriceData | null>(initialData ?? null)
  // Tracks whether a mount fetch is actually going to happen, so the first
  // render tells the truth instead of being corrected by the effect below.
  const [loading, setLoading] = useState((fetchOnMount ?? true) && !initialData)
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
      // Scheduled, not inline — see NetworkStatsContext for the reasoning.
      queueMicrotask(fetchPrice)
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

  // '...' while the first answer is on its way; '—' once it has arrived without the figure.
  const shown = <T,>(value: T | null | undefined, format: (v: T) => string) =>
    !data ? '...' : value === null || value === undefined ? '—' : format(value)

  return {
    data,
    price: data?.price ?? null,
    priceFormatted: shown(data?.price, (v) => formatPrice(v, currency)),
    change24h: data?.change24h ?? null,
    changeFormatted: shown(data?.change24h, formatChange),
    marketCap: data?.marketCap ?? null,
    marketCapFormatted: shown(data?.marketCap, formatLargeNumber),
    volume24h: data?.volume24h ?? null,
    volumeFormatted: shown(data?.volume24h, formatLargeNumber),
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
