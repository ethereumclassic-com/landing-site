'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { exchanges } from '../../buy/data/exchanges'

const ExternalLinkIcon = () => (
  <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
)

// Beginner-friendly exchanges criteria:
// - Featured (established, trusted)
// - Has card/bank payment methods (easy fiat on-ramp)
// - Has description (we have info about them)
const beginnerFriendlyNames = ['Coinbase', 'Kraken', 'Crypto.com', 'Bitstamp', 'Gemini', 'Binance', 'KuCoin']

export default function BeginnersExchangesPage() {
  // Filter beginner-friendly exchanges
  const beginnerExchanges = useMemo(() => {
    return exchanges.filter((ex) => beginnerFriendlyNames.includes(ex.name))
  }, [])

  // Separate by region availability
  const usAvailable = beginnerExchanges.filter((ex) => ex.regions.includes('US'))
  const globalOnly = beginnerExchanges.filter((ex) => !ex.regions.includes('US'))

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Breadcrumbs */}
      <div className="border-b border-[var(--border)] bg-[var(--panel)]">
        <div className="mx-auto max-w-6xl px-6 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-[var(--color-text-muted)] hover:text-[var(--text-primary)]">
              Home
            </Link>
            <span className="text-[var(--color-text-muted)]">/</span>
            <Link href="/exchanges" className="text-[var(--color-text-muted)] hover:text-[var(--text-primary)]">
              Exchanges
            </Link>
            <span className="text-[var(--color-text-muted)]">/</span>
            <span className="text-[var(--text-primary)]">Beginners</span>
          </nav>
        </div>
      </div>

      <div className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div
            className="mb-12"
          >
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-sm font-medium text-[var(--color-primary)]">
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
                Getting Started
              </span>
            </div>
            <h1 className="text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Best Exchanges for Beginners
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
              New to crypto? These exchanges are trusted, easy to use, and offer simple ways to buy your first ETC with a credit card or bank transfer.
            </p>
          </div>

          {/* What Makes Beginner Friendly */}
          <div
            className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              { icon: 'M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122', title: 'Simple Interface', desc: 'Clean, intuitive design' },
              { icon: 'M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z', title: 'Easy Deposits', desc: 'Card & bank transfers' },
              { icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z', title: 'Established', desc: 'Years of operation' },
              { icon: 'M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z', title: 'Support', desc: 'Help when you need it' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="font-semibold text-[var(--text-primary)]">{item.title}</h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Getting Started Steps */}
          <div
            className="mb-12 rounded-xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 p-6"
          >
            <h2 className="mb-4 text-xl font-bold text-[var(--text-primary)]">How to Buy Your First ETC</h2>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-black">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-[var(--text-primary)]">Create Account</h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">Sign up with email and verify your identity</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-black">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-[var(--text-primary)]">Add Payment</h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">Link your credit card or bank account</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-black">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-[var(--text-primary)]">Buy ETC</h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">Search for Ethereum Classic and purchase</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-black">
                  4
                </div>
                <div>
                  <h3 className="font-medium text-[var(--text-primary)]">Secure It</h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">Consider a personal wallet for storage</p>
                </div>
              </div>
            </div>
          </div>

          {/* US Available */}
          {usAvailable.length > 0 && (
            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-[var(--text-primary)]">
                Available in the US
                <span className="ml-2 text-sm font-normal text-[var(--color-text-muted)]">
                  {usAvailable.length} exchanges
                </span>
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {usAvailable.map((exchange) => (
                  <a
                    key={exchange.name}
                    href={exchange.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 transition-all hover:border-[var(--color-primary)]/30"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-primary)]">
                          {exchange.name}
                        </h3>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {exchange.featured && (
                            <span className="inline-block rounded bg-[var(--color-primary)]/10 px-2 py-0.5 text-xs text-[var(--color-primary)]">
                              Featured
                            </span>
                          )}
                          <span className="inline-block rounded bg-green-500/10 px-2 py-0.5 text-xs text-green-400">
                            Beginner Friendly
                          </span>
                        </div>
                      </div>
                      <ExternalLinkIcon />
                    </div>
                    {exchange.description && (
                      <p className="mt-3 text-sm text-[var(--color-text-muted)]">
                        {exchange.description}
                      </p>
                    )}
                    <div className="mt-4">
                      <p className="mb-2 text-xs font-medium text-[var(--color-text-muted)]">Payment Methods</p>
                      <div className="flex flex-wrap gap-1">
                        {exchange.paymentMethods?.map((method) => (
                          <span key={method} className="rounded bg-[var(--bg)] px-2 py-0.5 text-xs text-[var(--color-text-secondary)]">
                            {method}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-sm">
                      {exchange.tradingFee && (
                        <span className="text-[var(--color-text-muted)]">
                          Fee: <span className="text-[var(--text-primary)]">{exchange.tradingFee}</span>
                        </span>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* Global Exchanges */}
          {globalOnly.length > 0 && (
            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-[var(--text-primary)]">
                Global Exchanges
                <span className="ml-2 text-sm font-normal text-[var(--color-text-muted)]">
                  {globalOnly.length} exchanges
                </span>
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {globalOnly.map((exchange) => (
                  <a
                    key={exchange.name}
                    href={exchange.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 transition-all hover:border-[var(--color-primary)]/30"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-primary)]">
                          {exchange.name}
                        </h3>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {exchange.featured && (
                            <span className="inline-block rounded bg-[var(--color-primary)]/10 px-2 py-0.5 text-xs text-[var(--color-primary)]">
                              Featured
                            </span>
                          )}
                          <span className="inline-block rounded bg-green-500/10 px-2 py-0.5 text-xs text-green-400">
                            Beginner Friendly
                          </span>
                        </div>
                      </div>
                      <ExternalLinkIcon />
                    </div>
                    {exchange.description && (
                      <p className="mt-3 text-sm text-[var(--color-text-muted)]">
                        {exchange.description}
                      </p>
                    )}
                    <div className="mt-4">
                      <p className="mb-2 text-xs font-medium text-[var(--color-text-muted)]">Payment Methods</p>
                      <div className="flex flex-wrap gap-1">
                        {exchange.paymentMethods?.map((method) => (
                          <span key={method} className="rounded bg-[var(--bg)] px-2 py-0.5 text-xs text-[var(--color-text-secondary)]">
                            {method}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-sm">
                      {exchange.tradingFee && (
                        <span className="text-[var(--color-text-muted)]">
                          Fee: <span className="text-[var(--text-primary)]">{exchange.tradingFee}</span>
                        </span>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* Tips for Beginners */}
          <div
            className="mb-12 rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h2 className="mb-4 text-xl font-bold text-[var(--text-primary)]">Tips for New Crypto Investors</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <svg aria-hidden="true" className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-medium text-[var(--text-primary)]">Start Small</h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">Only invest what you can afford to lose. Start with a small amount to learn how everything works.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg aria-hidden="true" className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-medium text-[var(--text-primary)]">Enable 2FA</h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">Always enable two-factor authentication on your exchange account for extra security.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg aria-hidden="true" className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-medium text-[var(--text-primary)]">Learn About Wallets</h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">For long-term holding, consider moving ETC to a personal wallet where you control the keys.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg aria-hidden="true" className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-medium text-[var(--text-primary)]">Beware of Scams</h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">Never share your password or seed phrase. No legitimate service will ever ask for these.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ready for More */}
          <div
            className="mb-12 rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6 text-center"
          >
            <h2 className="mb-2 text-xl font-bold text-[var(--text-primary)]">Ready for Advanced Options?</h2>
            <p className="mb-4 text-[var(--color-text-secondary)]">
              Once you&apos;re comfortable, explore DEXs for self-custody trading or find the lowest fee exchanges.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/exchanges/decentralized"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition-all hover:border-[var(--color-primary)]/30"
              >
                Explore DEXs
              </Link>
              <Link
                href="/exchanges/lowest-fees"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition-all hover:border-[var(--color-primary)]/30"
              >
                Compare Fees
              </Link>
              <Link
                href="/wallets"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition-all hover:border-[var(--color-primary)]/30"
              >
                Get a Wallet
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div
            className="text-center"
          >
            <Link
              href="/exchanges"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--background)] transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
            >
              View All Exchanges
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
