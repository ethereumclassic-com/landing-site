import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Client Implementations',
  description:
    "Ethereum Classic client implementations — Core-Geth, released and maintained in the ethereumclassic GitHub organization, and Fukuii, a native ETC client. ETC plugins extend support to Besu, Erigon, Ethrex, Go-Ethereum, Nethermind, and Reth.",
}

export default function ClientsLayout({ children }: { children: React.ReactNode }) {
  return children
}
