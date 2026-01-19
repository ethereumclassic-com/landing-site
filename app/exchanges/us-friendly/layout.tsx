import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'US-Friendly Exchanges | Ethereum Classic',
  description: 'Buy and trade Ethereum Classic on US-regulated exchanges. FDIC-insured deposits, bank transfers, and full regulatory compliance.',
}

export default function USFriendlyLayout({ children }: { children: React.ReactNode }) {
  return children
}
