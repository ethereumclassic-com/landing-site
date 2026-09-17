import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Core-Geth Upgrade Guide',
  description:
    'Core-Geth upgrade guide: v1.13.0 fixes six CVEs and moves the client to Go 1.26, with no resync. Run Fukuii beside it once Fukuii publishes a release.',
}

export default function CoreGethLayout({ children }: { children: React.ReactNode }) {
  return children
}
