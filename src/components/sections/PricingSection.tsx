import React from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { pricingTiers } from '@/data/stats';
import { Check, ArrowRight } from 'lucide-react';

export function PricingSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-rp-ink border-t border-rp-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Transparent Engagements"
          title="Predictable Pricing for"
          titleAccent="Ambitious Projects."
          description="Fixed-price milestones and dedicated sprint retainers. Zero hidden surprises, zero scope creep."
        />

        {/* 3 Pricing Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                tier.highlighted
                  ? 'bg-rp-surface border-2 border-rp-red shadow-[0_0_40px_rgba(224,5,63,0.35)] scale-105 z-10'
                  : 'bg-rp-surface/60 border border-rp-border hover:border-rp-border/90'
              }`}
            >
              {/* Highlight badge */}
              {tier.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-rp-red text-white text-[11px] font-mono font-bold tracking-wider uppercase shadow-[0_0_15px_#FF2D5F]">
                  {tier.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-bold text-xl text-rp-white">
                    {tier.name}
                  </h3>
                  {!tier.highlighted && (
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-rp-surface-2 text-rp-grey-500">
                      {tier.badge}
                    </span>
                  )}
                </div>

                <div className="mb-6">
                  <span className="font-display text-3xl sm:text-4xl font-black italic text-rp-white">
                    {tier.price}
                  </span>
                  <span className="text-xs font-mono text-rp-grey-500 block mt-1">
                    {tier.frequency}
                  </span>
                </div>

                <p className="text-xs text-rp-grey-300 mb-8 leading-relaxed">
                  {tier.description}
                </p>

                {/* Features list */}
                <div className="space-y-3 pt-6 border-t border-rp-border/60 mb-8">
                  {tier.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs text-rp-grey-100">
                      <Check className="w-4 h-4 text-rp-red flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                className={`w-full py-3.5 rounded-xl font-semibold text-xs text-center flex items-center justify-center gap-2 transition-all duration-300 ${
                  tier.highlighted
                    ? 'bg-gradient-to-r from-rp-red to-rp-red-bright hover:from-rp-red-bright hover:to-rp-red text-white shadow-[0_0_20px_rgba(224,5,63,0.5)]'
                    : 'bg-rp-surface-2 hover:bg-rp-surface border border-rp-border text-rp-white hover:border-rp-red/40'
                }`}
              >
                <span>{tier.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
