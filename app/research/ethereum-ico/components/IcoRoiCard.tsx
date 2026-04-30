'use client'

import { useState } from 'react'
import type { ExchangeRates } from '@/lib/exchange-rates'
import { ETH_ICO_PRICE_USD, ETH_ICO_PRICE_BTC, ETH_ICO_ROI_REFERENCE } from '@/app/research/data/ethereumIco'

const CURRENCY_LABELS: Record<string, string> = {
  usd: 'USD', btc: 'BTC', eur: 'EUR', gbp: 'GBP', jpy: 'JPY',
  krw: 'KRW', cad: 'CAD', aud: 'AUD', try: 'TRY', brl: 'BRL',
  cny: 'CNY', inr: 'INR', rub: 'RUB',
}

const CURRENCY_SYMBOLS: Record<string, string> = {
  usd: '$', btc: '₿', eur: '€', gbp: '£', jpy: '¥',
  krw: '₩', cad: 'CA$', aud: 'AU$', try: '₺', brl: 'R$',
  cny: '¥', inr: '₹', rub: '₽',
}

const PRIMARY_CURRENCIES = ['usd', 'btc', 'eur', 'gbp', 'jpy'] as const
const MORE_CURRENCIES = ['krw', 'cad', 'aud', 'try', 'brl', 'cny', 'inr', 'rub'] as const

interface RoiData {
  ethMultiplier: number
  etcMultiplier: number
  ethValue100: number   // what $100 of ETH (324.7 ETH) is worth today in selected currency
  etcValue100: number   // what $100 of ETC (324.7 ETC) is worth today in selected currency
  ethBtcMultiplier?: number  // BTC-basis multiplier (only meaningful when BTC selected)
  etcBtcMultiplier?: number
  symbol: string
  isBtc: boolean
  isFiat: boolean
}

function computeRoi(currency: string, rates: ExchangeRates): RoiData {
  const tokensPerHundred = 100 / ETH_ICO_PRICE_USD  // ~324.7 tokens per $100 invested
  const symbol = CURRENCY_SYMBOLS[currency] ?? currency.toUpperCase()
  const isBtc = currency === 'btc'
  const isFiat = !isBtc && currency !== 'bnb'

  if (isBtc) {
    const ethBtc = rates.btc_usd > 0 ? rates.eth_usd / rates.btc_usd : 0
    const etcBtc = rates.btc_usd > 0 ? (rates.etc.usd ?? 0) / rates.btc_usd : 0

    const ethMultiplier = ethBtc / ETH_ICO_PRICE_BTC
    const etcMultiplier = etcBtc / ETH_ICO_PRICE_BTC

    // Also compute USD-basis multipliers for secondary display
    const ethUsdMult = rates.eth_usd / ETH_ICO_PRICE_USD
    const etcUsdMult = (rates.etc.usd ?? 0) / ETH_ICO_PRICE_USD

    return {
      ethMultiplier,
      etcMultiplier,
      ethValue100: tokensPerHundred * ethBtc,   // BTC value of 324.7 ETH
      etcValue100: tokensPerHundred * etcBtc,
      ethBtcMultiplier: ethUsdMult,              // reuse slot: show USD mult as secondary
      etcBtcMultiplier: etcUsdMult,
      symbol,
      isBtc: true,
      isFiat: false,
    }
  }

  // Fiat currencies — multiplier vs USD ICO price (same numerically, value in local currency)
  const ethUsd = rates.eth_usd
  const etcUsd = rates.etc.usd ?? 0
  const fiatRate = rates.fiat_to_usd[currency] ?? 1  // local units per USD

  const ethLocal = ethUsd * fiatRate
  const etcLocal = etcUsd * fiatRate
  const costBasisLocal = ETH_ICO_PRICE_USD * fiatRate

  return {
    ethMultiplier: ethLocal / costBasisLocal,
    etcMultiplier: etcLocal / costBasisLocal,
    ethValue100: tokensPerHundred * ethLocal,
    etcValue100: tokensPerHundred * etcLocal,
    symbol,
    isBtc: false,
    isFiat,
  }
}

function formatMultiplier(n: number): string {
  if (n >= 1000) return `×${Math.round(n).toLocaleString()}`
  if (n >= 10) return `×${n.toFixed(1)}`
  return `×${n.toFixed(2)}`
}

function formatValue(value: number, currency: string, symbol: string): string {
  if (currency === 'btc') {
    return `₿${value.toFixed(value >= 1 ? 2 : 4)}`
  }
  if (value >= 1_000_000) return `${symbol}${(value / 1_000_000).toFixed(2)}M`
  if (value >= 1_000) return `${symbol}${Math.round(value).toLocaleString()}`
  return `${symbol}${value.toFixed(2)}`
}

export default function IcoRoiCard({ rates }: { rates: ExchangeRates }) {
  const [currency, setCurrency] = useState('usd')
  const [showMore, setShowMore] = useState(false)

  const roi = computeRoi(currency, rates)
  const symbol = CURRENCY_SYMBOLS[currency] ?? currency.toUpperCase()

  const costBasisCaption = currency === 'btc'
    ? '₿0.0005/ETH (2,000 ETH/BTC ICO rate, first 14 days)'
    : `${symbol}${(ETH_ICO_PRICE_USD * (rates.fiat_to_usd[currency] ?? 1)).toFixed(3)}/ETH ICO price`

  return (
    <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-[var(--text-primary)]">ICO ROI</h2>

        {/* Currency selector */}
        <div className="flex flex-wrap items-center gap-1.5">
          {PRIMARY_CURRENCIES.map((c) => (
            <button
              key={c}
              onClick={() => setCurrency(c)}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                currency === c
                  ? 'bg-[var(--brand-green)] text-[var(--bg-base)]'
                  : 'border border-[var(--border-default)] bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:border-[var(--brand-green)]/40 hover:text-[var(--text-primary)]'
              }`}
            >
              {CURRENCY_LABELS[c]}
            </button>
          ))}
          <div className="relative">
            <button
              onClick={() => setShowMore((v) => !v)}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                MORE_CURRENCIES.includes(currency as typeof MORE_CURRENCIES[number])
                  ? 'bg-[var(--brand-green)] text-[var(--bg-base)]'
                  : 'border border-[var(--border-default)] bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:border-[var(--brand-green)]/40 hover:text-[var(--text-primary)]'
              }`}
            >
              {MORE_CURRENCIES.includes(currency as typeof MORE_CURRENCIES[number])
                ? CURRENCY_LABELS[currency]
                : 'more ▾'}
            </button>
            {showMore && (
              <div className="absolute right-0 top-8 z-10 flex flex-col gap-0.5 rounded-lg border border-[var(--border-default)] bg-[var(--bg-elevated)] p-1 shadow-lg">
                {MORE_CURRENCIES.map((c) => (
                  <button
                    key={c}
                    onClick={() => { setCurrency(c); setShowMore(false) }}
                    className={`rounded px-3 py-1.5 text-left text-xs font-medium transition-colors ${
                      currency === c
                        ? 'bg-[var(--brand-green)]/20 text-[var(--brand-green)]'
                        : 'text-[var(--text-muted)] hover:bg-[var(--brand-green)]/10 hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {CURRENCY_LABELS[c]}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Live "Now" ROI — ETH and ETC side by side */}
      <div className="grid gap-3 sm:grid-cols-2">
        {/* ETH (new chain) */}
        <div className="rounded-lg border border-[var(--brand-green)]/30 bg-[var(--brand-green)]/5 p-4">
          <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">ETH — Now</p>
          <p className="mt-0.5 text-[10px] text-[var(--text-muted)]">New chain (Ethereum Foundation)</p>
          <p className="mt-2 font-mono text-2xl font-bold text-[var(--brand-green)]">
            {formatMultiplier(roi.ethMultiplier)}
          </p>
          {roi.isBtc && roi.ethBtcMultiplier !== undefined && (
            <p className="mt-0.5 text-xs text-[var(--text-muted)]">
              {formatMultiplier(roi.ethBtcMultiplier)} vs USD
            </p>
          )}
          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            {symbol}100 → {formatValue(roi.ethValue100, currency, symbol)}
          </p>
        </div>

        {/* ETC (original chain) */}
        <div className="rounded-lg border border-[var(--brand-green)]/30 bg-[var(--brand-green)]/5 p-4">
          <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">ETC — Now</p>
          <p className="mt-0.5 text-[10px] text-[var(--text-muted)]">Original chain (Ethereum Classic)</p>
          <p className="mt-2 font-mono text-2xl font-bold text-[var(--brand-green)]">
            {formatMultiplier(roi.etcMultiplier)}
          </p>
          {roi.isBtc && roi.etcBtcMultiplier !== undefined && (
            <p className="mt-0.5 text-xs text-[var(--text-muted)]">
              {formatMultiplier(roi.etcBtcMultiplier)} vs USD
            </p>
          )}
          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            {symbol}100 → {formatValue(roi.etcValue100, currency, symbol)}
          </p>
        </div>

        {/* ATH reference */}
        {ETH_ICO_ROI_REFERENCE.map((entry) => (
          <div
            key={entry.label}
            className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-4"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">{entry.label}</p>
            <p className="mt-0.5 text-xs text-[var(--text-muted)]">{entry.date}</p>
            <p className="mt-2 font-mono text-2xl font-bold text-[var(--text-secondary)]">{entry.multiplier}</p>
            <p className="mt-0.5 text-sm text-[var(--text-muted)]">$100 → {entry.per100}</p>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs text-[var(--text-muted)]">
        Multiplier vs {costBasisCaption}.
        {currency === 'btc'
          ? ' BTC-basis ROI reflects the actual ICO collection rate.'
          : currency !== 'usd'
          ? ' Local currency values use current exchange rates; ICO was priced in USD and BTC.'
          : ''}
        {' '}After the 2016 fork, ICO participants held balances on both chains simultaneously — ETC (original, unmodified) and ETH (new chain).
        Live prices update every 10 minutes.
      </p>
    </div>
  )
}
