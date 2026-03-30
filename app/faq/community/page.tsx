import { getFAQSection } from '../data/faqs'
import { FAQJsonLd } from '@/app/components/JsonLd'
import FAQPageClient from '../components/FAQPageClient'

export default function CommunityFAQPage() {
  const section = getFAQSection('community')!
  return (
    <>
      <FAQJsonLd items={section.faqs} />
      <FAQPageClient section={section} />
    </>
  )
}
