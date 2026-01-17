import type { Metadata } from 'next'
import { StubPage } from '../components/templates'

export const metadata: Metadata = {
  title: 'Tools | Ethereum Classic',
  description: 'Useful tools for Ethereum Classic users. Converters, calculators, gas tracker, and more.',
}

export default function ToolsPage() {
  return (
    <StubPage
      title="Tools Hub"
      description="Essential tools for Ethereum Classic users. Price converters, investment calculators, gas trackers, block explorers, and utility tools to enhance your ETC experience."
      expectedPhase="Phase 2"
      relatedLinks={[
        { label: 'Price Converter', href: '/tools/converter' },
        { label: 'Investment Calculator', href: '/tools/calculator' },
        { label: 'Gas Tracker', href: '/tools/gas' },
      ]}
    />
  )
}
