import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Network Analytics',
  description: 'Ethereum Classic network data: block production, transactions, fees, mining distribution and chain parameters.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
