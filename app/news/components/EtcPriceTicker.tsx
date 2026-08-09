'use client'

import Link from 'next/link'
import { usePrice } from '@/app/hooks/usePrice'

/**
 * A slim market strip for the top of the news page.
 *
 * This replaces EtcPriceSection, which was a full card with a 7-day area chart,
 * and it drops the chart deliberately rather than for space:
 *
 *   `/api/price/history` does not return price history. It returns a
 *   `Math.random()` walk seeded from a hardcoded `basePrice = 25.42`, freshly
 *   generated per request. That is why the chart read ~$24 while the header,
 *   which uses the real CoinGecko figure via usePrice, read $6.52 on the same
 *   screen. Rendering an invented market chart on a public crypto site is a
 *   content-integrity problem, not a cosmetic one, so nothing here draws one
 *   until a real series is wired up.
 *
 * Everything below comes from `/api/price`, which is real.
 *
 * It is also a strip rather than a card because a news page should lead with
 * news. The old card held the hero slot next to a 1300px sidebar and, being only
 * ~370px tall, left roughly 950px of empty column beside it.
 */
export default function EtcPriceTicker() {
  const {
    priceFormatted,
    change24h,
    changeFormatted,
    marketCapFormatted,
    volumeFormatted,
    loading,
  } = usePrice('usd')

  const isPositive = (change24h ?? 0) >= 0

  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-4 py-3">
      <div className="flex items-baseline gap-2.5">
        <span className="font-mono text-[10px] font-medium uppercase tracking-widest text-[var(--color-text-muted)]">
          ETC/USD
        </span>
        {loading ? (
          <span className="h-5 w-16 animate-pulse rounded bg-[var(--border)]" />
        ) : (
          <>
            <span className="text-lg font-bold tabular-nums tracking-tight text-[var(--text-primary)]">
              {priceFormatted}
            </span>
            <span
              className={`flex items-center gap-0.5 text-xs font-semibold tabular-nums ${
                isPositive ? 'text-[var(--color-success)]' : 'text-[var(--color-error)]'
              }`}
            >
              <svg
                aria-hidden="true"
                className={`h-3 w-3 ${isPositive ? '' : 'rotate-180'}`}
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

      <div className="hidden h-4 w-px bg-[var(--border)] sm:block" aria-hidden />

      <dl className="flex flex-wrap items-baseline gap-x-6 gap-y-1 text-xs">
        <div className="flex items-baseline gap-1.5">
          <dt className="text-[var(--color-text-muted)]">Market cap</dt>
          <dd className="font-semibold tabular-nums text-[var(--text-primary)]">
            {loading ? '—' : marketCapFormatted}
          </dd>
        </div>
        <div className="flex items-baseline gap-1.5">
          <dt className="text-[var(--color-text-muted)]">24h volume</dt>
          <dd className="font-semibold tabular-nums text-[var(--text-primary)]">
            {loading ? '—' : volumeFormatted}
          </dd>
        </div>
      </dl>

      <Link
        href="/price"
        className="ml-auto flex items-center gap-1 text-xs font-medium text-[var(--color-primary)] transition-opacity hover:opacity-80"
      >
        Markets
        <svg aria-hidden="true" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </Link>
    </div>
  )
}
