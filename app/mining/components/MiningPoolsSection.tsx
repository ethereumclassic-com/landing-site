import { FadeIn } from '@/app/components/ui'
import { fetchPoolHashrates, type PoolHashrates } from '@/lib/pool-hashrate'
import { fetchHashrateTHs } from '@/lib/hashrate'
import { PoolsTable, type PoolRow } from './PoolsTable'

interface Pool {
  name: string
  fee: string
  type: string
  href: string
  statsId: string
}

function getPoolTHs(pool: Pool, hashrates: PoolHashrates): number {
  return hashrates[pool.statsId] ?? 0
}

function formatHashrate(ths: number): string {
  if (!ths) return '—'
  if (ths >= 1) return `${ths.toFixed(2)} TH/s`
  return `${Math.round(ths * 1000)} GH/s`
}

const pools: Pool[] = [
  { name: 'f2pool.com',       statsId: 'f2pool',       fee: '1%',    type: 'PPS',   href: 'https://f2pool.com' },
  { name: 'antpool.com',      statsId: 'antpool',      fee: '1.5%',  type: 'PPS',   href: 'https://antpool.com' },
  { name: 'viabtc.com',       statsId: 'viabtc',       fee: '2%',    type: 'PPLNS', href: 'https://viabtc.com' },
  { name: '2miners.com',      statsId: '2miners',      fee: '1%',    type: 'PPLNS', href: 'https://2miners.com' },
  { name: 'hiveon.net',       statsId: 'hiveon',       fee: '0%',    type: 'PPS+',  href: 'https://hiveon.net' },
  { name: 'pool.kryptex.com', statsId: 'kryptex',      fee: '1%',    type: 'PPS+',  href: 'https://pool.kryptex.com' },
  { name: 'l6pool.com',       statsId: 'l6pool',       fee: '0.3%',  type: '—',     href: 'https://l6pool.com' },
  { name: 'poolin.com',       statsId: 'poolin',       fee: '0%',    type: 'PPS+',  href: 'https://poolin.com' },
  { name: 'emcd.io',          statsId: 'emcd',         fee: '1.5%',  type: 'FPPS',  href: 'https://emcd.io' },
  { name: 'binance.com',      statsId: 'binance',      fee: '3%',    type: 'FPPS',  href: 'https://www.binance.com' },
  { name: 'k1pool.com',       statsId: 'k1pool',       fee: '1%',    type: 'RBPPS', href: 'https://k1pool.com' },
  { name: 'herominers.com',   statsId: 'herominers',   fee: '0.9%',  type: 'PROP',  href: 'https://herominers.com' },
  { name: 'ntminerpool.com',  statsId: 'ntminerpool',  fee: '1%',    type: 'PPS+',  href: 'https://ntminerpool.com' },
  { name: 'woolypooly.com',   statsId: 'woolypooly',   fee: '0.9%',  type: 'PPLNS', href: 'https://woolypooly.com' },
  { name: 'longpool.org',     statsId: 'longpool',     fee: '1%',    type: 'PPLNS', href: 'https://longpool.org' },
  { name: 'gtpool.io',        statsId: 'gtpool',       fee: '1%',    type: 'PPLNS', href: 'https://gtpool.io' },
  { name: 'dogpool.work',     statsId: 'dogpool',      fee: '1.25%', type: 'PPS+',  href: 'https://dogpool.work' },
  { name: 'solopool.org',     statsId: 'solopool',     fee: '1.5%',  type: 'SOLO',  href: 'https://solopool.org' },
  { name: 'coolpool.top',     statsId: 'coolpool',     fee: '1%',    type: 'PPLNS', href: 'https://coolpool.top' },
  { name: 'molepool.com',     statsId: 'molepool',     fee: '1.5%',  type: 'SOLO',  href: 'https://molepool.com' },
  { name: 'tpool.io',         statsId: 'tpool',        fee: '0.9%',  type: 'FPPS',  href: 'https://tpool.io' },
  { name: 'baikalmine.com',   statsId: 'baikalmine',   fee: '0.75%', type: 'PPS+',  href: 'https://baikalmine.com' },
  { name: 'cloverpool.com',   statsId: 'cloverpool',   fee: '—',     type: 'PPLNS', href: 'https://cloverpool.com' },
  { name: 'okminer.com',      statsId: 'okminer',      fee: '2%',    type: 'FPPS',  href: 'https://okminer.com' },
  { name: '666pool.com',      statsId: '666pool',      fee: '1%',    type: 'PPLNS', href: 'https://666pool.com' },
  { name: 'cruxpool.com',     statsId: 'cruxpool',     fee: '1%',    type: 'PPS+',  href: 'https://cruxpool.com' },
  { name: 'crazypool.org',    statsId: 'crazypool',    fee: '1%',    type: 'PPLNS', href: 'https://crazypool.org' },
  { name: 'ethcore.ru',       statsId: 'ethcore',      fee: '0.5%',  type: 'SOLO',  href: 'https://ethcore.ru' },
  { name: 'skypool.org',      statsId: 'skypool',      fee: '1.5%',  type: 'PPS+',  href: 'https://skypool.org' },
  { name: 'pool2mine.net',    statsId: 'pool2mine',    fee: '0.5%',  type: 'PROP',  href: 'https://pool2mine.net' },
]

export async function MiningPoolsSection() {
  const [poolHashrates, networkTHs] = await Promise.all([
    fetchPoolHashrates(),
    fetchHashrateTHs(),
  ])

  const rows: PoolRow[] = pools
    .map((pool) => {
      const ths = getPoolTHs(pool, poolHashrates)
      return {
        name: pool.name,
        fee: pool.fee,
        type: pool.type,
        href: pool.href,
        hashrateTHs: ths,
        hashrate: formatHashrate(ths),
      }
    })
    .sort((a, b) => b.hashrateTHs - a.hashrateTHs)

  return (
    <section className="border-y border-[var(--border-default)] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--brand-green)]">
            Mining Pools
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">
            Mining Pools
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
            Active ETChash mining pools contributing to Ethereum Classic&apos;s security budget.
            Pool selection affects expected earnings variance, payout frequency, and
            infrastructure dependence. Hashrate is estimated from recent block attribution —
            larger pools appear at the top.
          </p>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="mt-8">
            <PoolsTable pools={rows} networkTHs={networkTHs} />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
