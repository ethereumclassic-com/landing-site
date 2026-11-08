import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Regulatory Framework — Ethereum Classic',
  description:
    'Where Ethereum Classic stands: a digital commodity candidate under the pending CLARITY Act, a decentralized asset under MiCA, a GENIUS Act stablecoin platform.',
  keywords: [
    'CLARITY Act',
    'MiCA',
    'GENIUS Act',
    'ETC regulation',
    'digital commodity',
    'decentralized asset',
    'Classic USD',
    'ETChash',
    'PoW blockchain regulation',
    'Ethereum Classic regulatory',
    'CFTC digital commodity',
    'stablecoin platform',
    'Brale',
  ],
  // No title or description: the share card is drawn from the page's own, above.
  openGraph: { ...OG_BASE },
}

export default function RegulationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
