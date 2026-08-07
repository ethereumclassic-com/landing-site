import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

export const metadata: Metadata = {
  title: {
    template: '%s | Why Classic — Ethereum Classic',
    default: 'Why Classic — Ethereum Classic Philosophy',
  },
  description:
    'The principles behind Ethereum Classic — genesis, code is law, decentralism, proof of work, and sound money.',
  openGraph: {
    ...OG_BASE,
    title: 'Why Classic — Ethereum Classic Philosophy',
    description:
      'The principles that define Ethereum Classic: genesis, code is law, decentralism, proof of work, and sound money.',
  },
}

export default function WhyClassicLayout({ children }: { children: React.ReactNode }) {
  return children
}
