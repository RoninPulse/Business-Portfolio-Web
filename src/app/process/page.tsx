import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { ArrowRight, Shield, CheckCircle, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Process & Delivery Architecture',
  description:
    'Learn how Ronin Pulse delivers high-velocity software engineering through disciplined 2-week sprints, automated CI/CD, and transparent communication.',
};

export default function ProcessPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Ronin Methodology"
          title="Battle-Tested Execution from"
          titleAccent="Architecture to Scale."
          description="A transparent, risk-free engineering process that turns complex requirements into sub-second, production-grade applications."
        />

        <ProcessSection />

        {/* Sprint Model Details */}
        <div className="my-20 p-8 sm:p-14 rounded-3xl bg-rp-surface border border-rp-border">
          <div className="max-w-3xl">
            <span className="font-mono text-xs text-rp-red uppercase tracking-wider font-semibold block mb-2">
              Agile Cadence
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-rp-white mb-4">
              Two-Week Sprint Demos & Continuous Deployment
            </h2>
            <p className="text-sm text-rp-grey-300 leading-relaxed mb-6">
              You never have to wonder what is being worked on. Every fortnight, we conduct an interactive video demo demonstrating working software running on live preview environments. We prioritize features dynamically based on user feedback and real metrics.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-rp-border/60">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-rp-red flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-sm text-rp-white">Live Staging URLs</h4>
                  <p className="text-xs text-rp-grey-500 mt-1">Preview branches deployed automatically on every commit.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-rp-red flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-sm text-rp-white">Guaranteed Deadlines</h4>
                  <p className="text-xs text-rp-grey-500 mt-1">Milestone delivery schedules locked in contractually.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-rp-red flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-sm text-rp-white">100% IP Ownership</h4>
                  <p className="text-xs text-rp-grey-500 mt-1">Full source code, repositories and designs transferred to you.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-rp-red to-rp-red-bright shadow-[0_0_25px_rgba(224,5,63,0.5)] transition-all group"
          >
            <span>Plan Your Engineering Sprint</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
