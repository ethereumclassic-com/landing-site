'use client'

import { useState } from 'react'
import { Info } from 'lucide-react'
import type { ExchangeRates } from '@/lib/exchange-rates'
import { ETH_ICO_PRICE_USD, ETH_ICO_PRICE_BTC } from '@/app/research/data/ethereumIco'

interface PriceTableRow {
  label: string
  price: string | null
  date: string | null
}

function PriceTable({ rows }: { rows: PriceTableRow[] }) {
  return (
    <div className="mt-3 space-y-1 border-t border-[var(--border-subtle)] pt-2.5">
      {rows.map((row) =>
        row.price ? (
          <div key={row.label} className="flex items-center justify-between text-[10px]">
            <span className="text-[var(--text-muted)]">
              {row.label}
              {row.date && <span> · {row.date}</span>}
            </span>
            <span className="font-mono text-[var(--text-primary)]">{row.price}</span>
          </div>
        ) : null
      )}
    </div>
  )
}

function formatBtcPrice(val: number | null | undefined): string | null {
  if (val == null || val === 0) return null
  return `${val.toFixed(8)} BTC`
}

function formatEthPrice(val: number | null | undefined): string | null {
  if (val == null || val === 0) return null
  return `${val.toFixed(8)} ETH`
}

function formatEtcPerEth(val: number | null | undefined): string | null {
  if (val == null || val === 0) return null
  if (val >= 1000) return `${val.toLocaleString('en-US', { maximumFractionDigits: 2 })} ETC`
  if (val >= 10) return `${val.toFixed(2)} ETC`
  return `${val.toFixed(4)} ETC`
}

function formatFiatPrice(val: number | null | undefined, symbol: string): string | null {
  if (val == null || val === 0) return null
  if (val >= 1_000_000) return `${symbol}${(val / 1_000_000).toFixed(2)}M`
  return `${symbol}${val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

function formatHistoryDate(isoDate: string | null | undefined): string | null {
  if (!isoDate) return null
  const d = new Date(isoDate)
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

const CURRENCY_LABELS: Record<string, string> = {
  usd: 'USD', eur: 'EUR', gbp: 'GBP', jpy: 'JPY',
  krw: 'KRW', cad: 'CAD', aud: 'AUD', try: 'TRY', brl: 'BRL',
  cny: 'CNY', inr: 'INR', rub: 'RUB',
}

const CURRENCY_SYMBOLS: Record<string, string> = {
  usd: '$', eur: '€', gbp: '£', jpy: '¥',
  krw: '₩', cad: 'CA$', aud: 'AU$', try: '₺', brl: 'R$',
  cny: '¥', inr: '₹', rub: '₽',
}

const PRIMARY_CURRENCIES = ['usd', 'eur', 'gbp', 'jpy'] as const
const MORE_CURRENCIES = ['krw', 'cad', 'aud', 'try', 'brl', 'cny', 'inr', 'rub'] as const

interface RoiData {
  ethMultiplier: number
  etcMultiplier: number
  ethValue100: number
  etcValue100: number
  symbol: string
}

function computeRoi(currency: string, rates: ExchangeRates): RoiData {
  const tokensPerHundred = 100 / ETH_ICO_PRICE_USD
  const symbol = CURRENCY_SYMBOLS[currency] ?? currency.toUpperCase()
  const fiatRate = rates.fiat_to_usd[currency] ?? 1
  const ethLocal = rates.eth_usd * fiatRate
  const etcLocal = (rates.etc.usd ?? 0) * fiatRate
  const costBasisLocal = ETH_ICO_PRICE_USD * fiatRate
  return {
    ethMultiplier: ethLocal / costBasisLocal,
    etcMultiplier: etcLocal / costBasisLocal,
    ethValue100: tokensPerHundred * ethLocal,
    etcValue100: tokensPerHundred * etcLocal,
    symbol,
  }
}

interface EthRoiData {
  etcEthMultiplier: number
  etcEthNow: number
  etcEthValue: number   // 200 ETC × etcEthNow
  ethEtcMultiplier: number
  ethEtcNow: number     // 1 / etcEthNow
}

function computeEthRoi(rates: ExchangeRates): EthRoiData {
  const etcEthNow = rates.etc.eth ?? 0
  const ethEtcNow = etcEthNow > 0 ? 1 / etcEthNow : 0
  return {
    etcEthMultiplier: etcEthNow,     // ÷ 1.0 genesis parity
    etcEthNow,
    etcEthValue: 200 * etcEthNow,
    ethEtcMultiplier: ethEtcNow,     // ÷ 1.0 genesis parity
    ethEtcNow,
  }
}

interface BtcRoiData {
  etcMultiplier: number
  ethMultiplier: number
  etcBtcValue100: number
  ethBtcValue100: number
  costBasisBtc: number
}

function computeBtcRoi(rates: ExchangeRates): BtcRoiData {
  const BTC_REFERENCE = 0.1  // clean reference investment: 0.1 BTC
  const tokensForRef = BTC_REFERENCE / ETH_ICO_PRICE_BTC  // 0.1 / 0.0005 = 200 ETH
  const etcBtc = rates.btc_usd > 0 ? (rates.etc.usd ?? 0) / rates.btc_usd : 0
  const ethBtc = rates.btc_usd > 0 ? rates.eth_usd / rates.btc_usd : 0
  return {
    etcMultiplier: ETH_ICO_PRICE_BTC > 0 ? etcBtc / ETH_ICO_PRICE_BTC : 0,
    ethMultiplier: ETH_ICO_PRICE_BTC > 0 ? ethBtc / ETH_ICO_PRICE_BTC : 0,
    etcBtcValue100: tokensForRef * etcBtc,
    ethBtcValue100: tokensForRef * ethBtc,
    costBasisBtc: BTC_REFERENCE,
  }
}

function formatMultiplier(n: number): string {
  if (n >= 1000) return `×${Math.round(n).toLocaleString()}`
  if (n >= 10)   return `×${n.toFixed(1)}`
  if (n >= 0.01) return `×${n.toFixed(2)}`
  if (n >= 0.001) return `×${n.toFixed(4)}`
  return `×${n.toFixed(6)}`
}

function formatPctChange(n: number): string {
  const pct = (n - 1) * 100
  if (pct >= 0)    return `+${Math.round(pct).toLocaleString()}%`
  if (pct > -99)   return `−${Math.round(Math.abs(pct)).toLocaleString()}%`
  if (pct > -100)  return `−${Math.abs(pct).toFixed(1)}%`
  return `−100%`
}

function formatValue(value: number, currency: string, symbol: string): string {
  if (currency === 'btc') {
    return `${value.toFixed(value >= 1 ? 2 : 4)} BTC`
  }
  if (value >= 1_000_000) return `${symbol}${(value / 1_000_000).toFixed(2)}M`
  if (value >= 1_000) return `${symbol}${Math.round(value).toLocaleString()}`
  return `${symbol}${value.toFixed(2)}`
}

export default function IcoRoiCard({ rates }: { rates: ExchangeRates }) {
  const [currency, setCurrency] = useState('usd')
  const [showMore, setShowMore] = useState(false)

  const roi = computeRoi(currency, rates)
  const btcRoi = computeBtcRoi(rates)
  const symbol = CURRENCY_SYMBOLS[currency] ?? currency.toUpperCase()
  const costBasisCaption = `${symbol}${(ETH_ICO_PRICE_USD * (rates.fiat_to_usd[currency] ?? 1)).toFixed(3)}/ETH ICO price`

  // ETC/ETH cross-pair ROI (ICO genesis parity was 1:1)
  const ethRoi = computeEthRoi(rates)
  const etcEthRows: PriceTableRow[] = [
    { label: 'Now', price: formatEthPrice(ethRoi.etcEthNow),                                                                               date: null },
    { label: 'ATL', price: formatEthPrice(rates.history.etc.atl_eth),                                                                      date: formatHistoryDate(rates.history.etc.atl_date_eth) },
    { label: 'ATH', price: formatEthPrice(rates.history.etc.ath_eth),                                                                      date: formatHistoryDate(rates.history.etc.ath_date_eth) },
  ]
  // ETH/ETC is the inverse: ETH's ATH in ETC = 1 / ETC/ETH ATL, and vice versa
  const ethEtcRows: PriceTableRow[] = [
    { label: 'Now', price: formatEtcPerEth(ethRoi.ethEtcNow),                                                                              date: null },
    { label: 'ATL', price: formatEtcPerEth(rates.history.etc.ath_eth != null ? 1 / rates.history.etc.ath_eth : null), date: formatHistoryDate(rates.history.etc.ath_date_eth) },
    { label: 'ATH', price: formatEtcPerEth(rates.history.etc.atl_eth != null ? 1 / rates.history.etc.atl_eth : null), date: formatHistoryDate(rates.history.etc.atl_date_eth) },
  ]

  // Price table rows for BTC cards
  const ethBtcNow = rates.btc_usd > 0 ? rates.eth_usd / rates.btc_usd : null
  const etcBtcRows: PriceTableRow[] = [
    { label: 'Now', price: formatBtcPrice(rates.etc.btc),                           date: null },
    { label: 'ATL', price: formatBtcPrice(rates.history.etc.atl_btc),               date: formatHistoryDate(rates.history.etc.atl_date_btc) },
    { label: 'ATH', price: formatBtcPrice(rates.history.etc.ath_btc),               date: formatHistoryDate(rates.history.etc.ath_date_btc) },
  ]
  const ethBtcRows: PriceTableRow[] = [
    { label: 'Now', price: formatBtcPrice(ethBtcNow),                               date: null },
    { label: 'ATL', price: formatBtcPrice(rates.history.eth.atl_btc),               date: formatHistoryDate(rates.history.eth.atl_date_btc) },
    { label: 'ATH', price: formatBtcPrice(rates.history.eth.ath_btc),               date: formatHistoryDate(rates.history.eth.ath_date_btc) },
  ]

  // Price table rows for fiat cards (ATH/ATL stored in USD, converted to selected fiat)
  const fiatRate = rates.fiat_to_usd[currency] ?? 1
  const etcFiatRows: PriceTableRow[] = [
    { label: 'Now', price: formatFiatPrice((rates.etc.usd ?? 0) * fiatRate, symbol),                                          date: null },
    { label: 'ATL', price: formatFiatPrice(rates.history.etc.atl_usd != null ? rates.history.etc.atl_usd * fiatRate : null, symbol), date: formatHistoryDate(rates.history.etc.atl_date_usd) },
    { label: 'ATH', price: formatFiatPrice(rates.history.etc.ath_usd != null ? rates.history.etc.ath_usd * fiatRate : null, symbol), date: formatHistoryDate(rates.history.etc.ath_date_usd) },
  ]
  const ethFiatRows: PriceTableRow[] = [
    { label: 'Now', price: formatFiatPrice(rates.eth_usd * fiatRate, symbol),                                                 date: null },
    { label: 'ATL', price: formatFiatPrice(rates.history.eth.atl_usd != null ? rates.history.eth.atl_usd * fiatRate : null, symbol), date: formatHistoryDate(rates.history.eth.atl_date_usd) },
    { label: 'ATH', price: formatFiatPrice(rates.history.eth.ath_usd != null ? rates.history.eth.ath_usd * fiatRate : null, symbol), date: formatHistoryDate(rates.history.eth.ath_date_usd) },
  ]

  return (
    <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold text-[var(--text-primary)]">Ethereum ICO ROI</h2>
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-green)] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--brand-green)]" />
          </span>
        </div>

        {/* Fiat currency selector */}
        <div className="flex flex-wrap items-center gap-1.5">
          {PRIMARY_CURRENCIES.map((c) => (
            <button
              key={c}
              onClick={() => setCurrency(c)}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                currency === c
                  ? 'bg-[var(--brand-green)] text-[var(--background)]'
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
                  ? 'bg-[var(--brand-green)] text-[var(--background)]'
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
      <div className="mt-3 flex items-start gap-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 py-3">
        <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--text-muted)]" />
        <p className="text-xs text-[var(--text-muted)]">
          Fiat multiplier vs {costBasisCaption}.
          {currency !== 'usd' ? ' Local currency values use current exchange rates; ICO was priced in USD and BTC.' : ''}
          {' '}BTC cards use the 0.0005 BTC/ETH early bird rate (2,000 ETH/BTC, first 14 days).
          {' '}After the 2016 fork, ICO participants held balances on both chains simultaneously: ETC (original, unmodified) and ETH (new chain).
          {' '}Live prices update every 10 minutes.
        </p>
      </div>

      {/* BTC comparison cards */}
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-[var(--color-orange-border)] bg-[var(--color-orange-bg)] p-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)] text-center">ETC vs BTC</p>
          <p className="mt-0.5 text-xs text-[var(--text-muted)] text-center">Original chain · 0.0005 BTC/ETH ICO rate</p>
          <div className="mt-2 text-center">
            <p className="font-mono text-2xl font-bold text-[var(--text-primary)]">
              {formatBtcPrice(rates.etc.btc)}
            </p>
            <p className="font-mono text-2xl font-bold text-[var(--text-primary)]">
              {formatMultiplier(btcRoi.etcMultiplier)}{' '}
              <span className={`text-lg ${btcRoi.etcMultiplier < 1 ? 'text-[var(--color-error)]' : 'text-[var(--brand-green)]'}`}>
                ({formatPctChange(btcRoi.etcMultiplier)})
              </span>
            </p>
            <p className="font-mono text-[10px] text-[var(--text-muted)]">
              {formatBtcPrice(rates.etc.btc)} ÷ {ETH_ICO_PRICE_BTC} BTC ICO
            </p>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              {btcRoi.costBasisBtc.toFixed(1)} BTC → {formatValue(btcRoi.etcBtcValue100, 'btc', '')}
            </p>
          </div>
          <PriceTable rows={etcBtcRows} />
        </div>
        <div className="rounded-lg border border-[var(--color-orange-border)] bg-[var(--color-orange-bg)] p-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)] text-center">ETH vs BTC</p>
          <p className="mt-0.5 text-xs text-[var(--text-muted)] text-center">Fork chain · 0.0005 BTC/ETH ICO rate</p>
          <div className="mt-2 text-center">
            <p className="font-mono text-2xl font-bold text-[var(--text-primary)]">
              {formatBtcPrice(ethBtcNow)}
            </p>
            <p className="font-mono text-2xl font-bold text-[var(--text-primary)]">
              {formatMultiplier(btcRoi.ethMultiplier)}{' '}
              <span className={`text-lg ${btcRoi.ethMultiplier < 1 ? 'text-[var(--color-error)]' : 'text-[var(--brand-green)]'}`}>
                ({formatPctChange(btcRoi.ethMultiplier)})
              </span>
            </p>
            <p className="font-mono text-[10px] text-[var(--text-muted)]">
              {formatBtcPrice(ethBtcNow)} ÷ {ETH_ICO_PRICE_BTC} BTC ICO
            </p>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              {btcRoi.costBasisBtc.toFixed(1)} BTC → {formatValue(btcRoi.ethBtcValue100, 'btc', '')}
            </p>
          </div>
          <PriceTable rows={ethBtcRows} />
        </div>
      </div>
      <div className="mt-3 flex items-start gap-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 py-3">
        <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--text-muted)]" />
        <p className="text-xs text-[var(--text-muted)]">BTC return. The ICO was priced in Bitcoin at 2,000 ETH/BTC (0.0005 BTC/ETH) for the first 14 days. How much BTC is your ETC or ETH worth today relative to what you paid?</p>
      </div>

      {/* Live fiat ROI */}
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-[var(--brand-green)]/30 bg-[var(--brand-green)]/5 p-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)] text-center">ETC vs {CURRENCY_LABELS[currency] ?? currency.toUpperCase()}</p>
          <p className="mt-0.5 text-xs text-[var(--text-muted)] text-center">Original chain · Created Jul 30, 2015</p>
          <div className="mt-2 text-center">
            <p className="font-mono text-2xl font-bold text-[var(--text-primary)]">
              {formatFiatPrice((rates.etc.usd ?? 0) * fiatRate, symbol)}
            </p>
            <p className="font-mono text-2xl font-bold text-[var(--text-primary)]">
              {formatMultiplier(roi.etcMultiplier)}{' '}
              <span className={`text-lg ${roi.etcMultiplier < 1 ? 'text-[var(--color-error)]' : 'text-[var(--brand-green)]'}`}>
                ({formatPctChange(roi.etcMultiplier)})
              </span>
            </p>
            <p className="font-mono text-[10px] text-[var(--text-muted)]">
              {formatFiatPrice((rates.etc.usd ?? 0) * fiatRate, symbol)} ÷ {formatFiatPrice(ETH_ICO_PRICE_USD * fiatRate, symbol)} ICO
            </p>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              {symbol}100 → {formatValue(roi.etcValue100, currency, symbol)}
            </p>
          </div>
          <PriceTable rows={etcFiatRows} />
        </div>

        <div className="rounded-lg border border-[var(--color-violet-border)] bg-[var(--color-violet-bg)] p-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)] text-center">ETH vs {CURRENCY_LABELS[currency] ?? currency.toUpperCase()}</p>
          <p className="mt-0.5 text-xs text-[var(--text-muted)] text-center">Fork chain · Created Jul 20, 2016</p>
          <div className="mt-2 text-center">
            <p className="font-mono text-2xl font-bold text-[var(--text-primary)]">
              {formatFiatPrice(rates.eth_usd * fiatRate, symbol)}
            </p>
            <p className="font-mono text-2xl font-bold text-[var(--text-primary)]">
              {formatMultiplier(roi.ethMultiplier)}{' '}
              <span className={`text-lg ${roi.ethMultiplier < 1 ? 'text-[var(--color-error)]' : 'text-[var(--brand-green)]'}`}>
                ({formatPctChange(roi.ethMultiplier)})
              </span>
            </p>
            <p className="font-mono text-[10px] text-[var(--text-muted)]">
              {formatFiatPrice(rates.eth_usd * fiatRate, symbol)} ÷ {formatFiatPrice(ETH_ICO_PRICE_USD * fiatRate, symbol)} ICO
            </p>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              {symbol}100 → {formatValue(roi.ethValue100, currency, symbol)}
            </p>
          </div>
          <PriceTable rows={ethFiatRows} />
        </div>
      </div>
      <div className="mt-3 flex items-start gap-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 py-3">
        <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--text-muted)]" />
        <p className="text-xs text-[var(--text-muted)]">Fiat return. Current value of your ICO allocation in the selected currency, measured against the $0.308/ETH ICO price. After the 2016 fork both chains carried the original balances, with ETC on the original chain and ETH on the new one.</p>
      </div>

      {/* ETC/ETH + ETH/ETC cross-pair cards */}
      <div className="mt-5 grid gap-3 sm:grid-cols-2">

        {/* Left: ETC/ETH — how much ETH is 1 ETC worth */}
        <div className="rounded-lg border border-[var(--brand-green)]/30 bg-[var(--brand-green)]/5 p-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)] text-center">ETC/ETH</p>
          <p className="mt-0.5 text-xs text-[var(--text-muted)] text-center">Original chain · 1 ETC = 1 ETH at genesis</p>
          <div className="mt-2 text-center">
            <p className="font-mono text-2xl font-bold text-[var(--text-primary)]">
              {formatEthPrice(ethRoi.etcEthNow)}
            </p>
            <p className="font-mono text-2xl font-bold text-[var(--text-primary)]">
              {formatMultiplier(ethRoi.etcEthMultiplier)}{' '}
              <span className={`text-lg ${ethRoi.etcEthMultiplier < 1 ? 'text-[var(--color-error)]' : 'text-[var(--brand-green)]'}`}>
                ({formatPctChange(ethRoi.etcEthMultiplier)})
              </span>
            </p>
            <p className="font-mono text-[10px] text-[var(--text-muted)]">
              {formatEthPrice(ethRoi.etcEthNow)} ÷ 1.00 ETH ICO
            </p>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              200 ETC → {formatEthPrice(ethRoi.etcEthValue)}
            </p>
          </div>
          <PriceTable rows={etcEthRows} />
        </div>

        {/* Right: ETH/ETC — how much ETC is 1 ETH worth */}
        <div className="rounded-lg border border-[var(--color-violet-border)] bg-[var(--color-violet-bg)] p-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)] text-center">ETH/ETC</p>
          <p className="mt-0.5 text-xs text-[var(--text-muted)] text-center">Fork chain · 1 ETH = 1 ETC at genesis</p>
          <div className="mt-2 text-center">
            <p className="font-mono text-2xl font-bold text-[var(--text-primary)]">
              {formatEtcPerEth(ethRoi.ethEtcNow)}
            </p>
            <p className="font-mono text-2xl font-bold text-[var(--text-primary)]">
              {formatMultiplier(ethRoi.ethEtcMultiplier)}{' '}
              <span className={`text-lg ${ethRoi.ethEtcMultiplier < 1 ? 'text-[var(--color-error)]' : 'text-[var(--brand-green)]'}`}>
                ({formatPctChange(ethRoi.ethEtcMultiplier)})
              </span>
            </p>
            <p className="font-mono text-[10px] text-[var(--text-muted)]">
              {formatEtcPerEth(ethRoi.ethEtcNow)} ÷ 1.00 ETC ICO
            </p>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              1 ETH → {formatEtcPerEth(ethRoi.ethEtcNow)}
            </p>
          </div>
          <PriceTable rows={ethEtcRows} />
        </div>

      </div>
      <div className="mt-3 flex items-start gap-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 py-3">
        <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--text-muted)]" />
        <p className="text-xs text-[var(--text-muted)]">ETC/ETH cross-pair. Both chains launched from the same ICO at 1:1 parity. This shows how many ETH one ETC is worth today, a direct measure of how the two chains have diverged since the 2016 fork.</p>
      </div>

    </div>
  )
}
