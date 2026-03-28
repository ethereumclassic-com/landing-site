import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contract Verification',
  description: 'Verify smart contract source code on the Ethereum Classic blockchain.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
