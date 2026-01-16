import type { Exchange } from '../data/exchanges'

interface ExchangeCardProps {
  exchange: Exchange
}

export default function ExchangeCard({ exchange }: ExchangeCardProps) {
  return (
    <a
      href={exchange.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-2xl border border-[var(--border-soft)] bg-[var(--panel)] p-6 transition hover:border-[var(--etc)]/30 hover:bg-[var(--panel-strong)]"
    >
      {exchange.featured && (
        <div className="absolute right-4 top-4 rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-medium text-[var(--etc)]">
          Featured
        </div>
      )}

      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold transition group-hover:text-[var(--etc)]">
            {exchange.name}
          </h3>
          <span className="text-sm text-white/50">{exchange.type}</span>
        </div>
        {exchange.volume24h && (
          <div className="text-right">
            <div className="text-xs text-white/50">24h Volume</div>
            <div className="font-semibold text-[var(--etc)]">{exchange.volume24h}</div>
          </div>
        )}
      </div>

      <div className="mb-3">
        <div className="mb-1 text-xs text-white/50">Trading Pairs</div>
        <div className="flex flex-wrap gap-1">
          {exchange.pairs.slice(0, 3).map((pair) => (
            <span
              key={pair}
              className="rounded bg-white/5 px-2 py-0.5 text-xs text-white/70"
            >
              {pair}
            </span>
          ))}
          {exchange.pairs.length > 3 && (
            <span className="rounded bg-white/5 px-2 py-0.5 text-xs text-white/50">
              +{exchange.pairs.length - 3}
            </span>
          )}
        </div>
      </div>

      <div className="text-xs text-white/40">{exchange.regions.join(', ')}</div>
    </a>
  )
}
