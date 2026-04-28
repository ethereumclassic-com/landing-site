'use client'

import { FadeIn } from '@/app/components/ui'
import { SectionDivider } from '@/app/components/ui/SectionDivider'

const fiatPairs = [
  { pair: 'ETC/USD', flag: '🇺🇸', currency: 'US Dollar' },
  { pair: 'ETC/EUR', flag: '🇪🇺', currency: 'Euro' },
  { pair: 'ETC/JPY', flag: '🇯🇵', currency: 'Japanese Yen' },
  { pair: 'ETC/GBP', flag: '🇬🇧', currency: 'British Pound' },
  { pair: 'ETC/AUD', flag: '🇦🇺', currency: 'Australian Dollar' },
  { pair: 'ETC/KRW', flag: '🇰🇷', currency: 'Korean Won' },
  { pair: 'ETC/SGD', flag: '🇸🇬', currency: 'Singapore Dollar' },
  { pair: 'ETC/TWD', flag: '🇹🇼', currency: 'Taiwan Dollar' },
  { pair: 'ETC/INR', flag: '🇮🇳', currency: 'Indian Rupee' },
  { pair: 'ETC/BRL', flag: '🇧🇷', currency: 'Brazilian Real' },
  { pair: 'ETC/TRY', flag: '🇹🇷', currency: 'Turkish Lira' },
  { pair: 'ETC/AED', flag: '🇦🇪', currency: 'UAE Dirham' },
  { pair: 'ETC/THB', flag: '🇹🇭', currency: 'Thai Baht' },
  { pair: 'ETC/UAH', flag: '🇺🇦', currency: 'Ukrainian Hryvnia' },
  { pair: 'ETC/IDR', flag: '🇮🇩', currency: 'Indonesian Rupiah' },
  { pair: 'ETC/NZD', flag: '🇳🇿', currency: 'New Zealand Dollar' },
  { pair: 'ETC/PLN', flag: '🇵🇱', currency: 'Polish Zloty' },
]

const cryptoPairs = [
  { pair: 'ETC/BTC', symbol: 'BTC' },
  { pair: 'ETC/ETH', symbol: 'ETH' },
  { pair: 'ETC/USDT', symbol: 'USDT' },
  { pair: 'ETC/USDC', symbol: 'USDC' },
  { pair: 'ETC/BNB', symbol: 'BNB' },
  { pair: 'ETC/XRP', symbol: 'XRP' },
  { pair: 'ETC/DOGE', symbol: 'DOGE' },
  { pair: 'ETC/UNI', symbol: 'UNI' },
  { pair: 'ETC/LTC', symbol: 'LTC' },
  { pair: 'CAKE/ETC', symbol: 'CAKE' },
  { pair: 'ETC/BUSD', symbol: 'BUSD' },
  { pair: 'ETC/FDUSD', symbol: 'FDUSD' },
  { pair: 'ETC/USC', symbol: 'USC' },
]

const stats = [
  {
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    value: '300+',
    label: 'Active Exchanges',
    detail: 'Global coverage',
  },
  {
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    value: '17',
    label: 'Fiat Pairs',
    detail: 'Major currencies',
  },
  {
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    value: '13',
    label: 'Crypto Cross-Pairs',
    detail: 'BTC, ETH, stablecoins',
  },
]

export function ETCMarketDepthSection() {
  return (
    <>
      <SectionDivider />
      <section
        aria-labelledby="etc-market-depth-heading"
        className="section-alt relative py-28"
      >
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2
              id="etc-market-depth-heading"
              className="text-3xl font-bold tracking-tight"
            >
              ETC as a Global Payment Network
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              A stablecoin is only as useful as the network it runs on. For a stablecoin to
              function as a global payment rail, the underlying asset must be tradeable against
              local currencies in every jurisdiction where the stablecoin is used. ETC has
              continuous fiat price discovery across 17 major currencies and 300+ active
              exchange markets — ETC/USD, ETC/EUR, ETC/JPY, ETC/KRW, ETC/INR, and coverage
              across Latin America, Southeast Asia, the Middle East, and Eastern Europe.
              Classic USD ($USC) settles on the same network that these markets are pricing.
            </p>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              ETC/USD spot markets have operated continuously since 2016 — one of the
              longest-running fiat price discovery mechanisms in digital assets. That track
              record is what OTC desks, custodians, and compliance teams look for when
              evaluating whether a network can support institutional-scale stablecoin
              settlement. Deep liquidity is not a marketing claim; it is a prerequisite for
              every counterparty in the payment chain.
            </p>
          </FadeIn>

          {/* Stat cards */}
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {stats.map((s, i) => (
              <FadeIn key={s.label} delay={i * 80}>
                <div className="rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                    <span className="text-[var(--brand-green)]">{s.icon}</span>
                  </div>
                  <p className="mt-4 text-3xl font-bold tracking-tight">{s.value}</p>
                  <p className="text-sm font-medium">{s.label}</p>
                  <p className="mt-1 text-xs text-[var(--text-subtle)]">{s.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Fiat pairs */}
          <FadeIn>
            <div className="mt-12">
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)]">
                Fiat Currency Pairs
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {fiatPairs.map((p) => (
                  <div
                    key={p.pair}
                    title={p.currency}
                    className="flex items-center gap-1.5 rounded-lg border border-[var(--divider)] bg-[var(--bg-elevated)] px-3 py-2"
                  >
                    <span className="text-base leading-none" aria-hidden="true">
                      {p.flag}
                    </span>
                    <span className="font-mono text-xs font-medium">{p.pair}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Crypto pairs */}
          <FadeIn>
            <div className="mt-8">
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)]">
                Major Crypto Cross-Pairs
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {cryptoPairs.map((p) => (
                  <div
                    key={p.pair}
                    className="flex items-center gap-1.5 rounded-lg border border-[var(--divider)] bg-[var(--bg-elevated)] px-3 py-2"
                  >
                    <span className="font-mono text-[10px] font-semibold text-[var(--brand-green)]">
                      {p.symbol}
                    </span>
                    <span className="font-mono text-xs font-medium">{p.pair}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="mt-10 flex items-center gap-4">
              <span className="text-xs text-[var(--text-subtle)]">Market data:</span>
              <a
                href="https://www.coingecko.com/en/coins/ethereum-classic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-[var(--text-muted)] transition-colors hover:text-white"
              >
                CoinGecko
              </a>
              <a
                href="https://coinmarketcap.com/currencies/ethereum-classic/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-[var(--text-muted)] transition-colors hover:text-white"
              >
                CoinMarketCap
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
