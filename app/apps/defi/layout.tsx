import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DeFi Apps',
  description: 'Decentralized finance apps on Ethereum Classic: swap tokens, provide liquidity and hold a stablecoin.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
