'use client'

import { useEffect, useState } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { usePrice } from '@/app/hooks/usePrice'

type Range = '1D' | '7D' | '30D'

const RANGE_DAYS: Record<Range, number> = { '1D': 1, '7D': 7, '30D': 30 }
const RANGES: Range[] = ['1D', '7D', '30D']

interface PricePoint {
  timestamp: string
  price: number
}

function PriceTooltip({
  active,
  payload,
}: {
  active?: boolean
  payload?: Array<{ payload?: PricePoint }>
}) {
  if (!active || !payload?.[0]?.payload) return null
  const d = payload[0].payload
  return (
    <div className="rounded-md border border-[var(--border)] bg-[var(--panel)] px-2.5 py-1.5 text-xs shadow-lg">
      <div className="font-semibold text-[var(--text-primary)]">
        ${d.price.toFixed(2)}
      </div>
      <div className="mt-0.5 text-[var(--color-text-muted)]">
        {new Date(d.timestamp).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })}
      </div>
    </div>
  )
}

export default function EtcPriceSection() {
  const {
    priceFormatted,
    change24h,
    changeFormatted,
    marketCapFormatted,
    volumeFormatted,
    loading: priceLoading,
  } = usePrice('usd')

  const [chartData, setChartData] = useState<PricePoint[]>([])
  const [range, setRange] = useState<Range>('7D')
  const [chartLoading, setChartLoading] = useState(true)

  const isPositive = (change24h ?? 0) >= 0

  useEffect(() => {
    let cancelled = false
    fetch(`/api/price/history?days=${RANGE_DAYS[range]}&currency=usd`)
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled) setChartData(data.prices ?? [])
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setChartLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [range])

  return (
    <div className="flex flex-col rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
      {/* Header row: label + range selector */}
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--color-text-muted)]">
            ETC / USD
          </p>
          <div className="mt-1.5 flex items-baseline gap-2.5">
            {priceLoading ? (
              <div className="h-8 w-24 animate-pulse rounded bg-[var(--border)]" />
            ) : (
              <>
                <span className="text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                  {priceFormatted}
                </span>
                <span
                  className={`flex items-center gap-0.5 text-sm font-semibold ${
                    isPositive ? 'text-emerald-400' : 'text-red-400'
                  }`}
                >
                  <svg
                    aria-hidden="true"
                    className={`h-3.5 w-3.5 ${isPositive ? '' : 'rotate-180'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {changeFormatted}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Range buttons */}
        <div className="flex gap-0.5 rounded-lg border border-[var(--border)] p-0.5">
          {RANGES.map((r) => (
            <button
              key={r}
              onClick={() => {
                if (r === range) return
                setChartLoading(true)
                setRange(r)
              }}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                range === r
                  ? 'bg-[var(--color-primary)]/20 text-[var(--color-primary)]'
                  : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]'
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="h-36">
        {chartLoading ? (
          <div className="h-full animate-pulse rounded-lg bg-[var(--border)]/50" />
        ) : chartData.length === 0 ? (
          <div className="flex h-full items-center justify-center rounded-lg border border-[var(--border)] text-xs text-[var(--color-text-muted)]">
            Price history is temporarily unavailable.
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="priceGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="timestamp" hide />
              <YAxis hide domain={['auto', 'auto']} />
              <Tooltip
                content={<PriceTooltip />}
                cursor={{ stroke: 'var(--color-primary)', strokeWidth: 1, strokeDasharray: '4 4' }}
              />
              <Area
                type="monotone"
                dataKey="price"
                stroke="var(--color-primary)"
                strokeWidth={1.5}
                fill="url(#priceGrad)"
                dot={false}
                activeDot={{ r: 3, fill: 'var(--color-primary)', strokeWidth: 0 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Market stats */}
      <div className="mt-4 grid grid-cols-3 gap-3 border-t border-[var(--border)] pt-4">
        <div>
          <p className="text-xs text-[var(--color-text-muted)]">Market Cap</p>
          {priceLoading ? (
            <div className="mt-1 h-4 w-16 animate-pulse rounded bg-[var(--border)]" />
          ) : (
            <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
              {marketCapFormatted}
            </p>
          )}
        </div>
        <div>
          <p className="text-xs text-[var(--color-text-muted)]">24h Volume</p>
          {priceLoading ? (
            <div className="mt-1 h-4 w-14 animate-pulse rounded bg-[var(--border)]" />
          ) : (
            <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
              {volumeFormatted}
            </p>
          )}
        </div>
        <div>
          <p className="text-xs text-[var(--color-text-muted)]">Circulating</p>
          <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">148.3M ETC</p>
        </div>
      </div>

      {/* CoinGecko attribution */}
      <p className="mt-3 text-right text-[10px] text-[var(--color-text-muted)]">
        Data:{' '}
        <a
          href="https://www.coingecko.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--color-primary)]"
        >
          CoinGecko
        </a>
      </p>
    </div>
  )
}
