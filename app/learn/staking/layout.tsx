import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Yield and Liquidity',
  description: 'Ethereum Classic is Proof-of-Work, so ETC cannot be staked. Holders can earn trading fees by providing liquidity instead.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
