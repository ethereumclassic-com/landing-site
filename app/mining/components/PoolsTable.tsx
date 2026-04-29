import { ChevronDown } from 'lucide-react'

const COLLAPSED_COUNT = 10

export interface PoolRow {
  name: string
  fee: string
  type: string
  href: string
  hashrateTHs: number
  hashrate: string
}

function HashBar({ hashrateTHs, networkTHs }: { hashrateTHs: number; networkTHs: number }) {
  const pct = hashrateTHs && networkTHs
    ? Math.min((hashrateTHs / networkTHs) * 100, 100)
    : 0
  const label = !hashrateTHs
    ? '—'
    : hashrateTHs >= 1
    ? `${hashrateTHs.toFixed(2)} TH/s`
    : `${Math.round(hashrateTHs * 1000)} GH/s`

  return (
    <div className="flex items-center justify-end gap-2">
      <div className="h-1 w-20 shrink-0 overflow-hidden rounded-full bg-[var(--border-default)]">
        {pct > 0 && (
          <div
            className="h-1 rounded-full bg-[var(--brand-green)] opacity-60"
            style={{ width: `${pct}%` }}
          />
        )}
      </div>
      <span className="font-mono text-xs tabular-nums text-[var(--text-subtle)]">{label}</span>
    </div>
  )
}

function PoolRows({
  rows,
  networkTHs,
  isLast,
}: {
  rows: PoolRow[]
  networkTHs: number
  isLast: (i: number, total: number) => boolean
}) {
  return (
    <>
      {rows.map((pool, i) => (
        <tr
          key={pool.name}
          className={`border-b border-[var(--border-default)] transition-colors hover:bg-[var(--bg-elevated)] ${
            isLast(i, rows.length) ? 'border-b-0' : ''
          }`}
        >
          <td className="px-4 py-3">
            <a
              href={pool.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[var(--brand-green)] transition-colors hover:underline"
            >
              {pool.name}
            </a>
          </td>
          <td className="px-4 py-3 font-mono text-xs text-[var(--text-muted)]">{pool.fee}</td>
          <td className="px-4 py-3 font-mono text-xs text-[var(--text-subtle)]">{pool.type}</td>
          <td className="px-4 py-3">
            <HashBar hashrateTHs={pool.hashrateTHs} networkTHs={networkTHs} />
          </td>
        </tr>
      ))}
    </>
  )
}

const PAYOUT_TYPES = [
  { type: 'PPS',   label: 'Pay Per Share',             desc: 'Fixed payout per valid share submitted, regardless of whether the pool finds a block. Variance-free for miners; pool bears the risk.' },
  { type: 'PPS+',  label: 'Pay Per Share Plus',        desc: 'PPS for the block reward, plus a proportional share of transaction fees. Slightly higher expected earnings than standard PPS.' },
  { type: 'FPPS',  label: 'Full Pay Per Share',        desc: 'PPS that includes an average of expected transaction fees in the per-share rate. Smooths fee income across all miners.' },
  { type: 'PPLNS', label: 'Pay Per Last N Shares',     desc: 'Payout proportional to shares submitted in the most recent window. Rewards consistent miners and discourages pool-hopping.' },
  { type: 'PROP',  label: 'Proportional',              desc: 'Block reward split proportionally among miners who contributed shares to that specific block. Simple, but earnings vary with block luck.' },
  { type: 'RBPPS', label: 'Round-Based Pay Per Share', desc: 'PPS calculated per mining round (block-to-block). Combines the low-variance of PPS with round-scoped accounting.' },
  { type: 'SOLO',  label: 'Solo Mining via Pool',      desc: 'Miner receives the full block reward if they find a block; nothing if they don\'t. Pool provides infrastructure only. High variance.' },
]

export function PoolsTable({ pools, networkTHs }: { pools: PoolRow[]; networkTHs: number }) {
  const top = pools.slice(0, COLLAPSED_COUNT)
  const rest = pools.slice(COLLAPSED_COUNT)
  const hasMore = rest.length > 0

  const headerHashrate = networkTHs ? `Hashrate · ${networkTHs.toFixed(1)} TH/s` : 'Hashrate'

  return (
    <>
      <div className="overflow-hidden rounded-xl border border-[var(--border-default)]">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--border-default)] bg-[var(--bg-elevated)]">
              <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)]">
                Pool
              </th>
              <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)]">
                Fee
              </th>
              <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)]">
                Type
              </th>
              <th className="px-4 py-3 text-right font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)]">
                {headerHashrate}
              </th>
            </tr>
          </thead>
          <tbody>
            <PoolRows
              rows={top}
              networkTHs={networkTHs}
              isLast={(i, total) => i === total - 1 && !hasMore}
            />
          </tbody>
        </table>

        {hasMore && (
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-center gap-1.5 border-t border-[var(--border-default)] bg-[var(--bg-elevated)] px-4 py-3 font-mono text-xs text-[var(--text-subtle)] transition-colors hover:text-[var(--brand-green)] [&::-webkit-details-marker]:hidden">
              <ChevronDown size={13} className="transition-transform group-open:rotate-180" />
              <span className="group-open:hidden">Show more pools</span>
              <span className="hidden group-open:inline">Show fewer pools</span>
            </summary>
            <table className="w-full text-sm">
              <tbody>
                <PoolRows
                  rows={rest}
                  networkTHs={networkTHs}
                  isLast={(i, total) => i === total - 1}
                />
              </tbody>
            </table>
          </details>
        )}
      </div>

      <p className="mt-3 text-xs text-[var(--text-subtle)]">
        Hashrate estimated from last ~500 blocks ·{' '}
        <a
          href="https://miningpoolstats.stream/ethereumclassic"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 transition-colors hover:text-[var(--brand-green)]"
        >
          miningpoolstats.stream
        </a>
      </p>

      <div className="mt-5 space-y-1.5">
        <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-subtle)]">
          Payout types
        </p>
        <dl className="grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
          {PAYOUT_TYPES.map(({ type, label, desc }) => (
            <div key={type} className="flex gap-2 text-xs leading-relaxed">
              <dt className="shrink-0 font-mono font-semibold text-[var(--brand-green)]">{type}</dt>
              <dd className="text-[var(--text-subtle)]">
                <span className="font-medium text-[var(--text-muted)]">{label} — </span>
                {desc}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  )
}
