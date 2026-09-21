'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { SectionHeading } from '@/components/ui/SectionHeading';

const TechOrbit = dynamic(
  () => import('@/components/three/TechOrbit').then((mod) => mod.TechOrbit),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[400px] sm:h-[480px] flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-rp-red border-t-transparent animate-spin" />
      </div>
    ),
  }
);

const techCategories = [
  {
    category: 'Frontend & Creative',
    skills: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS', 'Three.js / WebGL', 'Framer Motion', 'Figma'],
  },
  {
    category: 'Backend & Cloud',
    skills: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'Redis', 'AWS Cloud', 'Docker', 'Kubernetes'],
  },
  {
    category: 'Mobile & E-Commerce',
    skills: ['Flutter', 'React Native', 'Shopify Plus', 'WooCommerce', 'Stripe', 'PayHere', 'GraphQL'],
  },
  {
    category: 'Growth & Analytics',
    skills: ['Google Ads', 'Meta Ads CAPI', 'Technical SEO', 'Google Analytics 4', 'Looker Studio', 'Klaviyo'],
  },
];

export function TechStackSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-rp-ink border-t border-rp-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Modern Architecture"
          title="Battle-Tested Technologies"
          titleAccent="Without Compromise."
          description="We do not follow fleeting hype cycles. We engineer on stable, ultra-fast, and scalable modern technology foundations."
        />

        {/* 3D Interactive Tech Orbit */}
        <div className="relative mb-16 rounded-3xl bg-rp-surface/40 border border-rp-border overflow-hidden">
          <div className="absolute top-4 left-6 z-10 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rp-red animate-ping" />
            <span className="text-[11px] font-mono text-rp-grey-300 uppercase tracking-wider">
              Interactive 3D Technology Sphere (Drag to Rotate)
            </span>
          </div>
          <TechOrbit />
        </div>

        {/* Categorized Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((cat) => (
            <div
              key={cat.category}
              className="p-6 rounded-2xl bg-rp-surface border border-rp-border hover:border-rp-red/30 transition-colors"
            >
              <h3 className="font-display font-bold text-xs uppercase tracking-wider text-rp-white mb-4 pb-2 border-b border-rp-border/60">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-rp-surface-2 border border-rp-border/70 text-xs font-mono text-rp-grey-100 hover:border-rp-red/60 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
