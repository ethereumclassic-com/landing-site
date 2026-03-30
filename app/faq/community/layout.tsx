import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Community FAQ',
  description:
    'Ethereum Classic community questions answered — how to join, contribute, suggest protocol changes, and get involved.',
}

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return children
}
