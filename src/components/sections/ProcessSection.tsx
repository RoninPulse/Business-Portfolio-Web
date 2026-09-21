'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Search, Compass, Palette, Code, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Discover & Align',
    icon: Search,
    description: 'We deconstruct your operational workflows, user friction, competitive landscape, and commercial objectives to establish exact technical benchmarks.',
    deliverable: 'Technical Discovery Document & Scope Map',
  },
  {
    step: '02',
    title: 'Strategy & Architecture',
    icon: Compass,
    description: 'We design data schemas, API specifications, and cloud infrastructure requirements before writing a single line of application code.',
    deliverable: 'System Architecture & Database Schema',
  },
  {
    step: '03',
    title: 'Interactive Design & Prototyping',
    icon: Palette,
    description: 'Crafting pixel-perfect design systems, WCAG accessible components, and interactive prototypes with realistic motion choreography in Figma.',
    deliverable: 'Complete Figma Design System & Prototype',
  },
  {
    step: '04',
    title: 'Sprint Development & CI/CD',
    icon: Code,
    description: 'Bi-weekly iterative delivery with automated testing, continuous integration pipelines, and staging environments you can test at any moment.',
    deliverable: 'Production-Grade TypeScript Codebase',
  },
  {
    step: '05',
    title: 'Rigorous QA & Production Launch',
    icon: Rocket,
    description: 'Cross-browser stress testing, penetration audits, and zero-downtime DNS deployment with Google Core Web Vitals scoring above 95.',
    deliverable: 'Live Production Release & DNS Cutover',
  },
  {
    step: '06',
    title: 'Scale, Growth & 24/7 SLAs',
    icon: TrendingUp,
    description: 'Continuous performance optimization, technical SEO compounding, targeted paid media acquisition, and 24/7 SLA infrastructure health monitoring.',
    deliverable: 'Ongoing Retainer & SLA Hypercare',
  },
];

export function ProcessSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-rp-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Proven Execution"
          title="The Samurai Delivery"
          titleAccent="Process."
          description="A disciplined, transparent 6-stage engineering and growth framework designed to eliminate guesswork, risks, and missed deadlines."
        />

        {/* Process Timeline Grid with Glowing Nodes */}
        <div className="relative">
          {/* Central Red Timeline Track (hidden on mobile, visible on lg) */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 -translate-x-1/2 w-0.5 bg-gradient-to-b from-rp-red via-rp-red-bright to-rp-red-dark shadow-[0_0_15px_#FF2D5F]" />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.step}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Card Content (half width) */}
                  <div className={`w-full lg:w-1/2 ${isEven ? 'lg:pr-14 lg:text-right' : 'lg:pl-14 lg:text-left'}`}>
                    <div className="p-8 rounded-2xl bg-rp-surface border border-rp-border hover:border-rp-red/50 transition-all duration-300 group hover:shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(224,5,63,0.2)]">
                      <span className="font-mono text-xs font-bold text-rp-red uppercase tracking-widest block mb-2">
                        Phase {item.step}
                      </span>
                      <h3 className="font-display font-bold text-xl text-rp-white mb-3 group-hover:text-rp-red-bright transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-rp-grey-300 leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rp-surface-2 border border-rp-border font-mono text-[11px] text-rp-grey-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-rp-red" />
                        <span>Deliverable: {item.deliverable}</span>
                      </div>
                    </div>
                  </div>

                  {/* Glowing Node in the center */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-rp-black border-2 border-rp-red items-center justify-center text-rp-red shadow-[0_0_20px_#E0053F] z-20">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Empty counterpart space on large screens */}
                  <div className="hidden lg:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
