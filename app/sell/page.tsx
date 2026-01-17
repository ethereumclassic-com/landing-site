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

interface SellMethodProps {
  name: string
  description: string
  features: string[]
  pros: string[]
  cons: string[]
  link: string
  badge?: string
  isExternal?: boolean
}

function SellMethodCard({ name, description, features, pros, cons, link, badge, isExternal }: SellMethodProps) {
  const LinkComponent = isExternal ? 'a' : Link
  const linkProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <motion.div
      variants={fadeInUp}
      className="group rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6 transition-all hover:border-[var(--color-primary)]/30"
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        {badge && (
          <span className="rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-medium text-[var(--color-primary)]">
            {badge}
          </span>
        )}
      </div>
      <p className="text-sm text-[var(--color-text-secondary)]">{description}</p>

      <ul className="mt-4 space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-start text-sm">
            <svg className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-[var(--color-text-muted)]">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <p className="mb-2 text-xs font-medium text-green-400">Pros</p>
          <ul className="space-y-1">
            {pros.map((pro) => (
              <li key={pro} className="flex items-start text-xs text-[var(--color-text-muted)]">
                <span className="mr-1 text-green-400">+</span>
                {pro}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-2 text-xs font-medium text-red-400">Cons</p>
          <ul className="space-y-1">
            {cons.map((con) => (
              <li key={con} className="flex items-start text-xs text-[var(--color-text-muted)]">
                <span className="mr-1 text-red-400">-</span>
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <LinkComponent
        href={link}
        {...linkProps}
        className="mt-6 inline-flex items-center gap-2 rounded-xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[var(--color-primary)]/20"
      >
        {isExternal ? 'Visit Platform' : 'Learn More'}
        <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          {isExternal ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          )}
        </svg>
      </LinkComponent>
    </motion.div>
  )
}

interface EcosystemProductProps {
  name: string
  description: string
  useCase: string
  website: string
  badge: string
}

function EcosystemProductCard({ name, description, useCase, website, badge }: EcosystemProductProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6 transition-all hover:border-[var(--color-primary)]/30"
    >
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-bold text-white">{name}</h3>
        <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
          {badge}
        </span>
      </div>
      <p className="text-sm text-[var(--color-text-secondary)]">{description}</p>
      <div className="mt-3 rounded-lg bg-[var(--bg)]/50 p-3">
        <p className="text-xs text-[var(--color-text-muted)]">
          <span className="font-medium text-[var(--color-primary)]">Use Case:</span> {useCase}
        </p>
      </div>
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary)]/80"
      >
        Visit {name}
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      </a>
    </motion.div>
  )
}

function StepCard({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="relative rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6"
    >
      <div className="absolute -top-3 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-white">
        {number}
      </div>
      <h3 className="mt-2 text-lg font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{description}</p>
    </motion.div>
  )
}

export default function SellPage() {
  const sellMethods: SellMethodProps[] = [
    {
      name: 'Centralized Exchanges',
      description: 'Sell ETC on major cryptocurrency exchanges for fiat withdrawal to your bank account.',
      features: [
        'High liquidity & best rates',
        'Multiple withdrawal options',
        'Fiat currency support',
        'Advanced trading features',
      ],
      pros: ['Best prices', 'Fast execution', 'Regulated platforms'],
      cons: ['KYC required', 'Withdrawal limits', 'Account needed'],
      link: '/sell/exchanges',
      badge: 'Recommended',
    },
    {
      name: 'ClassicUSD via Brale',
      description: 'Convert ETC to USC (ClassicUSD) on ETCswap, then redeem USC for USD via Brale\'s ACH off-ramp.',
      features: [
        'ETC-native stablecoin path',
        'Direct USD redemption',
        'ACH bank transfers',
        'DeFi-integrated workflow',
      ],
      pros: ['No CEX needed', 'USD settlement', 'ETC ecosystem native'],
      cons: ['Multi-step process', 'Brale account required'],
      link: 'https://brale.xyz',
      badge: 'Native Path',
      isExternal: true,
    },
    {
      name: 'P2P Trading',
      description: 'Sell directly to other users with flexible payment methods and negotiated rates.',
      features: [
        'Direct peer-to-peer sales',
        'Flexible payment options',
        'Negotiate your own price',
        'Global buyer access',
      ],
      pros: ['Privacy options', 'Custom payment methods', 'No withdrawal fees'],
      cons: ['Counterparty risk', 'Slower process', 'Variable rates'],
      link: '/buy/p2p',
      badge: 'Flexible',
    },
    {
      name: 'Instant Sell',
      description: 'Quick sell options on exchanges for immediate conversion to fiat or stablecoins.',
      features: [
        'One-click selling',
        'Instant execution',
        'Simple interface',
        'Mobile-friendly',
      ],
      pros: ['Very fast', 'Easy to use', 'Predictable pricing'],
      cons: ['Higher fees', 'Less control', 'Fixed rates'],
      link: '/buy/instant',
      badge: 'Quick',
    },
  ]

  const ecosystemProducts: EcosystemProductProps[] = [
    {
      name: 'Rain Cards',
      description: 'Spend your ETC or USC directly at any point-of-sale terminal with an on-chain wallet-funded debit card.',
      useCase: 'Spend your ETC holdings without selling - Rain Card handles the conversion at checkout.',
      website: 'https://rain.xyz',
      badge: 'Spend ETC',
    },
    {
      name: '1Konto',
      description: 'OTC desk for ClassicUSD providing institutional-grade liquidity for large ETC transactions.',
      useCase: 'Move institutional liquidity on and off Ethereum Classic with personalized service and competitive rates.',
      website: 'https://1konto.com',
      badge: 'Institutional',
    },
    {
      name: 'Coinflow',
      description: 'Global payment infrastructure enabling businesses to accept payments and settle funds with USC.',
      useCase: 'Accept USC payments for your business with instant settlement and global reach.',
      website: 'https://coinflow.cash',
      badge: 'Business',
    },
  ]

  const braleSteps = [
    {
      number: 1,
      title: 'Swap ETC for USC',
      description: 'Use ETCswap to convert your ETC to ClassicUSD (USC) stablecoin at market rates.',
    },
    {
      number: 2,
      title: 'Connect to Brale',
      description: 'Create a Brale account and complete verification for USD withdrawals.',
    },
    {
      number: 3,
      title: 'Redeem USC',
      description: 'Send your USC to Brale to redeem for USD directly to your bank via ACH.',
    },
  ]

  return (
    <main className="min-h-screen bg-[var(--bg)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-12">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Link
              href="/buy"
              className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] transition-colors hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Buy Hub
            </Link>
            <span className="inline-block rounded-full bg-red-500/10 px-4 py-1.5 text-sm font-medium text-red-400">
              Off-Ramp
            </span>
            <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              Sell ETC
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
              Convert your Ethereum Classic to fiat currency or stablecoins. Compare platforms, fees, and payout methods for the best rates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sell Methods */}
      <section className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Selling Methods</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Choose the best method based on your needs for speed, fees, and privacy
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2"
          >
            {sellMethods.map((method) => (
              <SellMethodCard key={method.name} {...method} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Native Off-Ramp Path */}
      <section className="bg-[var(--panel)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center"
          >
            <span className="inline-block rounded-full bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400">
              ETC Native
            </span>
            <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
              ClassicUSD Off-Ramp Path
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-secondary)]">
              Convert ETC to USD without using centralized exchanges using the native ClassicUSD (USC) stablecoin and Brale integration
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-3"
          >
            {braleSteps.map((step) => (
              <StepCard key={step.number} {...step} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <a
              href="https://etcswap.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-all hover:bg-[var(--color-primary)]/90"
            >
              Swap on ETCswap
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
            <a
              href="https://brale.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--bg)] px-6 py-3 font-medium text-white transition-all hover:border-[var(--color-primary)]/30"
            >
              Redeem on Brale
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Ecosystem Products */}
      <section className="px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-block rounded-full bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
              Ecosystem
            </span>
            <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
              ETC Payment Products
            </h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Alternative ways to use and spend your ETC without traditional selling
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-3"
          >
            {ecosystemProducts.map((product) => (
              <EcosystemProductCard key={product.name} {...product} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="bg-[var(--panel)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Tips for Selling ETC</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                title: 'Check Multiple Platforms',
                description: 'Compare rates across exchanges before selling. Even small differences add up on larger amounts.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                ),
              },
              {
                title: 'Understand Tax Implications',
                description: 'Selling cryptocurrency may trigger taxable events. Keep records of your transactions for tax reporting.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
                  </svg>
                ),
              },
              {
                title: 'Consider Timing',
                description: 'Market volatility affects your returns. Consider dollar-cost averaging out if selling large amounts.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Verify Withdrawal Fees',
                description: 'Different platforms charge different withdrawal fees. Factor these into your selling decision.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
              {
                title: 'Use Limit Orders',
                description: 'For larger sales, use limit orders instead of market orders to get better execution prices.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                ),
              },
              {
                title: 'Secure Your Accounts',
                description: 'Enable 2FA and use unique passwords. Verify withdrawal addresses carefully before confirming.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
            ].map((tip) => (
              <motion.div
                key={tip.title}
                variants={fadeInUp}
                className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  {tip.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{tip.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{tip.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--panel)] to-[var(--bg)] p-8 text-center md:p-12"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Looking to Buy ETC Instead?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-secondary)]">
              Check out our comprehensive buying guides with step-by-step instructions for every method
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/buy"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-all hover:bg-[var(--color-primary)]/90"
              >
                Buy ETC
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/exchanges"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--bg)] px-6 py-3 font-medium text-white transition-all hover:border-[var(--color-primary)]/30"
              >
                Exchange Directory
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
