import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Directory — Ethereum Classic',
    default: 'ETC Directory',
  },
  description:
    'Comprehensive directory of Ethereum Classic wallets, exchanges, mining resources, and developer tools.',
}

export default function DirectoryLayout({ children }: { children: React.ReactNode }) {
  return children
}
