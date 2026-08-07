import { NextResponse } from 'next/server'
import { fetchNetworkNow, fetchAllHashrateHistories } from '@/lib/hashrate'

export const revalidate = 3600

// Delegates to lib/hashrate.ts so there is exactly one implementation of the
// hashrate math. Do not inline it here: the figure must divide Blockscout's
// difficulty by Blockscout's own average_block_time, and a second copy drifts.
//
// Hashrate and difficulty ship together because they are read from the same
// block — splitting them across two routes lets a page show a hashrate and a
// difficulty that describe different heights.
export async function GET() {
  const [now, histories] = await Promise.all([
    fetchNetworkNow(),
    fetchAllHashrateHistories(),
  ])

  return NextResponse.json({
    currentTHs: now.hashrateTHs,
    currentDifficultyPH: now.difficultyPH,
    blockTimeSeconds: now.blockTimeSeconds,
    height: now.height,
    live: now.live,
    histories,
  })
}
