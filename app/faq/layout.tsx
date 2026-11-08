import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

export const metadata: Metadata = {
  title: {
    template: '%s | Ethereum Classic',
    default: 'Frequently Asked Questions — Ethereum Classic',
  },
  description:
    'Get answers to common questions about Ethereum Classic — for users, investors, miners, developers, and community members.',
  openGraph: { ...OG_BASE },
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children
}
