'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import confetti from 'canvas-confetti';
import { siteConfig } from '@/config/site';
import { 
  contactFormSchema, 
  ContactFormData, 
  serviceOptions, 
  budgetOptions, 
  timelineOptions 
} from '@/lib/validations';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Send 
} from 'lucide-react';

export default function ContactPage() {
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      company: '',
      service: serviceOptions[0],
      budget: '$2k – $5k',
      timeline: 'Within 1 month',
      message: '',
      consent: false,
      websiteHoneypot: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmissionStatus('loading');
    setFeedbackMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmissionStatus('success');
        setFeedbackMessage(
          result.demo
            ? 'Inquiry received in Demo Mode (logged to server console). We will connect within 24 hours.'
            : 'Thanks for reaching out! Our senior engineers will review your specs and respond within 24 hours.'
        );
        reset();
        // Fire celebration confetti
        try {
          confetti({
            particleCount: 80,
            spread: 60,
            origin: { y: 0.6 },
            colors: ['#E0053F', '#FF2D5F', '#FFFFFF'],
          });
        } catch {}
      } else {
        setSubmissionStatus('error');
        setFeedbackMessage(result.error || 'Failed to dispatch message. Please retry or contact us via WhatsApp.');
      }
    } catch {
      setSubmissionStatus('error');
      setFeedbackMessage('Network communication error. Please check your connection or ping us on WhatsApp.');
    }
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Initiate Transmission"
          title="Let’s Discuss Your Next"
          titleAccent="Technical Milestone."
          description="Whether you have an extensive specification document or an early concept, our senior engineering team is ready to analyze and execute."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start my-12">
          {/* Left Column: Contact Cards, WhatsApp, and Google Maps (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Info Card */}
            <div className="p-8 rounded-3xl bg-rp-surface border border-rp-border space-y-6">
              <h3 className="font-display font-bold text-lg text-rp-white">
                HQ Communications
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-rp-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-[10px] font-mono text-rp-grey-500 uppercase block">Phone / Direct</span>
                    <a href={siteConfig.contact.phoneTel} className="text-rp-white hover:text-rp-red font-medium">
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-rp-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-[10px] font-mono text-rp-grey-500 uppercase block">Email</span>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-rp-white hover:text-rp-red font-medium">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-rp-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-[10px] font-mono text-rp-grey-500 uppercase block">Working Hours</span>
                    <p className="text-rp-white">{siteConfig.contact.hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-rp-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-[10px] font-mono text-rp-grey-500 uppercase block">Location</span>
                    <p className="text-rp-white">{siteConfig.contact.address}</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Fast-Lane Card */}
              <div className="pt-6 border-t border-rp-border/60">
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600/15 border border-emerald-500/40 hover:bg-emerald-600/25 text-emerald-400 text-xs font-semibold flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>Instant WhatsApp Chat</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Google Maps Card */}
            <div className="p-6 rounded-3xl bg-rp-surface border border-rp-border overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-rp-white font-bold flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-rp-red" />
                  Google Maps Location
                </span>
                <a
                  href={siteConfig.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono text-rp-red hover:text-rp-red-bright flex items-center gap-1 font-semibold"
                >
                  Open in Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Styled Dark Map Simulation Frame */}
              <div className="relative w-full h-48 rounded-xl bg-rp-ink border border-rp-border flex flex-col items-center justify-center text-center p-6 group">
                <div className="w-12 h-12 rounded-full bg-rp-surface border border-rp-red/50 flex items-center justify-center text-rp-red mb-3 shadow-[0_0_20px_rgba(224,5,63,0.3)] group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 animate-bounce" />
                </div>
                <h4 className="font-display font-bold text-xs text-rp-white mb-1">
                  Ronin Pulse HQ · Sri Lanka
                </h4>
                <p className="text-[11px] text-rp-grey-500 mb-3">
                  Serving high-velocity global clients worldwide.
                </p>
                <a
                  href={siteConfig.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-lg bg-rp-surface-2 text-white text-[11px] font-mono hover:bg-rp-red transition-colors"
                >
                  View Coordinates
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Glassmorphic Form (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-rp-surface/75 border border-rp-border backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <h3 className="font-display font-bold text-xl text-rp-white mb-2">
              Project Inquiry & Scope
            </h3>
            <p className="text-xs text-rp-grey-300 mb-8">
              Fill out this confidential brief. We respond to all inquiries within 24 hours.
            </p>

            {/* Success Notification Alert */}
            {submissionStatus === 'success' && (
              <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/50 mb-8 flex items-start gap-4 animate-fadeIn">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-sm text-emerald-300 mb-1">
                    Transmission Dispatched Successfully
                  </h4>
                  <p className="text-xs text-emerald-400/90 leading-relaxed">
                    {feedbackMessage}
                  </p>
                </div>
              </div>
            )}

            {/* Error Notification Alert */}
            {submissionStatus === 'error' && (
              <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/50 mb-8 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-rose-300 leading-relaxed">
                  {feedbackMessage}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Honeypot field (hidden from legitimate users) */}
              <input
                type="text"
                {...register('websiteHoneypot')}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />

              {/* Name & Email (2 cols) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-medium text-rp-white mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    {...register('fullName')}
                    placeholder="e.g. Elena Rostova"
                    className={`w-full px-4 py-2.5 rounded-xl bg-rp-ink border text-xs text-white placeholder:text-rp-grey-500 focus:outline-none focus:ring-1 transition-all ${
                      errors.fullName ? 'border-rose-500 focus:ring-rose-500' : 'border-rp-border focus:border-rp-red focus:ring-rp-red'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.fullName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-rp-white mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    {...register('email')}
                    placeholder="e.g. elena@company.com"
                    className={`w-full px-4 py-2.5 rounded-xl bg-rp-ink border text-xs text-white placeholder:text-rp-grey-500 focus:outline-none focus:ring-1 transition-all ${
                      errors.email ? 'border-rose-500 focus:ring-rose-500' : 'border-rp-border focus:border-rp-red focus:ring-rp-red'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Phone & Company (2 cols) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-medium text-rp-white mb-1.5">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    {...register('phone')}
                    placeholder="e.g. +94 78 421 6666"
                    className="w-full px-4 py-2.5 rounded-xl bg-rp-ink border border-rp-border focus:border-rp-red focus:ring-1 focus:ring-rp-red text-xs text-white placeholder:text-rp-grey-500 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-rp-white mb-1.5">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    {...register('company')}
                    placeholder="e.g. Apex Global"
                    className="w-full px-4 py-2.5 rounded-xl bg-rp-ink border border-rp-border focus:border-rp-red focus:ring-1 focus:ring-rp-red text-xs text-white placeholder:text-rp-grey-500 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Service Interested In* */}
              <div>
                <label className="block text-xs font-mono font-medium text-rp-white mb-1.5">
                  Primary Capability Required *
                </label>
                <select
                  {...register('service')}
                  className="w-full px-4 py-2.5 rounded-xl bg-rp-ink border border-rp-border focus:border-rp-red focus:ring-1 focus:ring-rp-red text-xs text-white focus:outline-none transition-all"
                >
                  {serviceOptions.map((svc) => (
                    <option key={svc} value={svc} className="bg-rp-surface text-white">
                      {svc}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="text-[11px] text-rose-400 mt-1">{errors.service.message}</p>
                )}
              </div>

              {/* Budget & Timeline (2 cols) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-medium text-rp-white mb-1.5">
                    Estimated Budget Range
                  </label>
                  <select
                    {...register('budget')}
                    className="w-full px-4 py-2.5 rounded-xl bg-rp-ink border border-rp-border focus:border-rp-red focus:ring-1 focus:ring-rp-red text-xs text-white focus:outline-none transition-all"
                  >
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-rp-surface text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-rp-white mb-1.5">
                    Target Delivery Timeline
                  </label>
                  <select
                    {...register('timeline')}
                    className="w-full px-4 py-2.5 rounded-xl bg-rp-ink border border-rp-border focus:border-rp-red focus:ring-1 focus:ring-rp-red text-xs text-white focus:outline-none transition-all"
                  >
                    {timelineOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-rp-surface text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message* */}
              <div>
                <label className="block text-xs font-mono font-medium text-rp-white mb-1.5">
                  Project Description & Specifications * (min 20 characters)
                </label>
                <textarea
                  rows={4}
                  {...register('message')}
                  placeholder="Tell us about your objectives, current architecture, bottlenecks, and desired deliverables..."
                  className={`w-full px-4 py-3 rounded-xl bg-rp-ink border text-xs text-white placeholder:text-rp-grey-500 focus:outline-none focus:ring-1 transition-all ${
                    errors.message ? 'border-rose-500 focus:ring-rose-500' : 'border-rp-border focus:border-rp-red focus:ring-rp-red'
                  }`}
                />
                {errors.message && (
                  <p className="text-[11px] text-rose-400 mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Consent checkbox */}
              <div>
                <label className="flex items-start gap-2.5 text-xs text-rp-grey-300 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    {...register('consent')}
                    className="mt-0.5 rounded bg-rp-ink border-rp-border text-rp-red focus:ring-rp-red cursor-pointer"
                  />
                  <span>
                    I agree to the confidential processing of this inquiry in accordance with the{' '}
                    <a href="/privacy" className="text-rp-white underline decoration-rp-red">
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>
                {errors.consent && (
                  <p className="text-[11px] text-rose-400 mt-1">{errors.consent.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submissionStatus === 'loading'}
                className="w-full py-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-rp-red via-rp-red-bright to-rp-red shadow-[0_0_25px_rgba(224,5,63,0.5)] hover:shadow-[0_0_35px_rgba(224,5,63,0.7)] transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
              >
                {submissionStatus === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Encrypting & Dispatching...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>Dispatch Project Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
