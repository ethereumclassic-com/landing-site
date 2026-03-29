import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Core Developer Calls',
  description:
    'Where Ethereum Classic protocol decisions are made. Redirecting to the Core Developer Calls archive.',
}

export default function CdcLayout({ children }: { children: React.ReactNode }) {
  return children
}
