import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Testnet Faucets',
  description: 'How to get Mordor testnet ETC for development, and how to add the Mordor network to your wallet.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
