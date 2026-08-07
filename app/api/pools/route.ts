import { NextResponse } from 'next/server'
import { fetchPoolHashrates } from '@/lib/pool-hashrate'
import { fetchHashrateTHs } from '@/lib/hashrate'

export const revalidate = 3600

/**
 * GET /api/pools
 * Live mining-pool hashrate distribution, derived from recent Blockscout
 * block miners weighted against the current network hashrate.
 *
 * Returns pools sorted by hashrate descending, plus an "Others" remainder so
 * the shares always total 100%.
 */
const DISPLAY_NAMES: Record<string, string> = {
  '2miners': '2Miners',
  '666pool': '666Pool',
  antpool: 'AntPool',
  baikalmine: 'BaikalMine',
  binance: 'Binance Pool',
  f2pool: 'F2Pool',
  gtpool: 'GTPool',
  herominers: 'HeroMiners',
  k1pool: 'K1Pool',
  kryptex: 'Kryptex',
  solopool: 'Solopool',
  viabtc: 'ViaBTC',
}

export async function GET() {
  const [hashrates, networkTHs] = await Promise.all([
    fetchPoolHashrates(),
    fetchHashrateTHs(),
  ])

  const identified = Object.entries(hashrates)
    .filter(([, ths]) => ths > 0)
    .map(([id, ths]) => ({
      name: DISPLAY_NAMES[id] ?? id,
      hashrateTHs: ths,
      share: networkTHs ? Math.round((ths / networkTHs) * 1000) / 10 : 0,
    }))
    .sort((a, b) => b.hashrateTHs - a.hashrateTHs)

  const identifiedTHs = identified.reduce((sum, p) => sum + p.hashrateTHs, 0)
  const othersTHs = Math.max(0, Math.round((networkTHs - identifiedTHs) * 100) / 100)

  const pools = othersTHs > 0
    ? [
        ...identified,
        {
          name: 'Others',
          hashrateTHs: othersTHs,
          share: networkTHs ? Math.round((othersTHs / networkTHs) * 1000) / 10 : 0,
        },
      ]
    : identified

  return NextResponse.json({ networkTHs, pools })
}
