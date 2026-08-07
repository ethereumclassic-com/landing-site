import { fetchNetworkStats, getFallbackStats, formatNetworkStats } from './blockscout'
import { fetchExchangeRates, getFallbackRates } from './exchange-rates'

/**
 * The /api/network response body, built once.
 *
 * Shared by the route handler and by server components that render the same
 * figures. Without this, a server component wanting these numbers had to call
 * its own API over HTTP — a round trip to itself — or rebuild the mapping and
 * risk formatting the same value two different ways.
 */
export interface NetworkPayload {
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
  totalAddresses: number
  avgBlockTime: number
  avgBlockTimeFormatted: string
  blockReward: number
  blockRewardFormatted: string
  gasPrice: { slow: number; average: number; fast: number }
  gasPriceFormatted: string
  ethPrice: number
  btcPrice: number
  source: 'blockscout' | 'fallback'
  lastUpdated: string
  cacheAgeMinutes: number
  nextRefresh?: string
}

export async function buildNetworkPayload(): Promise<NetworkPayload> {
  const [liveStats, rates] = await Promise.all([
    fetchNetworkStats(),
    fetchExchangeRates(),
  ])

  const live = liveStats !== null
  const stats = liveStats ?? getFallbackStats()
  const usedRates = live ? rates : getFallbackRates()
  const formatted = formatNetworkStats(stats)

  const cacheAge = stats.lastUpdated
    ? Math.round((Date.now() - new Date(stats.lastUpdated).getTime()) / 1000 / 60)
    : 0

  return {
    price: stats.price,
    priceFormatted: formatted.price,
    priceChange24h: stats.priceChange24h,
    priceChangeFormatted: formatted.priceChange,
    marketCap: stats.marketCap,
    marketCapFormatted: formatted.marketCap,

    blockHeight: stats.totalBlocks,
    blockHeightFormatted: formatted.blockHeight,
    totalTransactions: stats.totalTransactions,
    totalTransactionsFormatted: formatted.totalTransactions,
    totalAddresses: stats.totalAddresses,
    avgBlockTime: stats.avgBlockTime,
    avgBlockTimeFormatted: formatted.avgBlockTime,
    blockReward: stats.avgBlockReward,
    blockRewardFormatted: formatted.blockReward,

    gasPrice: stats.gasPrice,
    gasPriceFormatted: formatted.gasPrice,

    ethPrice: usedRates.eth_usd,
    btcPrice: usedRates.btc_usd,

    source: live ? 'blockscout' : 'fallback',
    lastUpdated: stats.lastUpdated,
    cacheAgeMinutes: live ? cacheAge : 0,
    ...(live
      ? { nextRefresh: new Date(new Date(stats.lastUpdated).getTime() + 10 * 60 * 1000).toISOString() }
      : {}),
  }
}
