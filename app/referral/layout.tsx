import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Referral Program — Ethereum Classic',
  robots: { index: false, follow: false },
}

export default function ReferralLayout({ children }: { children: React.ReactNode }) {
  return children
}
