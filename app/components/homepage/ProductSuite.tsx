interface ProductFeatureCardProps {
  name: string
  description: string
  features: string[]
  link: string
}

function ProductFeatureCard({ name, description, features, link }: ProductFeatureCardProps) {
  return (
    <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--panel)] p-6">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="mt-2 text-sm text-white/60">{description}</p>
      <ul className="mt-4 space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-start text-sm">
            <span className="mr-2 text-[var(--etc)]">✓</span>
            <span className="text-white/70">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center justify-center rounded-xl border border-emerald-300/30 bg-emerald-400/15 px-5 py-2 text-sm font-medium text-white transition hover:bg-emerald-400/20"
      >
        Learn More
      </a>
    </div>
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
      link: 'https://etcswap.com',
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
      link: '#',
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
    },
  ]

  return (
    <section className="bg-[var(--panel)] px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          Product Suite
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-white/60">
          Vertically integrated products built by the same architect
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <ProductFeatureCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
