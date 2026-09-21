import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { servicesData } from '@/data/services';
import { TiltCard } from '@/components/ui/TiltCard';
import { Badge } from '@/components/ui/Badge';
import { 
  ArrowRight, 
  Check, 
  Globe, 
  Cpu, 
  Smartphone, 
  ShoppingBag, 
  Palette, 
  TrendingUp, 
  Server, 
  ShieldCheck 
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Cpu,
  Smartphone,
  ShoppingBag,
  Palette,
  TrendingUp,
  Server,
  ShieldCheck,
};

export const metadata: Metadata = {
  title: 'All 8 Services & Technology Capabilities',
  description:
    'Explore Ronin Pulse’s full suite of web design, custom software development, mobile apps, e-commerce, UX design, SEO, and cloud DevOps.',
};

export default function ServicesListingPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Capabilities & Solutions"
          title="Full-Stack Technical Capabilities"
          titleAccent="Engineered for Impact."
          description="Explore our complete roster of eight specialized technology services, built to accelerate modern business infrastructure and unlock digital market share."
        />

        {/* Detailed 8 Services List */}
        <div className="space-y-12 my-16">
          {servicesData.map((service, idx) => {
            const Icon = iconMap[service.iconName] || Globe;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={service.slug}
                id={service.slug}
                className="p-8 sm:p-12 rounded-3xl bg-rp-surface border border-rp-border hover:border-rp-red/40 transition-all duration-300 shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left info column (7 cols) */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-rp-surface-2 text-rp-red flex items-center justify-center shadow-inner">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="font-mono text-xs text-rp-red font-bold uppercase tracking-wider">
                          Capability 0{idx + 1}
                        </span>
                        <h2 className="font-display font-bold text-2xl sm:text-3xl text-rp-white">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm text-rp-grey-300 leading-relaxed font-normal">
                      {service.fullDescription}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4">
                      {service.deliverables.slice(0, 4).map((deliv) => (
                        <div key={deliv} className="flex items-start gap-2 text-xs text-rp-grey-100">
                          <Check className="w-3.5 h-3.5 text-rp-red flex-shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {service.technologies.map((t) => (
                        <Badge key={t} variant="default">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Right metrics & CTA column (5 cols) */}
                  <div className="lg:col-span-5 p-6 rounded-2xl bg-rp-ink border border-rp-border/80 flex flex-col justify-between h-full">
                    <div>
                      <span className="font-mono text-[11px] text-rp-grey-500 uppercase tracking-widest block mb-4">
                        Benchmark Impact
                      </span>
                      <div className="grid grid-cols-3 gap-3 mb-6">
                        {service.stats.map((s) => (
                          <div key={s.label} className="flex flex-col">
                            <span className="font-display font-black text-xl text-rp-red">
                              {s.value}
                            </span>
                            <span className="text-[10px] font-mono text-rp-grey-500 leading-tight mt-1">
                              {s.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 pt-4 border-t border-rp-border/60">
                      <Link
                        href={`/services/${service.slug}`}
                        className="w-full py-3 rounded-xl bg-rp-surface-2 hover:bg-rp-red text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all group"
                      >
                        <span>View Full Service Scope & Process</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link
                        href="/contact"
                        className="w-full py-2.5 rounded-xl border border-rp-border hover:border-rp-red/40 text-rp-grey-300 hover:text-white text-xs font-mono flex items-center justify-center transition-colors"
                      >
                        Request Quote for This Service
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
