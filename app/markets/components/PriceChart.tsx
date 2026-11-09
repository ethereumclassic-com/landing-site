'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import type { ChartRange, PriceSeries } from '@/lib/price-history'

interface PriceChartProps {
  className?: string
}

const RANGES: { label: string; value: ChartRange }[] = [
  { label: '24H', value: '24h' },
  { label: '7D', value: '7d' },
  { label: '30D', value: '30d' },
  { label: '90D', value: '90d' },
  { label: '1Y', value: '1y' },
  { label: 'All', value: 'all' },
]

/** An axis label for a point, at the precision its range needs. Dates are UTC, as the data is. */
function tickLabel(t: number, range: ChartRange): string {
  const d = new Date(t)
  if (range === '24h') return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'UTC' })
  if (range === 'all') return String(d.getUTCFullYear())
  if (range === '1y') return d.toLocaleDateString('en-US', { month: 'short', year: '2-digit', timeZone: 'UTC' })
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' })
}

function pointLabel(t: number, range: ChartRange): string {
  const d = new Date(t)
  if (range === '24h') return `${tickLabel(t, range)} UTC`
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' })
}

const usd = (n: number) => `$${n.toFixed(n < 1 ? 3 : 2)}`

/**
 * ETC/USD price history: CoinGecko up to a year back, Kraken's weekly closes for the full history
 * (lib/price-history). It draws only recorded prices, and says so when a source cannot be reached.
 */
export default function PriceChart({ className = '' }: PriceChartProps) {
  const [range, setRange] = useState<ChartRange>('7d')
  const [series, setSeries] = useState<PriceSeries | null>(null)
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')
  const [hover, setHover] = useState<number | null>(null)

  useEffect(() => {
    let active = true
    queueMicrotask(() => {
      if (!active) return
      setStatus('loading')
      setHover(null)
    })
    fetch(`/api/price/chart?range=${range}`)
      .then((response) => (response.ok ? (response.json() as Promise<PriceSeries>) : Promise.reject(response.status)))
      .then((data) => {
        if (!active) return
        setSeries(data)
        setStatus('ready')
      })
      .catch(() => {
        if (active) setStatus('error')
      })
    return () => {
      active = false
    }
  }, [range])

  const chartWidth = 600
  const chartHeight = 200
  const padding = 20
  const points = status === 'ready' && series ? series.points : []
  const prices = points.map((p) => p.price)
  const maxPrice = prices.length ? Math.max(...prices) : 0
  const minPrice = prices.length ? Math.min(...prices) : 0
  const priceRange = maxPrice - minPrice || 1
  const plotted = points.map((p, i) => ({
    x: padding + (i / Math.max(points.length - 1, 1)) * (chartWidth - padding * 2),
    y: chartHeight - padding - ((p.price - minPrice) / priceRange) * (chartHeight - padding * 2),
  }))
  const pathD = plotted.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')
  const areaPathD = plotted.length
    ? `${pathD} L ${plotted[plotted.length - 1].x} ${chartHeight - padding} L ${padding} ${chartHeight - padding} Z`
    : ''
  const first = points[0]?.price ?? 0
  const last = points[points.length - 1]?.price ?? 0
  const change = last - first
  const isUp = change >= 0
  const strokeColor = isUp ? 'var(--color-success)' : 'var(--color-error)'
  const fillColor = isUp ? 'var(--color-success-bg)' : 'var(--color-error-bg)'
  const ticks = points.length ? [0, 0.25, 0.5, 0.75, 1].map((f) => points[Math.round(f * (points.length - 1))]) : []
  const hovered = hover !== null ? points[hover] : null

  return (
    <div className={`rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-4 md:p-6 ${className}`}>
      {/* Header */}
      <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[var(--text-primary)]">Price Chart</h3>
          <p className="text-sm text-[var(--color-text-muted)]">
            {hovered
              ? `${usd(hovered.price)} on ${pointLabel(hovered.t, range)}`
              : range === 'all'
                ? 'ETC/USD since July 2016, weekly closes on Kraken'
                : 'ETC/USD from CoinGecko'}
          </p>
        </div>
        <div className="flex rounded-lg border border-[var(--border)] bg-[var(--bg)] p-1">
          {RANGES.map((option) => (
            <button
              key={option.value}
              onClick={() => setRange(option.value)}
              className={`rounded px-3 py-1.5 text-sm font-medium transition ${
                range === option.value
                  ? 'bg-[var(--color-primary)] text-[var(--brand-green-foreground)]'
                  : 'text-[var(--color-text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      {status !== 'ready' ? (
        <div className="flex h-48 items-center justify-center rounded-lg bg-[var(--bg)] md:h-64">
          <p className={`text-sm text-[var(--color-text-muted)] ${status === 'loading' ? 'animate-pulse' : ''}`}>
            {status === 'loading' ? 'Loading price history…' : 'Price history is unavailable right now.'}
          </p>
        </div>
      ) : (
        <motion.div key={range} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="relative">
          <svg
            aria-label={`ETC/USD price, ${tickLabel(points[0].t, range)} to ${tickLabel(points[points.length - 1].t, range)}`}
            role="img"
            viewBox={`0 0 ${chartWidth} ${chartHeight}`}
            className="h-48 w-full md:h-64"
            preserveAspectRatio="none"
            onMouseMove={(event) => {
              const box = event.currentTarget.getBoundingClientRect()
              const x = ((event.clientX - box.left) / box.width) * chartWidth
              const ratio = (x - padding) / (chartWidth - padding * 2)
              setHover(Math.min(points.length - 1, Math.max(0, Math.round(ratio * (points.length - 1)))))
            }}
            onMouseLeave={() => setHover(null)}
          >
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
            <path d={areaPathD} fill={fillColor} />
            <path d={pathD} fill="none" stroke={strokeColor} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
            {hover !== null && plotted[hover] && (
              <line x1={plotted[hover].x} y1={padding} x2={plotted[hover].x} y2={chartHeight - padding} stroke="var(--color-text-muted)" strokeDasharray="2 3" vectorEffect="non-scaling-stroke" />
            )}
          </svg>

          {/* X-axis labels */}
          <div className="mt-2 flex justify-between px-5 text-xs text-[var(--color-text-muted)]">
            {ticks.map((point, i) => (
              <span key={i} className={i !== 0 && i !== ticks.length - 1 ? 'hidden sm:inline' : ''}>
                {tickLabel(point.t, range)}
              </span>
            ))}
          </div>

          {/* Price range labels */}
          <div className="pointer-events-none absolute left-0 top-0 flex h-48 flex-col justify-between py-3 text-xs text-[var(--color-text-muted)] md:h-64">
            <span>{usd(maxPrice)}</span>
            <span>{usd((maxPrice + minPrice) / 2)}</span>
            <span>{usd(minPrice)}</span>
          </div>
        </motion.div>
      )}

      {/* Footer */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-[var(--border)] pt-4">
        <div className="flex flex-wrap items-center gap-4 text-sm">
          {status === 'ready' && (
            <>
              <span className="text-[var(--color-text-muted)]">
                Range: <span className="text-[var(--text-primary)]">{usd(minPrice)} to {usd(maxPrice)}</span>
              </span>
              <span className={isUp ? 'text-[var(--color-success)]' : 'text-[var(--color-error)]'}>
                {isUp ? '+' : '−'}
                {usd(Math.abs(change))} ({isUp ? '+' : '−'}
                {Math.abs(first > 0 ? (change / first) * 100 : 0).toFixed(2)}%)
              </span>
              {series && <span className="text-xs text-[var(--color-text-muted)]">Source: {series.sourceLabel}</span>}
            </>
          )}
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
