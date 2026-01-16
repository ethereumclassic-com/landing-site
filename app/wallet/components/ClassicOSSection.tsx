'use client'

import { motion } from 'framer-motion'

interface ModuleCardProps {
  module: string
  title: string
  description: string
  icon: React.ReactNode
}

function ModuleCard({ module, title, description, icon }: ModuleCardProps) {
  return (
    <div className="rounded-xl border border-[var(--border-soft)] bg-[var(--panel)] p-5">
      <div className="mb-3 text-2xl">{icon}</div>
      <div className="mb-1 text-xs font-semibold text-[var(--etc)]">{module}</div>
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/60">{description}</p>
    </div>
  )
}

const PickaxeIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
  </svg>
)

const ChartIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
)

const RocketIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
)

const MarketIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
  </svg>
)

export default function ClassicOSSection() {
  const modules = [
    {
      module: 'Produce',
      title: 'Create Capital',
      description: 'Mining OS with payout detection and direct pathway to DeFi',
      icon: <PickaxeIcon />,
    },
    {
      module: 'Portfolio',
      title: 'Observe Capital',
      description: 'Unified dashboard, transaction history, P&L tracking',
      icon: <ChartIcon />,
    },
    {
      module: 'Deploy',
      title: 'Allocate Capital',
      description: 'Automated position management, liquidation protection',
      icon: <RocketIcon />,
    },
    {
      module: 'Markets',
      title: 'Access Liquidity',
      description: 'DEX aggregation, stablecoin access, fiat on-ramps',
      icon: <MarketIcon />,
    },
  ]

  return (
    <section className="border-y border-emerald-900/30 bg-emerald-900/10 px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-2xl font-bold md:text-3xl">
            Classic OS: Your Control Plane for ETC
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Classic OS is not a wallet - it&apos;s a complete economic operating system that works WITH your wallet.
            Think of it as the control plane for all your ETC economic activity.
          </p>
          <a
            href="https://app.classicos.org"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-xl border border-emerald-300/30 bg-emerald-400/15 px-6 py-3 font-medium text-white transition hover:bg-emerald-400/20"
          >
            Launch Classic OS
          </a>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((module) => (
            <ModuleCard key={module.module} {...module} />
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-[var(--border-soft)] bg-[var(--panel)] p-6">
          <p className="text-center text-sm text-white/70">
            <strong className="text-white">Works with any wallet:</strong> MetaMask, Ledger, Trezor, and more.
            Classic OS connects to your existing wallet for secure transaction signing.
          </p>
        </div>
      </div>
    </section>
  )
}
