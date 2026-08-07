import { NextResponse } from 'next/server'
import { fetchHashrateTHs, fetchAllHashrateHistories } from '@/lib/hashrate'

export const revalidate = 3600

// Delegates to lib/hashrate.ts so there is exactly one implementation of the
// hashrate math. Do not inline it here: the figure must divide Blockscout's
// difficulty by Blockscout's own average_block_time, and a second copy drifts.
export async function GET() {
  const [currentTHs, histories] = await Promise.all([
    fetchHashrateTHs(),
    fetchAllHashrateHistories(),
  ])

  return NextResponse.json({ currentTHs, histories })
}
