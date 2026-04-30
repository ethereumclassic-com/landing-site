import type { Metadata } from 'next'
import Link from 'next/link'
import { FadeIn } from '@/app/components/ui/FadeIn'
import { ETH_ICO, ETH_ICO_ROI, ETH_ICO_TOKENOMICS } from '@/app/research/data/ethereumIco'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Ethereum 2014 ICO | ETC Research',
  description:
    'Complete data on the Ethereum 2014 presale: $18.5M raised, 72,009,991 ETH issued at $0.308 — the original Ethereum genesis supply, carried today by Ethereum Classic.',
  keywords: [
    'Ethereum ICO',
    'ETH presale 2014',
    'ETC genesis supply',
    'ETC 72 million',
    'DAO fork genesis',
    'Ethereum crowdsale',
  ],
}

const META_ROWS = [
  { label: 'Token Name', value: ETH_ICO.tokenName },
  { label: 'Ticker', value: ETH_ICO.ticker },
  { label: 'Price at ICO', value: ETH_ICO.priceAtIco },
  { label: 'Status', value: ETH_ICO.status },
  { label: 'Target', value: ETH_ICO.target },
  { label: 'Funds Raised', value: ETH_ICO.fundsRaised },
  { label: 'ICO Token Supply', value: ETH_ICO.icoTokenSupply.toLocaleString() },
  { label: 'Funding Cap', value: ETH_ICO.fundingCap },
  { label: 'Token Role', value: ETH_ICO.tokenRole },
  { label: 'Token Type', value: ETH_ICO.tokenType },
  { label: 'Token Supply After ICO', value: ETH_ICO.tokenSupplyAfterIco },
] as const

const ORIGIN_EVENTS = [
  {
    title: 'Ethereum 2014 ICO',
    date: 'Jul–Sep 2014',
    description: '42-day public presale raises $18.5 million at $0.308 per token, minting 72,009,991 ETH — the entire initial supply. 83.33% goes to crowdsale participants and 16.67% to the Ethereum Foundation and early contributors.',
    tags: ['72,009,991 ETH minted', '$0.308 per token', '$18.5M raised', '83.33% / 16.67% split'],
  },
  {
    title: 'Ethereum Mainnet Launch',
    date: 'Jul 30, 2015',
    description: 'The Frontier genesis block. All 72,009,991 ICO tokens activate on the live chain.',
    tags: ['Frontier genesis', '72,009,991-token initial supply'],
  },
] as const

export default function EthereumIcoPage() {
  return (
    <main className="hero-gradient noise-overlay grid-overlay relative min-h-screen overflow-hidden pb-16 pt-12">

      {/* Hero */}
      <FadeIn>
        <section className="px-6 pb-8 pt-4 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <Link
              href="/research"
              className="mb-6 inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Research
            </Link>
            <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl">
              Ethereum 2014 ICO
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-[var(--text-secondary)]">
              The public presale that funded the original Ethereum chain — whose genesis supply Ethereum Classic carries today.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full border border-[var(--border-default)] bg-[var(--bg-elevated)] px-3 py-1 text-xs font-medium text-[var(--text-muted)]">
                Finished · {ETH_ICO.date}
              </span>
              <span className="inline-flex items-center rounded-full border border-[var(--brand-green)]/30 bg-[var(--brand-green)]/10 px-3 py-1 text-xs font-medium text-[var(--brand-green)]">
                {ETH_ICO.fundsRaised} Raised
              </span>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ICO Metadata */}
      <FadeIn delay={50}>
        <section className="px-6 pb-8 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6">
              <h2 className="mb-5 text-lg font-semibold text-[var(--text-primary)]">ICO Details</h2>
              <div className="grid gap-x-12 gap-y-0 sm:grid-cols-2">
                {META_ROWS.map((row) => (
                  <div key={row.label} className="flex items-center justify-between border-b border-[var(--border-subtle)] py-2.5 last:border-0 sm:[&:nth-last-child(2)]:border-0">
                    <span className="text-sm text-[var(--text-muted)]">{row.label}</span>
                    <span className="text-sm font-medium text-[var(--text-primary)]">{row.value}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 rounded-lg border border-[var(--brand-green)]/20 bg-[var(--brand-green)]/5 p-3 text-sm text-[var(--text-muted)]">
                The {ETH_ICO.icoTokenSupply.toLocaleString()} tokens issued here are the{' '}
                <span className="font-medium text-[var(--text-primary)]">original Ethereum genesis supply</span>.
                In 2016, the Ethereum Foundation forked the chain and applied the ETH name and ticker to the new chain.
                The original chain — carrying this supply unaltered — was recognised by the global community as Ethereum Classic.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ROI */}
      <FadeIn delay={80}>
        <section className="px-6 pb-8 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6">
              <h2 className="mb-5 text-lg font-semibold text-[var(--text-primary)]">ETH ICO ROI</h2>
              <div className="grid gap-3 sm:grid-cols-3">
                {ETH_ICO_ROI.map((entry) => (
                  <div
                    key={entry.label}
                    className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-4"
                  >
                    <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">{entry.label}</p>
                    <p className="mt-0.5 text-xs text-[var(--text-muted)]">{entry.date}</p>
                    <p className="mt-2 font-mono text-2xl font-bold text-[var(--brand-green)]">{entry.multiplier}</p>
                    <p className="mt-0.5 text-sm text-[var(--text-secondary)]">$100 → {entry.per100}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-[var(--text-muted)]">
                ROI calculated from {ETH_ICO.priceAtIco} ICO price. ETH price data; does not reflect ETC trading prices after the 2016 fork.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Tokenomics */}
      <FadeIn delay={100}>
        <section className="px-6 pb-8 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6">
              <h2 className="mb-5 text-lg font-semibold text-[var(--text-primary)]">Token Distribution</h2>
              {/* Stacked bar */}
              <div className="flex h-5 overflow-hidden rounded-full">
                {ETH_ICO_TOKENOMICS.map((seg) => (
                  <div
                    key={seg.label}
                    style={{ width: `${seg.pct}%`, backgroundColor: seg.color, opacity: seg.pct > 50 ? 1 : 0.4 }}
                  />
                ))}
              </div>
              {/* Legend */}
              <div className="mt-4 space-y-2">
                {ETH_ICO_TOKENOMICS.map((seg) => (
                  <div key={seg.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="h-3 w-3 rounded-sm"
                        style={{ backgroundColor: seg.color, opacity: seg.pct > 50 ? 1 : 0.4 }}
                      />
                      <span className="text-sm text-[var(--text-muted)]">{seg.label}</span>
                    </div>
                    <span className="font-mono text-sm font-semibold text-[var(--text-primary)]">{seg.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Origin timeline — 2 events */}
      <FadeIn delay={110}>
        <section className="px-6 pb-4 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-5 text-lg font-semibold text-[var(--text-primary)]">ICO Origin</h2>
            <div className="relative">
              <div className="absolute bottom-2 left-[15px] top-2 w-px bg-gradient-to-b from-[var(--brand-green)]/60 to-[var(--border-subtle)]" />
              <div className="space-y-3">
                {ORIGIN_EVENTS.map((event) => (
                  <div key={event.title} className="relative pl-10">
                    <div className="absolute left-[9px] top-[18px] h-3 w-3 rounded-full bg-[var(--brand-green)]" />
                    <div className="rounded-xl border border-[var(--brand-green)]/20 bg-[var(--brand-green)]/5 p-4">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <h3 className="text-sm font-semibold text-[var(--text-primary)]">{event.title}</h3>
                        <span className="shrink-0 font-mono text-[10px] text-[var(--text-muted)]">{event.date}</span>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)]">{event.description}</p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {event.tags.map((tag) => (
                          <span key={tag} className="rounded border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-2 py-0.5 text-[10px] text-[var(--text-muted)]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Bridge callout → dao-fork */}
      <FadeIn delay={130}>
        <section className="px-6 pb-8 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <Link
              href="/research/dao-fork"
              className="group flex items-center justify-between rounded-xl border border-[var(--brand-green)]/30 bg-[var(--brand-green)]/5 p-5 transition-colors hover:border-[var(--brand-green)]/50 hover:bg-[var(--brand-green)]/8"
            >
              <div>
                <p className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--brand-green)]">
                  The 2016 DAO Fork — How Ethereum Classic Got Its Name
                </p>
                <p className="mt-0.5 text-sm text-[var(--text-muted)]">
                  How the Ethereum Foundation created a new chain and applied the ETH ticker to it — and the original chain survived
                </p>
              </div>
              <svg className="ml-4 h-5 w-5 shrink-0 text-[var(--text-muted)] transition-colors group-hover:text-[var(--brand-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </section>
      </FadeIn>

      {/* Related */}
      <FadeIn delay={140}>
        <section className="px-6 pb-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-lg font-semibold text-[var(--text-primary)]">Related</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/research/dao-fork"
                className="group rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 transition-colors hover:border-[var(--brand-green)]/40 hover:bg-[var(--brand-green)]/5"
              >
                <p className="font-medium text-[var(--text-primary)] group-hover:text-[var(--brand-green)]">2016 DAO Fork</p>
                <p className="mt-0.5 text-xs text-[var(--text-muted)]">How the original Ethereum chain became known as Ethereum Classic</p>
              </Link>
              <Link
                href="/research/emission-schedule"
                className="group rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 transition-colors hover:border-[var(--brand-green)]/40 hover:bg-[var(--brand-green)]/5"
              >
                <p className="font-medium text-[var(--text-primary)] group-hover:text-[var(--brand-green)]">Emission Schedule</p>
                <p className="mt-0.5 text-xs text-[var(--text-muted)]">ECIP-1017 era charts and supply data</p>
              </Link>
              <Link
                href="/block-reward-countdown"
                className="group rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 transition-colors hover:border-[var(--brand-green)]/40 hover:bg-[var(--brand-green)]/5"
              >
                <p className="font-medium text-[var(--text-primary)] group-hover:text-[var(--brand-green)]">Block Reward Countdown</p>
                <p className="mt-0.5 text-xs text-[var(--text-muted)]">Live countdown to the next fifthing</p>
              </Link>
              <a
                href="https://ecips.ethereumclassic.org/ECIPs/ecip-1017"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 transition-colors hover:border-[var(--brand-green)]/40 hover:bg-[var(--brand-green)]/5"
              >
                <p className="font-medium text-[var(--text-primary)] group-hover:text-[var(--brand-green)]">ECIP-1017 Specification</p>
                <p className="mt-0.5 text-xs text-[var(--text-muted)]">The ETC monetary policy proposal</p>
              </a>
            </div>
          </div>
        </section>
      </FadeIn>

    </main>
  )
}
