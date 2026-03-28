import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ETC Clients',
  description: 'Ethereum Classic node clients — Core-Geth, Hyperledger Besu, and Fukuii.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
