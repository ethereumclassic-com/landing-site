import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Compare Exchanges | Ethereum Classic',
  description: 'Compare all Ethereum Classic exchanges side by side. Sort by fees, volume, pairs, and features to find the best exchange for your needs.',
}

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return children
}
