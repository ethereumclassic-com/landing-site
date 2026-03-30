import { getFAQSection } from '../data/faqs'
import { FAQJsonLd } from '@/app/components/JsonLd'
import FAQPageClient from '../components/FAQPageClient'

export default function UsersFAQPage() {
  const section = getFAQSection('users')!
  return (
    <>
      <FAQJsonLd items={section.faqs} />
      <FAQPageClient section={section} />
    </>
  )
}
