import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | ETC News — Ethereum Classic',
    default: 'Ethereum Classic News',
  },
  description:
    'Latest news, updates, and ecosystem developments for Ethereum Classic.',
}

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children
}
