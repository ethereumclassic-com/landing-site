import { NextResponse } from 'next/server'
import { fetchMiningNetworkStats } from '@/lib/etc-rpc'

/**
 * GET /api/mining
 * Returns mining-specific network statistics
 * Includes hashrate, difficulty, and block info from RPC
 *
 * Cache Strategy:
 * - Data is cached for 24 hours to minimize RPC calls
 * - Uses file-based caching that persists across server restarts
 */
export async function GET() {
  try {
    const stats = await fetchMiningNetworkStats()

    return NextResponse.json(stats, {
      headers: {
        // Cache for 24 hours, allow stale data for 48 hours
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=172800',
      },
    })
  } catch (error) {
    console.error('Mining API error:', error)

    return NextResponse.json(
      { error: 'Failed to fetch mining data' },
      { status: 500 }
    )
  }
}
