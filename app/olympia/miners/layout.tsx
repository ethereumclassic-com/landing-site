import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Miners & Fees',
  description:
    'How Olympia affects Ethereum Classic miners: the block reward and priority fees stay with miners, the EIP-1559 basefee funds the protocol treasury, and why fee revenue matters as the block reward falls.',
}

export default function MinersLayout({ children }: { children: React.ReactNode }) {
  return children
}
