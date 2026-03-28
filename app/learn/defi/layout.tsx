import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DeFi on ETC',
  description: 'Decentralized finance on Ethereum Classic. Swap, lend, borrow, and earn yield on ETC.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
