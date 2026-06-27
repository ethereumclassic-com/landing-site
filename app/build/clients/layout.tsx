import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ETC Clients',
  description: 'Ethereum Classic node clients — Fukuii (recommended), Core-Geth (maintained through Olympia), and Hyperledger Besu.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
