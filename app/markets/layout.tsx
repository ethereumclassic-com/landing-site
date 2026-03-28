import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Markets — Ethereum Classic',
    default: 'ETC Markets & Price Data',
  },
  description:
    'Live Ethereum Classic price, converter, calculator, and market data.',
}

export default function MarketsLayout({ children }: { children: React.ReactNode }) {
  return children
}
