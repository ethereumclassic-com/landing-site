import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Institutional Investment Products — Ethereum Classic',
  description:
    'The Grayscale Ethereum Classic Trust (ETCG), a trust product quoted on OTCQX since 2018: its fund facts, its structure and the brokerages that offer it.',
  openGraph: { ...OG_BASE },
}

export default function InvestmentProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
