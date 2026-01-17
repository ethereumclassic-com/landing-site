/**
 * ethereumclassic.com v0.2 Phase 1
 * Multi-section consumer platform (Bitcoin.com model)
 */

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

export default function Page() {
  return (
    <main>
      <Hero />
      <StatsStrip />
      <ProductCards />
      <TrendingNews />
      <EcosystemStats />
      <ProductSuite />
      <TrustSignals />
      <FinalCTA />
      <SiteFooter />
    </main>
  )
}
