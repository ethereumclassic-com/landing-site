import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Client Implementations',
  description:
    "Ethereum Classic client implementations — Fukuii, ETC's first native client, and Core-Geth, a go-ethereum derivative. ETC plugins extend support to Besu, Erigon, Ethrex, Go-Ethereum, Nethermind, and Reth.",
}

export default function ClientsLayout({ children }: { children: React.ReactNode }) {
  return children
}
