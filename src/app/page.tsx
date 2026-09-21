import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { MarqueeSection } from '@/components/sections/MarqueeSection';
import { AboutTeaserSection } from '@/components/sections/AboutTeaserSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { FeaturedProjectsSection } from '@/components/sections/FeaturedProjectsSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { TechStackSection } from '@/components/sections/TechStackSection';
import { MarketingResultsSection } from '@/components/sections/MarketingResultsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ClientsSection } from '@/components/sections/ClientsSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <AboutTeaserSection />
      <ServicesSection />
      <WhyUsSection />
      <FeaturedProjectsSection />
      <ProcessSection />
      <TechStackSection />
      <MarketingResultsSection />
      <TestimonialsSection />
      <ClientsSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
