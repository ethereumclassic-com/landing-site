'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { hardwareManufacturers, miningHardware } from '../../data/mining'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

const brandColors: Record<string, { bg: string; border: string; text: string }> = {
  Bitmain: { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-400' },
  Jasminer: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400' },
  iPollo: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400' },
  Innosilicon: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400' },
  NVIDIA: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400' },
  AMD: { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400' },
}

function ManufacturerCard({ manufacturer }: { manufacturer: typeof hardwareManufacturers[0] }) {
  const colors = brandColors[manufacturer.name] || { bg: 'bg-gray-500/10', border: 'border-gray-500/30', text: 'text-gray-400' }
  const relatedHardware = miningHardware.filter(hw => hw.brand === manufacturer.name)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`rounded-xl border ${colors.border} ${colors.bg} p-6`}
    >
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold text-white">{manufacturer.name}</h3>
          <span className={`inline-flex mt-1 rounded-full px-2 py-0.5 text-xs font-medium ${colors.text} bg-white/5`}>
            {manufacturer.type === 'ASIC' ? 'ASIC Manufacturer' : 'GPU Manufacturer'}
          </span>
        </div>
        <a
          href={manufacturer.website}
          target="_blank"
          rel="noopener noreferrer"
          className={`rounded-lg px-4 py-2 text-sm font-medium ${colors.bg} ${colors.text} border ${colors.border} transition-colors hover:bg-white/10`}
        >
          Visit Store
          <svg aria-hidden="true" className="ml-1 inline-block h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      <p className="mb-4 text-sm text-[var(--color-text-muted)]">{manufacturer.description}</p>

      {relatedHardware.length > 0 && (
        <div className="border-t border-white/10 pt-4">
          <p className="mb-2 text-xs font-medium text-[var(--color-text-muted)]">ETChash-Compatible Products:</p>
          <div className="flex flex-wrap gap-2">
            {relatedHardware.map(hw => (
              <span
                key={hw.id}
                className="rounded-full bg-white/5 px-2 py-1 text-xs text-white"
              >
                {hw.name} ({hw.hashrate} MH/s)
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default function HardwareBuyPage() {
  const asicManufacturers = hardwareManufacturers.filter(m => m.type === 'ASIC')
  const gpuManufacturers = hardwareManufacturers.filter(m => m.type === 'GPU')

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <Link
              href="/mining/hardware"
              className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-white"
            >
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Hardware Guide
            </Link>

            <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Buy Mining Hardware
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
              Purchase ETChash-compatible mining hardware directly from official manufacturer stores.
              Compare ASIC and GPU options for Ethereum Classic mining.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="px-6 pb-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4"
          >
            <div className="flex items-start gap-3">
              <svg aria-hidden="true" className="h-5 w-5 mt-0.5 shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <p className="font-medium text-amber-400">Before You Buy</p>
                <p className="mt-1 text-sm text-amber-400/80">
                  Always verify hardware specifications and calculate profitability before purchasing.
                  Use our <Link href="/mining/profitability" className="underline hover:no-underline">profitability calculator</Link> to
                  estimate returns based on your electricity costs.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ASIC Manufacturers */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-2xl font-bold text-white"
          >
            ASIC Manufacturers
          </motion.h2>
          <p className="mb-6 text-[var(--color-text-muted)]">
            Purpose-built miners designed specifically for ETChash. Highest efficiency and hashrate, but single-purpose hardware.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {asicManufacturers.map(manufacturer => (
              <ManufacturerCard key={manufacturer.id} manufacturer={manufacturer} />
            ))}
          </div>
        </div>
      </section>

      {/* GPU Manufacturers */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-2xl font-bold text-white"
          >
            GPU Manufacturers
          </motion.h2>
          <p className="mb-6 text-[var(--color-text-muted)]">
            Versatile graphics cards that can mine multiple algorithms. Lower efficiency than ASICs but maintain resale value.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {gpuManufacturers.map(manufacturer => (
              <ManufacturerCard key={manufacturer.id} manufacturer={manufacturer} />
            ))}
          </div>
        </div>
      </section>

      {/* Buying Tips */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h3 className="mb-4 text-xl font-bold text-white">Buying Tips</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <p className="font-medium text-[var(--color-primary)]">Buy Direct</p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  Purchase from official manufacturer stores when possible to ensure warranty coverage and authentic hardware.
                </p>
              </div>
              <div>
                <p className="font-medium text-[var(--color-primary)]">Check Availability</p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  Popular models may have wait times. Check multiple manufacturers for the best availability and shipping times.
                </p>
              </div>
              <div>
                <p className="font-medium text-[var(--color-primary)]">Calculate ROI</p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  Factor in hardware cost, electricity rates, and current network difficulty before making a purchase decision.
                </p>
              </div>
              <div>
                <p className="font-medium text-[var(--color-primary)]">Verify Specs</p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  Confirm ETChash support and actual hashrate specifications. Some miners are optimized for specific algorithms.
                </p>
              </div>
              <div>
                <p className="font-medium text-[var(--color-primary)]">Consider Power</p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  Ensure your electrical infrastructure can support the power requirements. ASICs often need 220V circuits.
                </p>
              </div>
              <div>
                <p className="font-medium text-[var(--color-primary)]">Plan Cooling</p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  Mining hardware generates significant heat. Ensure adequate ventilation and cooling in your mining location.
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
              Calculate your expected returns and find the right mining pool for your hardware.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/mining/profitability"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                Calculate Profitability
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

      {/* Disclaimer */}
      <section className="px-6 pt-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-xs text-[var(--color-text-muted)]">
            Links direct to official manufacturer websites. EthereumClassic.com is not affiliated with
            these manufacturers and does not receive commission on purchases. Always do your own research
            before making hardware purchases.
          </p>
        </div>
      </section>
    </main>
  )
}
