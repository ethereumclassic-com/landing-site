import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Converter',
  description: 'Convert ETC to USD, BTC, ETH, and other currencies. Live exchange rates.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
