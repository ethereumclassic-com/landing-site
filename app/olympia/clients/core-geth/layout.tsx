import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

// /olympia/clients/layout.tsx sets a plain-string title, which ends the section's
// title template, so this title carries its own context.
const title = 'Core-Geth and Olympia | Ethereum Classic'
const description =
  'Core-Geth and Olympia: run the v1.13 line now, moving a v1.12 node with its required key rotation. No released client implements Olympia, which is a proposal.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://ethereumclassic.com/olympia/clients/core-geth' },
  openGraph: { ...OG_BASE },
}

export default function CoreGethLayout({ children }: { children: React.ReactNode }) {
  return children
}
