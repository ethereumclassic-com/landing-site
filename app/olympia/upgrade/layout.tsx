import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

/** The page is a client component, so its metadata lives here. */

// The /olympia layout appends "| Olympia — Ethereum Classic" through its title template.
const description =
  'What the Olympia upgrade asks of an Ethereum Classic node operator: which client release carries it, what each node needs to run, and the steps to take before activation.'

export const metadata: Metadata = {
  title: 'Node Operator Upgrade',
  description,
  alternates: { canonical: 'https://ethereumclassic.com/olympia/upgrade' },
  openGraph: {
    ...OG_BASE,
    title: 'Olympia Upgrade — What Node Operators Need to Do',
    description,
  },
}

export default function OlympiaUpgradeLayout({ children }: { children: React.ReactNode }) {
  return children
}
