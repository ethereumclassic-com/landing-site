import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'API Reference',
  description: 'Ethereum Classic JSON-RPC API reference and endpoint documentation.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
