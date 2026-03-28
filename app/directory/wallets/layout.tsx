import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wallet Directory',
  description: 'Complete directory of Ethereum Classic wallets — desktop, mobile, hardware, and web.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
