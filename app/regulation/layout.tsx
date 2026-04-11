import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Regulatory Framework — Ethereum Classic',
  description:
    "ETC's regulatory surface is additive: digital commodity under PoW consensus frameworks, decentralized asset under MiCA, and live stablecoin infrastructure under the GENIUS Act. No single classification captures it.",
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
