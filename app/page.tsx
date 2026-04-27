import {
  Hero,
  NetworkOverviewSection,
  ActiveEventsSection,
  ProductCards,
  TrendingNews,
  ProductSuite,
  TrustSignals,
  FinalCTA,
} from './components/homepage'
import { SiteFooter } from './sections/SiteFooter'
import { SectionDivider } from './components/ui'

export default function Page() {
  return (
    <main>
      <Hero />
      <NetworkOverviewSection />
      <ActiveEventsSection />
      <SectionDivider />
      <ProductCards />
      <SectionDivider />
      <TrendingNews />
      <SectionDivider />
      <ProductSuite />
      <SectionDivider />
      <TrustSignals />
      <SectionDivider variant="strong" />
      <FinalCTA />
      <SiteFooter />
    </main>
  )
}
