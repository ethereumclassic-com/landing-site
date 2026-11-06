'use client'

import { createContext, useContext, useMemo } from 'react'
import type { Exchange } from '@/app/buy/data/exchanges'
import type { ExchangeVolumes } from '@/lib/exchange-volume'

/**
 * The live 24-hour ETC volume of each listed exchange, for the exchange pages.
 *
 * Those pages are client components, so the figures are read on the server by
 * their section's layout (lib/exchange-volume.ts) and handed down here rather
 * than fetched again in the browser. Volume is how the listings are ordered:
 * it is the measure of how much of ETC's market an exchange carries.
 */
const VolumeContext = createContext<ExchangeVolumes | null>(null)

export function ExchangeVolumeProvider({ volumes, children }: { volumes: ExchangeVolumes | null; children: React.ReactNode }) {
  return <VolumeContext.Provider value={volumes}>{children}</VolumeContext.Provider>
}

export function useExchangeVolume() {
  const volumes = useContext(VolumeContext)
  return useMemo(() => {
    /** Undefined where CoinGecko reports no ETC market for the exchange, or could not be reached. */
    const volumeOf = (exchange: Pick<Exchange, 'coingeckoId'>): number | undefined =>
      exchange.coingeckoId ? volumes?.[exchange.coingeckoId] : undefined
    /** Highest volume first. An exchange with no figure follows those with one, in the data file's order. */
    const byVolume = <T extends Pick<Exchange, 'coingeckoId'>>(list: T[]): T[] =>
      [...list].sort((a, b) => (volumeOf(b) ?? -1) - (volumeOf(a) ?? -1))
    return { volumeOf, byVolume, live: volumes !== null }
  }, [volumes])
}

/** $2.47M, $420K, under $1K, or a dash where there is no figure. */
export function formatVolume(usd: number | undefined): string {
  if (usd === undefined) return '—'
  if (usd >= 1_000_000) return `$${(usd / 1_000_000).toFixed(2)}M`
  if (usd >= 1_000) return `$${Math.round(usd / 1_000)}K`
  return 'under $1K'
}

/** Names the source of the figures wherever a listing shows them. Nothing when CoinGecko could not be reached. */
export function VolumeSource() {
  const { live } = useExchangeVolume()
  if (!live) return null
  return (
    <p className="text-xs text-[var(--color-text-muted)]">
      24h volume from{' '}
      <a
        href="https://www.coingecko.com/en/coins/ethereum-classic"
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-[var(--border)] underline-offset-2 hover:text-[var(--color-primary)]"
      >
        CoinGecko
      </a>
    </p>
  )
}
