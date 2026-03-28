import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Ethereum Classic',
    default: 'ETC Price & Market Data',
  },
  description:
    'Live Ethereum Classic price, charts, and trading pairs.',
}

export default function PriceLayout({ children }: { children: React.ReactNode }) {
  return children
}
