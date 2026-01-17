import type { Metadata } from 'next'
import { StubPage } from '../components/templates'

export const metadata: Metadata = {
  title: 'Investment Calculator | Ethereum Classic',
  description: 'Calculate potential returns on your Ethereum Classic investment. Historical and future projections.',
}

export default function CalculatorPage() {
  return (
    <StubPage
      title="Investment Calculator"
      description="Calculate potential returns on your Ethereum Classic investment. See historical performance, compare with other assets, and plan your investment strategy."
      expectedPhase="Phase 2"
      relatedLinks={[
        { label: 'Price Converter', href: '/converter' },
        { label: 'ETC Price', href: '/price' },
        { label: 'Buy ETC', href: '/buy' },
      ]}
    />
  )
}
