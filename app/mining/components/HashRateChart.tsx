'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import type { MiningPool } from '../data/mining'

interface HashRateChartProps {
  pools: MiningPool[]
  className?: string
}

// Pool distribution pie chart
export default function HashRateChart({ pools, className = '' }: HashRateChartProps) {
  const [hoveredPool, setHoveredPool] = useState<string | null>(null)

  // Calculate total hashrate percentage for "Other" pools
  const listedHashrate = pools.reduce((sum, pool) => sum + pool.hashShare, 0)
  const otherHashrate = Math.max(0, 100 - listedHashrate)

  const colors = [
    '#3AB83A', // ETC Green (primary)
    '#34d399', // Emerald
    '#22d3ee', // Cyan
    '#a78bfa', // Purple
    '#f472b6', // Pink
    '#fb923c', // Orange
    '#fbbf24', // Amber
    '#64748b', // Slate (for "Other")
  ]

  // Build segments for pie chart
  const segments: { name: string; value: number; color: string; id: string }[] = pools.map((pool, i) => ({
    name: pool.name,
    value: pool.hashShare,
    color: colors[i % colors.length],
    id: pool.id,
  }))

  if (otherHashrate > 0) {
    segments.push({
      name: 'Other Pools',
      value: otherHashrate,
      color: colors[colors.length - 1],
      id: 'other',
    })
  }

  // Calculate SVG arc paths
  const total = segments.reduce((sum, s) => sum + s.value, 0)
  let currentAngle = -90 // Start from top

  const arcs = segments.map((segment) => {
    const angle = (segment.value / total) * 360
    const startAngle = currentAngle
    const endAngle = currentAngle + angle
    currentAngle = endAngle

    const startRad = (startAngle * Math.PI) / 180
    const endRad = (endAngle * Math.PI) / 180

    const x1 = 50 + 40 * Math.cos(startRad)
    const y1 = 50 + 40 * Math.sin(startRad)
    const x2 = 50 + 40 * Math.cos(endRad)
    const y2 = 50 + 40 * Math.sin(endRad)

    const largeArc = angle > 180 ? 1 : 0

    const path = `M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`

    return {
      ...segment,
      path,
      startAngle,
      endAngle,
    }
  })

  return (
    <div className={`rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6 ${className}`}>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white">Network Hashrate Distribution</h3>
        <p className="text-sm text-[var(--color-text-muted)]">
          Approximate pool share of ETC network hashrate
        </p>
      </div>

      <div className="flex flex-col items-center gap-6 md:flex-row">
        {/* Pie Chart */}
        <div className="relative h-48 w-48 flex-shrink-0">
          <svg viewBox="0 0 100 100" className="h-full w-full">
            {arcs.map((arc) => (
              <motion.path
                key={arc.id}
                d={arc.path}
                fill={arc.color}
                className="cursor-pointer transition-opacity"
                style={{
                  opacity: hoveredPool && hoveredPool !== arc.id ? 0.3 : 1,
                }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setHoveredPool(arc.id)}
                onMouseLeave={() => setHoveredPool(null)}
              />
            ))}
            {/* Center circle for donut effect */}
            <circle cx="50" cy="50" r="25" fill="var(--panel)" />
            {/* Center text */}
            <text x="50" y="47" textAnchor="middle" className="fill-white text-[8px] font-bold">
              100%
            </text>
            <text x="50" y="56" textAnchor="middle" className="fill-[var(--color-text-muted)] text-[5px]">
              Network
            </text>
          </svg>
        </div>

        {/* Legend */}
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-2">
            {segments.map((segment) => (
              <div
                key={segment.id}
                className={`flex items-center gap-2 rounded-lg p-2 transition-colors ${
                  hoveredPool === segment.id ? 'bg-[var(--bg)]' : ''
                }`}
                onMouseEnter={() => setHoveredPool(segment.id)}
                onMouseLeave={() => setHoveredPool(null)}
              >
                <div
                  className="h-3 w-3 flex-shrink-0 rounded"
                  style={{ backgroundColor: segment.color }}
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-white">{segment.name}</p>
                  <p className="text-xs text-[var(--color-text-muted)]">{segment.value}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-4 text-center text-xs text-[var(--color-text-muted)]">
        Data from{' '}
        <a
          href="https://miningpoolstats.stream/ethereumclassic"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-primary)] hover:underline"
        >
          MiningPoolStats
        </a>
      </p>
    </div>
  )
}

// Compact hashrate bar visualization
interface HashRateBarProps {
  hashrate: string
  difficulty: string
  blockTime: string
  className?: string
}

export function HashRateBar({ hashrate, difficulty, blockTime, className = '' }: HashRateBarProps) {
  return (
    <div className={`rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 ${className}`}>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]/10">
            <svg className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-[var(--color-text-muted)]">Network Hashrate</p>
            <p className="text-lg font-bold text-white">{hashrate}</p>
          </div>
        </div>
        <div className="hidden h-8 w-px bg-[var(--border)] sm:block" />
        <div className="hidden sm:block">
          <p className="text-sm text-[var(--color-text-muted)]">Difficulty</p>
          <p className="font-semibold text-white">{difficulty}</p>
        </div>
        <div className="hidden h-8 w-px bg-[var(--border)] md:block" />
        <div className="hidden md:block">
          <p className="text-sm text-[var(--color-text-muted)]">Block Time</p>
          <p className="font-semibold text-white">{blockTime}</p>
        </div>
      </div>
    </div>
  )
}

// Animated mining stats display
interface MiningStatProps {
  label: string
  value: string
  icon: React.ReactNode
  highlight?: boolean
}

export function MiningStat({ label, value, icon, highlight = false }: MiningStatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`rounded-xl border p-4 ${
        highlight
          ? 'border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5'
          : 'border-[var(--border)] bg-[var(--panel)]'
      }`}
    >
      <div className="flex items-center gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
          highlight ? 'bg-[var(--color-primary)]/20' : 'bg-[var(--bg)]'
        }`}>
          {icon}
        </div>
        <div>
          <p className="text-sm text-[var(--color-text-muted)]">{label}</p>
          <p className="text-lg font-bold text-white">{value}</p>
        </div>
      </div>
    </motion.div>
  )
}
