'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

const hardwareWallets = [
  {
    name: 'Trezor',
    models: ['Model One', 'Model T', 'Safe 3', 'Safe 5'],
    description: 'The original hardware wallet with fully open-source firmware, transparent security, and no data breaches.',
    recommended: true,
    pros: [
      'Fully open-source firmware - fully auditable',
      'No history of data breaches',
      'Strong privacy - minimal data collection',
      'Supports 1,000+ assets including ETC',
      'Trezor Suite desktop app',
      'Compatible with Classic OS via MetaMask',
    ],
    cons: [
      'No Bluetooth support',
      'Smaller asset support than some competitors',
      'Model One has smaller screen',
    ],
    features: {
      secureElement: 'Safe 3/5 only',
      bluetooth: 'No',
      screen: 'Yes (color on T, Safe 5)',
      openSource: true,
      classicOSSupport: true,
    },
    link: 'https://affil.trezor.io/aff_c?offer_id=133&aff_id=34561',
    setupSteps: [
      'Download Trezor Suite from trezor.io',
      'Connect your Trezor device via USB',
      'Follow setup wizard to create/restore wallet',
      'Enable Ethereum Classic in coin settings',
      'Your ETC address is ready to receive',
    ],
  },
  {
    name: 'Ledger',
    models: ['Nano S Plus', 'Nano X', 'Stax'],
    description: 'Popular hardware wallet with secure element chip and wide asset support.',
    recommended: false,
    pros: [
      'Secure Element (SE) chip',
      'Bluetooth support on Nano X and Stax',
      'Supports 5,500+ assets',
      'Ledger Live desktop and mobile app',
      'Compatible with Classic OS via MetaMask',
    ],
    cons: [
      'Closed-source firmware - cannot be fully audited',
      'History of customer data breaches (2020)',
      'Premium pricing',
      'Requires Ledger Live for setup',
    ],
    features: {
      secureElement: true,
      bluetooth: 'Nano X, Stax',
      screen: 'Yes (color on Stax)',
      openSource: false,
      classicOSSupport: true,
    },
    link: 'https://www.ledger.com',
    setupSteps: [
      'Download Ledger Live from ledger.com',
      'Connect your Ledger device via USB',
      'Follow setup wizard to create/restore wallet',
      'Install the Ethereum Classic app via Manager',
      'Open ETC app on device to receive funds',
    ],
  },
]

const securityBenefits = [
  {
    title: 'Offline Key Storage',
    description: 'Private keys never leave the device, even when signing transactions.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: 'Physical Confirmation',
    description: 'Every transaction requires physical button press on the device.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
      </svg>
    ),
  },
  {
    title: 'Malware Resistant',
    description: 'Even if your computer is compromised, keys remain secure.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Backup & Recovery',
    description: 'Seed phrase backup allows recovery on any compatible device.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
]

const comparisonFeatures = [
  { feature: 'ETC Support', trezor: true, ledger: true },
  { feature: 'Classic OS Compatible', trezor: true, ledger: true },
  { feature: 'Open Source Firmware', trezor: true, ledger: false },
  { feature: 'No Data Breaches', trezor: true, ledger: false },
  { feature: 'Secure Element Chip', trezor: 'Some models', ledger: true },
  { feature: 'Bluetooth', trezor: false, ledger: 'Some models' },
  { feature: 'Color Touchscreen', trezor: 'Model T, Safe 5', ledger: 'Stax only' },
  { feature: 'Starting Price', trezor: '$59', ledger: '$79' },
  { feature: 'Mobile App', trezor: false, ledger: true },
]

const bestPractices = [
  {
    title: 'Buy Direct',
    description: 'Only purchase from official stores. Never buy used or from third parties.',
  },
  {
    title: 'Verify Seal',
    description: 'Check tamper-evident seals before opening. Report any tampering.',
  },
  {
    title: 'Generate New Seed',
    description: 'Always generate a new seed phrase. Never use a pre-filled one.',
  },
  {
    title: 'Metal Backup',
    description: 'Store seed phrase on metal (not paper) in a secure location.',
  },
  {
    title: 'Verify Addresses',
    description: 'Always confirm addresses on the device screen, not just computer.',
  },
  {
    title: 'Firmware Updates',
    description: 'Keep firmware updated, but verify updates through official channels.',
  },
]

export default function HardwarePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-16 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative mx-auto max-w-4xl"
        >
          {/* Breadcrumb */}
          <motion.div variants={fadeInUp} className="mb-6 flex items-center gap-2 text-sm">
            <Link
              href="/wallet"
              className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
            >
              Wallets
            </Link>
            <span className="text-[var(--color-text-muted)]">/</span>
            <span className="text-white">Hardware Wallets</span>
          </motion.div>

          {/* Badge */}
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-400">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              Maximum Security
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeInUp}
            className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
          >
            Hardware Wallet Guide for{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Ethereum Classic
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-[var(--color-text-secondary)]"
          >
            Hardware wallets provide the highest level of security for your ETC.
            Your private keys are stored offline and never exposed to the internet, protecting against malware and hackers.
          </motion.p>

          {/* Quick Stats */}
          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <span className="text-sm text-[var(--color-text-secondary)]">Cold storage security</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-[var(--color-text-secondary)]">Classic OS compatible</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-[var(--color-text-secondary)]">From $59</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Hardware Wallets */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)]/50 px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Why Use a Hardware Wallet?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-[var(--color-text-secondary)]">
              Hardware wallets provide security that software wallets cannot match
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {securityBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-white">{benefit.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wallet Comparison */}
      <section className="px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Trezor vs Ledger</h2>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              Both support Ethereum Classic and work with Classic OS. We recommend Trezor for its open-source firmware and strong privacy track record.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            {hardwareWallets.map((wallet, index) => (
              <motion.div
                key={wallet.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-white">{wallet.name}</h3>
                      {wallet.recommended && (
                        <span className="rounded-full bg-[var(--color-primary)]/10 px-2 py-0.5 text-xs font-medium text-[var(--color-primary)]">
                          Recommended
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                      {wallet.models.join(' • ')}
                    </p>
                  </div>
                  <a
                    href={wallet.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-all ${
                      wallet.recommended
                        ? 'border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 text-[var(--color-primary)] hover:bg-[var(--color-primary)]/20'
                        : 'border-[var(--border)] bg-[var(--color-bg-primary)] text-white hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10'
                    }`}
                  >
                    {wallet.recommended ? 'Get Trezor' : 'Visit Site'}
                  </a>
                </div>

                <p className="mb-4 text-[var(--color-text-secondary)]">{wallet.description}</p>

                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="mb-2 text-sm font-medium text-[var(--color-primary)]">Pros</h4>
                    <ul className="space-y-1.5">
                      {wallet.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                          <svg className="mt-0.5 h-4 w-4 shrink-0 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm font-medium text-amber-400">Cons</h4>
                    <ul className="space-y-1.5">
                      {wallet.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                          <svg className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                          </svg>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-[var(--border)] bg-[var(--color-bg-primary)] p-4">
                  <h4 className="mb-3 text-sm font-medium text-white">Quick Setup for ETC</h4>
                  <ol className="space-y-2">
                    {wallet.setupSteps.map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[var(--color-text-muted)]">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-xs font-medium text-[var(--color-primary)]">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="border-t border-[var(--border)] px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-xl font-bold text-white md:text-2xl">Feature Comparison</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Side-by-side comparison of key features
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="py-3 text-left text-sm font-medium text-[var(--color-text-muted)]">Feature</th>
                  <th className="py-3 text-center text-sm font-medium text-[var(--color-primary)]">Trezor</th>
                  <th className="py-3 text-center text-sm font-medium text-white">Ledger</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr key={index} className="border-b border-[var(--border)]/50">
                    <td className="py-3 text-sm text-white">{row.feature}</td>
                    <td className="py-3 text-center">
                      {typeof row.trezor === 'boolean' ? (
                        row.trezor ? (
                          <span className="inline-flex items-center justify-center">
                            <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center">
                            <svg className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </span>
                        )
                      ) : (
                        <span className="text-sm text-[var(--color-text-muted)]">{row.trezor}</span>
                      )}
                    </td>
                    <td className="py-3 text-center">
                      {typeof row.ledger === 'boolean' ? (
                        row.ledger ? (
                          <span className="inline-flex items-center justify-center">
                            <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center">
                            <svg className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </span>
                        )
                      ) : (
                        <span className="text-sm text-[var(--color-text-muted)]">{row.ledger}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)]/50 px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-xl font-bold text-white md:text-2xl">Security Best Practices</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Follow these guidelines to maximize the security of your hardware wallet
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {bestPractices.map((practice, index) => (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-lg border border-[var(--border)] bg-[var(--panel)] p-4"
              >
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-primary)]/10">
                    <svg className="h-3.5 w-3.5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-white">{practice.title}</h3>
                </div>
                <p className="text-sm text-[var(--color-text-muted)]">{practice.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Using with Classic OS */}
      <section className="border-t border-[var(--border)] px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-xl font-bold text-white md:text-2xl">Using Hardware Wallets with Classic OS</h2>
            <p className="mb-6 text-[var(--color-text-secondary)]">
              Both Trezor and Ledger can be used with Classic OS through MetaMask, giving you the best of both worlds:
              hardware security with full DeFi access.
            </p>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">Setup Steps</h3>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 font-semibold text-[var(--color-primary)]">1</span>
                  <div>
                    <p className="font-medium text-white">Install MetaMask</p>
                    <p className="text-sm text-[var(--color-text-muted)]">Follow our MetaMask setup guide to add the ETC network</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 font-semibold text-[var(--color-primary)]">2</span>
                  <div>
                    <p className="font-medium text-white">Connect Hardware Wallet</p>
                    <p className="text-sm text-[var(--color-text-muted)]">In MetaMask, click your account icon → Connect Hardware Wallet → Select Trezor or Ledger</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 font-semibold text-[var(--color-primary)]">3</span>
                  <div>
                    <p className="font-medium text-white">Select Account</p>
                    <p className="text-sm text-[var(--color-text-muted)]">Choose which address(es) to import into MetaMask</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 font-semibold text-[var(--color-primary)]">4</span>
                  <div>
                    <p className="font-medium text-white">Launch Classic OS</p>
                    <p className="text-sm text-[var(--color-text-muted)]">Connect to Classic OS and sign transactions securely on your hardware wallet</p>
                  </div>
                </li>
              </ol>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[var(--border)] px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-amber-500/20 bg-gradient-to-b from-amber-500/10 to-[var(--panel)] p-8 text-center"
          >
            <h2 className="text-xl font-bold text-white md:text-2xl">
              Ready to Secure Your ETC?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-[var(--color-text-secondary)]">
              Get a hardware wallet from the official store and follow our guides to set up maximum security for your Ethereum Classic.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="https://affil.trezor.io/aff_c?offer_id=133&aff_id=34561"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-lg hover:shadow-[var(--color-primary)]/25"
              >
                Get Trezor (Recommended)
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
              <a
                href="https://www.ledger.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
              >
                Buy Ledger
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="border-t border-[var(--border)] px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-xl font-bold text-white">Related Guides</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <Link
              href="/wallet/metamask"
              className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/5"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.83 6.33L12.6 1.5c-.33-.2-.87-.2-1.2 0L2.17 6.33c-.2.13-.2.47 0 .6l9.23 5.17c.33.2.87.2 1.2 0l9.23-5.17c.2-.13.2-.47 0-.6zM12 13.17L3.6 8.33v7.84c0 .27.13.53.4.67l7.6 4.33c.13.07.27.1.4.1s.27-.03.4-.1l7.6-4.33c.27-.13.4-.4.4-.67V8.33L12 13.17z"/>
                </svg>
              </div>
              <h3 className="font-medium text-white group-hover:text-[var(--color-primary)]">MetaMask Setup</h3>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">Configure MetaMask for ETC</p>
            </Link>
            <Link
              href="/wallet/compare"
              className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/5"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <h3 className="font-medium text-white group-hover:text-[var(--color-primary)]">Compare All Wallets</h3>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">Find the best wallet for your needs</p>
            </Link>
            <Link
              href="/wallet/classic-os"
              className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/5"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="font-medium text-white group-hover:text-[var(--color-primary)]">Classic OS</h3>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">DeFi interface for ETC</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
