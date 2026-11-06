import type { Metadata } from 'next'
import { ExchangeVolumeProvider } from '@/app/components/ExchangeVolume'
import { fetchExchangeVolumes } from '@/lib/exchange-volume'

export const metadata: Metadata = {
  title: {
    template: '%s | Buy ETC — Ethereum Classic',
    default: 'Buy Ethereum Classic (ETC)',
  },
  description:
    'Buy Ethereum Classic with credit card, bank transfer, P2P, or ATM. Compare exchanges and instant-buy options.',
}

// The exchange pages order their listings by live volume, read here once for the whole section.
export default async function BuyLayout({ children }: { children: React.ReactNode }) {
  return <ExchangeVolumeProvider volumes={await fetchExchangeVolumes()}>{children}</ExchangeVolumeProvider>
}
