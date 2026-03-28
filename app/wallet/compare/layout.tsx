import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Compare Wallets',
  description:
    'Side-by-side comparison of Ethereum Classic wallets by features, security, and platform.',
}

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return children
}
