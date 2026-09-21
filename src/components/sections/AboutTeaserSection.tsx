'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, Terminal, Trophy } from 'lucide-react';
import { homeStats } from '@/data/stats';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function AboutTeaserSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-rp-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="The Ronin Philosophy"
          title="Engineered with Samurai Precision,"
          titleAccent="Devoted to Your Mission."
          description="In Japanese history, a Ronin was a masterless warrior who answered only to absolute discipline and personal honor. We adopted this mantle because we reject bloated bureaucracy, generic templates, and complacent agency culture."
        />

        {/* Split Story & Feature Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Column: Story copy */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display text-2xl sm:text-3xl font-bold italic text-rp-white">
              We aren’t a vendor. We are your{' '}
              <span className="text-rp-red font-accent">dedicated technology arm</span>.
            </h3>
            <p className="text-sm sm:text-base text-rp-grey-300 leading-relaxed">
              When ambitious brands partner with Ronin Pulse, they gain a battle-tested squad of senior software architects, creative technologists, and growth engineers. We don’t hide behind junior account managers; you work directly with builders who obsess over every microsecond of latency and every conversion dollar.
            </p>
            <p className="text-sm sm:text-base text-rp-grey-300 leading-relaxed">
              From our headquarters in Sri Lanka to clients across London, New York, Sydney, and Singapore, we bridge artisanal visual design with enterprise-grade cloud architecture.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-mono text-xs text-rp-red hover:text-rp-red-bright font-semibold group"
              >
                <span>Read our full founding story & values</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Key Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-rp-surface border border-rp-border hover:border-rp-red/40 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-rp-surface-2 group-hover:bg-rp-red/20 text-rp-red flex items-center justify-center mb-4 transition-colors">
                <Terminal className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-sm text-rp-white mb-2">
                100% Bespoke Code
              </h4>
              <p className="text-xs text-rp-grey-500 leading-relaxed">
                Zero WordPress bloat, zero pre-bought themes. Every architecture is hand-crafted with modern TypeScript frameworks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-rp-surface border border-rp-border hover:border-rp-red/40 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-rp-surface-2 group-hover:bg-rp-red/20 text-rp-red flex items-center justify-center mb-4 transition-colors">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-sm text-rp-white mb-2">
                Sub-Second Speed
              </h4>
              <p className="text-xs text-rp-grey-500 leading-relaxed">
                Every site and web application is optimized to hit 95+ Core Web Vitals and edge-cached for global delivery.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-rp-surface border border-rp-border hover:border-rp-red/40 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-rp-surface-2 group-hover:bg-rp-red/20 text-rp-red flex items-center justify-center mb-4 transition-colors">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-sm text-rp-white mb-2">
                Enterprise Security
              </h4>
              <p className="text-xs text-rp-grey-500 leading-relaxed">
                OWASP compliant security practices, automated vulnerability scans, and strict data encryption protocols.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-rp-surface border border-rp-border hover:border-rp-red/40 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-rp-surface-2 group-hover:bg-rp-red/20 text-rp-red flex items-center justify-center mb-4 transition-colors">
                <Trophy className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-sm text-rp-white mb-2">
                Commercial Impact
              </h4>
              <p className="text-xs text-rp-grey-500 leading-relaxed">
                We measure triumph not in vanity impressions, but in lower acquisition costs, higher uptime, and real ROI.
              </p>
            </div>
          </div>
        </div>

        {/* Animated Counter Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-3xl bg-rp-ink border border-rp-border">
          {homeStats.map((stat) => (
            <div key={stat.id} className="flex flex-col">
              <span className="font-display text-4xl sm:text-5xl font-extrabold italic text-rp-white tracking-tight flex items-baseline">
                {stat.value}
                <span className="font-accent text-rp-red ml-0.5">{stat.suffix}</span>
              </span>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-rp-white mt-2">
                {stat.label}
              </span>
              <span className="text-[11px] text-rp-grey-500 mt-1 leading-snug">
                {stat.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
