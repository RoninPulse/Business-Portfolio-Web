'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { servicesData } from '@/data/services';
import { 
  ArrowUp, 
  ArrowRight, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Loader2,
  ExternalLink 
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [newsletterMsg, setNewsletterMsg] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;

    setNewsletterStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setNewsletterStatus('success');
        setNewsletterMsg('Subscribed! Welcome to the Ronin Pulse brief.');
        setNewsletterEmail('');
      } else {
        setNewsletterStatus('error');
        setNewsletterMsg(data.error || 'Failed to subscribe. Please retry.');
      }
    } catch {
      setNewsletterStatus('error');
      setNewsletterMsg('Failed to connect. Please try again.');
    }
  };

  return (
    <footer className="relative bg-rp-black border-t border-rp-border pt-16 pb-12 overflow-hidden select-none">
      {/* Background ambient radial aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-rp-red-dark/30 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top CTA Band */}
        <div className="relative rounded-3xl p-8 sm:p-12 mb-16 bg-gradient-to-r from-rp-surface via-rp-ink to-rp-surface border border-rp-border overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-rp-red/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono text-rp-red uppercase tracking-widest block mb-2">
                Initiate Mission
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold italic text-rp-white">
                Let’s build your next <span className="font-accent italic text-rp-red">big thing</span>.
              </h2>
              <p className="text-sm text-rp-grey-300 mt-2 max-w-xl">
                Ready to elevate your engineering, modernize legacy workflows, or dominate search and digital acquisition? We’re standing by.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-xs sm:text-sm text-white bg-gradient-to-r from-rp-red to-rp-red-bright hover:from-rp-red-bright hover:to-rp-red shadow-[0_0_30px_rgba(224,5,63,0.5)] transition-all duration-300 group"
              >
                <span>Schedule Discovery Session</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-xs sm:text-sm text-rp-white bg-rp-surface hover:bg-rp-surface-2 border border-rp-border hover:border-emerald-500/50 transition-all duration-300"
              >
                <span>WhatsApp Direct</span>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Live Animated ECG / Heartbeat Line Wave */}
        <div className="relative w-full h-16 sm:h-20 mb-10 overflow-hidden flex items-center justify-center">
          <svg
            className="w-full h-full text-rp-red/80"
            viewBox="0 0 1200 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Background faint pulse path */}
            <path
              d="M0,50 L200,50 L220,50 L240,20 L255,85 L270,10 L285,60 L300,50 L500,50 L520,50 L540,15 L555,90 L570,5 L585,65 L600,50 L800,50 L820,50 L840,25 L855,80 L870,15 L885,60 L900,50 L1200,50"
              stroke="rgba(224, 5, 63, 0.2)"
              strokeWidth="2"
            />
            {/* Animated foreground pulse path */}
            <path
              d="M0,50 L200,50 L220,50 L240,20 L255,85 L270,10 L285,60 L300,50 L500,50 L520,50 L540,15 L555,90 L570,5 L585,65 L600,50 L800,50 L820,50 L840,25 L855,80 L870,15 L885,60 L900,50 L1200,50"
              stroke="#FF2D5F"
              strokeWidth="2.5"
              strokeDasharray="200 1000"
              className="animate-marquee"
              style={{ filter: 'drop-shadow(0 0 8px #FF2D5F)' }}
            />
          </svg>
        </div>

        {/* Giant Outlined Wordmark (Signature Element) */}
        <div className="w-full text-center overflow-hidden py-4 my-4 select-none">
          <span className="font-display font-black italic tracking-tighter text-4xl sm:text-7xl md:text-8xl lg:text-9xl stroke-text block uppercase leading-none transition-all duration-500">
            RŌNIN PULSE
          </span>
        </div>

        {/* 5-Column Navigation & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-12 border-t border-b border-rp-border">
          {/* Col 1: Brand & Socials (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-flex items-center gap-3 mb-4">
                <div className="relative w-11 h-11 rounded-full p-0.5 bg-rp-surface border border-rp-red/40">
                  <Image
                    src="/images/logo-circled.png"
                    alt="Ronin Pulse Logo"
                    fill
                    sizes="44px"
                    className="object-contain p-0.5"
                  />
                </div>
                <span className="font-display font-extrabold italic text-xl tracking-wider text-rp-white">
                  RŌNIN <span className="font-accent italic text-rp-red font-black">PULSE</span>
                </span>
              </Link>
              <p className="text-xs text-rp-grey-300 leading-relaxed max-w-sm mb-6">
                {siteConfig.detailedTagline}
              </p>
            </div>

            {/* Social Icons */}
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-rp-grey-500 block mb-3">
                Connect Globally
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                {siteConfig.socials.map((soc) => (
                  <a
                    key={soc.name}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-rp-surface hover:bg-rp-surface-2 border border-rp-border hover:border-rp-red text-rp-grey-300 hover:text-white flex items-center justify-center text-xs font-mono font-bold transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(224,5,63,0.4)]"
                    aria-label={`Visit Ronin Pulse on ${soc.name}`}
                  >
                    {soc.name.slice(0, 2)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Company Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-rp-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/" className="text-rp-grey-300 hover:text-rp-red transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-rp-grey-300 hover:text-rp-red transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-rp-grey-300 hover:text-rp-red transition-colors">
                  Portfolio & Cases
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-rp-grey-300 hover:text-rp-red transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-rp-grey-300 hover:text-rp-red transition-colors">
                  Engineering Team
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-rp-grey-300 hover:text-rp-red transition-colors">
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-rp-grey-300 hover:text-rp-red transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-rp-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-rp-grey-300 hover:text-rp-red transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="font-mono text-rp-red hover:text-rp-red-bright inline-flex items-center gap-1 font-semibold pt-1"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Newsletter (3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-rp-white mb-4">
                Direct Contact
              </h4>
              <ul className="space-y-2.5 text-xs text-rp-grey-300">
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-rp-red flex-shrink-0" />
                  <a href={siteConfig.contact.phoneTel} className="hover:text-white transition-colors">
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-rp-red flex-shrink-0" />
                  <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-rp-red flex-shrink-0 mt-0.5" />
                  <a
                    href={siteConfig.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>{siteConfig.contact.address}</span>
                    <ExternalLink className="w-2.5 h-2.5 text-rp-grey-500" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter Mini-Form */}
            <div className="mt-6 pt-6 border-t border-rp-border/60">
              <span className="text-[11px] font-mono text-rp-grey-300 block mb-2 font-medium">
                Pulse Dispatch (Tech & Strategy)
              </span>
              <form onSubmit={handleNewsletterSubmit} className="relative">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter work email..."
                  required
                  className="w-full px-3.5 py-2 pr-10 rounded-xl bg-rp-surface border border-rp-border focus:border-rp-red text-xs text-white placeholder:text-rp-grey-500 focus:outline-none focus:ring-1 focus:ring-rp-red transition-all"
                />
                <button
                  type="submit"
                  disabled={newsletterStatus === 'loading'}
                  className="absolute right-1 top-1 bottom-1 px-2.5 rounded-lg bg-rp-red hover:bg-rp-red-bright text-white flex items-center justify-center transition-colors disabled:opacity-50"
                  aria-label="Subscribe to newsletter"
                >
                  {newsletterStatus === 'loading' ? (
                    <Loader2 className="w-3 h-3 animate-spin" />
                  ) : (
                    <ArrowRight className="w-3 h-3" />
                  )}
                </button>
              </form>
              {newsletterStatus === 'success' && (
                <p className="text-[11px] text-emerald-400 mt-1.5 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  {newsletterMsg}
                </p>
              )}
              {newsletterStatus === 'error' && (
                <p className="text-[11px] text-rose-400 mt-1.5">{newsletterMsg}</p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-rp-grey-500">
          <p>© {currentYear} Ronin Pulse. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-rp-grey-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-rp-grey-300 transition-colors">
              Terms of Service
            </Link>
            <span className="hidden md:inline text-rp-grey-500">
              Designed & developed by Ronin Pulse
            </span>
          </div>
          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-rp-surface hover:bg-rp-surface-2 border border-rp-border hover:border-rp-red text-rp-grey-300 hover:text-white transition-all duration-200 group"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-rp-red group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
