import {
  Hero,
  StatsStrip,
  ProductCards,
  TrendingNews,
  EcosystemStats,
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
      <StatsStrip />
      <SectionDivider />
      <ProductCards />
      <SectionDivider />
      <TrendingNews />
      <SectionDivider />
      <EcosystemStats />
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
