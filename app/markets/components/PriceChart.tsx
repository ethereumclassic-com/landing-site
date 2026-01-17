'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

type TimeRange = '24h' | '7d' | '30d' | '90d' | '1y' | 'all'

interface PriceChartProps {
  className?: string
}

// Sample data points for visual demonstration
// In production, this would be fetched from an API
const sampleData: Record<TimeRange, { time: string; price: number }[]> = {
  '24h': [
    { time: '00:00', price: 17.8 },
    { time: '04:00', price: 17.95 },
    { time: '08:00', price: 18.1 },
    { time: '12:00', price: 18.25 },
    { time: '16:00', price: 18.15 },
    { time: '20:00', price: 18.35 },
    { time: 'Now', price: 18.42 },
  ],
  '7d': [
    { time: 'Mon', price: 17.2 },
    { time: 'Tue', price: 17.5 },
    { time: 'Wed', price: 17.8 },
    { time: 'Thu', price: 18.1 },
    { time: 'Fri', price: 17.9 },
    { time: 'Sat', price: 18.2 },
    { time: 'Sun', price: 18.42 },
  ],
  '30d': [
    { time: 'Week 1', price: 16.5 },
    { time: 'Week 2', price: 17.2 },
    { time: 'Week 3', price: 17.8 },
    { time: 'Week 4', price: 18.42 },
  ],
  '90d': [
    { time: 'Oct', price: 15.0 },
    { time: 'Nov', price: 16.5 },
    { time: 'Dec', price: 17.8 },
    { time: 'Jan', price: 18.42 },
  ],
  '1y': [
    { time: 'Jan', price: 14.0 },
    { time: 'Mar', price: 16.0 },
    { time: 'May', price: 20.0 },
    { time: 'Jul', price: 18.0 },
    { time: 'Sep', price: 15.0 },
    { time: 'Nov', price: 17.0 },
    { time: 'Jan', price: 18.42 },
  ],
  all: [
    { time: '2016', price: 0.75 },
    { time: '2017', price: 15.0 },
    { time: '2018', price: 35.0 },
    { time: '2019', price: 5.0 },
    { time: '2020', price: 8.0 },
    { time: '2021', price: 120.0 },
    { time: '2022', price: 25.0 },
    { time: '2023', price: 20.0 },
    { time: '2024', price: 25.0 },
    { time: '2025', price: 18.42 },
  ],
}

export default function PriceChart({ className = '' }: PriceChartProps) {
  const [timeRange, setTimeRange] = useState<TimeRange>('7d')

  const data = sampleData[timeRange]
  const maxPrice = Math.max(...data.map((d) => d.price))
  const minPrice = Math.min(...data.map((d) => d.price))
  const priceRange = maxPrice - minPrice || 1

  // Calculate chart path for SVG
  const chartWidth = 600
  const chartHeight = 200
  const padding = 20

  const points = data.map((d, i) => {
    const x = padding + (i / (data.length - 1)) * (chartWidth - padding * 2)
    const y = chartHeight - padding - ((d.price - minPrice) / priceRange) * (chartHeight - padding * 2)
    return { x, y, ...d }
  })

  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')
  const areaPathD = `${pathD} L ${points[points.length - 1].x} ${chartHeight - padding} L ${padding} ${chartHeight - padding} Z`

  // Calculate if price is up or down
  const priceChange = data[data.length - 1].price - data[0].price
  const isUp = priceChange >= 0
  const strokeColor = isUp ? '#34d399' : '#f87171'
  const fillColor = isUp ? 'rgba(52, 211, 153, 0.1)' : 'rgba(248, 113, 113, 0.1)'

  const timeRanges: { label: string; value: TimeRange }[] = [
    { label: '24H', value: '24h' },
    { label: '7D', value: '7d' },
    { label: '30D', value: '30d' },
    { label: '90D', value: '90d' },
    { label: '1Y', value: '1y' },
    { label: 'All', value: 'all' },
  ]

  return (
    <div className={`rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-4 md:p-6 ${className}`}>
      {/* Header */}
      <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">Price Chart</h3>
          <p className="text-sm text-[var(--color-text-muted)]">
            ETC/USD historical price data
          </p>
        </div>
        <div className="flex rounded-lg border border-[var(--border)] bg-[var(--bg)] p-1">
          {timeRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => setTimeRange(range.value)}
              className={`rounded px-3 py-1.5 text-sm font-medium transition ${
                timeRange === range.value
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'text-[var(--color-text-muted)] hover:text-white'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <motion.div
        key={timeRange}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        <svg
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          className="h-48 w-full md:h-64"
          preserveAspectRatio="none"
        >
          {/* Grid lines */}
          {[0.25, 0.5, 0.75].map((ratio) => (
            <line
              key={ratio}
              x1={padding}
              y1={padding + ratio * (chartHeight - padding * 2)}
              x2={chartWidth - padding}
              y2={padding + ratio * (chartHeight - padding * 2)}
              stroke="var(--border)"
              strokeDasharray="4 4"
            />
          ))}

          {/* Area fill */}
          <path d={areaPathD} fill={fillColor} />

          {/* Line */}
          <path d={pathD} fill="none" stroke={strokeColor} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />

          {/* Data points */}
          {points.map((point, i) => (
            <circle key={i} cx={point.x} cy={point.y} r={4} fill={strokeColor} className="opacity-0 transition-opacity hover:opacity-100" />
          ))}
        </svg>

        {/* X-axis labels */}
        <div className="mt-2 flex justify-between px-5 text-xs text-[var(--color-text-muted)]">
          {data.map((d, i) => (
            <span key={i} className={i !== 0 && i !== data.length - 1 ? 'hidden sm:inline' : ''}>
              {d.time}
            </span>
          ))}
        </div>

        {/* Price range labels */}
        <div className="absolute left-0 top-0 flex h-48 flex-col justify-between py-3 text-xs text-[var(--color-text-muted)] md:h-64">
          <span>${maxPrice.toFixed(2)}</span>
          <span>${((maxPrice + minPrice) / 2).toFixed(2)}</span>
          <span>${minPrice.toFixed(2)}</span>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-[var(--border)] pt-4">
        <div className="flex items-center gap-4 text-sm">
          <span className="text-[var(--color-text-muted)]">
            Range: <span className="text-white">${minPrice.toFixed(2)} - ${maxPrice.toFixed(2)}</span>
          </span>
          <span className={`flex items-center gap-1 ${isUp ? 'text-emerald-400' : 'text-red-400'}`}>
            {isUp ? (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            )}
            {isUp ? '+' : ''}
            {priceChange.toFixed(2)} ({((priceChange / data[0].price) * 100).toFixed(2)}%)
          </span>
        </div>
        <a
          href="https://www.tradingview.com/symbols/ETCUSD/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[var(--color-primary)] transition hover:underline"
        >
          View on TradingView →
        </a>
      </div>
    </div>
  )
}

// Compact sparkline version for use in cards
interface SparklineProps {
  data: number[]
  width?: number
  height?: number
  className?: string
}

export function Sparkline({ data, width = 100, height = 30, className = '' }: SparklineProps) {
  if (data.length < 2) return null

  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1

  const points = data.map((value, i) => {
    const x = (i / (data.length - 1)) * width
    const y = height - ((value - min) / range) * height
    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`
  }).join(' ')

  const isUp = data[data.length - 1] >= data[0]
  const strokeColor = isUp ? '#34d399' : '#f87171'

  return (
    <svg width={width} height={height} className={className}>
      <path d={points} fill="none" stroke={strokeColor} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
