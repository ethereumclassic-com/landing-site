import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ETC Clients',
  description:
    "Ethereum Classic node clients — Fukuii (recommended), ETC's first native client, and Core-Geth, a go-ethereum derivative maintained through Olympia. ETC plugins extend support to Besu, Erigon, Ethrex, Go-Ethereum, Nethermind, and Reth.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
