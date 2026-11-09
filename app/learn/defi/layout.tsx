import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DeFi on ETC',
  description: 'Decentralized finance on Ethereum Classic: swap tokens, provide liquidity, use stablecoins and earn trading fees.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
