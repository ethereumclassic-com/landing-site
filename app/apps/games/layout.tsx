import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Games',
  description: 'Blockchain games built on Ethereum Classic. Play-to-earn and on-chain gaming.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
