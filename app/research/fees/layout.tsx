import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fee Analytics',
  description: 'Ethereum Classic transaction fee data, gas usage trends, and fee analysis.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
