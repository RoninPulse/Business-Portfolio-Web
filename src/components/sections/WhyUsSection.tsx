import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Code, MessageSquare, Gauge, Shield, LifeBuoy, Target } from 'lucide-react';

const differentiators = [
  {
    icon: Code,
    title: 'Bespoke Engineering, Zero Templates',
    description: 'We do not sell pre-made WordPress themes or bloated page-builders. Every system is constructed from the ground up to match your operational specifications.',
  },
  {
    icon: MessageSquare,
    title: 'Transparent Direct Communication',
    description: 'No bureaucratic account managers or game of telephone. You collaborate directly with senior technical leads and product designers in real time.',
  },
  {
    icon: Gauge,
    title: 'Speed & Architectural Precision',
    description: 'We adhere to a sub-second performance standard. Every asset is optimized, every database query indexed, and every deployment automated.',
  },
  {
    icon: Shield,
    title: 'Security-First & Scalable by Default',
    description: 'From OWASP security protocols to auto-scaling container clusters on AWS, our systems handle surges from 100 to 1,000,000 concurrent sessions safely.',
  },
  {
    icon: LifeBuoy,
    title: 'Battle-Ready Ongoing SLA Support',
    description: 'Launch day is just the beginning. Our ongoing maintenance SLAs provide guaranteed response times, vulnerability patches, and proactive health audits.',
  },
  {
    icon: Target,
    title: 'Commercial, Results-Driven Marketing',
    description: 'We don’t settle for vanity impressions. We optimize for low acquisition costs, multi-channel attribution, and verifiable revenue lift.',
  },
];

export function WhyUsSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-rp-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="The Ronin Advantage"
          title="Why Leading Enterprises Choose Us as Their"
          titleAccent="Technology Arm."
          description="We combine the elite technical craft of a boutique engineering studio with the commercial firepower of a performance marketing agency."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <div
                key={diff.title}
                className="relative p-8 rounded-2xl bg-rp-surface/50 border border-rp-border hover:border-rp-red/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(224,5,63,0.15)]"
              >
                <div className="w-12 h-12 rounded-xl bg-rp-surface-2 group-hover:bg-rp-red/20 text-rp-red flex items-center justify-center mb-6 transition-colors shadow-inner">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-base text-rp-white mb-3 group-hover:text-rp-red-bright transition-colors">
                  {diff.title}
                </h3>
                <p className="text-xs sm:text-sm text-rp-grey-300 leading-relaxed font-normal">
                  {diff.description}
                </p>
                <div className="absolute top-6 right-6 font-mono text-xs text-rp-grey-500">
                  // 0{index + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
