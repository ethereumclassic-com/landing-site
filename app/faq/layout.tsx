import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | ETC FAQ — Ethereum Classic',
    default: 'Frequently Asked Questions — Ethereum Classic',
  },
  description:
    'Get answers to common questions about Ethereum Classic — for users, investors, miners, developers, and community members.',
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children
}
