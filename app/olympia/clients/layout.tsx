import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Client Implementations',
  description:
    'Three independent client implementations for Ethereum Classic — Fukuii, Core-Geth, and Hyperledger Besu.',
}

export default function ClientsLayout({ children }: { children: React.ReactNode }) {
  return children
}
