'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

const steps = [
  {
    number: 1,
    title: 'Get USD Stablecoin (USC)',
    description: 'Purchase Classic USD (USC) directly from Brale using your bank account via ACH transfer. USC is a 1:1 USD-backed stablecoin native to Ethereum Classic.',
    action: 'Visit Brale',
    actionLink: 'https://brale.xyz',
    details: [
      'Connect your US bank account',
      'Complete identity verification',
      'Purchase USC via ACH (1-3 business days)',
      'USC arrives in your ETC wallet',
    ],
  },
  {
    number: 2,
    title: 'Connect to Classic OS',
    description: 'Use Classic OS, the native DeFi hub for Ethereum Classic. Connect your wallet containing USC to access the full ETC DeFi ecosystem.',
    action: 'Launch Classic OS',
    actionLink: 'https://app.classicos.org',
    details: [
      'Connect MetaMask or hardware wallet',
      'Ensure wallet is on ETC network',
      'Approve USC for trading',
      'Access ETCswap DEX directly',
    ],
  },
  {
    number: 3,
    title: 'Swap USC for ETC',
    description: 'Use ETCswap V3 to swap your USC stablecoin for WETC (Wrapped ETC), then unwrap to native ETC. No centralized exchange required.',
    action: 'Trade on ETCswap',
    actionLink: 'https://etcswap.org',
    details: [
      'Select USC/WETC trading pair',
      'Enter amount to swap',
      'Confirm transaction in wallet',
      'Unwrap WETC to native ETC',
    ],
  },
]

const benefits = [
  {
    title: 'No CEX Required',
    description: 'Skip centralized exchanges entirely. Go from your bank account to ETC using only decentralized infrastructure.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Self-Custody',
    description: 'Your funds never leave your control. From USC issuance to ETC, everything happens in your own wallet.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
      </svg>
    ),
  },
  {
    title: 'Deep Liquidity',
    description: 'USC connects to USDC and USDP via Brale, giving you access to multi-billion dollar stablecoin liquidity.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: 'Multi-Chain Ready',
    description: 'USC works across 22+ chains via Brale. Bridge your stablecoin wherever you need it.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
]

export default function OnRampGuidePage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <Link
              href="/learn"
              className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Learn
            </Link>

            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-sm font-medium text-[var(--color-primary)]">
              Fiat On-Ramp Guide
            </span>

            <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              USD to ETC Without CEX
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
              The Classic USD (USC) stablecoin provides a direct path from your bank account to ETC
              without using centralized exchanges. Here&apos;s how the flow works.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Flow Diagram */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <div className="flex flex-wrap items-center justify-center gap-4 text-center">
              <div className="rounded-lg bg-blue-500/10 px-4 py-2 text-blue-400">
                USD (Bank)
              </div>
              <svg className="h-6 w-6 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              <div className="rounded-lg bg-amber-500/10 px-4 py-2 text-amber-400">
                USC (Brale)
              </div>
              <svg className="h-6 w-6 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              <div className="rounded-lg bg-purple-500/10 px-4 py-2 text-purple-400">
                WETC (ETCswap)
              </div>
              <svg className="h-6 w-6 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              <div className="rounded-lg bg-[var(--color-primary)]/10 px-4 py-2 text-[var(--color-primary)]">
                ETC
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-[var(--color-text-muted)]">
              Full path: Bank → Brale (ACH) → Classic OS → ETCswap V3 → Unwrap
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center text-2xl font-bold text-white"
          >
            Step-by-Step Guide
          </motion.h2>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-lg font-bold text-black">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{step.title}</h3>
                        <p className="mt-2 text-[var(--color-text-muted)]">{step.description}</p>
                      </div>
                      <a
                        href={step.actionLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)]/10 px-4 py-2 text-sm font-medium text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)]/20"
                      >
                        {step.action}
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                          <svg className="h-4 w-4 shrink-0 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center text-2xl font-bold text-white"
          >
            Why Use This Method?
          </motion.h2>

          <div className="grid gap-4 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{benefit.title}</h3>
                    <p className="mt-1 text-sm text-[var(--color-text-muted)]">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About USC */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-6"
          >
            <h3 className="text-xl font-bold text-white">About Classic USD (USC)</h3>
            <p className="mt-3 text-[var(--color-text-muted)]">
              Classic USD (USC) is the native stablecoin for Ethereum Classic, issued by Brale.
              It maintains a 1:1 peg with USD and is redeemable for fiat or interoperable with
              major stablecoins like USDC and USDP.
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-white/5 p-3 text-center">
                <p className="text-2xl font-bold text-amber-400">1:1</p>
                <p className="text-xs text-[var(--color-text-muted)]">USD Peg</p>
              </div>
              <div className="rounded-lg bg-white/5 p-3 text-center">
                <p className="text-2xl font-bold text-amber-400">22+</p>
                <p className="text-xs text-[var(--color-text-muted)]">Supported Chains</p>
              </div>
              <div className="rounded-lg bg-white/5 p-3 text-center">
                <p className="text-2xl font-bold text-amber-400">USC</p>
                <p className="text-xs text-[var(--color-text-muted)]">Symbol</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://classicusd.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-amber-500/20 px-4 py-2 text-sm font-medium text-amber-400 transition-colors hover:bg-amber-500/30"
              >
                Learn More About USC
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <Link
                href="/apps/classic-usd"
                className="inline-flex items-center gap-2 rounded-lg border border-amber-500/30 px-4 py-2 text-sm font-medium text-amber-400 transition-colors hover:bg-amber-500/10"
              >
                View App Details
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Alternative Methods */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h3 className="text-xl font-bold text-white">Alternative Methods</h3>
            <p className="mt-2 text-[var(--color-text-muted)]">
              While the USC flow is the most decentralized option, you can also buy ETC through traditional methods:
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <Link
                href="/buy/exchanges"
                className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-4 transition-colors hover:border-[var(--color-primary)]/50"
              >
                <p className="font-medium text-white">Centralized Exchanges</p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">Buy ETC on Coinbase, Binance, Kraken, and others</p>
              </Link>
              <Link
                href="/buy/instant"
                className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-4 transition-colors hover:border-[var(--color-primary)]/50"
              >
                <p className="font-medium text-white">Instant Buy</p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">Credit card purchases via MoonPay, Simplex, Transak</p>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white">Ready to Get Started?</h2>
            <p className="mx-auto mt-2 max-w-xl text-[var(--color-text-muted)]">
              Begin your journey from USD to ETC with the decentralized Classic USD on-ramp.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="https://brale.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                Start with Brale
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a
                href="https://app.classicos.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-colors hover:bg-[var(--bg)]"
              >
                Launch Classic OS
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="px-6 pt-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-xs text-[var(--color-text-muted)]">
            This guide is for educational purposes. Always verify current requirements and fees with each
            service provider. EthereumClassic.com is not responsible for transactions made through third-party
            services. Stablecoins carry their own risks - do your own research.
          </p>
        </div>
      </section>
    </main>
  )
}
