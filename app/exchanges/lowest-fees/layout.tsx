import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lowest Fee Exchanges | Ethereum Classic',
  description: 'Compare trading fees across Ethereum Classic exchanges. Find the cheapest platforms to buy and trade ETC.',
}

export default function LowestFeesLayout({ children }: { children: React.ReactNode }) {
  return children
}
