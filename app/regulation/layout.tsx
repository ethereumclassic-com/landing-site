import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Regulatory Framework | Ethereum Classic',
  description:
    'Where ETC stands: a digital commodity candidate under the pending CLARITY Act, an asset with no issuer under MiCA, and home to a GENIUS Act-aligned stablecoin.',
  keywords: [
    'CLARITY Act',
    'MiCA',
    'GENIUS Act',
    'ETC regulation',
    'digital commodity',
    'no issuer',
    'Classic USD',
    'Etchash',
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
