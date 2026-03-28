import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | ETC Wallets — Ethereum Classic',
    default: 'ETC Wallets — Download & Compare',
  },
  description:
    'Download wallets for Ethereum Classic. Compare MetaMask, hardware wallets, and Classic OS for secure ETC storage.',
}

export default function WalletLayout({ children }: { children: React.ReactNode }) {
  return children
}
