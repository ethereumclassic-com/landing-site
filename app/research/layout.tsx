import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Research — Ethereum Classic',
    default: 'ETC Research & Analytics',
  },
  description:
    'Network analytics, supply data, fee analysis, and research reports for Ethereum Classic.',
}

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return children
}
