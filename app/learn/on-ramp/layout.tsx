import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'On-Ramp Guide',
  description: 'How to buy your first Ethereum Classic. Step-by-step guide from fiat to ETC.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
