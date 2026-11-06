import type { Metadata } from 'next'
import { ExchangeVolumeProvider } from '@/app/components/ExchangeVolume'
import { fetchExchangeVolumes } from '@/lib/exchange-volume'

export const metadata: Metadata = {
  title: {
    template: '%s | ETC Exchanges — Ethereum Classic',
    default: 'Best Exchanges for Ethereum Classic',
  },
  description:
    'Compare the best exchanges for buying, selling, and trading Ethereum Classic. Reviews, fees, security, and beginner guides.',
}

// The exchange pages order their listings by live volume, read here once for the whole section.
export default async function ExchangesLayout({ children }: { children: React.ReactNode }) {
  return <ExchangeVolumeProvider volumes={await fetchExchangeVolumes()}>{children}</ExchangeVolumeProvider>
}
