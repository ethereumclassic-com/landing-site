'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

const strandedUseCases = [
  {
    title: 'Remote Hydroelectric',
    description:
      'Mountain rivers and remote streams produce power with no transmission link to population centers. Mining hardware shipped to site earns revenue from day one, with no grid connection required.',
    color: '#38bdf8',
  },
  {
    title: 'Flared Gas / Wellhead Gas',
    description:
      'Associated gas at oil wells is routinely flared due to lack of pipelines. Containerized mining at the wellhead converts otherwise wasted BTUs into economic output while reducing methane emissions.',
    color: '#F59E0B',
  },
  {
    title: 'Curtailed Wind and Solar',
    description:
      'Renewables regularly produce more power than grids can absorb. Mining provides elastic demand that absorbs curtailment, improving project economics and accelerating renewable deployment.',
    color: '#00ffae',
  },
  {
    title: 'Off-Peak Industrial Power',
    description:
      'Industrial facilities carry transmission fees for peak capacity 24/7. Mining during off-peak hours uses contracted-but-unused capacity, reducing effective energy costs.',
    color: '#a78bfa',
  },
  {
    title: 'Landfill Gas',
    description:
      'Decomposing waste produces methane continuously. Mining at landfill sites monetizes gas that would otherwise be vented or burned, turning waste infrastructure into revenue-generating assets.',
    color: '#F59E0B',
  },
  {
    title: 'Geothermal',
    description:
      'Geothermal resources in seismically active regions (Iceland, Kenya, Indonesia) often lack transmission to major markets. Proof-of-Work mining is the natural first customer.',
    color: '#38bdf8',
  },
]

const energyMechanics = [
  {
    label: 'When energy is cheap',
    detail:
      'Mining profitability rises, driving up hash rate and energy consumption. Stranded power finds a buyer.',
  },
  {
    label: 'When energy is expensive',
    detail:
      'Miners curtail operations, freeing capacity for other uses. The network self-regulates without central coordination.',
  },
  {
    label: '24/7 price discovery',
    detail:
      'With 300+ exchanges across every time zone, ETC markets never close (unlike energy futures, which halt on weekends).',
  },
  {
    label: 'Local currency signals',
    detail:
      'Fiat pairs across 11 currencies let energy producers in any market price their output in local terms.',
  },
]

export default function EnvironmentalImpactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ffae]/8 blur-[100px]" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#00ffae]/30 bg-[#00ffae]/10 px-4 py-1.5 text-sm font-medium text-[#00ffae]">
              Energy &amp; Sustainability
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl lg:text-6xl"
          >
            Proof-of-Work as{' '}
            <span className="bg-gradient-to-r from-[#00ffae] to-emerald-300 bg-clip-text text-transparent">
              Energy Infrastructure
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]"
          >
            Mining is not waste. It is programmable demand. Ethereum Classic&apos;s Proof-of-Work
            network functions as a global, 24/7, permissionless buyer of last resort for stranded
            and excess energy worldwide.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-8 grid gap-4 sm:grid-cols-3"
          >
            {[
              { value: 'Largest PoW', label: 'with native smart contracts', detail: 'Full Solidity EVM on PoW consensus' },
              { value: '24/7', label: 'Global energy demand signal', detail: 'Continuous, permissionless, every time zone' },
              { value: 'Any Scale', label: 'Stranded energy monetization', detail: 'Retail GPU through institutional ASIC' },
            ].map((stat) => (
              <div
                key={stat.value}
                className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4"
              >
                <p className="text-xl font-bold text-[var(--text-primary)]">{stat.value}</p>
                <p className="mt-0.5 text-xs font-medium text-[#00ffae]">{stat.label}</p>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">{stat.detail}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Stranded Energy Use Cases */}
      <section className="border-t border-[var(--border)] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-[var(--text-primary)]">
              Stranded Energy: The Global Opportunity
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-2 max-w-3xl text-[var(--color-text-muted)]">
              Proof-of-Work mining is one of the few industries that can physically relocate to
              where energy is wasted. Remote hydro with no transmission line, gas that would be
              flared at the wellhead, renewables that overproduce at night: PoW mining converts all
              of it into economic output.
            </motion.p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {strandedUseCases.map((useCase) => (
                <motion.div
                  key={useCase.title}
                  variants={fadeInUp}
                  className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 transition hover:border-[#00ffae]/20"
                >
                  <div className="mb-3 h-0.5 w-8 rounded-full" style={{ backgroundColor: useCase.color }} />
                  <h3 className="text-sm font-semibold text-[var(--text-primary)]">{useCase.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--color-text-muted)]">
                    {useCase.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ETC as Energy Market */}
      <section className="border-y border-[var(--border)] bg-[var(--panel)] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <span className="font-mono text-xs uppercase tracking-widest text-[#00ffae]">
                Price Discovery
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="mt-3 text-2xl font-bold text-[var(--text-primary)]">
              ETC/USD: A Global 24/7 Energy Proxy
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-2 text-[var(--color-text-muted)]">
              Mining profitability is a direct function of ETC price, block reward, and energy
              cost. ETC financial markets are therefore a continuous, real-time signal about energy
              value worldwide: the first always-open, globally accessible energy commodity market.
            </motion.p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {energyMechanics.map((item) => (
                <motion.div
                  key={item.label}
                  variants={fadeInUp}
                  className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5"
                >
                  <p className="text-sm font-semibold text-[var(--text-primary)]">{item.label}</p>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--color-text-muted)]">{item.detail}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 rounded-xl border border-[#00ffae]/30 bg-[#00ffae]/5 p-6 text-sm text-[var(--color-text-secondary)]"
            >
              <span className="font-semibold text-[var(--text-primary)]">Historical context: </span>
              ETC/USD spot markets have operated continuously since 2016, making them one of the
              longest-running fiat price discovery mechanisms in the asset class. As global energy
              markets mature toward 24/7 marginal-cost pricing, Proof-of-Work networks represent
              the first fully liquid, globally accessible, always-open energy commodity market.
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Documentary + CTA */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-text-muted)]">
                Featured Documentary
              </p>
              <p className="mt-2 text-lg font-semibold text-[var(--text-primary)]">
                Dirty Coin: The Bitcoin Mining Documentary
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                69 minutes. Filmed over three years across four continents, from rural Texas to the
                mountains of Malawi. Director Alana Mediavilla documents how Proof-of-Work mining
                is reshaping energy economics and creating socio-economic opportunity in communities
                that the traditional grid has never reached. Winner, Best National Documentary,
                Puerto Rico Film Festival 2025.
              </p>
              <a
                href="https://www.dirtycointhemovie.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-medium text-[#00ffae] transition hover:text-[#00ffae]/80"
              >
                dirtycointhemovie.com →
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/regulation"
                className="inline-flex items-center gap-2 rounded-xl bg-[#00ffae] px-6 py-3 font-medium text-black transition-all hover:bg-[#00ffae]/90"
              >
                Regulatory Framework
              </Link>
              <Link
                href="/investment-products"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-all hover:border-[#00ffae]/30"
              >
                Investment Products
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
