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

interface P2PPlatformProps {
  name: string
  description: string
  paymentMethods: string[]
  fees: string
  kycRequired: boolean
  escrowType: string
  link: string
  index: number
}

function P2PPlatform({
  name,
  description,
  paymentMethods,
  fees,
  kycRequired,
  escrowType,
  link,
  index,
}: P2PPlatformProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6 transition-all hover:border-[var(--color-primary)]/30"
    >
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-bold text-white">{name}</h3>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">{description}</p>
        </div>
        {!kycRequired && (
          <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
            No KYC
          </span>
        )}
      </div>

      <div className="mb-4 grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="text-[var(--color-text-muted)]">Escrow</span>
          <p className="font-medium text-white">{escrowType}</p>
        </div>
        <div>
          <span className="text-[var(--color-text-muted)]">Fees</span>
          <p className="font-medium text-white">{fees}</p>
        </div>
      </div>

      <div className="mb-4">
        <span className="text-sm text-[var(--color-text-muted)]">Payment Methods</span>
        <div className="mt-2 flex flex-wrap gap-2">
          {paymentMethods.map((method) => (
            <span
              key={method}
              className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-2.5 py-1 text-xs text-[var(--color-text-muted)]"
            >
              {method}
            </span>
          ))}
        </div>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-[var(--color-primary-hover)]"
      >
        Start P2P Trading
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      </a>
    </motion.div>
  )
}

interface BenefitCardProps {
  title: string
  description: string
  icon: React.ReactNode
  index: number
}

function BenefitCard({ title, description, icon, index }: BenefitCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
        {icon}
      </div>
      <h3 className="mb-2 font-semibold text-white">{title}</h3>
      <p className="text-sm text-[var(--color-text-muted)]">{description}</p>
    </motion.div>
  )
}

export default function P2PPage() {
  const platforms: P2PPlatformProps[] = [
    {
      name: 'Binance P2P',
      description: 'World\'s largest P2P marketplace with escrow protection and verified merchants',
      paymentMethods: ['Bank Transfer', 'PayPal', 'Venmo', 'Zelle', 'Cash App', 'Revolut'],
      fees: '0%',
      kycRequired: true,
      escrowType: 'Platform Escrow',
      link: 'https://p2p.binance.com',
      index: 0,
    },
    {
      name: 'KuCoin P2P',
      description: 'Fast-growing P2P platform with competitive rates and global coverage',
      paymentMethods: ['Bank Transfer', 'PayPal', 'Wise', 'Revolut', 'Skrill'],
      fees: '0%',
      kycRequired: false,
      escrowType: 'Platform Escrow',
      link: 'https://www.kucoin.com/otc',
      index: 1,
    },
    {
      name: 'OKX P2P',
      description: 'Major exchange P2P with 900+ payment methods worldwide',
      paymentMethods: ['Bank Transfer', 'Cash', 'Mobile Money', 'PayPal', 'Revolut'],
      fees: '0%',
      kycRequired: true,
      escrowType: 'Platform Escrow',
      link: 'https://www.okx.com/p2p',
      index: 2,
    },
    {
      name: 'Bybit P2P',
      description: 'Growing P2P marketplace with 0% fees and fast trades',
      paymentMethods: ['Bank Transfer', 'PayPal', 'Wise', 'Zelle', 'Cash App'],
      fees: '0%',
      kycRequired: false,
      escrowType: 'Platform Escrow',
      link: 'https://www.bybit.com/fiat/trade/otc',
      index: 3,
    },
    {
      name: 'Gate.io P2P',
      description: 'Established P2P with verified merchants and multiple currencies',
      paymentMethods: ['Bank Transfer', 'PayPal', 'Alipay', 'WeChat Pay'],
      fees: '0%',
      kycRequired: false,
      escrowType: 'Platform Escrow',
      link: 'https://www.gate.io/c2c',
      index: 4,
    },
    {
      name: 'HTX P2P',
      description: 'Former Huobi P2P marketplace with global reach',
      paymentMethods: ['Bank Transfer', 'PayPal', 'Alipay', 'WeChat Pay', 'M-Pesa'],
      fees: '0%',
      kycRequired: true,
      escrowType: 'Platform Escrow',
      link: 'https://www.htx.com/otc',
      index: 5,
    },
  ]

  const benefits = [
    {
      title: 'No Intermediaries',
      description: 'Trade directly with other users, cutting out middlemen and reducing costs',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
      ),
    },
    {
      title: 'Flexible Payments',
      description: 'Choose from hundreds of payment methods including bank transfer, PayPal, and cash',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
        </svg>
      ),
    },
    {
      title: 'Escrow Protection',
      description: 'Funds are held in escrow until both parties confirm the trade is complete',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
    {
      title: 'Competitive Rates',
      description: 'Find the best prices by comparing offers from multiple sellers',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Privacy Options',
      description: 'Many P2P platforms offer trading with minimal identity verification',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
        </svg>
      ),
    },
    {
      title: 'Global Access',
      description: 'Trade with users worldwide, regardless of local banking restrictions',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      ),
    },
  ]

  const steps = [
    {
      number: 1,
      title: 'Choose a Platform',
      description: 'Select a P2P marketplace from a reputable exchange',
    },
    {
      number: 2,
      title: 'Browse Offers',
      description: 'Find sellers offering ETC at your preferred price and payment method',
    },
    {
      number: 3,
      title: 'Start Trade',
      description: 'Initiate the trade - seller\'s ETC is locked in escrow',
    },
    {
      number: 4,
      title: 'Make Payment',
      description: 'Send payment using the agreed method (bank, PayPal, etc.)',
    },
    {
      number: 5,
      title: 'Receive ETC',
      description: 'Once seller confirms payment, ETC is released to you',
    },
  ]

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20 text-center md:px-10 md:py-28 lg:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-primary)]/10 blur-[100px]" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative mx-auto max-w-4xl"
        >
          <motion.div variants={fadeInUp}>
            <Link
              href="/buy"
              className="mb-4 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Buy ETC
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
              </svg>
              Trade Directly
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl"
          >
            P2P{' '}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-emerald-300 bg-clip-text text-transparent">
              Trading
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]"
          >
            Buy and sell ETC directly with other users. Trade with flexible payment methods, competitive rates, and escrow protection.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#platforms"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 text-base font-medium text-white transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-lg hover:shadow-[var(--color-primary)]/25"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
              </svg>
              Browse P2P Platforms
            </a>
            <Link
              href="/buy/instant"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 text-base font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
            >
              <svg className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
              Instant Buy
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits */}
      <section className="border-y border-[var(--border)] bg-[var(--panel)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <span className="inline-block rounded-full bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
              Why P2P?
            </span>
            <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
              Benefits of P2P Trading
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <BenefitCard key={benefit.title} {...benefit} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <span className="inline-block rounded-full bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
              Getting Started
            </span>
            <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
              How P2P Trading Works
            </h2>
          </motion.div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-sm font-bold text-[var(--color-primary)]">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{step.title}</h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* P2P Platforms */}
      <section id="platforms" className="bg-[var(--panel)] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <span className="inline-block rounded-full bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
              P2P Marketplaces
            </span>
            <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
              Popular P2P Platforms
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-secondary)]">
              Trade ETC directly with other users on these trusted P2P marketplaces
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {platforms.map((platform, index) => (
              <P2PPlatform key={platform.name} {...platform} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-8"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10">
                <svg className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">P2P Safety Tips</h3>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-medium text-white">Use Escrow</h4>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Only trade on platforms with escrow protection
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-medium text-white">Check Reputation</h4>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Trade with verified, high-reputation sellers
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-medium text-white">Never Release Early</h4>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Don&apos;t confirm receipt until payment clears
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-medium text-white">Keep Records</h4>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Screenshot all trade details and payment proofs
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-medium text-white">Use Platform Chat</h4>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Keep all communication within the platform
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-medium text-white">Start Small</h4>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Test with small amounts before large trades
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Other Ways to Buy ETC
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-secondary)]">
              Prefer a different method? Explore instant buy options or exchange trading
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/buy/instant"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--bg)] px-6 py-3 font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
              >
                <svg className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
                Instant Buy
              </Link>
              <Link
                href="/buy/card"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--bg)] px-6 py-3 font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
              >
                <svg className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
                Buy with Card
              </Link>
              <Link
                href="/buy/exchanges"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--bg)] px-6 py-3 font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
              >
                <svg className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008z" />
                </svg>
                All Exchanges
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
