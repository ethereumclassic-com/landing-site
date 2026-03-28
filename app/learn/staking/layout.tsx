import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Staking',
  description: 'Staking options for Ethereum Classic holders. Earn yield on your ETC.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
