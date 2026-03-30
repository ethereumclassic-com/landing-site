import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | ETC Apps — Ethereum Classic',
    default: 'Ethereum Classic Apps & dApps',
  },
  description:
    'Discover DeFi, governance, infrastructure, payments, and tools built on Ethereum Classic.',
}

export default function AppsLayout({ children }: { children: React.ReactNode }) {
  return children
}
