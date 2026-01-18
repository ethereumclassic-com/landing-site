'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'

interface StatCardProps {
  label: string
  value: string
  description: string
  icon: React.ReactNode
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

function StatCard({ label, value, description, icon, index }: StatCardProps) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeInUp}
      className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
        {icon}
      </div>
      <div className="text-2xl font-bold text-white md:text-3xl">{value}</div>
      <div className="mt-1 text-sm font-medium text-[var(--color-text-secondary)]">{label}</div>
      <div className="mt-2 text-xs text-[var(--color-text-muted)]">{description}</div>
    </motion.div>
  )
}

const HashrateIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
)

const BlockIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
  </svg>
)

const TimeIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const AddressIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
)

interface NetworkStats {
  price: number
  priceFormatted: string
  blockHeight: number
  blockHeightFormatted: string
  totalTransactions: number
  totalTransactionsFormatted: string
  avgBlockTime: number
  avgBlockTimeFormatted: string
  source: 'blockscout' | 'fallback'
}

// Fallback values based on Jan 2026 network data
const defaultStats = {
  price: 12.75,
  priceFormatted: '$12.75',
  blockHeight: 23820000,
  blockHeightFormatted: '23.8M+',
  totalTransactions: 142000000,
  totalTransactionsFormatted: '142M+',
  avgBlockTime: 13.0,
  avgBlockTimeFormatted: '~13s',
  source: 'fallback' as const,
}

export default function EcosystemStats() {
  const [networkStats, setNetworkStats] = useState<NetworkStats>(defaultStats)
  const [isLive, setIsLive] = useState(false)

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch('/api/network')
        if (response.ok) {
          const data = await response.json()
          setNetworkStats({
            price: data.price,
            priceFormatted: data.priceFormatted,
            blockHeight: data.blockHeight,
            blockHeightFormatted: data.blockHeightFormatted,
            totalTransactions: data.totalTransactions,
            totalTransactionsFormatted: data.totalTransactionsFormatted,
            avgBlockTime: data.avgBlockTime,
            avgBlockTimeFormatted: data.avgBlockTimeFormatted,
            source: data.source,
          })
          setIsLive(data.source === 'blockscout')
        }
      } catch {
        // Keep default stats on error
      }
    }
    fetchStats()
  }, [])

  const stats = [
    {
      label: 'ETC Price',
      value: networkStats.priceFormatted,
      description: 'Current market price',
      icon: <HashrateIcon />,
    },
    {
      label: 'Block Time',
      value: networkStats.avgBlockTimeFormatted,
      description: 'Average confirmation time',
      icon: <TimeIcon />,
    },
    {
      label: 'Total Blocks',
      value: networkStats.blockHeightFormatted,
      description: 'Uninterrupted since 2015',
      icon: <BlockIcon />,
    },
    {
      label: 'Transactions',
      value: networkStats.totalTransactionsFormatted,
      description: 'Total processed on-chain',
      icon: <AddressIcon />,
    },
  ]

  return (
    <section className="px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="mb-2 flex items-center justify-center gap-2">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Network Activity</h2>
            {isLive && (
              <span className="flex items-center gap-1.5 rounded-full bg-green-500/10 px-2 py-0.5 text-xs text-green-400">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                Live
              </span>
            )}
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-secondary)]">
            Statistics from the Ethereum Classic blockchain
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} {...stat} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <Link
            href="/markets"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary)]/80"
          >
            View Full Network Stats
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </motion.div>

        {/* Data source attribution */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 text-center text-xs text-[var(--color-text-muted)]"
        >
          Data from{' '}
          <a
            href="https://etc.blockscout.com/stats"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)] hover:underline"
          >
            Blockscout
          </a>
        </motion.p>
      </div>
    </section>
  )
}
