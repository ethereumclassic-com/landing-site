import { NextResponse } from 'next/server'

// Mock network data - in production, this would fetch from BlockScout or a node
const getNetworkData = () => {
  return {
    hashrate: '185.2 TH/s',
    hashrateRaw: 185200000000000,
    difficulty: '2.5 PH',
    difficultyRaw: 2500000000000000,
    blockHeight: 19250000 + Math.floor(Math.random() * 100),
    blockTime: 13.5,
    blockReward: 2.56,
    totalSupply: 147500000,
    circulatingSupply: 147500000,
    maxSupply: 210700000,
    activeAddresses24h: 45000 + Math.floor(Math.random() * 5000),
    transactions24h: 85000 + Math.floor(Math.random() * 10000),
    avgGasPrice: '1.5 Gwei',
    timestamp: new Date().toISOString(),
  }
}

export async function GET() {
  const data = getNetworkData()

  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=60',
      'X-RateLimit-Limit': '100',
      'X-RateLimit-Remaining': '99',
    },
  })
}
