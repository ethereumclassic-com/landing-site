import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Content Editor — Ethereum Classic',
  robots: { index: false, follow: false },
}

export default function ContentEditorLayout({ children }: { children: React.ReactNode }) {
  return children
}
