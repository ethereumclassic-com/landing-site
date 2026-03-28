import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mining OS',
  description:
    'Dedicated mining operating systems for Ethereum Classic rigs.',
}

export default function OsLayout({ children }: { children: React.ReactNode }) {
  return children
}
