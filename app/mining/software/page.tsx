'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { miningSoftware, type MiningSoftware } from '../data/mining'

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

const platformColors: Record<string, { bg: string; text: string }> = {
  Windows: { bg: 'bg-blue-500/10', text: 'text-blue-400' },
  Linux: { bg: 'bg-amber-500/10', text: 'text-amber-400' },
  macOS: { bg: 'bg-gray-500/10', text: 'text-gray-400' },
}

const gpuColors: Record<string, { bg: string; text: string }> = {
  NVIDIA: { bg: 'bg-green-500/10', text: 'text-green-400' },
  AMD: { bg: 'bg-red-500/10', text: 'text-red-400' },
  ASIC: { bg: 'bg-purple-500/10', text: 'text-purple-400' },
}

function SoftwareCard({ software }: { software: MiningSoftware }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
    >
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold text-white">{software.name}</h3>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">{software.description}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${software.fee === 0 ? 'bg-green-500/10 text-green-400' : 'bg-amber-500/10 text-amber-400'}`}>
            {software.fee}% fee
          </span>
          {software.opensource && (
            <span className="rounded-full bg-[var(--color-primary)]/10 px-2 py-0.5 text-xs font-medium text-[var(--color-primary)]">
              Open Source
            </span>
          )}
        </div>
      </div>

      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <p className="mb-2 text-xs text-[var(--color-text-muted)]">Supported Platforms</p>
          <div className="flex flex-wrap gap-1">
            {software.platforms.map((platform) => (
              <span
                key={platform}
                className={`rounded-full px-2 py-0.5 text-xs font-medium ${platformColors[platform].bg} ${platformColors[platform].text}`}
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 text-xs text-[var(--color-text-muted)]">GPU Support</p>
          <div className="flex flex-wrap gap-1">
            {software.supports.map((gpu) => (
              <span
                key={gpu}
                className={`rounded-full px-2 py-0.5 text-xs font-medium ${gpuColors[gpu].bg} ${gpuColors[gpu].text}`}
              >
                {gpu}
              </span>
            ))}
          </div>
        </div>
      </div>

      <a
        href={software.website}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm text-[var(--color-primary)] hover:underline"
      >
        Download from GitHub
        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      </a>
    </motion.div>
  )
}

function ConfigExample({ title, command, description }: { title: string; command: string; description: string }) {
  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-4">
      <h4 className="mb-2 font-medium text-white">{title}</h4>
      <p className="mb-3 text-sm text-[var(--color-text-muted)]">{description}</p>
      <div className="rounded-lg bg-[var(--panel)] p-3 font-mono text-sm">
        <code className="text-[var(--color-primary)]">{command}</code>
      </div>
    </div>
  )
}

export default function MiningSoftwarePage() {
  // Group by GPU support
  const nvidiaSoftware = miningSoftware.filter((s) => s.supports.includes('NVIDIA'))
  const amdSoftware = miningSoftware.filter((s) => s.supports.includes('AMD'))
  const crossPlatformSoftware = miningSoftware.filter(
    (s) => s.supports.includes('NVIDIA') && s.supports.includes('AMD')
  )

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <Link
                href="/mining"
                className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-white"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Mining
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                Mining Software Guide
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
                Choose the best mining software for Ethereum Classic. All miners listed support the ETChash
                algorithm used by ETC.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Recommendation */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 p-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/10">
                <svg className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white">Quick Recommendation</h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  <strong className="text-green-400">NVIDIA GPU:</strong> T-Rex Miner offers the best performance and stability.{' '}
                  <strong className="text-red-400">AMD GPU:</strong> TeamRedMiner provides optimal hashrates for AMD cards.{' '}
                  <strong className="text-blue-400">Mixed rig:</strong> lolMiner supports both with good performance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Software Cards */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 text-xl font-semibold text-white"
          >
            Available Mining Software
          </motion.h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2"
          >
            {miningSoftware.map((software) => (
              <SoftwareCard key={software.id} software={software} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h2 className="mb-4 text-lg font-semibold text-white">Software Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[var(--border)] text-left text-sm text-[var(--color-text-muted)]">
                    <th className="pb-3 font-medium">Software</th>
                    <th className="pb-3 text-center font-medium">NVIDIA</th>
                    <th className="pb-3 text-center font-medium">AMD</th>
                    <th className="pb-3 text-center font-medium">Fee</th>
                    <th className="pb-3 text-center font-medium">Windows</th>
                    <th className="pb-3 text-center font-medium">Linux</th>
                  </tr>
                </thead>
                <tbody>
                  {miningSoftware.map((software) => (
                    <tr key={software.id} className="border-b border-[var(--border)]/50 last:border-0">
                      <td className="py-3 font-medium text-white">{software.name}</td>
                      <td className="py-3 text-center">
                        {software.supports.includes('NVIDIA') ? (
                          <svg className="mx-auto h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        ) : (
                          <svg className="mx-auto h-5 w-5 text-[var(--color-text-muted)]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </td>
                      <td className="py-3 text-center">
                        {software.supports.includes('AMD') ? (
                          <svg className="mx-auto h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        ) : (
                          <svg className="mx-auto h-5 w-5 text-[var(--color-text-muted)]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </td>
                      <td className="py-3 text-center font-mono text-white">{software.fee}%</td>
                      <td className="py-3 text-center">
                        {software.platforms.includes('Windows') ? (
                          <svg className="mx-auto h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        ) : (
                          <svg className="mx-auto h-5 w-5 text-[var(--color-text-muted)]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </td>
                      <td className="py-3 text-center">
                        {software.platforms.includes('Linux') ? (
                          <svg className="mx-auto h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        ) : (
                          <svg className="mx-auto h-5 w-5 text-[var(--color-text-muted)]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Configuration Examples */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="mb-4 text-xl font-semibold text-white">Configuration Examples</h2>
            <p className="mb-6 text-sm text-[var(--color-text-muted)]">
              Example command lines for each miner. Replace POOL_ADDRESS, POOL_PORT, and WALLET_ADDRESS with your actual values.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <ConfigExample
                title="T-Rex Miner (NVIDIA)"
                command="t-rex -a etchash -o stratum+tcp://POOL_ADDRESS:POOL_PORT -u WALLET_ADDRESS -p x -w worker1"
                description="Optimized for NVIDIA GPUs. Includes web monitoring interface."
              />
              <ConfigExample
                title="lolMiner (AMD/NVIDIA)"
                command="lolMiner --algo ETCHASH --pool POOL_ADDRESS:POOL_PORT --user WALLET_ADDRESS.worker1"
                description="Cross-platform miner supporting both AMD and NVIDIA GPUs."
              />
              <ConfigExample
                title="TeamRedMiner (AMD)"
                command="teamredminer -a etchash -o stratum+tcp://POOL_ADDRESS:POOL_PORT -u WALLET_ADDRESS.worker1 -p x"
                description="Best performance on AMD GPUs. Supports RX and RDNA series."
              />
              <ConfigExample
                title="GMiner (AMD/NVIDIA)"
                command="miner --algo etchash --server POOL_ADDRESS:POOL_PORT --user WALLET_ADDRESS.worker1"
                description="High performance miner with dual mining support."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Optimization Tips */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h2 className="mb-4 text-lg font-semibold text-white">Optimization Tips</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-2 font-medium text-[var(--color-primary)]">NVIDIA GPUs</h3>
                <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Lock memory clock to maximum for best hashrate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Reduce core clock and power limit to improve efficiency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Use MSI Afterburner or nvidia-smi for overclocking</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 font-medium text-red-400">AMD GPUs</h3>
                <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Enable Compute Mode in AMD drivers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Adjust memory timings for additional hashrate gains</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Use MorePowerTool for voltage control on RDNA cards</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Warning */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6"
          >
            <div className="flex items-start gap-4">
              <svg className="h-6 w-6 flex-shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              <div>
                <h3 className="font-semibold text-white">Security Notice</h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  Only download mining software from official sources linked above. Mining software may trigger
                  antivirus warnings due to its nature - these are typically false positives but always verify
                  checksums when available. Never download miners from unofficial sources as they may contain malware.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white">Ready to Start Mining?</h2>
            <p className="mx-auto mt-2 max-w-xl text-[var(--color-text-muted)]">
              Check out our guides for choosing hardware and finding the right pool for your setup.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/mining/hardware"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                Hardware Guide
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/mining/pools"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-colors hover:bg-[var(--bg)]"
              >
                Browse Pools
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
