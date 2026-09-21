import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';

// NOTE FOR CLIENT: This is a standard dummy privacy policy template. Review with legal counsel before production deployment.
export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Ronin Pulse privacy terms, customer data safeguarding and encryption standards.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Data Protection & Integrity"
          title="Privacy Policy & Data"
          titleAccent="Safeguards."
          description="Last updated: January 2026. How Ronin Pulse handles your business and project data."
        />

        <div className="prose prose-invert max-w-none space-y-8 text-xs sm:text-sm text-rp-grey-300 leading-relaxed font-normal">
          <section className="p-8 rounded-3xl bg-rp-surface border border-rp-border space-y-4">
            <h2 className="font-display font-bold text-lg text-rp-white">1. Information We Collect</h2>
            <p>
              When you submit an architectural inquiry or subscribe to our newsletter via roninpulse.com, we collect your name, email address, telephone/WhatsApp contact details, and project specifications. We only request information directly relevant to evaluating project feasibility.
            </p>
          </section>

          <section className="p-8 rounded-3xl bg-rp-surface border border-rp-border space-y-4">
            <h2 className="font-display font-bold text-lg text-rp-white">2. Confidentiality & Non-Disclosure</h2>
            <p>
              All proprietary project documentation, business architectures, codebases, and credentials shared with Ronin Pulse are treated under strict confidentiality. We routinely execute mutual Non-Disclosure Agreements (NDAs) prior to formal discovery sessions.
            </p>
          </section>

          <section className="p-8 rounded-3xl bg-rp-surface border border-rp-border space-y-4">
            <h2 className="font-display font-bold text-lg text-rp-white">3. Data Security & Storage</h2>
            <p>
              We enforce TLS 1.3 encryption in transit and AES-256 encryption at rest across all our communications and database infrastructure. We do not sell, rent, or trade client contact information to third-party data brokers under any circumstances.
            </p>
          </section>

          <section className="p-8 rounded-3xl bg-rp-surface border border-rp-border space-y-4">
            <h2 className="font-display font-bold text-lg text-rp-white">4. Contacting Our Data Protection Officer</h2>
            <p>
              If you have any questions regarding data storage or wish to request erasure of your inquiry data, email us directly at{' '}
              <a href="mailto:hello@roninpulse.com" className="text-rp-red underline">
                hello@roninpulse.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
