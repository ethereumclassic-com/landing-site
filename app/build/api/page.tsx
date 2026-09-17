'use client'

import { useState } from 'react'
import Link from 'next/link'

/**
 * Developer reference for reaching Ethereum Classic data.
 *
 * This page used to document a REST API published from this domain — four
 * `ethereumclassic.com/api/*` endpoints with parameter tables, response shapes,
 * copyable cURL commands, and a stated rate-limit policy. All of that is gone,
 * for two reasons found together:
 *
 *  1. TWO OF THE FOUR RETURNED FABRICATED DATA. `/api/price/history` was a
 *     `Math.random()` walk seeded from a hardcoded $25.42 — which is why a chart
 *     drawn from it read ~$24 while the real CoinGecko price on the same screen
 *     read $6.52. `/api/network/blocks` invented block hashes, miner addresses,
 *     gas figures and transaction counts. Both were documented here with `curl`
 *     examples inviting developers to build against them. Both have been deleted.
 *
 *  2. THE RATE-LIMIT SECTION DESCRIBED A POLICY THAT DID NOT EXIST. It promised
 *     100 req/min per IP, `X-RateLimit-*` headers and a 429 on excess. No rate
 *     limiting is implemented anywhere in this codebase; the only `X-RateLimit`
 *     headers were two hardcoded literals inside the fabricated routes, one of
 *     which always reported exactly 99 remaining.
 *
 * The remaining `app/api/*` routes are NOT a public product and are deliberately
 * not documented here. They are this site's own server-side data layer — they
 * proxy Blockscout and CoinGecko so pages get cached, key-free, consistently
 * derived figures. Treating them as a published API is what created the pressure
 * to fill gaps with plausible-looking invented data in the first place.
 *
 * So this page now points at the real upstreams. They are better at it, they are
 * accountable for their own uptime, and nothing here can drift away from them.
 */

/**
 * The public assets, confirmed current for 2025 by the maintainer and each
 * verified live on 2026-08-08 by `eth_blockNumber` (mainnet entries agreed on
 * height 25110663, Mordor on 16735050).
 *
 * `ethercluster.com`, previously listed here as an ETC Cooperative endpoint,
 * has been removed: it went offline in 2020 and now returns NXDOMAIN.
 */
const networks = [
  {
    name: 'Mainnet',
    chainId: '61',
    currency: 'ETC',
    rpc: 'https://etc.blockscout.com/api/eth-rpc',
    explorer: 'https://etc.blockscout.com',
  },
  {
    name: 'Mordor testnet',
    chainId: '63',
    currency: 'METC',
    rpc: 'https://etc-mordor.blockscout.com/api/eth-rpc',
    explorer: 'https://etc-mordor.blockscout.com',
  },
]

const dataSources = [
  {
    name: 'Blockscout',
    href: 'https://etc.blockscout.com/api-docs',
    what: 'Blocks, transactions, addresses, tokens, logs, and chain statistics.',
    use: 'Anything on-chain.',
  },
  {
    name: 'CoinGecko',
    href: 'https://docs.coingecko.com/reference/introduction',
    what: 'Price, market capitalization, volume, and historical market charts.',
    use: 'Anything about the market.',
  },
]

const codeExamples: Record<'javascript' | 'python' | 'curl', string> = {
  javascript: `import { JsonRpcProvider, formatEther } from 'ethers'

const provider = new JsonRpcProvider('https://etc.blockscout.com/api/eth-rpc')

const blockNumber = await provider.getBlockNumber()
const balance = await provider.getBalance('0x...')

console.log(blockNumber, formatEther(balance))`,
  python: `from web3 import Web3

w3 = Web3(Web3.HTTPProvider('https://etc.blockscout.com/api/eth-rpc'))

print(w3.eth.block_number)
print(w3.from_wei(w3.eth.get_balance('0x...'), 'ether'))`,
  curl: `curl -X POST https://etc.blockscout.com/api/eth-rpc \\
  -H 'Content-Type: application/json' \\
  --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'`,
}

export default function ApiDocsPage() {
  const [selectedLang, setSelectedLang] = useState<'javascript' | 'python' | 'curl'>('javascript')
  const [copied, setCopied] = useState<string | null>(null)

  const copy = async (text: string, key: string) => {
    await navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <main className="min-h-screen bg-[var(--bg)]">
      {/* Hero */}
      <section className="hero-gradient-light noise-overlay grid-overlay relative overflow-hidden border-b border-[var(--border)] px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm text-[var(--color-primary)]">
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
              Developer Reference
            </div>
            <h1 className="mb-4 text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Connecting to Ethereum Classic
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-[var(--color-text-secondary)]">
              ETC is EVM-native, so standard Ethereum tooling works unchanged —
              point it at an ETC RPC endpoint. Below are the current mainnet and
              Mordor endpoints, and the APIs to read chain and market data from.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Quick Start */}
        <section className="mb-16">
          <h2 className="mb-2 text-2xl font-bold text-[var(--text-primary)]">Quick start</h2>
          <p className="mb-6 text-[var(--color-text-secondary)]">
            Mainnet is chain ID{' '}
            <code className="rounded bg-[var(--panel)] px-1.5 py-0.5 font-mono text-sm text-[var(--color-primary)]">61</code>,
            Mordor is{' '}
            <code className="rounded bg-[var(--panel)] px-1.5 py-0.5 font-mono text-sm text-[var(--color-primary)]">63</code>.
            No ETC-specific client library is needed.
          </p>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6">
            <div className="mb-4 flex gap-2">
              {(['javascript', 'python', 'curl'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLang(lang)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    selectedLang === lang
                      ? 'bg-[var(--color-primary)] text-[var(--background)]'
                      : 'bg-[var(--bg)] text-[var(--color-text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {lang === 'javascript' ? 'ethers.js' : lang === 'python' ? 'web3.py' : 'cURL'}
                </button>
              ))}
            </div>
            <pre className="overflow-x-auto rounded-lg bg-[var(--bg)] p-4 text-sm">
              <code className="text-[var(--color-text-secondary)]">{codeExamples[selectedLang]}</code>
            </pre>
          </div>
        </section>

        {/* Networks: RPC + explorer, side by side */}
        <section className="mb-16">
          <h2 className="mb-2 text-2xl font-bold text-[var(--text-primary)]">Networks</h2>
          <p className="mb-6 max-w-3xl text-[var(--color-text-secondary)]">
            These RPC endpoints are operated by third parties, not by this site.
            Rate limits and uptime are theirs and can change without notice — for
            anything in production, run your own node or use a provider you have an
            agreement with.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {networks.map((n) => (
              <div key={n.name} className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
                <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-semibold text-[var(--text-primary)]">{n.name}</h3>
                  <span className="font-mono text-xs text-[var(--color-text-muted)]">
                    chain {n.chainId} · {n.currency}
                  </span>
                </div>

                {[
                  { label: 'RPC', value: n.rpc, href: null },
                  { label: 'Explorer', value: n.explorer, href: n.explorer },
                ].map((row) => (
                  <div key={row.label} className="mb-3 last:mb-0">
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                        {row.label}
                      </span>
                      <button
                        onClick={() => copy(row.value, `${n.name}-${row.label}`)}
                        className="ml-auto rounded border border-[var(--border)] px-2 py-0.5 text-[11px] text-[var(--color-text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                      >
                        {copied === `${n.name}-${row.label}` ? 'Copied' : 'Copy'}
                      </button>
                    </div>
                    {row.href ? (
                      <a
                        href={row.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block overflow-x-auto rounded bg-[var(--bg)] px-3 py-2 font-mono text-xs text-[var(--color-primary)] hover:underline"
                      >
                        {row.value}
                      </a>
                    ) : (
                      <code className="block overflow-x-auto rounded bg-[var(--bg)] px-3 py-2 text-xs text-[var(--color-primary)]">
                        {row.value}
                      </code>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Data sources */}
        <section className="mb-16">
          <h2 className="mb-2 text-2xl font-bold text-[var(--text-primary)]">Chain and market data</h2>
          <p className="mb-6 max-w-3xl text-[var(--color-text-secondary)]">
            This site does not publish a data API. It reads from the two sources
            below, and so should you — they are authoritative, they are versioned,
            and going direct means no intermediary can drift out of sync with them.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {dataSources.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 transition-colors hover:border-[var(--color-primary)]/30"
              >
                <h3 className="mb-2 font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-primary)]">
                  {s.name}
                </h3>
                <p className="mb-2 text-sm text-[var(--color-text-secondary)]">{s.what}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{s.use}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Additional Resources */}
        <section>
          <h2 className="mb-6 text-2xl font-bold text-[var(--text-primary)]">More for developers</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/build/networks"
              className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 transition-colors hover:border-[var(--color-primary)]/30"
            >
              <h3 className="mb-2 font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-primary)]">
                Networks
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Chain IDs, currency symbols, and explorer URLs for mainnet and testnets.
              </p>
            </Link>
            <Link
              href="/build/clients"
              className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 transition-colors hover:border-[var(--color-primary)]/30"
            >
              <h3 className="mb-2 font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-primary)]">
                Run a node
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Client implementations, so you can serve your own RPC rather than depend on a public one.
              </p>
            </Link>
            <Link
              href="/build/tools"
              className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 transition-colors hover:border-[var(--color-primary)]/30"
            >
              <h3 className="mb-2 font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-primary)]">
                Developer tools
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                SDKs, libraries, and tooling for building on Ethereum Classic.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
