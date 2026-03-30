import { getFAQSection } from '../data/faqs'
import { FAQJsonLd } from '@/app/components/JsonLd'
import FAQPageClient from '../components/FAQPageClient'

export default function DevelopersFAQPage() {
  const section = getFAQSection('developers')!
  return (
    <>
      <FAQJsonLd items={section.faqs} />
      <FAQPageClient section={section} />
    </>
  )
}
