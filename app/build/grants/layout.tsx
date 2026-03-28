import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Grants',
  description: 'Apply for Ethereum Classic development grants and funding opportunities.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
