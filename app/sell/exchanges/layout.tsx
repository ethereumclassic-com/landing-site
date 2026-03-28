import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sell on Exchanges',
  description: 'Sell Ethereum Classic on cryptocurrency exchanges. Compare fees and withdrawal options.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
