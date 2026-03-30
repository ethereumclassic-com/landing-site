import { getFAQSection } from '../data/faqs'
import { FAQJsonLd } from '@/app/components/JsonLd'
import FAQPageClient from '../components/FAQPageClient'

export default function MinersFAQPage() {
  const section = getFAQSection('miners')!
  return (
    <>
      <FAQJsonLd items={section.faqs} />
      <FAQPageClient section={section} />
    </>
  )
}
