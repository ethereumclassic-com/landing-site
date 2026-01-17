import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Price Converter Tool | Ethereum Classic',
  description: 'Convert ETC to any currency. Real-time exchange rates for Ethereum Classic.',
}

export default function ToolsConverterPage() {
  return (
    <StubPage
      title="Price Converter"
      description="Convert Ethereum Classic to any currency instantly. Get real-time exchange rates for ETC to USD, EUR, GBP, BTC, ETH, and 100+ other currencies."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Tools', href: '/tools' }}
      relatedLinks={[
        { label: 'Investment Calculator', href: '/tools/calculator' },
        { label: 'ETC Price', href: '/price' },
        { label: 'Tools Hub', href: '/tools' },
      ]}
    />
  )
}
