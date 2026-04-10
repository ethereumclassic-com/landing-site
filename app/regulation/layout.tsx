import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Regulatory Framework — Ethereum Classic',
  description:
    'ETC occupies two distinct regulatory trajectories: the commodity classification path that Proof-of-Work networks established, and the programmable finance frameworks being built around smart contract platforms.',
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
