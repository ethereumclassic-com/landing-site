import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Price Charts',
  description: 'Live Ethereum Classic price charts, trading volume, and market cap data.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
