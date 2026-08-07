import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

export const metadata: Metadata = {
  title: {
    template: '%s | ETC FAQ — Ethereum Classic',
    default: 'Frequently Asked Questions — Ethereum Classic',
  },
  description:
    'Get answers to common questions about Ethereum Classic — for users, investors, miners, developers, and community members.',
  openGraph: {
    ...OG_BASE,
    title: 'Ethereum Classic FAQ — 42 Questions Answered',
    description:
      'Common questions about ETC answered for users, investors, miners, developers, and community members.',
  },
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children
}
