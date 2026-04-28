'use client'

import Link from 'next/link'

const fundFacts = [
  { label: 'Ticker', value: 'ETCG' },
  { label: 'Market', value: 'OTCQX Best Market' },
  { label: 'Inception', value: 'May 10, 2018' },
  { label: 'ETC per Share', value: '0.785' },
  { label: 'Shares Outstanding', value: '13,993,800' },
  { label: 'Custodian', value: 'Coinbase Custody' },
  { label: 'Sponsor', value: 'Grayscale Investments' },
  { label: 'SEC Filing', value: '10-K annually, 10-Q quarterly' },
]

const brokerages = [
  { name: 'Charles Schwab', tag: 'IRA · Taxable', href: 'https://www.schwab.com' },
  { name: 'Fidelity Investments', tag: 'IRA · Taxable', href: 'https://www.fidelity.com' },
  { name: 'Interactive Brokers', tag: 'IRA · Taxable', href: 'https://www.interactivebrokers.com' },
  { name: 'E*Trade (Morgan Stanley)', tag: 'IRA · Taxable', href: 'https://us.etrade.com' },
  { name: 'Webull', tag: 'Taxable · Commission-free', href: 'https://www.webull.com' },
  { name: 'OTC Markets Group', tag: 'Direct · OTCQX', href: 'https://www.otcmarkets.com/stock/ETCG/company-info' },
]

const dataProviders = [
  { label: 'Yahoo Finance', ticker: 'ETCG', href: 'https://finance.yahoo.com/quote/ETCG' },
  { label: 'Bloomberg', ticker: 'ETCG:US', href: 'https://www.bloomberg.com/quote/ETCG:US' },
  { label: 'Seeking Alpha', ticker: 'ETCG', href: 'https://seekingalpha.com/symbol/ETCG' },
  { label: 'CNBC', ticker: 'ETCG', href: 'https://www.cnbc.com/quotes/ETCG' },
]

const thesisPoints = [
  {
    number: '01',
    title: 'Regulatory Clarity',
    body: 'ETC inherits the commodity classification path that Proof-of-Work networks established and the programmable finance frameworks being built around smart contract platforms. Its regulatory surface spans both trajectories: digital commodity candidate (CLARITY Act), decentralized asset (MiCA), stablecoin platform (GENIUS Act).',
  },
  {
    number: '02',
    title: 'Olympia Upgrade',
    body: 'EIP-1559 fee market redirects basefee to a protocol-managed treasury for the first time on ETC. On-chain DAO governance controls resource allocation. First programmable monetary policy on a Proof-of-Work EVM.',
  },
  {
    number: '03',
    title: 'Regulated Stablecoin Infrastructure',
    body: <>Classic USD ($USC) is live on ETC mainnet, the first GENIUS Act-aligned stablecoin on a Proof-of-Work EVM. Issued by Brale Inc. (NMLS #2376957), 1:1 USD backed, integrated with <a href="https://etcswap.org" target="_blank" rel="noopener noreferrer" className="text-[var(--brand-green)] transition-opacity hover:opacity-80">ETCswap</a> V2/V3.</>,
  },
  {
    number: '04',
    title: 'Proven Track Record',
    body: 'The original Ethereum Virtual Machine, running continuously since July 2015. Zero protocol-level failures. Immutable ledger. The longest continuously operating smart contract platform in production.',
  },
  {
    number: '05',
    title: 'Deepest PoW Smart Contract Liquidity',
    body: '300+ exchanges, 11 fiat currency pairs, accessible GPU mining hardware at retail, and institutional ASIC infrastructure. The only Proof-of-Work network with native smart contract capability at this depth of market access.',
  },
]

export default function InvestmentProductsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-warning)]/8 blur-[100px]" />
        </div>

        <div
          className="relative mx-auto max-w-4xl text-center"
        >
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-warning-border)] bg-[var(--color-warning-bg)] px-4 py-1.5 text-sm font-medium text-[var(--color-warning)]">
              Institutional Products
            </span>
          </div>

          <h1
            className="text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl lg:text-6xl"
          >
            Institutional Investment Products
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]"
          >
            Regulated securities exposure to Ethereum Classic through established TradFi channels,
            no self-custody required. Available at the same brokerages used for stocks and bonds.
          </p>
        </div>
      </section>

      {/* ETCG Trust */}
      <section className="border-t border-[var(--border)] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
          >
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-warning)]">
                Regulated Securities Exposure
              </span>
            </div>
            <h2 className="mt-3 text-2xl font-bold text-[var(--text-primary)]">
              Grayscale Ethereum Classic Trust
            </h2>
            <p className="mt-2 text-[var(--color-text-muted)]">
              ETCG · OTCQX Best Market · Established May 10, 2018
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {/* Fund facts */}
              <div
                className="rounded-xl border border-[var(--color-warning-border)] bg-[var(--color-warning)]/5 p-6"
              >
                <p className="mb-4 text-sm font-semibold text-[var(--text-primary)]">Fund Facts</p>
                <div className="space-y-2.5">
                  {fundFacts.map((fact) => (
                    <div key={fact.label} className="flex justify-between text-xs">
                      <span className="text-[var(--color-text-muted)]">{fact.label}</span>
                      <span className="text-[var(--text-primary)]">{fact.value}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="https://grayscale.com/funds/grayscale-ethereum-classic-trust"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block text-xs font-medium text-[var(--color-warning)] transition hover:text-[var(--color-warning)]/80"
                >
                  grayscale.com →
                </a>
              </div>

              {/* How it trades */}
              <div className="flex flex-col gap-4">
                {[
                  {
                    title: 'Structure',
                    description:
                      'Grantor trust, not a registered investment company. ETC flows directly as trust assets. Tax treatment passes through to shareholders. SEC filer: 10-K annually, 10-Q quarterly.',
                  },
                  {
                    title: 'Custody',
                    description:
                      'Coinbase Custody Trust Company, LLC. Institutional-grade cold storage, insured. One of the largest digital asset custodians by AUM globally.',
                  },
                  {
                    title: 'Premium / Discount',
                    description:
                      'ETCG trades on OTCQX without an active redemption program. Share price deviates from NAV. Historical max premium: 458%. No active redemption mechanism.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4"
                  >
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{item.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--color-text-muted)]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TradFi Access */}
      <section className="border-y border-[var(--border)] bg-[var(--panel)] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
          >
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--color-warning)]">
              Brokerage Access
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[var(--text-primary)]">
              ETC in Traditional Finance
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-[var(--color-text-muted)]">
              ETCG is an OTCQX-listed grantor trust. Search the ticker at your existing brokerage — it trades alongside equities and ETFs. IRA-eligible at major full-service platforms.
            </p>

            {/* Brokerage grid */}
            <div
              className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3"
            >
              {brokerages.map((b) => (
                <a
                  key={b.name}
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-4 transition-colors hover:border-[var(--color-warning-border)]"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{b.name}</p>
                    <span className="shrink-0 font-mono text-[10px] text-[var(--color-text-muted)] transition-colors group-hover:text-[var(--color-warning)]">↗</span>
                  </div>
                  <p className="mt-1.5 font-mono text-[10px] uppercase tracking-wide text-[var(--color-warning)]/70">{b.tag}</p>
                </a>
              ))}
            </div>

            {/* Data providers strip */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[var(--border)] pt-6">
              <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-muted)]">
                Track on
              </span>
              {dataProviders.map((p) => (
                <span key={p.label} className="text-sm text-[var(--color-text-muted)]">
                  {p.label}{' '}
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono font-semibold text-[var(--color-warning)] transition-opacity hover:opacity-70"
                  >
                    {p.ticker}
                  </a>
                </span>
              ))}
              <span className="ml-auto text-xs italic text-[var(--color-text-muted)] opacity-60">
                OTC security. Not investment advice.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">
              The ETC Investment Case
            </h2>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Five structural properties that distinguish Ethereum Classic in the 2025–2026
              institutional digital asset landscape.
            </p>

            <div className="mt-8 space-y-4">
              {thesisPoints.map((point) => (
                <div
                  key={point.number}
                  className="flex gap-5 rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5"
                >
                  <span className="shrink-0 font-mono text-lg font-bold text-[var(--color-warning)]/40">
                    {point.number}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{point.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-text-muted)]">
                      {point.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/regulation"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand-green)] px-6 py-3 font-medium text-black transition-all hover:bg-[var(--brand-green)]/90"
              >
                Regulatory Framework
              </Link>
              <Link
                href="/olympia"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-all hover:border-[var(--border-brand)]"
              >
                Olympia Upgrade
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
