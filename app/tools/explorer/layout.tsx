import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Block Explorer',
  description: 'Explore Ethereum Classic blocks, transactions, and addresses.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
