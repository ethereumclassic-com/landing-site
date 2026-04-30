import Link from 'next/link'
import { FadeIn, FlagImg } from '@/app/components/ui'

const mechanics = [
  {
    label: 'When energy is cheap',
    detail: 'Mining profitability rises, driving up hash rate and energy consumption. Stranded power finds a buyer.',
  },
  {
    label: 'When energy is expensive',
    detail: 'Miners curtail operations, freeing capacity for other uses. The network self-regulates without central coordination.',
  },
  {
    label: '24/7 price discovery',
    detail: 'ETC markets never close across 300+ exchanges in every time zone. Energy futures halt on weekends.',
  },
  {
    label: 'Local currency signals',
    detail: 'Fiat pairs across major global currencies let energy producers price their output in local terms.',
  },
]

const signals = [
  { pair: 'ETC/USD', flag: '🇺🇸', note: 'Primary global energy proxy' },
  { pair: 'ETC/EUR', flag: '🇪🇺', note: 'European energy transition market' },
  { pair: 'ETC/JPY', flag: '🇯🇵', note: 'Major LNG importing economy' },
  { pair: 'ETC/GBP', flag: '🇬🇧', note: 'North Sea & offshore wind market' },
  { pair: 'ETC/AUD', flag: '🇦🇺', note: 'Coal & LNG export economy' },
  { pair: 'ETC/KRW', flag: '🇰🇷', note: 'High-density industrial energy market' },
  { pair: 'ETC/SGD', flag: '🇸🇬', note: 'Asia-Pacific LNG trading hub' },
  { pair: 'ETC/TWD', flag: '🇹🇼', note: 'High-tech manufacturing energy demand' },
  { pair: 'ETC/INR', flag: '🇮🇳', note: "World's fastest-growing energy market" },
  { pair: 'ETC/BRL', flag: '🇧🇷', note: 'Brazilian hydropower market' },
  { pair: 'ETC/TRY', flag: '🇹🇷', note: 'Emerging market energy signal' },
  { pair: 'ETC/AED', flag: '🇦🇪', note: 'Gulf oil-producing economy' },
  { pair: 'ETC/THB', flag: '🇹🇭', note: 'Regional energy growth market' },
  { pair: 'ETC/UAH', flag: '🇺🇦', note: 'Eastern European energy infrastructure' },
  { pair: 'ETC/IDR', flag: '🇮🇩', note: 'Coal & geothermal energy market' },
  { pair: 'ETC/NZD', flag: '🇳🇿', note: 'Renewable energy pioneer' },
  { pair: 'ETC/PLN', flag: '🇵🇱', note: 'Central European energy transition' },
]

export function ETCAsEnergyMarketSection() {
  return (
    <section className="section-gradient border-y border-[var(--border-default)] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--brand-green)]">
            Price Discovery
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">
            ETC/USD: A Global 24/7 Energy Proxy
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
            Mining profitability is a direct function of ETC price, block reward, and energy cost.
            This creates a tight arbitrage: miners enter when energy is cheap relative to ETC price,
            exit when it is not. ETC financial markets are therefore a continuous, real-time signal
            about energy value worldwide. ETC/USD is the first always-open, globally accessible energy
            commodity market.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
            Energy futures markets close on weekends. Regional electricity spot markets are
            balkanized by jurisdiction, settlement rules, and transmission constraints. ETC/USD
            trades 24/7, in every time zone, across major global currencies, on over 300 exchanges.
            An energy producer in Norway, a wellhead operator in Texas, and a hydro developer in
            Malawi are all pricing their output against the same continuous global signal. That is
            not a feature of traditional commodity markets. It is a consequence of
            permissionless, decentralized infrastructure.
          </p>
        </FadeIn>

        {/* Mechanics grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {mechanics.map((m, i) => (
            <FadeIn key={m.label} delay={i * 70}>
              <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-5">
                <p className="font-mono text-xs uppercase tracking-wider text-[var(--brand-green)]">
                  {m.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{m.detail}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Currency signals */}
        <FadeIn delay={100}>
          <div className="mt-6 rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)]">
              Local Energy Price Signals
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {signals.map((s) => (
                <div
                  key={s.pair}
                  className="flex items-center gap-3 rounded-lg border border-[var(--border-default)] px-3 py-2.5"
                >
                  <FlagImg emoji={s.flag} size={20} />
                  <div>
                    <p className="font-mono text-xs font-semibold text-[var(--text-primary)]">{s.pair}</p>
                    <p className="text-[10px] text-[var(--text-subtle)]">{s.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[var(--border-default)] pt-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-subtle)]">
                Markets on
              </span>
              <a
                href="https://www.coingecko.com/en/coins/ethereum-classic#markets"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs font-semibold text-[var(--brand-green)] transition-opacity hover:opacity-70"
              >
                CoinGecko ↗
              </a>
              <a
                href="https://coinmarketcap.com/currencies/ethereum-classic/markets/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs font-semibold text-[var(--brand-green)] transition-opacity hover:opacity-70"
              >
                CoinMarketCap ↗
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Closing callout */}
        <FadeIn>
          <div className="mt-6 rounded-xl border border-[var(--brand-green)] bg-[var(--brand-green-subtle)] p-6">
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              As global energy markets mature toward 24/7 marginal-cost pricing, Proof-of-Work
              networks represent the first fully liquid, globally accessible, always-open energy
              commodity market. ETC/USD spot markets have operated continuously since 2016, making
              them one of the longest-running fiat price discovery mechanisms in the asset class.
            </p>
            <div className="mt-4">
              <Link
                href="/investment-products"
                className="text-xs font-medium text-[var(--brand-green)] transition-opacity hover:opacity-70"
              >
                ETCG: Institutional Access →
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
