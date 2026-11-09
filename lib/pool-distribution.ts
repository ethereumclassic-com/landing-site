import { fetchPoolHashrates } from './pool-hashrate'
import { fetchHashrateTHs } from './hashrate'

/**
 * Live mining-pool hashrate distribution, derived from recent Blockscout block
 * miners weighted against the current network hashrate.
 *
 * Shared by /api/pools and by the server components that render it, so the
 * route and the page cannot disagree about shares or the "Others" remainder.
 * This lived only in the route handler; a page needing the same figures had to
 * go back out over HTTP to its own API to get them.
 */

/** Pool names as shown, by the ids lib/pool-addresses.json assigns. */
export const POOL_DISPLAY_NAMES: Record<string, string> = {
  '2miners': '2Miners',
  '666pool': '666Pool',
  antpool: 'AntPool',
  baikalmine: 'BaikalMine',
  binance: 'Binance Pool',
  cloverpool: 'CloverPool',
  coolpool: 'Coolpool',
  crazypool: 'CrazyPool',
  f2pool: 'F2Pool',
  gtpool: 'GTPool',
  herominers: 'HeroMiners',
  k1pool: 'K1Pool',
  kryptex: 'Kryptex',
  molepool: 'Molepool',
  okminer: 'OKMiner',
  solopool: 'Solopool',
  viabtc: 'ViaBTC',
}

export interface PoolShare {
  name: string
  hashrateTHs: number
  share: number
}

export interface PoolDistribution {
  /** Null when the network hashrate could not be read; the pools are then empty too. */
  networkTHs: number | null
  pools: PoolShare[]
}

/** Sorted by hashrate descending, with an "Others" remainder so shares total 100%. */
export async function fetchPoolDistribution(): Promise<PoolDistribution> {
  const [hashrates, networkTHs] = await Promise.all([
    fetchPoolHashrates(),
    fetchHashrateTHs(),
  ])
  if (networkTHs === null) return { networkTHs: null, pools: [] }

  const identified = Object.entries(hashrates)
    .filter(([, ths]) => ths > 0)
    .map(([id, ths]) => ({
      name: POOL_DISPLAY_NAMES[id] ?? id,
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

  return { networkTHs, pools }
}
