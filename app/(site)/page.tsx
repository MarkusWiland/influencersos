// app/page.tsx
import AudienceSection from '@/components/sections/audience-section'
import FeaturesSection from '@/components/sections/features-section'
import HeroSection from '@/components/sections/hero-section'
import PricingSection from '@/components/sections/pricing-section'
import StepsSection from '@/components/sections/steps-section'

export default function HomePage() {
  return (
    <main className="">
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <StepsSection />
      <AudienceSection />
    </main>
  )
}
