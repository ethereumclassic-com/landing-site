'use client'

import { motion } from 'framer-motion'

interface StatProps {
  label: string
  value: string
  icon: React.ReactNode
}

function Stat({ label, value, icon }: StatProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
        {icon}
      </div>
      <div>
        <div className="text-xl font-bold text-white md:text-2xl">{value}</div>
        <div className="text-sm text-[var(--color-text-muted)]">{label}</div>
      </div>
    </div>
  )
}

const ClockIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const UserIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
)

const ServerIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
  </svg>
)

const ChartIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
  </svg>
)

export default function StatsStrip() {
  const stats = [
    { label: 'Years Running', value: '9+ Years', icon: <ClockIcon /> },
    { label: 'Active Addresses', value: '1M+', icon: <UserIcon /> },
    { label: 'Network Hashrate', value: '200+ TH/s', icon: <ServerIcon /> },
    { label: 'Daily Transactions', value: '50k+', icon: <ChartIcon /> },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="border-y border-[var(--border)] bg-[var(--panel)] py-12"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}
