import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

// /olympia/clients/layout.tsx sets a plain-string title, which ends the section's
// title template, so this title carries its own context.
const title = 'Fukuii and Olympia | Ethereum Classic'
const description =
  'Fukuii and Olympia: Fukuii is in alpha, an alternative to try. Run its latest release now; no released client implements Olympia, which is a proposal.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://ethereumclassic.com/olympia/clients/fukuii' },
  openGraph: { ...OG_BASE },
}

export default function FukuiiLayout({ children }: { children: React.ReactNode }) {
  return children
}
