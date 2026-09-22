import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ETC Clients',
  description:
    "Ethereum Classic node clients — Core-Geth (recommended), released and maintained in the ethereumclassic organization, and Fukuii, ETC's first native client. ETC plugins extend support to Besu, Erigon, Ethrex, Go-Ethereum, Nethermind, and Reth.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
