import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Supply Data',
  description: 'Ethereum Classic supply schedule, emission curve, and fifthing countdown.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
