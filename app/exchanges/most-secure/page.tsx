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
  <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
)

// Security-focused exchanges (regulated, long track record, no major hacks)
const secureExchangeNames = ['Coinbase', 'Kraken', 'Gemini', 'Bitstamp', 'Binance', 'OKX']

export default function MostSecureExchangesPage() {
  // Filter security-focused exchanges
  const secureExchanges = useMemo(() => {
    return exchanges.filter((ex) => secureExchangeNames.includes(ex.name))
  }, [])

  // Regulated vs others
  const regulated = secureExchanges.filter((ex) => ex.kycRequired === true && ex.regions.includes('US'))
  const globalSecure = secureExchanges.filter((ex) => !ex.regions.includes('US') || ex.kycRequired !== true)

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
            <span className="text-white">Most Secure</span>
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
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                Security First
              </span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl font-bold text-white md:text-5xl">
              Most Secure Exchanges
            </motion.h1>
            <motion.p variants={fadeInUp} className="mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
              Trade ETC on exchanges with the strongest security track records, regulatory compliance, and institutional-grade custody solutions.
            </motion.p>
          </motion.div>

          {/* Security Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                icon: 'M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z',
                title: 'Cold Storage',
                desc: '95%+ funds offline'
              },
              {
                icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
                title: 'Insurance',
                desc: 'Funds protected'
              },
              {
                icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
                title: 'Track Record',
                desc: 'Years of operation'
              },
              {
                icon: 'M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z',
                title: 'Regulated',
                desc: 'Licensed operation'
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{item.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* Security Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12 rounded-xl border border-blue-500/30 bg-blue-500/10 p-5"
          >
            <div className="flex items-start gap-3">
              <svg aria-hidden="true" className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
              <div>
                <h3 className="font-semibold text-white">Selection Criteria</h3>
                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                  These exchanges are selected based on: regulatory licenses, security audits, cold storage practices, insurance coverage, years of operation without major security incidents, and institutional-grade custody solutions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* US Regulated */}
          {regulated.length > 0 && (
            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-white">
                US-Regulated Exchanges
                <span className="ml-2 text-sm font-normal text-[var(--color-text-muted)]">
                  Highest compliance standards
                </span>
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {regulated.map((exchange) => (
                  <motion.a
                    key={exchange.name}
                    href={exchange.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group rounded-xl border border-blue-500/20 bg-[var(--panel)] p-5 transition-all hover:border-blue-500/40"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-white group-hover:text-blue-400">
                          {exchange.name}
                        </h3>
                        <div className="mt-1 flex flex-wrap gap-1">
                          <span className="inline-block rounded bg-blue-500/10 px-2 py-0.5 text-xs text-blue-400">
                            US Regulated
                          </span>
                          {exchange.featured && (
                            <span className="inline-block rounded bg-[var(--color-primary)]/10 px-2 py-0.5 text-xs text-[var(--color-primary)]">
                              Featured
                            </span>
                          )}
                        </div>
                      </div>
                      <ExternalLinkIcon />
                    </div>
                    {exchange.description && (
                      <p className="mt-3 text-sm text-[var(--color-text-muted)]">
                        {exchange.description}
                      </p>
                    )}
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <svg aria-hidden="true" className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-[var(--color-text-muted)]">FDIC-insured USD</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <svg aria-hidden="true" className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-[var(--color-text-muted)]">SOC 2 Compliant</span>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-1">
                      {exchange.pairs.slice(0, 3).map((pair) => (
                        <span key={pair} className="rounded bg-[var(--bg)] px-2 py-0.5 text-xs text-[var(--color-text-secondary)]">
                          {pair}
                        </span>
                      ))}
                    </div>
                  </motion.a>
                ))}
              </div>
            </section>
          )}

          {/* Global Secure Exchanges */}
          {globalSecure.length > 0 && (
            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-white">
                Global Security Leaders
                <span className="ml-2 text-sm font-normal text-[var(--color-text-muted)]">
                  Strong track records
                </span>
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {globalSecure.map((exchange) => (
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
                        {exchange.featured && (
                          <span className="mt-1 inline-block rounded bg-[var(--color-primary)]/10 px-2 py-0.5 text-xs text-[var(--color-primary)]">
                            Featured
                          </span>
                        )}
                      </div>
                      <ExternalLinkIcon />
                    </div>
                    {exchange.description && (
                      <p className="mt-3 text-sm text-[var(--color-text-muted)]">
                        {exchange.description}
                      </p>
                    )}
                    <div className="mt-4 flex flex-wrap gap-1">
                      {exchange.pairs.slice(0, 3).map((pair) => (
                        <span key={pair} className="rounded bg-[var(--bg)] px-2 py-0.5 text-xs text-[var(--color-text-secondary)]">
                          {pair}
                        </span>
                      ))}
                    </div>
                    {exchange.volume24h && (
                      <p className="mt-3 text-sm text-[var(--color-text-muted)]">
                        24h Volume: <span className="text-white">{exchange.volume24h}</span>
                      </p>
                    )}
                  </motion.a>
                ))}
              </div>
            </section>
          )}

          {/* Security Best Practices */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h2 className="mb-4 text-xl font-bold text-white">Your Security Checklist</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded border border-[var(--color-primary)] text-xs text-[var(--color-primary)]">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-white">Enable 2FA</h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">Use an authenticator app, not SMS. Hardware keys (YubiKey) are even better.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded border border-[var(--color-primary)] text-xs text-[var(--color-primary)]">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-white">Use Unique Email</h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">Create a dedicated email for crypto that you don&apos;t use elsewhere.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded border border-[var(--color-primary)] text-xs text-[var(--color-primary)]">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-white">Whitelist Addresses</h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">Enable withdrawal address whitelisting to prevent unauthorized transfers.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded border border-[var(--color-primary)] text-xs text-[var(--color-primary)]">
                  4
                </div>
                <div>
                  <h3 className="font-medium text-white">Self-Custody Large Amounts</h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">Move significant holdings to a hardware wallet you control.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Self Custody CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 rounded-xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 p-6 text-center"
          >
            <h2 className="mb-2 text-xl font-bold text-white">Ultimate Security: Self-Custody</h2>
            <p className="mb-4 text-[var(--color-text-secondary)]">
              &quot;Not your keys, not your coins.&quot; For maximum security, consider using a hardware wallet where only you control the private keys.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/wallets"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-5 py-2.5 font-medium text-black transition-all hover:bg-[var(--color-primary)]/90"
              >
                Explore Wallets
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/exchanges/decentralized"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-5 py-2.5 font-medium text-white transition-all hover:border-[var(--color-primary)]/30"
              >
                Try DEXs
              </Link>
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
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
