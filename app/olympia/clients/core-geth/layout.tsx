import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

// /olympia/clients/layout.tsx sets a plain-string title, which ends the section's
// title template, so this title carries its own context.
const title = 'Core-Geth Olympia Upgrade Guide — Ethereum Classic'
const description =
  'Get a Core-Geth node ready for Olympia: run the v1.13 line now, moving a v1.12 node with its required key rotation, and take the Olympia release before activation.'

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
