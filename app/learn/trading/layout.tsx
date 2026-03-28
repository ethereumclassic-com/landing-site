import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trading',
  description: 'How to trade Ethereum Classic. Exchanges, pairs, strategies, and market analysis.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
