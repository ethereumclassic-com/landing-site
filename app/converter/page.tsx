import type { Metadata } from 'next'
import { StubPage } from '../components/templates'

export const metadata: Metadata = {
  title: 'Price Converter | Ethereum Classic',
  description: 'Convert Ethereum Classic to USD, BTC, and other currencies. Real-time conversion rates.',
}

export default function ConverterPage() {
  return (
    <StubPage
      title="Price Converter"
      description="Convert Ethereum Classic to any fiat currency or cryptocurrency instantly. Get real-time conversion rates for ETC to USD, EUR, BTC, ETH, and more."
      expectedPhase="Phase 2"
      relatedLinks={[
        { label: 'ETC Price', href: '/price' },
        { label: 'Investment Calculator', href: '/calculator' },
        { label: 'Buy ETC', href: '/buy' },
      ]}
    />
  )
}
