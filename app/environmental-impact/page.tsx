import type { Metadata } from 'next'
import { EnergyHeroSection } from './components/EnergyHeroSection'
import { POWEnergyEconomicsSection } from './components/POWEnergyEconomicsSection'
import { ETCUniquePositionSection } from './components/ETCUniquePositionSection'
import { StrandedEnergySection } from './components/StrandedEnergySection'
import { ETCAsEnergyMarketSection } from './components/ETCAsEnergyMarketSection'
import { MiningHardwareSection } from './components/MiningHardwareSection'
import { GlobalHashrateSection } from './components/GlobalHashrateSection'

export const metadata: Metadata = {
  title: 'Environmental Impact & Energy Infrastructure — Ethereum Classic',
  description:
    'Ethereum Classic proof-of-work mining as programmable energy infrastructure. Stranded energy monetization, grid stabilization, methane conversion, and sustainable PoW economics.',
  keywords: [
    'ETC mining energy',
    'stranded energy crypto',
    'proof of work sustainability',
    'ETChash energy infrastructure',
    'grid stabilization mining',
    'methane conversion mining',
    'sustainable proof of work',
    'Ethereum Classic environmental impact',
  ],
}

export default function EnvironmentalImpactPage() {
  return (
    <main>
      <EnergyHeroSection />
      <POWEnergyEconomicsSection />
      <ETCUniquePositionSection />
      <StrandedEnergySection />
      <ETCAsEnergyMarketSection />
      <MiningHardwareSection />
      <GlobalHashrateSection />
    </main>
  )
}
