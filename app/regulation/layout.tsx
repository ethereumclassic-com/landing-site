import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Regulatory Framework — Ethereum Classic',
  description:
    'Ethereum Classic qualifies as a digital commodity under the CLARITY Act, a decentralized asset under MiCA, and a stablecoin platform under the GENIUS Act — simultaneously. Its regulatory surface is additive by design.',
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
  openGraph: {
    title: 'Regulatory Framework — Ethereum Classic',
    description:
      'CLARITY Act commodity classification, MiCA decentralized asset status, GENIUS Act stablecoin platform — and Classic USD live on mainnet.',
    type: 'website',
  },
}

export default function RegulationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
