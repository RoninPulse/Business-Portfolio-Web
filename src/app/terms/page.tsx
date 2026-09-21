import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';

// NOTE FOR CLIENT: This is a standard dummy Terms of Service template. Review with legal counsel before commercial deployment.
export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Master service terms, intellectual property transfer agreements, and warranty provisions.',
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Commercial Code"
          title="Terms of Service & Engagement"
          titleAccent="Standards."
          description="Last updated: January 2026. General terms governing software development contracts and client agreements."
        />

        <div className="prose prose-invert max-w-none space-y-8 text-xs sm:text-sm text-rp-grey-300 leading-relaxed font-normal">
          <section className="p-8 rounded-3xl bg-rp-surface border border-rp-border space-y-4">
            <h2 className="font-display font-bold text-lg text-rp-white">1. Scope of Work & Milestone Acceptance</h2>
            <p>
              All software engineering, UI/UX design, and digital marketing services performed by Ronin Pulse are governed by explicit Statements of Work (SOW). Each milestone is delivered to a dedicated staging environment for client review and acceptance.
            </p>
          </section>

          <section className="p-8 rounded-3xl bg-rp-surface border border-rp-border space-y-4">
            <h2 className="font-display font-bold text-lg text-rp-white">2. Intellectual Property (IP) Ownership</h2>
            <p>
              Upon complete settlement of contractual milestone invoices, 100% of custom source code, database architectures, graphics, and proprietary intellectual property created specifically for the client are assigned exclusively to the client.
            </p>
          </section>

          <section className="p-8 rounded-3xl bg-rp-surface border border-rp-border space-y-4">
            <h2 className="font-display font-bold text-lg text-rp-white">3. Warranty & Hypercare Period</h2>
            <p>
              Every custom software build includes a complimentary 30-day post-launch warranty period during which any defects or bugs failing to meet the agreed technical specifications will be remediated at zero additional charge.
            </p>
          </section>

          <section className="p-8 rounded-3xl bg-rp-surface border border-rp-border space-y-4">
            <h2 className="font-display font-bold text-lg text-rp-white">4. Governing Law</h2>
            <p>
              Unless otherwise agreed upon in a bespoke enterprise master services agreement, these terms shall be governed in accordance with international commercial arbitration standards.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
