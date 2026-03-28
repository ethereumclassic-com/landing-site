import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mining Guides',
  description: 'Learn how to mine Ethereum Classic. Hardware, pools, profitability, and solo vs pool mining.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
