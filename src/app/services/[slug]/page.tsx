import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { servicesData, ServiceItem } from '@/data/services';
import { projectsData } from '@/data/projects';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { 
  ArrowRight, 
  Check, 
  ChevronRight, 
  HelpCircle, 
  Cpu, 
  Globe, 
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

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Service Not Found | Ronin Pulse' };

  return {
    title: `${service.title} | Ronin Pulse Solutions`,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const Icon = iconMap[service.iconName] || Globe;

  // Find related case studies matching this service
  const relatedProjects = projectsData.filter((p) =>
    p.servicesUsed.some((s) => s.toLowerCase().includes(service.title.toLowerCase()) || service.title.toLowerCase().includes(s.toLowerCase()))
  ).slice(0, 2);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-mono text-rp-grey-500 mb-8">
          <Link href="/" className="hover:text-rp-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/services" className="hover:text-rp-white transition-colors">Services</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-rp-red font-semibold">{service.title}</span>
        </nav>

        {/* Service Hero */}
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-rp-surface to-rp-ink border border-rp-border mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rp-red-dark/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-rp-surface-2 border border-rp-border text-xs font-mono text-rp-red mb-6">
              <Icon className="w-4 h-4" />
              <span>Specialized Capability</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold italic text-rp-white tracking-tight mb-6">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-rp-grey-300 leading-relaxed mb-8">
              {service.fullDescription}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-rp-red to-rp-red-bright shadow-[0_0_25px_rgba(224,5,63,0.5)] hover:shadow-[0_0_35px_rgba(224,5,63,0.7)] transition-all flex items-center gap-2 group"
              >
                <span>Request Scope & Quotation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-rp-white bg-rp-surface hover:bg-rp-surface-2 border border-rp-border transition-colors"
              >
                View Related Case Studies
              </Link>
            </div>
          </div>
        </div>

        {/* Key Metrics / Benchmarks */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
          {service.stats.map((st) => (
            <div key={st.label} className="p-6 rounded-2xl bg-rp-surface border border-rp-border text-center">
              <span className="font-display font-black italic text-3xl sm:text-4xl text-rp-red block mb-1">
                {st.value}
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-rp-grey-300">
                {st.label}
              </span>
            </div>
          ))}
        </div>

        {/* What We Deliver & Technologies */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Deliverables Checklist (7 cols) */}
          <div className="lg:col-span-7">
            <h2 className="font-display font-bold text-2xl text-rp-white mb-6">
              What We Deliver
            </h2>
            <div className="space-y-3.5">
              {service.deliverables.map((deliv) => (
                <div
                  key={deliv}
                  className="p-4 rounded-xl bg-rp-surface border border-rp-border flex items-start gap-3"
                >
                  <Check className="w-4 h-4 text-rp-red flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-rp-grey-100 leading-relaxed font-medium">
                    {deliv}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Arsenal (5 cols) */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-rp-ink border border-rp-border">
            <h3 className="font-display font-bold text-lg text-rp-white mb-4">
              Technology Stack
            </h3>
            <p className="text-xs text-rp-grey-500 mb-6">
              Our engineering team deploys the following production-tested frameworks and toolkits for this service:
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-rp-surface border border-rp-border font-mono text-xs text-rp-white"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-rp-surface-2/60 border border-rp-border text-xs text-rp-grey-300">
              <span className="font-mono text-rp-red font-bold block mb-1">
                Enterprise SLA Guarantee
              </span>
              All deliverables undergo automated regression testing, sub-second performance benchmarking, and OWASP security audits prior to handover.
            </div>
          </div>
        </div>

        {/* 5-Step Service Process */}
        <div className="my-20">
          <h2 className="font-display font-bold text-2xl text-rp-white mb-8">
            How We Deliver: Step-by-Step
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.processSteps.map((step, idx) => (
              <div key={step.title} className="p-6 rounded-2xl bg-rp-surface border border-rp-border">
                <span className="font-mono text-xs font-bold text-rp-red block mb-2">
                  Phase 0{idx + 1}
                </span>
                <h3 className="font-display font-bold text-base text-rp-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-rp-grey-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mini FAQs */}
        <div className="my-20 p-8 sm:p-12 rounded-3xl bg-rp-surface border border-rp-border">
          <h2 className="font-display font-bold text-2xl text-rp-white mb-6 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-rp-red" />
            <span>Frequently Asked Questions</span>
          </h2>
          <div className="space-y-6">
            {service.faqs.map((f) => (
              <div key={f.q} className="pb-6 border-b border-rp-border/60 last:border-0 last:pb-0">
                <h4 className="font-display font-bold text-sm sm:text-base text-rp-white mb-2">
                  {f.q}
                </h4>
                <p className="text-xs sm:text-sm text-rp-grey-300 leading-relaxed">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Case Studies */}
        {relatedProjects.length > 0 && (
          <div className="my-20">
            <h2 className="font-display font-bold text-2xl text-rp-white mb-6">
              Relevant Client Case Studies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/portfolio/${p.slug}`}
                  className="p-6 rounded-2xl bg-rp-surface border border-rp-border hover:border-rp-red/40 transition-all duration-300 group"
                >
                  <span className="font-mono text-[10px] text-rp-red uppercase tracking-wider block mb-1">
                    {p.client} · {p.category}
                  </span>
                  <h3 className="font-display font-bold text-lg text-rp-white group-hover:text-rp-red-bright transition-colors mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-rp-grey-300 line-clamp-2 mb-4">
                    {p.overview}
                  </p>
                  <span className="text-xs font-mono text-rp-red flex items-center gap-1 font-semibold">
                    Read Case Study <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Dedicated Service Bottom CTA */}
        <div className="mt-20 p-10 rounded-3xl bg-rp-ink border border-rp-border text-center">
          <h3 className="font-display text-2xl sm:text-3xl font-bold italic text-rp-white mb-3">
            Ready to deploy {service.title}?
          </h3>
          <p className="text-xs sm:text-sm text-rp-grey-300 max-w-lg mx-auto mb-6">
            Partner with senior engineers who understand both architectural purity and commercial velocity.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-xs text-white bg-gradient-to-r from-rp-red to-rp-red-bright shadow-[0_0_25px_rgba(224,5,63,0.5)] transition-all group"
          >
            <span>Book a Technical Discovery Session</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
