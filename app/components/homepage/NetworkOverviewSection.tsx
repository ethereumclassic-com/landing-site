'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Cpu, Code2 } from 'lucide-react'
import { FadeIn } from '@/app/components/ui'
import { useNetworkStats } from '@/app/hooks/useNetworkStats'

// ── Formatters ────────────────────────────────────────────────────────────────

function fmtUSD(n: number): string {
  if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(2)}B`
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `$${n.toLocaleString('en-US', { maximumFractionDigits: 0 })}`
  return `$${n.toFixed(2)}`
}

function fmtCompact(n: number): string {
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(1)}B`
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`
  return n.toLocaleString('en-US')
}

function fmtPercent(n: number): string {
  const sign = n >= 0 ? '+' : ''
  return `${sign}${n.toFixed(2)}%`
}

function fmtBlockTime(seconds: number): string {
  return `~${Math.round(seconds)}s`
}

// ── Table ─────────────────────────────────────────────────────────────────────

interface TableRow {
  label: string
  value: string
  color?: 'green' | 'red'
}

function OverviewTable({ heading, rows }: { heading: string; rows: TableRow[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)]">
      <div className="border-b border-[var(--border-default)] px-5 py-3.5">
        <p className="text-sm font-semibold text-[var(--text-primary)]">{heading}</p>
      </div>
      <div>
        {rows.map((row, i) => (
          <div
            key={row.label}
            className={`flex items-center justify-between px-5 py-2.5 ${
              i % 2 === 0 ? '' : 'bg-[var(--border-subtle)]/30'
            }`}
          >
            <span className="text-sm text-[var(--text-muted)]">{row.label}</span>
            <span
              className={`font-mono text-sm font-medium ${
                row.color === 'green'
                  ? 'text-green-400'
                  : row.color === 'red'
                    ? 'text-red-400'
                    : 'text-[var(--text-primary)]'
              }`}
            >
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Stat Cards ────────────────────────────────────────────────────────────────

function HeroStat({
  value,
  label,
  context,
  contextColor,
  loading,
}: {
  value: string
  label: string
  context?: string
  contextColor?: 'green' | 'red'
  loading: boolean
}) {
  return (
    <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] px-5 py-4">
      <p className="text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">
        {loading ? <span className="animate-pulse text-[var(--text-muted)]">—</span> : value}
      </p>
      <p className="mt-1 text-sm text-[var(--text-muted)]">{label}</p>
      {context && !loading && (
        <p
          className={`mt-1 font-mono text-xs ${
            contextColor === 'green'
              ? 'text-green-400'
              : contextColor === 'red'
                ? 'text-red-400'
                : 'text-[var(--text-muted)]'
          }`}
        >
          {context}
        </p>
      )}
    </div>
  )
}

function SectionStat({
  value,
  label,
  context,
  loading,
}: {
  value: string
  label: string
  context?: string
  loading: boolean
}) {
  return (
    <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] px-5 py-4">
      <p className="text-xl font-bold text-[var(--text-primary)] md:text-2xl">
        {loading ? <span className="animate-pulse text-[var(--text-muted)]">—</span> : value}
      </p>
      <p className="mt-1 text-sm font-medium text-[var(--text-secondary)]">{label}</p>
      {context && <p className="mt-1 text-xs text-[var(--text-muted)]">{context}</p>}
    </div>
  )
}

// ── Network Architecture Data ─────────────────────────────────────────────────

const archColumns = [
  {
    icon: Cpu,
    heading: 'From Proof-of-Work',
    subheading: "Bitcoin's regulatory trajectory",
    points: [
      'No pre-mine, no foundation controlling the protocol, no issuer.',
      'Mining hardware is globally distributed and permissionless to acquire.',
      'Block rewards and tips go to miners — the treasury is funded by basefee, not inflation.',
      'CLARITY Act digital commodity classification path: same PoW profile as Bitcoin.',
      'Energy demand that co-locates with any power source, anywhere in the world.',
    ],
  },
  {
    icon: Code2,
    heading: 'From the EVM',
    subheading: "Ethereum's regulatory trajectory",
    points: [
      'Full Solidity and EVM compatibility — every Ethereum tool, library, and framework works without modification.',
      'Classic USD ($USC) by Brale: a live, 1:1 USD-backed stablecoin on a PoW chain — a first.',
      'GENIUS Act-compliant stablecoin infrastructure, the first on any Proof-of-Work network.',
      'ETCswap V2 and V3 provide on-chain liquidity for composable DeFi with a regulated stable base.',
      'MiCA decentralized asset classification: exempt from ART/EMT issuer obligations.',
    ],
  },
]

// ── Main Export ───────────────────────────────────────────────────────────────

export default function NetworkOverviewSection() {
  // 10-minute refresh matches the server-side ISR cache and lib/blockscout 10-min TTL
  const { stats, loading } = useNetworkStats({ refreshInterval: 600_000 })
  const [volume24h, setVolume24h] = useState<number | null>(null)

  useEffect(() => {
    fetch('/api/price')
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => { if (d?.volume24h) setVolume24h(d.volume24h) })
      .catch(() => {})
  }, [])

  const price = stats?.price ?? 0
  const priceChange = stats?.priceChange24h ?? 0
  const marketCap = stats?.marketCap ?? 0
  const totalTxns = stats?.totalTransactions ?? 0
  const totalBlocks = stats?.totalBlocks ?? 0
  const totalAddresses = stats?.totalAddresses ?? 0
  const blockTime = stats?.avgBlockTime ?? 13
  const isLive = stats?.source === 'blockscout'
  const priceChangeColor: 'green' | 'red' = priceChange >= 0 ? 'green' : 'red'

  const heroStats = [
    {
      value: fmtUSD(price),
      label: 'ETC Price',
      context: `${fmtPercent(priceChange)} (24h)`,
      contextColor: priceChangeColor,
    },
    { value: fmtUSD(marketCap), label: 'Market Cap' },
    { value: fmtCompact(totalTxns), label: 'Total Transactions' },
    { value: '2015', label: 'Network Origin' },
  ]

  const sectionStats = [
    {
      value: fmtUSD(marketCap),
      label: 'Market Capitalization',
      context: 'Rank ~#55 by market cap',
    },
    {
      value: fmtCompact(totalAddresses),
      label: 'Total Addresses',
      context: 'All-time unique addresses on Ethereum Classic',
    },
    {
      value: fmtCompact(totalBlocks),
      label: 'Total Blocks',
      context: 'Blocks produced since genesis (2015)',
    },
    {
      value: fmtBlockTime(blockTime),
      label: 'Block Time',
      context: 'Average time between blocks',
    },
  ]

  const networkRows: TableRow[] = [
    { label: 'Genesis Date', value: 'July 30, 2015' },
    { label: 'Consensus', value: 'Proof-of-Work (ETChash)' },
    { label: 'Chain ID', value: '61 (mainnet)' },
    { label: 'Total Blocks', value: loading ? '…' : fmtCompact(totalBlocks) },
    { label: 'Total Transactions', value: loading ? '…' : fmtCompact(totalTxns) },
    { label: 'Total Addresses', value: loading ? '…' : fmtCompact(totalAddresses) },
    { label: 'Average Block Time', value: loading ? '…' : fmtBlockTime(blockTime) },
    { label: 'Network Hashrate', value: '200+ TH/s' },
  ]

  const economicsRows: TableRow[] = [
    { label: 'ETC Price', value: loading ? '…' : fmtUSD(price) },
    {
      label: '24h Change',
      value: loading ? '…' : fmtPercent(priceChange),
      color: loading ? undefined : priceChangeColor,
    },
    { label: 'Market Cap', value: loading ? '…' : fmtUSD(marketCap) },
    { label: 'Market Cap Rank', value: '~#55' },
    { label: '24h Volume', value: volume24h ? fmtUSD(volume24h) : '…' },
    { label: 'Circulating Supply', value: '~156.2M ETC' },
    { label: 'Max Supply', value: '210.7M ETC' },
    { label: 'All-Time High', value: '$167.09 (Apr 2021)' },
  ]

  return (
    <>
      {/* ── Live Network Data ──────────────────────────────────────────── */}
      <section className="border-y border-[var(--border-default)] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-[var(--brand-green)]">
                  Overview
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">
                  Ethereum Classic Network
                </h2>
                <p className="mt-2 text-sm text-[var(--text-muted)]">
                  Live network and market data from Blockscout and CoinGecko.
                </p>
              </div>
              {isLive && (
                <span className="flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  Live
                </span>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={50}>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {heroStats.map((s) => (
                <HeroStat key={s.label} {...s} loading={loading} />
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {sectionStats.map((s) => (
                <SectionStat key={s.label} {...s} loading={loading} />
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <OverviewTable heading="Network" rows={networkRows} />
              <OverviewTable heading="Economics" rows={economicsRows} />
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/markets"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--brand-green)] hover:underline"
              >
                View full network stats
                <svg
                  aria-hidden="true"
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a
                href="https://etc.blockscout.com/stats"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
              >
                Data: Blockscout ↗
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Network Architecture ───────────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--brand-green)]">
              Network Architecture
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">
              The Only Proof-of-Work EVM
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--text-muted)]">
              Ethereum Classic is not simply a Proof-of-Work network or simply a smart contract
              platform. It sits at the intersection of both, inheriting the commodity classification
              path that Bitcoin established and the programmable finance frameworks that Ethereum
              established. Bitcoin has PoW without programmability. Ethereum has the EVM without PoW.
              ETC has both — and its regulatory surface is additive, not exclusive.
            </p>
          </FadeIn>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {archColumns.map((col, i) => (
              <FadeIn key={col.heading} delay={i * 80}>
                <div className="h-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green)]/10">
                      <col.icon size={16} aria-hidden="true" className="text-[var(--brand-green)]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">{col.heading}</p>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                        {col.subheading}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {col.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <span
                          className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--brand-green)]"
                          aria-hidden="true"
                        />
                        <p className="text-xs leading-relaxed text-[var(--text-muted)]">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={160}>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              <Link
                href="/why-classic"
                className="text-xs font-medium text-[var(--brand-green)] underline-offset-4 hover:underline"
              >
                Why Ethereum Classic →
              </Link>
              <Link
                href="/regulation"
                className="text-xs font-medium text-[var(--brand-green)] underline-offset-4 hover:underline"
              >
                Regulatory landscape →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
