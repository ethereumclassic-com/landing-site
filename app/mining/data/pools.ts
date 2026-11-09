/**
 * Every Ethereum Classic mining pool this site lists, for the mining hub, /mining/pools and the
 * directory. One list, so the pages agree on which pools there are and what they charge.
 *
 * Fees and payout schemes are each pool's ETC terms as MiningPoolStats (miningpoolstats.stream/
 * ethereumclassic) listed them on 2026-11-09, or as minerstat (minerstat.com/coin/etc) lists a pool
 * MiningPoolStats does not. Where both list a pool, MiningPoolStats' figure is used (F2Pool: 1% there,
 * 3% on minerstat). A pool neither lists is not listed here, since its terms cannot be checked. Hashrate is
 * never stored: the pages read each pool's share of recent blocks from Blockscout (lib/pool-hashrate.ts,
 * matched by `id`).
 *
 * Removed 2026-11-08: Hiveon (its pool closed May 15, 2026), ViaBTC (its ETC pool closed August 4,
 * 2026) and skypool.org (no ETC pool on its site, and listed by neither tracker).
 * New pools are listed only with the maintainer's approval (AGENTS.md, "Listing apps, exchanges, and pools").
 */

export interface PoolListing {
  /** Matches lib/pool-hashrate.ts, which attributes blocks to pools. */
  id: string
  /** The pool's domain, as miners know it. */
  name: string
  href: string
  /** The pool's fee for ETC, or "—" where neither tracker publishes one; one per scheme, in `type`'s order. */
  fee: string
  /** Payout scheme for ETC; several separated by " / ". */
  type: string
}

export const POOL_DIRECTORY: PoolListing[] = [
  { id: 'f2pool', name: 'f2pool.com', href: 'https://www.f2pool.com/coin/ethereum-classic', fee: '1%', type: 'PPS' },
  { id: '2miners', name: '2miners.com', href: 'https://etc.2miners.com', fee: '1% / 1.5%', type: 'PPLNS / SOLO' },
  { id: 'k1pool', name: 'k1pool.com', href: 'https://k1pool.com/pool/etc', fee: '1%', type: 'RBPPS / SOLO' },
  { id: 'gtpool', name: 'gtpool.io', href: 'https://gtpool.io', fee: '1%', type: 'PPLNS' },
  { id: 'kryptex', name: 'pool.kryptex.com', href: 'https://pool.kryptex.com/etc', fee: '1%', type: 'PPS+' },
  { id: 'l6pool', name: 'l6pool.com', href: 'https://global.l6pool.com', fee: '0.3%', type: 'PPS+' },
  { id: 'antpool', name: 'antpool.com', href: 'https://antpool.com', fee: '1.5%', type: 'PPS' },
  { id: 'binance', name: 'pool.binance.com', href: 'https://pool.binance.com', fee: '3%', type: 'FPPS' },
  { id: 'herominers', name: 'herominers.com', href: 'https://etc.herominers.com', fee: '0.9%', type: 'PROP / SOLO' },
  { id: 'molepool', name: 'molepool.com', href: 'https://etc.molepool.com', fee: '2%', type: 'SOLO' },
  { id: 'coolpool', name: 'coolpool.top', href: 'https://coolpool.top/pool/etc', fee: '1%', type: 'PPLNS / SOLO' },
  { id: 'baikalmine', name: 'baikalmine.com', href: 'https://baikalmine.com', fee: '0.75% / 1%', type: 'PPS+ / SOLO' },
  { id: 'cloverpool', name: 'cloverpool.com', href: 'https://cloverpool.com', fee: '—', type: 'PPLNS' },
  { id: 'longpool', name: 'longpool.org', href: 'https://longpool.org', fee: '1%', type: 'PPLNS' },
  { id: 'cruxpool', name: 'cruxpool.com', href: 'https://cruxpool.com/etc', fee: '1%', type: 'PPS+' },
  { id: '666pool', name: '666pool.com', href: 'https://www.666pool.com', fee: '1%', type: 'PPLNS / PPS' },
  { id: 'okminer', name: 'okminer.com', href: 'https://okminer.com', fee: '2%', type: 'FPPS' },
  { id: 'crazypool', name: 'crazypool.org', href: 'https://etc.crazypool.org', fee: '1%', type: 'PPLNS' },
  { id: 'woolypooly', name: 'woolypooly.com', href: 'https://woolypooly.com', fee: '0.9%', type: 'PPLNS / SOLO' },
  { id: 'ethcore', name: 'ethcore.ru', href: 'https://ethcore.ru', fee: '0.5%', type: 'PPLNS / SOLO' },
  { id: 'tpool', name: 'tpool.io', href: 'https://tpool.io', fee: '0.9%', type: 'FPPS' },
  { id: 'pool2mine', name: 'pool2mine.net', href: 'https://etc.pool2mine.net', fee: '0.5%', type: 'PROP' },
  { id: 'solopool', name: 'solopool.org', href: 'https://solopool.org', fee: '1.5%', type: 'SOLO' },
]

export interface PoolTableRow {
  name: string
  fee: string
  type: string
  href: string
  hashrateTHs: number
  hashrate: string
}

function formatPoolHashrate(ths: number): string {
  if (!ths) return '—'
  if (ths >= 1) return `${ths.toFixed(2)} TH/s`
  return `${Math.round(ths * 1000)} GH/s`
}

/** The directory as table rows, largest first, with each pool's hashrate from recent blocks (TH/s by id). */
export function poolRows(hashrates: Record<string, number>): PoolTableRow[] {
  return POOL_DIRECTORY.map((pool) => {
    const ths = hashrates[pool.id] ?? 0
    return { name: pool.name, fee: pool.fee, type: pool.type, href: pool.href, hashrateTHs: ths, hashrate: formatPoolHashrate(ths) }
  }).sort((a, b) => b.hashrateTHs - a.hashrateTHs)
}
