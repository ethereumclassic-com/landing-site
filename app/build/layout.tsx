import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Build on ETC — Ethereum Classic',
    default: 'Build on Ethereum Classic',
  },
  description:
    'Developer documentation, tools, clients, faucets, and grants for building on Ethereum Classic.',
}

export default function BuildLayout({ children }: { children: React.ReactNode }) {
  return children
}
