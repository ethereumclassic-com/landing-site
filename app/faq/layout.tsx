import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | ETC FAQ — Ethereum Classic',
    default: 'Frequently Asked Questions — Ethereum Classic',
  },
  description:
    'Get answers to common questions about Ethereum Classic — for users, investors, miners, developers, and community members.',
  openGraph: {
    title: 'Ethereum Classic FAQ — 42 Questions Answered',
    description:
      'Common questions about ETC answered for users, investors, miners, developers, and community members.',
    type: 'website',
  },
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children
}
