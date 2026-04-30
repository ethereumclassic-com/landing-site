'use client'

import { FadeIn } from '@/app/components/ui'

interface ProductFeatureCardProps {
  name: string
  description: string
  features: string[]
  link: string
  badge?: string
  index: number
}

function ProductFeatureCard({ name, description, features, link, badge, index }: ProductFeatureCardProps) {
  return (
    <FadeIn delay={index * 100}>
      <div className="group rounded-2xl border border-[var(--border-default)] bg-[var(--background)] p-6 transition-all hover:border-[var(--brand-green)]/30">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-bold text-[var(--text-primary)]">{name}</h3>
          {badge && (
            <span className="rounded-full bg-[var(--brand-green)]/10 px-3 py-1 text-xs font-medium text-[var(--brand-green)]">
              {badge}
            </span>
          )}
        </div>
        <p className="text-sm text-[var(--text-secondary)]">{description}</p>
        <ul className="mt-4 space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-start text-sm">
              <svg aria-hidden="true" className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--brand-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[var(--text-muted)]">{feature}</span>
            </li>
          ))}
        </ul>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-xl border border-[var(--brand-green)]/30 bg-[var(--brand-green)]/10 px-5 py-2.5 text-sm font-medium text-[var(--text-primary)] transition-all hover:bg-[var(--brand-green)]/20"
        >
          Learn More
          <svg aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      </div>
    </FadeIn>
  )
}

export default function ProductSuite() {
  const products = [
    {
      name: 'Classic OS',
      description: 'Economic control center for managing ETC capital flows',
      features: [
        'Mining OS integration',
        'Portfolio tracking',
        'DeFi automation',
        'Market access',
      ],
      link: 'https://app.classicos.org',
      badge: 'Flagship',
    },
    {
      name: 'ETCswap V3',
      description: 'Concentrated liquidity DEX with capital-efficient trading',
      features: [
        'Concentrated liquidity',
        'Custom price ranges',
        'Multiple fee tiers',
        'Lower slippage',
      ],
      link: 'https://etcswap.org',
      badge: 'DeFi',
    },
    {
      name: 'ETCswap Launchpad',
      description: 'Token launches with bonding curves that graduate to V3',
      features: [
        'One-click token creation',
        'Bonding curve pricing',
        'Automatic V3 graduation',
        'Burned liquidity guarantee',
      ],
      link: 'https://etcswap.org/launchpad',
      badge: 'Launchpad',
    },
    {
      name: 'ClassicUSD',
      description: 'Native stablecoin redeemable 1:1 with USD',
      features: [
        'Bank account on-ramp',
        '1:1 USD redemption',
        '22+ chain support',
        'DeFi integration',
      ],
      link: 'https://classicusd.com',
      badge: 'Stablecoin',
    },
    {
      name: 'Rain Cards',
      description: 'Spend ETC and USC anywhere cards are accepted',
      features: [
        'Wallet-funded debit card',
        'Instant conversion',
        'Global acceptance',
        'Mobile app',
      ],
      link: 'https://rain.xyz',
      badge: 'Payments',
    },
    {
      name: 'Brale',
      description: 'Fiat on/off ramp for ClassicUSD via bank transfer',
      features: [
        'ACH bank transfers',
        'USD to USC conversion',
        'Direct redemption',
        'No exchange required',
      ],
      link: 'https://brale.xyz',
      badge: 'Fiat Bridge',
    },
  ]

  return (
    <section className="bg-[var(--panel)] px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mb-12 text-center">
          <span className="inline-block rounded-full bg-[var(--brand-green)]/10 px-4 py-1.5 text-sm font-medium text-[var(--brand-green)]">
            Ecosystem
          </span>
          <h2 className="mt-4 text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
            ETC Ecosystem
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-secondary)]">
            Products designed to work together. Trade, spend, and manage your Ethereum Classic.
          </p>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductFeatureCard key={product.name} {...product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
