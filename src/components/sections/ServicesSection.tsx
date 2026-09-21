'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Globe, Cpu, Smartphone, ShoppingBag, Palette, TrendingUp, Server, ShieldCheck, LucideIcon } from 'lucide-react';
import { servicesData } from '@/data/services';
import { TiltCard } from '@/components/ui/TiltCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Cpu,
  Smartphone,
  ShoppingBag,
  Palette,
  TrendingUp,
  Server,
  ShieldCheck,
};

export function ServicesSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-rp-ink border-t border-rp-border overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-rp-red-dark/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Specialized Capabilities"
          title="Full-Spectrum Engineering &"
          titleAccent="Digital Growth."
          description="From custom enterprise web platforms and high-speed mobile apps to algorithmic ad funnels and cloud infrastructure, explore how our technology arm powers market leaders."
        />

        {/* 8 Tiltable 3D Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.iconName] || Globe;
            return (
              <TiltCard key={service.slug} className="p-6 flex flex-col justify-between h-full bg-rp-surface/60">
                <div>
                  {/* Icon & Index badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-rp-surface-2 border border-rp-border flex items-center justify-center text-rp-red group-hover:bg-rp-red group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(224,5,63,0.15)] group-hover:shadow-[0_0_20px_#E0053F]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs text-rp-grey-500 font-bold">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-lg font-bold italic text-rp-white mb-2.5 group-hover:text-rp-red-bright transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-rp-grey-300 leading-relaxed mb-6 line-clamp-3">
                    {service.shortDescription}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="default">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Learn More Link */}
                <div className="pt-4 border-t border-rp-border/60">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-rp-white group-hover:text-rp-red transition-colors"
                  >
                    <span>Explore service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform text-rp-red" />
                  </Link>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* View All Services Bottom Banner */}
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-rp-surface hover:bg-rp-surface-2 border border-rp-border hover:border-rp-red/40 text-xs font-mono uppercase tracking-widest text-rp-white transition-all duration-300 shadow-lg"
          >
            <span>Compare all 8 service capabilities & SLAs</span>
            <ArrowRight className="w-4 h-4 text-rp-red" />
          </Link>
        </div>
      </div>
    </section>
  );
}
