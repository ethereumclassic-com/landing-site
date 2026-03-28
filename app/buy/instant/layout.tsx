import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Instant Buy',
  description:
    'Buy ETC instantly with credit card or debit card. No exchange account needed.',
}

export default function InstantLayout({ children }: { children: React.ReactNode }) {
  return children
}
