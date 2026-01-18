/**
 * EthereumClassic.com Homepage
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
