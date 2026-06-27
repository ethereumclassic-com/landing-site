import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Core-Geth Upgrade Guide',
  description:
    'Core-Geth upgrade guide for Olympia — maintenance release with CVEs patched by White B0x, v1.13.0 pending. Migrate to Fukuii after Olympia activation.',
}

export default function CoreGethLayout({ children }: { children: React.ReactNode }) {
  return children
}
