import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Why Classic — Ethereum Classic',
    default: 'Why Classic — Ethereum Classic Philosophy',
  },
  description:
    'The principles behind Ethereum Classic — genesis, code is law, decentralism, proof of work, and sound money.',
  openGraph: {
    title: 'Why Classic — Ethereum Classic Philosophy',
    description:
      'The principles that define Ethereum Classic: genesis, code is law, decentralism, proof of work, and sound money.',
    type: 'website',
  },
}

export default function WhyClassicLayout({ children }: { children: React.ReactNode }) {
  return children
}
