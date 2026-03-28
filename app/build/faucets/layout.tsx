import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Testnet Faucets',
  description: 'Get free testnet ETC for development on the Mordor testnet.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
