'use client';

import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';

export function FinalCTASection() {
  return (
    <section className="relative py-28 sm:py-36 bg-rp-ink border-t border-rp-border overflow-hidden select-none">
      {/* Concentric red ripple aura backdrop */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full border border-rp-red/20 animate-ripple-expand" />
        <div className="w-[800px] h-[800px] rounded-full border border-rp-red-dark/30 animate-pulse-slow" />
        <div className="w-[350px] h-[350px] rounded-full bg-rp-red/10 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-rp-red mb-4">
          Ready For Next-Level Velocity?
        </span>

        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold italic text-rp-white tracking-tight leading-[1.1] mb-6">
          Ready to put your idea in{' '}
          <span className="font-accent font-black italic text-rp-red drop-shadow-[0_0_35px_rgba(224,5,63,0.6)]">
            motion?
          </span>
        </h2>

        <p className="text-sm sm:text-base text-rp-grey-300 max-w-xl mx-auto mb-10 leading-relaxed font-normal">
          Whether you require a bespoke web portal, cloud software modernization, or high-converting digital marketing, your technology arm is ready.
        </p>

        {/* Primary Magnetic CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <MagneticButton>
            <Link
              href="/contact"
              className="px-9 py-4 rounded-full font-bold text-sm text-white bg-gradient-to-r from-rp-red via-rp-red-bright to-rp-red shadow-[0_0_35px_rgba(224,5,63,0.6)] hover:shadow-[0_0_50px_rgba(224,5,63,0.85)] transition-all duration-300 flex items-center gap-2 group"
            >
              <span>Initialize Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </MagneticButton>

          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-4 rounded-full font-semibold text-xs sm:text-sm text-rp-white bg-rp-surface hover:bg-rp-surface-2 border border-rp-border hover:border-emerald-500/50 transition-all duration-300 flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Chat via WhatsApp</span>
          </a>
        </div>

        {/* Phone shortcut display */}
        <div className="flex items-center justify-center gap-2 text-xs font-mono text-rp-grey-300">
          <span>Prefer a quick phone discussion? Call</span>
          <a
            href={siteConfig.contact.phoneTel}
            className="text-white hover:text-rp-red underline underline-offset-4 decoration-rp-red font-semibold transition-colors"
          >
            {siteConfig.contact.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
