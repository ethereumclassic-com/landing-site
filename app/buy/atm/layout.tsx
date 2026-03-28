import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bitcoin ATMs',
  description:
    'Find Bitcoin ATMs that support Ethereum Classic near you.',
}

export default function AtmLayout({ children }: { children: React.ReactNode }) {
  return children
}
