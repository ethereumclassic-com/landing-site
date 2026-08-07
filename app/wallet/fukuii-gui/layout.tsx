import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fukuii GUI — Desktop Wallet and Node Manager for Ethereum Classic',
  description:
    'Fukuii GUI is a native desktop application for self-custody asset management and node operation on Ethereum Classic. Hardware wallet support, offline signing, and node and mining management against your own node rather than a third-party RPC endpoint.',
  keywords: [
    'Fukuii GUI',
    'Ethereum Classic wallet',
    'ETC desktop wallet',
    'self-custody wallet',
    'hardware wallet ETC',
    'Ledger Ethereum Classic',
    'Trezor Ethereum Classic',
    'ETC node manager',
    'solo mining ETC',
    'offline transaction signing',
  ],
}

export default function FukuiiGuiLayout({ children }: { children: React.ReactNode }) {
  return children
}
