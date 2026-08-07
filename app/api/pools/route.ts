import { NextResponse } from 'next/server'
import { fetchPoolDistribution } from '@/lib/pool-distribution'

export const revalidate = 3600

/**
 * GET /api/pools
 * Live mining-pool hashrate distribution.
 *
 * Delegates to lib/pool-distribution.ts so there is one implementation of the
 * share math and the "Others" remainder. Server components import that module
 * directly rather than calling this route.
 */
export async function GET() {
  return NextResponse.json(await fetchPoolDistribution())
}
