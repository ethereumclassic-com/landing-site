import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | ETC Mining — Ethereum Classic',
    default: 'Mine Ethereum Classic',
  },
  description:
    'Mine ETC with ETCHash. Pools, hardware, software, profitability calculators, and getting-started guides.',
}

export default function MiningLayout({ children }: { children: React.ReactNode }) {
  return children
}
