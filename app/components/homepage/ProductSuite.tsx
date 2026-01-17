'use client'

import { motion } from 'framer-motion'

interface ProductFeatureCardProps {
  name: string
  description: string
  features: string[]
  link: string
  badge?: string
  index: number
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  }),
}

function ProductFeatureCard({ name, description, features, link, badge, index }: ProductFeatureCardProps) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeInUp}
      className="group rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6 transition-all hover:border-[var(--color-primary)]/30"
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
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[var(--color-primary)]/20"
      >
        Learn More
        <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      </a>
    </motion.div>
  )
}

export default function ProductSuite() {
  const products = [
    {
      name: 'Classic OS',
      description: 'Complete economic operating system for Ethereum Classic',
      features: [
        'Mining OS - Create capital',
        'Portfolio - Observe positions',
        'Deploy - DeFi automation',
        'Markets - Access liquidity',
      ],
      link: 'https://classicos.org',
      badge: 'Flagship',
    },
    {
      name: 'ETCswap',
      description: 'Decentralized exchange infrastructure (V2/V3/Launchpad)',
      features: [
        'Swap tokens instantly',
        'Provide liquidity',
        'Yield farming rewards',
        'Token launchpad',
      ],
      link: 'https://etcswap.org',
      badge: 'DeFi',
    },
    {
      name: 'ClassicUSD',
      description: 'ETC-native stablecoin via Brale partnership',
      features: [
        'Fiat on-ramp (ACH)',
        'Stable value',
        'DeFi integration',
        'Low transaction fees',
      ],
      link: 'https://classicusd.com',
      badge: 'Stablecoin',
    },
    {
      name: 'Olympia DAO',
      description: 'Governance for the ETC ecosystem',
      features: [
        'Proposal voting',
        'Treasury management',
        'Community coordination',
        'Protocol upgrades',
      ],
      link: '#',
      badge: 'Governance',
    },
    {
      name: 'Rain Cards',
      description: 'Spend ETC & USC at any PoS terminal',
      features: [
        'On-chain wallet funded',
        'Debit card spending',
        'Instant conversion',
        'Global acceptance',
      ],
      link: 'https://rain.xyz',
      badge: 'Payments',
    },
    {
      name: '1Konto',
      description: 'OTC desk for institutional ClassicUSD liquidity',
      features: [
        'Large volume trades',
        'Personalized service',
        'Competitive rates',
        'USD settlement',
      ],
      link: 'https://1konto.com',
      badge: 'Institutional',
    },
  ]

  return (
    <section className="bg-[var(--panel)] px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="inline-block rounded-full bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
            Ecosystem
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            ETC Ecosystem
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-secondary)]">
            Products designed to work together - trade, spend, and manage your Ethereum Classic
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductFeatureCard key={product.name} {...product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
