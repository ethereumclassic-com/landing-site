import type { Metadata } from 'next'
import { ExchangeVolumeProvider } from '@/app/components/ExchangeVolume'
import { fetchExchangeVolumes } from '@/lib/exchange-volume'

export const metadata: Metadata = {
  title: 'Exchange Directory',
  description: 'Complete directory of exchanges that list Ethereum Classic for trading.',
}

// The exchange pages order their listings by live volume, read here once for the whole section.
export default async function Layout({ children }: { children: React.ReactNode }) {
  return <ExchangeVolumeProvider volumes={await fetchExchangeVolumes()}>{children}</ExchangeVolumeProvider>
}
