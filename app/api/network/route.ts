import { NextResponse } from 'next/server'
import { fetchNetworkStats, getFallbackStats, formatNetworkStats } from '@/lib/blockscout'
import { fetchExchangeRates, getFallbackRates } from '@/lib/exchange-rates'

/**
 * GET /api/network
 * Returns live network statistics from Blockscout API
 * Falls back to cached/static data if API is unavailable
 *
 * Cache Strategy:
 * - Data is cached for 10 minutes to minimize Blockscout API calls
 * - Uses file-based caching that persists across server restarts
 * - Falls back to static data if API is unavailable
 */
export async function GET() {
  try {
    // Fetch Blockscout network stats and CoinGecko rates in parallel (both 10-min caches)
    const [liveStats, rates] = await Promise.all([
      fetchNetworkStats(),
      fetchExchangeRates(),
    ])

    if (liveStats) {
      const formatted = formatNetworkStats(liveStats)

      // Calculate cache age for transparency
      const cacheAge = liveStats.lastUpdated
        ? Math.round((Date.now() - new Date(liveStats.lastUpdated).getTime()) / 1000 / 60)
        : 0

      return NextResponse.json(
        {
          // Live data
          price: liveStats.price,
          priceFormatted: formatted.price,
          priceChange24h: liveStats.priceChange24h,
          priceChangeFormatted: formatted.priceChange,
          marketCap: liveStats.marketCap,
          marketCapFormatted: formatted.marketCap,

          // Network stats
          blockHeight: liveStats.totalBlocks,
          blockHeightFormatted: formatted.blockHeight,
          totalTransactions: liveStats.totalTransactions,
          totalTransactionsFormatted: formatted.totalTransactions,
          totalAddresses: liveStats.totalAddresses,
          avgBlockTime: liveStats.avgBlockTime,
          avgBlockTimeFormatted: formatted.avgBlockTime,
          blockReward: liveStats.avgBlockReward,
          blockRewardFormatted: formatted.blockReward,

          // Gas
          gasPrice: liveStats.gasPrice,
          gasPriceFormatted: formatted.gasPrice,

          // Cross-asset prices (derived from CoinGecko, 10-min cache)
          ethPrice: rates.eth_usd,
          btcPrice: rates.btc_usd,

          // Metadata
          source: 'blockscout',
          lastUpdated: liveStats.lastUpdated,
          cacheAgeMinutes: cacheAge,
          nextRefresh: new Date(new Date(liveStats.lastUpdated).getTime() + 10 * 60 * 1000).toISOString(),
        },
        {
          headers: {
            // Cache for 10 minutes, allow stale for 20 minutes
            'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=1200',
          },
        }
      )
    }

    // Fallback to static data
    const fallback = getFallbackStats()
    const fallbackRates = getFallbackRates()
    const formatted = formatNetworkStats(fallback)

    return NextResponse.json(
      {
        price: fallback.price,
        priceFormatted: formatted.price,
        priceChange24h: fallback.priceChange24h,
        priceChangeFormatted: formatted.priceChange,
        marketCap: fallback.marketCap,
        marketCapFormatted: formatted.marketCap,

        blockHeight: fallback.totalBlocks,
        blockHeightFormatted: formatted.blockHeight,
        totalTransactions: fallback.totalTransactions,
        totalTransactionsFormatted: formatted.totalTransactions,
        totalAddresses: fallback.totalAddresses,
        avgBlockTime: fallback.avgBlockTime,
        avgBlockTimeFormatted: formatted.avgBlockTime,
        blockReward: fallback.avgBlockReward,
        blockRewardFormatted: formatted.blockReward,

        gasPrice: fallback.gasPrice,
        gasPriceFormatted: formatted.gasPrice,

        ethPrice: fallbackRates.eth_usd,
        btcPrice: fallbackRates.btc_usd,

        source: 'fallback',
        lastUpdated: fallback.lastUpdated,
        cacheAgeMinutes: 0,
      },
      {
        headers: {
          // Short cache for fallback data to retry API soon
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
        },
      }
    )
  } catch (error) {
    console.error('Network API error:', error)

    return NextResponse.json(
      { error: 'Failed to fetch network data' },
      { status: 500 }
    )
  }
}
