import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Ethereum Classic',
    default: 'ETC Research & Analytics',
  },
  description:
    'Network analytics, supply and emission data, fee analysis, and the history of Ethereum Classic.',
}

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return children
}
