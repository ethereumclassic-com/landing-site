import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'User FAQ',
  description:
    'Answers to common Ethereum Classic questions — wallets, transactions, MetaMask setup, gas fees, and more.',
}

export default function UsersLayout({ children }: { children: React.ReactNode }) {
  return children
}
