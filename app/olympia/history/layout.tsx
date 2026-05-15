import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ethereum Classic History — A Decade of Conviction',
  description:
    'Ten years of Ethereum Classic: the funding teams that came and went, two rejected treasury proposals that defined what the community would and would not accept, the stewards who held the line, and how Olympia finally delivers what the community has sought since 2016.',
}

export default function HistoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
