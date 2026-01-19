'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { exchanges } from '../../buy/data/exchanges'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const ExternalLinkIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
)

export default function USFriendlyExchangesPage() {
  // Filter US-friendly exchanges
  const usExchanges = useMemo(() => {
    return exchanges.filter((ex) => ex.regions.includes('US'))
  }, [])

  // Separate regulated (KYC) from others
  const regulatedExchanges = usExchanges.filter((ex) => ex.kycRequired === true)
  const otherUsExchanges = usExchanges.filter((ex) => ex.kycRequired !== true)

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Breadcrumbs */}
      <div className="border-b border-[var(--border)] bg-[var(--panel)]">
        <div className="mx-auto max-w-6xl px-6 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-[var(--color-text-muted)] hover:text-white">
              Home
            </Link>
            <span className="text-[var(--color-text-muted)]">/</span>
            <Link href="/exchanges" className="text-[var(--color-text-muted)] hover:text-white">
              Exchanges
            </Link>
            <span className="text-[var(--color-text-muted)]">/</span>
            <span className="text-white">US-Friendly</span>
          </nav>
        </div>
      </div>

      <div className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mb-12"
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-sm font-medium text-[var(--color-primary)]">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
                United States
              </span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl font-bold text-white md:text-5xl">
              US-Friendly Exchanges
            </motion.h1>
            <motion.p variants={fadeInUp} className="mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
              Exchanges that support US customers and comply with US regulations. These platforms offer fiat on-ramps and regulated trading services.
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12 grid gap-4 sm:grid-cols-3"
          >
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 text-center">
              <p className="text-2xl font-bold text-white">{usExchanges.length}</p>
              <p className="text-sm text-[var(--color-text-muted)]">US-Friendly Exchanges</p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 text-center">
              <p className="text-2xl font-bold text-white">{regulatedExchanges.length}</p>
              <p className="text-sm text-[var(--color-text-muted)]">Regulated Platforms</p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 text-center">
              <p className="text-2xl font-bold text-[var(--color-primary)]">USD</p>
              <p className="text-sm text-[var(--color-text-muted)]">Direct Fiat Trading</p>
            </div>
          </motion.div>

          {/* Compliance Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12 rounded-xl border border-blue-500/30 bg-blue-500/10 p-5"
          >
            <div className="flex items-start gap-3">
              <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <div>
                <h3 className="font-semibold text-white">US Regulatory Compliance</h3>
                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                  These exchanges are registered with FinCEN and comply with US regulations. They require KYC (Know Your Customer) verification but offer FDIC-insured USD deposits and robust consumer protections.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Regulated Exchanges */}
          {regulatedExchanges.length > 0 && (
            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-white">
                Regulated US Exchanges
                <span className="ml-2 text-sm font-normal text-[var(--color-text-muted)]">
                  {regulatedExchanges.length} platforms
                </span>
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {regulatedExchanges.map((exchange) => (
                  <motion.a
                    key={exchange.name}
                    href={exchange.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 transition-all hover:border-[var(--color-primary)]/30"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-white group-hover:text-[var(--color-primary)]">
                          {exchange.name}
                        </h3>
                        <div className="mt-1 flex items-center gap-2">
                          {exchange.featured && (
                            <span className="inline-block rounded bg-[var(--color-primary)]/10 px-2 py-0.5 text-xs text-[var(--color-primary)]">
                              Featured
                            </span>
                          )}
                          <span className="inline-block rounded bg-blue-500/10 px-2 py-0.5 text-xs text-blue-400">
                            Regulated
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
                    <div className="mt-4 flex flex-wrap gap-1">
                      {exchange.pairs.slice(0, 4).map((pair) => (
                        <span key={pair} className="rounded bg-[var(--bg)] px-2 py-0.5 text-xs text-[var(--color-text-secondary)]">
                          {pair}
                        </span>
                      ))}
                      {exchange.pairs.length > 4 && (
                        <span className="rounded bg-[var(--bg)] px-2 py-0.5 text-xs text-[var(--color-text-muted)]">
                          +{exchange.pairs.length - 4} more
                        </span>
                      )}
                    </div>
                    <div className="mt-3 flex items-center justify-between text-sm">
                      {exchange.tradingFee && (
                        <span className="text-[var(--color-text-muted)]">
                          Fee: <span className="text-white">{exchange.tradingFee}</span>
                        </span>
                      )}
                      {exchange.volume24h && (
                        <span className="text-[var(--color-text-muted)]">
                          Vol: <span className="text-white">{exchange.volume24h}</span>
                        </span>
                      )}
                    </div>
                  </motion.a>
                ))}
              </div>
            </section>
          )}

          {/* Other US-Available Exchanges */}
          {otherUsExchanges.length > 0 && (
            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-white">
                Other US-Available Options
                <span className="ml-2 text-sm font-normal text-[var(--color-text-muted)]">
                  {otherUsExchanges.length} platforms
                </span>
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {otherUsExchanges.map((exchange) => (
                  <motion.a
                    key={exchange.name}
                    href={exchange.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 transition-all hover:border-[var(--color-primary)]/30"
                  >
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold text-white group-hover:text-[var(--color-primary)]">
                        {exchange.name}
                      </h3>
                      <ExternalLinkIcon />
                    </div>
                    <div className="mt-4 flex flex-wrap gap-1">
                      {exchange.pairs.map((pair) => (
                        <span key={pair} className="rounded bg-[var(--bg)] px-2 py-0.5 text-xs text-[var(--color-text-secondary)]">
                          {pair}
                        </span>
                      ))}
                    </div>
                    {exchange.tradingFee && (
                      <p className="mt-3 text-sm text-[var(--color-text-muted)]">
                        Trading fee: <span className="text-white">{exchange.tradingFee}</span>
                      </p>
                    )}
                  </motion.a>
                ))}
              </div>
            </section>
          )}

          {/* Why Choose US Exchanges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h2 className="mb-4 text-xl font-bold text-white">Benefits of US-Regulated Exchanges</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white">FDIC Insurance</h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">USD deposits are typically insured up to $250,000</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white">Bank Transfers</h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">ACH and wire transfers for easy USD deposits</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white">Tax Reporting</h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">1099 forms and transaction history for tax compliance</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white">Customer Support</h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">US-based support with regulatory recourse options</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/exchanges"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
            >
              View All Exchanges
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
