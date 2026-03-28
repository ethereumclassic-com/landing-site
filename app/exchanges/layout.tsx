import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | ETC Exchanges — Ethereum Classic',
    default: 'Best Exchanges for Ethereum Classic',
  },
  description:
    'Compare the best exchanges for buying, selling, and trading Ethereum Classic. Reviews, fees, security, and beginner guides.',
}

export default function ExchangesLayout({ children }: { children: React.ReactNode }) {
  return children
}
