interface ComparisonCardProps {
  title: string
  features: string[]
  highlighted?: boolean
}

function ComparisonCard({ title, features, highlighted }: ComparisonCardProps) {
  return (
    <div
      className={`rounded-2xl border p-6 ${
        highlighted
          ? 'border-emerald-900/50 bg-emerald-900/20'
          : 'border-[var(--border-soft)] bg-[var(--panel)]'
      }`}
    >
      <h3 className="mb-4 text-xl font-bold">{title}</h3>
      <ul className="space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start text-sm">
            <span className={highlighted ? 'text-[var(--etc)]' : 'text-white/40'}>
              {highlighted ? '✓' : '○'}
            </span>
            <span className="ml-2 text-white/70">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function WhyClassicOS() {
  return (
    <section className="bg-[var(--panel)] px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-2xl font-bold md:text-3xl">
          Basic Wallet vs Classic OS Experience
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <ComparisonCard
            title="Basic Wallet"
            features={[
              'Send and receive ETC',
              'View token balances',
              'Transaction history',
              'Manual DeFi interaction',
              'No mining integration',
              'Limited portfolio tracking',
            ]}
          />

          <ComparisonCard
            title="Wallet + Classic OS"
            highlighted
            features={[
              'Everything a basic wallet does',
              '+ Mining OS with payout detection',
              '+ Unified portfolio dashboard',
              '+ Automated DeFi position management',
              '+ DEX aggregation across protocols',
              '+ Real-time P&L tracking',
              '+ Liquidation protection',
              '+ Fiat on-ramp integration',
            ]}
          />
        </div>

        <div className="mt-12 text-center">
          <p className="mx-auto mb-6 max-w-xl text-white/60">
            Classic OS enhances your wallet experience without replacing it.
            Use any wallet for key management, then connect to Classic OS for advanced features.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://app.classicos.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-emerald-300/30 bg-emerald-400/15 px-6 py-3 font-medium text-white transition hover:bg-emerald-400/20"
            >
              Launch Classic OS
            </a>
            <a
              href="https://docs.classicos.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white/80 transition hover:bg-white/10"
            >
              Read Documentation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
