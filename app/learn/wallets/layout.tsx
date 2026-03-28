import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wallet Guides',
  description: 'Learn about Ethereum Classic wallets. Types, setup, backup, recovery, and security.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
