import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Getting Started',
  description:
    'How to start mining Ethereum Classic. Beginner guide to ETC mining.',
}

export default function GettingStartedLayout({ children }: { children: React.ReactNode }) {
  return children
}
