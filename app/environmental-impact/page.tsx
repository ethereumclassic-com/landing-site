import type { Metadata } from 'next'
import { EnergyHeroSection } from './components/EnergyHeroSection'
import { POWEnergyEconomicsSection } from './components/POWEnergyEconomicsSection'
import { ETCUniquePositionSection } from './components/ETCUniquePositionSection'
import { StrandedEnergySection } from './components/StrandedEnergySection'
import { ETCAsEnergyMarketSection } from './components/ETCAsEnergyMarketSection'
import { MiningHardwareSection } from './components/MiningHardwareSection'
import { GlobalHashrateSection } from './components/GlobalHashrateSection'

export const metadata: Metadata = {
  title: 'Environmental Impact & Energy Infrastructure | Ethereum Classic',
  description:
    'Ethereum Classic mining as demand for stranded and excess energy: remote hydro, flared wellhead gas, curtailed renewables and off-peak industrial power.',
  keywords: [
    'ETC mining energy',
    'stranded energy crypto',
    'proof of work sustainability',
    'Etchash energy infrastructure',
    'grid stabilization mining',
    'methane conversion mining',
    'sustainable proof of work',
    'Ethereum Classic environmental impact',
  ],
}

export default function EnvironmentalImpactPage() {
  return (
    <div>
      <EnergyHeroSection />
      <POWEnergyEconomicsSection />
      <ETCUniquePositionSection />
      <StrandedEnergySection />
      <ETCAsEnergyMarketSection />
      <MiningHardwareSection />
      <GlobalHashrateSection />
    </div>
  )
}
