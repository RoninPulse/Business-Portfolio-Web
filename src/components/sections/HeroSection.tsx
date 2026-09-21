'use client';

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronDown, CheckCircle } from 'lucide-react';
import { HeroFallback } from '@/components/three/HeroScene';

// Dynamic import for R3F Hero Scene to prevent SSR canvas issues
const HeroScene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
  loading: () => <HeroFallback />,
});

export function HeroSection() {
  return (
    <section className="relative min-h-[95vh] lg:min-h-screen w-full flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* 3D R3F Interactive Scene Background */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pointer-events-none">
        <div className="max-w-2xl lg:max-w-3xl pointer-events-auto">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rp-surface/80 border border-rp-border backdrop-blur-md text-[11px] sm:text-xs font-mono tracking-wider text-rp-red mb-6 shadow-[0_0_15px_rgba(224,5,63,0.2)]"
          >
            <span className="w-2 h-2 rounded-full bg-rp-red animate-ping" />
            <span>RŌNIN PULSE · IT & DIGITAL AGENCY</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold italic text-rp-white tracking-tight leading-[1.08] mb-6"
          >
            Your Technology{' '}
            <span className="font-accent font-black italic text-rp-red drop-shadow-[0_0_35px_rgba(224,5,63,0.6)]">
              Arm.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-lg sm:text-xl md:text-2xl font-medium text-rp-white/90 mb-4"
          >
            Custom software solutions & digital marketing.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base text-rp-grey-300 max-w-xl leading-relaxed mb-8"
          >
            We architect award-winning web platforms, resilient enterprise software, and high-converting marketing engines. Masterless precision. Relentless growth.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-rp-red to-rp-red-bright hover:from-rp-red-bright hover:to-rp-red shadow-[0_0_25px_rgba(224,5,63,0.5)] hover:shadow-[0_0_40px_rgba(224,5,63,0.7)] transition-all duration-300 flex items-center gap-2 group"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/portfolio"
              className="px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-rp-white bg-rp-surface/80 hover:bg-rp-surface border border-rp-border hover:border-rp-red/50 transition-all duration-300 flex items-center gap-2"
            >
              <span>View Our Work</span>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-6 sm:gap-8 pt-6 border-t border-rp-border/60 text-xs font-mono text-rp-grey-300"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-rp-red" />
              <span>120+ Projects Shipped</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-rp-red" />
              <span>60+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-rp-red" />
              <span>8+ Years Craft</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-60">
        <span className="text-[10px] font-mono tracking-widest text-rp-grey-500 uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-rp-red" />
        </motion.div>
      </div>
    </section>
  );
}
