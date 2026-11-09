import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

export const metadata: Metadata = {
  title: {
    template: '%s | Ethereum Classic',
    default: 'Why Classic: The Philosophy of Ethereum Classic',
  },
  description:
    'The principles behind Ethereum Classic: its genesis, code is law, decentralism, proof of work and sound money.',
  openGraph: { ...OG_BASE },
}

export default function WhyClassicLayout({ children }: { children: React.ReactNode }) {
  return children
}
