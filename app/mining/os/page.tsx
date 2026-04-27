'use client'

import Link from 'next/link'

// Mining OS platforms
const miningOSPlatforms = [
  {
    id: 'hiveos',
    name: 'HiveOS',
    website: 'https://hiveos.farm',
    description: 'The most popular mining OS with a comprehensive web dashboard, mobile app, and extensive pool/coin support.',
    logo: '🐝',
    pricing: [
      { tier: 'Free', workers: '1 rig', features: 'All features included' },
      { tier: 'Paid', workers: '2+ rigs', features: '$3/worker/month' },
    ],
    features: [
      'Web & mobile dashboard',
      'Remote management',
      'Overclocking profiles',
      'Auto-switching',
      'Flight sheets',
      'Watchdog & alerts',
      'Multiple miners supported',
      'Dual mining support',
    ],
    supportsETC: true,
    etcNotes: 'Full ETChash support with all major miners pre-installed.',
    supported: ['NVIDIA', 'AMD', 'ASIC'],
    popularity: 'Most Popular',
  },
  {
    id: 'minerstat',
    name: 'minerstat',
    website: 'https://minerstat.com',
    description: 'Professional mining management platform with advanced analytics, profit switching, and enterprise features.',
    logo: '📊',
    pricing: [
      { tier: 'Free', workers: '1 rig', features: 'Basic features' },
      { tier: 'Pro', workers: 'Unlimited', features: 'From $2/worker/month' },
    ],
    features: [
      'Advanced analytics',
      'Profit switching',
      'Smart triggers',
      'API access',
      'Multiple dashboards',
      'Custom alerts',
      'Mining pools integration',
      'Scheduled operations',
    ],
    supportsETC: true,
    etcNotes: 'ETChash algorithm supported with automatic profit switching.',
    supported: ['NVIDIA', 'AMD', 'ASIC'],
    popularity: 'Professional Choice',
  },
  {
    id: 'raveos',
    name: 'RaveOS',
    website: 'https://raveos.com',
    description: 'Free mining OS with intuitive interface, designed for both beginners and advanced miners.',
    logo: '🎵',
    pricing: [
      { tier: 'Free', workers: 'Unlimited', features: 'When mining to partner pools' },
      { tier: 'Paid', workers: 'Unlimited', features: '$2/worker/month for other pools' },
    ],
    features: [
      'Free for partner pools',
      'Simple interface',
      'Fast setup',
      'Overclocking tools',
      'Remote access',
      'Mining statistics',
      'Multiple coin support',
      'Regular updates',
    ],
    supportsETC: true,
    etcNotes: 'Supports ETC mining with partner pools for free usage.',
    supported: ['NVIDIA', 'AMD'],
    popularity: 'Free Option',
  },
  {
    id: 'mmpos',
    name: 'MMPOS',
    website: 'https://app.mmpos.eu',
    description: 'European mining management platform with focus on reliability and customer support.',
    logo: '⛏️',
    pricing: [
      { tier: 'Free', workers: '3 rigs', features: 'Full features' },
      { tier: 'Paid', workers: 'Unlimited', features: 'From €1.5/worker/month' },
    ],
    features: [
      'European servers',
      'Reliable uptime',
      'Simple dashboard',
      'Overclocking',
      'Remote reboot',
      'Email alerts',
      'Pool templates',
      'Customer support',
    ],
    supportsETC: true,
    etcNotes: 'Full ETC support with pre-configured mining templates.',
    supported: ['NVIDIA', 'AMD'],
    popularity: 'EU Focused',
  },
  {
    id: 'simplemining',
    name: 'Simple Mining OS',
    website: 'https://simplemining.net',
    description: 'Straightforward mining OS designed for simplicity. Boot from USB and start mining in minutes.',
    logo: '💎',
    pricing: [
      { tier: 'Paid Only', workers: 'Per rig', features: '$2/worker/month' },
    ],
    features: [
      'USB boot',
      '5-minute setup',
      'Web dashboard',
      'Remote management',
      'Basic overclocking',
      'Pool presets',
      'Beginner friendly',
      'Stable releases',
    ],
    supportsETC: true,
    etcNotes: 'Simple ETC setup with guided configuration.',
    supported: ['NVIDIA', 'AMD'],
    popularity: 'Beginner Friendly',
  },
]

// Comparison features
const comparisonFeatures = [
  { name: 'Free tier', key: 'freeTier' },
  { name: 'NVIDIA support', key: 'nvidia' },
  { name: 'AMD support', key: 'amd' },
  { name: 'ASIC support', key: 'asic' },
  { name: 'Mobile app', key: 'mobile' },
  { name: 'Profit switching', key: 'profitSwitch' },
  { name: 'Dual mining', key: 'dualMining' },
  { name: 'API access', key: 'api' },
]

const featureMatrix: Record<string, Record<string, boolean>> = {
  hiveos: { freeTier: true, nvidia: true, amd: true, asic: true, mobile: true, profitSwitch: true, dualMining: true, api: true },
  minerstat: { freeTier: true, nvidia: true, amd: true, asic: true, mobile: true, profitSwitch: true, dualMining: true, api: true },
  raveos: { freeTier: true, nvidia: true, amd: true, asic: false, mobile: false, profitSwitch: false, dualMining: true, api: false },
  mmpos: { freeTier: true, nvidia: true, amd: true, asic: false, mobile: false, profitSwitch: false, dualMining: false, api: false },
  simplemining: { freeTier: false, nvidia: true, amd: true, asic: false, mobile: false, profitSwitch: false, dualMining: false, api: false },
}

function OSCard({ os }: { os: typeof miningOSPlatforms[0] }) {
  return (
    <div
      className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
    >
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="text-4xl">{os.logo}</span>
          <div>
            <h3 className="text-xl font-bold text-[var(--text-primary)]">{os.name}</h3>
            <span className="text-xs text-[var(--color-primary)]">{os.popularity}</span>
          </div>
        </div>
        {os.supportsETC && (
          <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-400">
            ETC Ready
          </span>
        )}
      </div>

      <p className="mb-4 text-sm text-[var(--color-text-muted)]">{os.description}</p>

      <div className="mb-4">
        <p className="mb-2 text-xs font-medium text-[var(--color-text-muted)]">Pricing</p>
        <div className="flex flex-wrap gap-2">
          {os.pricing.map((price, index) => (
            <div key={index} className="rounded-lg bg-[var(--bg)] px-3 py-1.5 text-xs">
              <span className="font-medium text-[var(--text-primary)]">{price.tier}:</span>{' '}
              <span className="text-[var(--color-text-muted)]">{price.workers} - {price.features}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <p className="mb-2 text-xs font-medium text-[var(--color-text-muted)]">Supported Hardware</p>
        <div className="flex gap-2">
          {os.supported.map((hw) => (
            <span
              key={hw}
              className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                hw === 'NVIDIA' ? 'bg-green-500/10 text-green-400' :
                hw === 'AMD' ? 'bg-red-500/10 text-red-400' :
                'bg-purple-500/10 text-purple-400'
              }`}
            >
              {hw}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <p className="mb-2 text-xs font-medium text-[var(--color-text-muted)]">Key Features</p>
        <div className="grid grid-cols-2 gap-1">
          {os.features.slice(0, 6).map((feature) => (
            <div key={feature} className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
              <svg aria-hidden="true" className="h-3 w-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              {feature}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4 rounded-lg border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 p-3">
        <p className="text-xs text-[var(--color-text-muted)]">
          <span className="font-medium text-[var(--color-primary)]">ETC Support:</span> {os.etcNotes}
        </p>
      </div>

      <a
        href={os.website}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--color-primary)] px-4 py-2.5 text-sm font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
      >
        Visit {os.name}
        <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      </a>
    </div>
  )
}

export default function MiningOSPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div>
            <div>
              <Link
                href="/mining"
                className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--text-primary)]"
              >
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Mining
              </Link>
            </div>

            <div>
              <h1 className="text-3xl font-bold text-[var(--text-primary)] md:text-4xl lg:text-5xl">
                Mining Operating Systems
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
                Specialized Linux-based operating systems designed for managing mining rigs.
                Install, monitor, and control your miners remotely with web dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Mining OS */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="rounded-xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 p-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/10">
                <svg aria-hidden="true" className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--text-primary)]">Why Use a Mining OS?</h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  Mining operating systems are stripped-down Linux distributions optimized for mining. They offer:
                  web-based remote management, pre-installed mining software, automatic overclocking profiles,
                  watchdog monitoring for stability, and multi-rig management from a single dashboard.
                  Much easier than managing Windows installations on multiple machines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OS Cards */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {miningOSPlatforms.map((os) => (
              <OSCard key={os.id} os={os} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h2 className="mb-6 text-lg font-semibold text-[var(--text-primary)]">Feature Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[var(--border)] text-left text-sm text-[var(--color-text-muted)]">
                    <th className="pb-3 font-medium">Feature</th>
                    {miningOSPlatforms.map((os) => (
                      <th key={os.id} className="pb-3 text-center font-medium">{os.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature) => (
                    <tr key={feature.key} className="border-b border-[var(--border)]/50 last:border-0">
                      <td className="py-3 text-sm text-[var(--text-primary)]">{feature.name}</td>
                      {miningOSPlatforms.map((os) => (
                        <td key={os.id} className="py-3 text-center">
                          {featureMatrix[os.id]?.[feature.key] ? (
                            <svg aria-hidden="true" className="mx-auto h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          ) : (
                            <svg aria-hidden="true" className="mx-auto h-5 w-5 text-[var(--color-text-muted)]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Guide */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h2 className="mb-6 text-lg font-semibold text-[var(--text-primary)]">General Setup Steps</h2>
            <div className="grid gap-6 md:grid-cols-4">
              {[
                {
                  step: 1,
                  title: 'Create Account',
                  description: 'Sign up on the mining OS website and create your farm/dashboard.',
                  icon: '👤',
                },
                {
                  step: 2,
                  title: 'Download Image',
                  description: 'Download the OS image and flash it to a USB drive using Rufus or Etcher.',
                  icon: '💾',
                },
                {
                  step: 3,
                  title: 'Configure Rig',
                  description: 'Boot your rig from USB. It will appear in your dashboard automatically.',
                  icon: '⚙️',
                },
                {
                  step: 4,
                  title: 'Set Up Mining',
                  description: 'Create a flight sheet with your pool and wallet. Apply overclocking.',
                  icon: '🚀',
                },
              ].map((item) => (
                <div key={item.step} className="relative">
                  <div className="mb-3 text-3xl">{item.icon}</div>
                  <div className="absolute -left-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-primary)] text-xs font-bold text-black">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-[var(--text-primary)]">{item.title}</h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="grid gap-6 md:grid-cols-3"
          >
            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-6">
              <div className="mb-3 text-2xl">🏆</div>
              <h3 className="font-semibold text-green-400">Best Overall</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                <strong className="text-[var(--text-primary)]">HiveOS</strong> - Most features, best community support,
                and the widest range of supported hardware including ASICs.
              </p>
            </div>

            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">
              <div className="mb-3 text-2xl">💼</div>
              <h3 className="font-semibold text-blue-400">Professional Use</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                <strong className="text-[var(--text-primary)]">minerstat</strong> - Advanced analytics, enterprise features,
                and sophisticated profit switching for larger operations.
              </p>
            </div>

            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6">
              <div className="mb-3 text-2xl">💰</div>
              <h3 className="font-semibold text-amber-400">Budget Option</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                <strong className="text-[var(--text-primary)]">RaveOS</strong> - Unlimited free rigs when using partner pools.
                Great for beginners and cost-conscious miners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="rounded-2xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">Need Mining Software Instead?</h2>
            <p className="mx-auto mt-2 max-w-xl text-[var(--color-text-muted)]">
              If you prefer to run Windows or your own Linux installation, check out our mining software guide
              for standalone miners like T-Rex, lolMiner, and TeamRedMiner.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/mining/software"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                Mining Software
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/mining/getting-started"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg)]"
              >
                Getting Started Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
