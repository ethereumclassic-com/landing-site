import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

// /olympia/clients/layout.tsx sets a plain-string title, which ends the section's
// title template, so this title carries its own context.
const title = 'Fukuii Olympia Upgrade Guide — Ethereum Classic'
const description =
  'Get a Fukuii node ready for Olympia: Fukuii is in alpha, an alternative to try. Run its current release now, and take its Olympia release before activation.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://ethereumclassic.com/olympia/clients/fukuii' },
  openGraph: {
    ...OG_BASE,
    title,
    description,
  },
}

export default function FukuiiLayout({ children }: { children: React.ReactNode }) {
  return children
}
