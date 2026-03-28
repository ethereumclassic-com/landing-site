import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Community — Ethereum Classic',
    default: 'Ethereum Classic Community',
  },
  description:
    'Join the ETC community. Social channels, events, and ways to contribute.',
}

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return children
}
