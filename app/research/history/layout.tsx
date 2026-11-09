import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Historical Data',
  description: 'Ethereum Classic price, hashrate, difficulty and monthly transactions since 2015, from Kraken and Blockscout, with key milestones.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
