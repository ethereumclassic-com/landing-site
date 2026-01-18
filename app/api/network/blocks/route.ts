import { NextResponse } from 'next/server'

// Generate mock block data
const generateMockBlocks = (limit: number) => {
  const baseBlockNumber = 19250000
  const blocks = []
  const now = new Date()

  for (let i = 0; i < limit; i++) {
    const blockTime = new Date(now.getTime() - i * 13500) // ~13.5s per block
    blocks.push({
      number: baseBlockNumber - i,
      hash: `0x${Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join('')}`,
      parentHash: `0x${Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join('')}`,
      timestamp: blockTime.toISOString(),
      transactions: Math.floor(Math.random() * 100) + 10,
      miner: `0x${Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join('')}`,
      reward: 2.56,
      gasUsed: Math.floor(Math.random() * 15000000) + 5000000,
      gasLimit: 30000000,
      size: Math.floor(Math.random() * 50000) + 10000,
    })
  }

  return blocks
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const limitParam = searchParams.get('limit')

  // Parse and validate limit
  let limit = 10
  if (limitParam) {
    limit = parseInt(limitParam, 10)
    if (isNaN(limit) || limit < 1) {
      return NextResponse.json(
        { error: 'Invalid limit parameter. Must be a positive integer.' },
        { status: 400 }
      )
    }
    if (limit > 100) {
      return NextResponse.json(
        { error: 'Maximum limit is 100.' },
        { status: 400 }
      )
    }
  }

  const blocks = generateMockBlocks(limit)

  return NextResponse.json(
    { blocks },
    {
      headers: {
        'Cache-Control': 'public, s-maxage=10, stale-while-revalidate=30',
        'X-RateLimit-Limit': '100',
        'X-RateLimit-Remaining': '99',
      },
    }
  )
}
