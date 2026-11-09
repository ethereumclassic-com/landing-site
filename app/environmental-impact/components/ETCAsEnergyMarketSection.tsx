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
    detail: 'ETC markets never close, in any time zone. Energy futures halt on weekends.',
  },
  {
    label: 'Local currency signals',
    detail: 'Fiat pairs across major global currencies let energy producers price their output in local terms.',
  },
]

const signals = [
  { pair: 'ETC/USD', flag: '🇺🇸', note: 'Global reference pair' },
  { pair: 'ETC/EUR', flag: '🇪🇺', note: 'European energy transition market' },
  { pair: 'ETC/JPY', flag: '🇯🇵', note: 'Major LNG importing economy' },
  { pair: 'ETC/GBP', flag: '🇬🇧', note: 'North Sea & offshore wind market' },
  { pair: 'ETC/AUD', flag: '🇦🇺', note: 'Coal & LNG export economy' },
  { pair: 'ETC/KRW', flag: '🇰🇷', note: 'High-density industrial energy market' },
  { pair: 'ETC/SGD', flag: '🇸🇬', note: 'Asia-Pacific LNG trading hub' },
  { pair: 'ETC/TWD', flag: '🇹🇼', note: 'High-tech manufacturing energy demand' },
  { pair: 'ETC/INR', flag: '🇮🇳', note: 'Fast-growing energy market' },
  { pair: 'ETC/BRL', flag: '🇧🇷', note: 'Brazilian hydropower market' },
  { pair: 'ETC/TRY', flag: '🇹🇷', note: 'Emerging market energy signal' },
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
            ETC/USD: A Market That Never Closes
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
            Mining profitability is a direct function of ETC&apos;s price, the block reward and energy cost.
              That creates a tight arbitrage: miners enter when energy is cheap relative to ETC&apos;s price and
              exit when it is not, so ETC&apos;s hashrate and markets respond continuously to energy prices around
              the world.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
            Energy futures markets close on weekends, and regional electricity spot markets are divided by
              jurisdiction, settlement rules and transmission constraints. ETC trades around the clock, in every
              time zone and against major currencies, so an energy producer in Norway, a wellhead operator in
              Texas and a hydro developer in Malawi can all weigh their output against the same continuous
              price.
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
              As energy markets move toward round-the-clock marginal-cost pricing, Proof-of-Work networks offer
                a liquid, globally accessible market that never closes. ETC/USD has traded continuously since
                July 2016.
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
