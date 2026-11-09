import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wallet Directory',
  description: 'A directory of Ethereum Classic wallets: desktop, mobile, hardware and web.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
