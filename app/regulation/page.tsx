import { RegulationHeroSection } from './components/RegulationHeroSection'
import { GlobalFrameworksSection } from './components/GlobalFrameworksSection'
import { ETCRegulatoryProfileSection } from './components/ETCRegulatoryProfileSection'
import { ClassicUSDSection } from './components/ClassicUSDSection'
import { ETCMarketDepthSection } from './components/ETCMarketDepthSection'
import { NetworkSecuritySection } from './components/NetworkSecuritySection'
import { ETCDecentralizationSection } from './components/ETCDecentralizationSection'

export default function RegulationPage() {
  return (
    <main>
      <RegulationHeroSection />
      <GlobalFrameworksSection />
      <ETCRegulatoryProfileSection />
      <ClassicUSDSection />
      <ETCMarketDepthSection />
      <NetworkSecuritySection />
      <ETCDecentralizationSection />
    </main>
  )
}
