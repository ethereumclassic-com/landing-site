import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Account — Ethereum Classic',
  description: 'Manage your Ethereum Classic account.',
  robots: { index: false, follow: false },
}

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return children
}
