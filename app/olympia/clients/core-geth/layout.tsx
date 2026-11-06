import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

// /olympia/clients/layout.tsx sets a plain-string title, which ends the section's
// title template, so this title carries its own context.
const title = 'Core-Geth Upgrade Guide for Ethereum Classic'
const description =
  'Run Core-Geth on the v1.13 line: install it, move a v1.12 node with its required P2P key rotation, and verify a download, with the steps on coregeth.com.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://ethereumclassic.com/olympia/clients/core-geth' },
  openGraph: {
    ...OG_BASE,
    title,
    description,
  },
}

export default function CoreGethLayout({ children }: { children: React.ReactNode }) {
  return children
}
