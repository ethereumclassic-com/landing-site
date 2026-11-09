import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ecosystem Directory | Ethereum Classic',
  description: 'Wallets, exchanges, mining pools and infrastructure providers that support Ethereum Classic, each checked before it is listed.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
