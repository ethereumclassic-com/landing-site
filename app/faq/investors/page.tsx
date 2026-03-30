import { getFAQSection } from '../data/faqs'
import { FAQJsonLd } from '@/app/components/JsonLd'
import FAQPageClient from '../components/FAQPageClient'

export default function InvestorsFAQPage() {
  const section = getFAQSection('investors')!
  return (
    <>
      <FAQJsonLd items={section.faqs} />
      <FAQPageClient section={section} />
    </>
  )
}
