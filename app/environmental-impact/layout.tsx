import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Proof-of-Work as Energy Infrastructure — Ethereum Classic',
  description:
    'Ethereum Classic mining functions as programmable demand for stranded and excess energy worldwide: remote hydro, flared wellhead gas, curtailed renewables, and off-peak industrial power.',
  openGraph: { ...OG_BASE },
}

export default function EnvironmentalImpactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
