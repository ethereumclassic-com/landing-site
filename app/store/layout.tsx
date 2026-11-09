import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Store | Ethereum Classic',
  description: 'Mining hardware, equipment and hardware wallets for Ethereum Classic, each linked to a retailer that sells it.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
