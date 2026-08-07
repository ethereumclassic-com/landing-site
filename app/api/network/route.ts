import { NextResponse } from 'next/server'
import { buildNetworkPayload } from '@/lib/network-payload'

/**
 * GET /api/network
 * Live network statistics from Blockscout, with CoinGecko cross-asset prices.
 *
 * Delegates to lib/network-payload.ts so there is one implementation of the
 * response shape. Server components import that module directly rather than
 * calling this route over HTTP.
 */
export async function GET() {
  try {
    const payload = await buildNetworkPayload()
    const live = payload.source === 'blockscout'

    return NextResponse.json(payload, {
      headers: {
        // Live data: 10 minutes fresh, 20 stale-while-revalidate. A fallback
        // response caches longer so a Blockscout outage is not re-hammered.
        'Cache-Control': live
          ? 'public, s-maxage=600, stale-while-revalidate=1200'
          : 'public, s-maxage=3600, stale-while-revalidate=7200',
      },
    })
  } catch (error) {
    console.error('Network API error:', error)
    return NextResponse.json({ error: 'Failed to fetch network data' }, { status: 500 })
  }
}
