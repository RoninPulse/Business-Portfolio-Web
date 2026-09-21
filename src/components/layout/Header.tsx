'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { servicesData } from '@/data/services';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { 
  Menu, 
  X, 
  Phone, 
  ArrowRight, 
  ChevronDown, 
  Globe, 
  Cpu, 
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

export function Header() {
  const pathname = usePathname();
  const { scrollDirection, isScrolled } = useScrollDirection();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setServicesMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesMenuOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesMenuOpen(false);
    }, 200);
  };

  // Header hide on scroll down, show on scroll up logic
  const isHidden = scrollDirection === 'down' && isScrolled && !mobileMenuOpen && !servicesMenuOpen;

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 transition-all duration-300 pointer-events-none ${
          isHidden ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        } ${isScrolled ? 'pt-3' : 'pt-5'}`}
      >
        <div
          className={`pointer-events-auto relative w-full max-w-7xl flex items-center justify-between rounded-full transition-all duration-300 backdrop-blur-xl ${
            isScrolled
              ? 'bg-rp-black/85 py-2 px-5 border border-rp-red/30 shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(224,5,63,0.2)]'
              : 'bg-rp-ink/75 py-3 px-6 border border-rp-border shadow-2xl'
          }`}
        >
          {/* Left Brand Lockup */}
          <Link
            href="/"
            className="flex items-center gap-3 group select-none"
            aria-label="Ronin Pulse Homepage"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full p-0.5 bg-rp-surface border border-rp-border group-hover:border-rp-red transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(224,5,63,0.5)]">
              <Image
                src="/images/logo-circled.png"
                alt="Ronin Pulse Brand Icon"
                fill
                priority
                sizes="(max-width: 640px) 40px, 44px"
                className="object-contain p-0.5"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold italic tracking-wider text-base sm:text-lg text-rp-white group-hover:text-glow-red transition-all duration-300">
                RŌNIN{' '}
                <span className="font-accent font-black italic text-rp-red text-lg sm:text-xl">
                  PULSE
                </span>
              </span>
              <span className="hidden sm:block text-[9px] font-mono tracking-widest text-rp-grey-500 uppercase -mt-1 group-hover:text-rp-grey-300 transition-colors">
                Your Technology Arm
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1">
            {siteConfig.navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

              if (item.hasMegaMenu) {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={handleServicesEnter}
                    onMouseLeave={handleServicesLeave}
                  >
                    <Link
                      href={item.href}
                      className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide flex items-center gap-1 transition-colors ${
                        isActive || servicesMenuOpen
                          ? 'text-rp-white'
                          : 'text-rp-grey-300 hover:text-rp-white'
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesMenuOpen ? 'rotate-180 text-rp-red' : ''
                        }`}
                      />
                      {(isActive || servicesMenuOpen) && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full bg-rp-surface border border-rp-red/40 -z-10 shadow-[0_0_12px_rgba(224,5,63,0.25)]"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </Link>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors ${
                    isActive ? 'text-rp-white' : 'text-rp-grey-300 hover:text-rp-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-rp-surface border border-rp-red/40 -z-10 shadow-[0_0_12px_rgba(224,5,63,0.25)]"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Phone quick link */}
            <a
              href={siteConfig.contact.phoneTel}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono text-rp-grey-300 hover:text-white border border-rp-border hover:border-rp-red/40 bg-rp-surface/60 transition-all duration-200"
              title="Call Ronin Pulse"
            >
              <Phone className="w-3.5 h-3.5 text-rp-red" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>

            {/* Primary Magnetic CTA */}
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center px-4 sm:px-5 py-2 rounded-full font-medium text-xs text-white bg-gradient-to-r from-rp-red to-rp-red-bright hover:from-rp-red-bright hover:to-rp-red shadow-[0_0_20px_rgba(224,5,63,0.4)] hover:shadow-[0_0_30px_rgba(224,5,63,0.7)] transition-all duration-300 group overflow-hidden"
            >
              {/* Animated pulse ring */}
              <span className="absolute inset-0 rounded-full border border-white/30 animate-pulse pointer-events-none" />
              <span className="relative z-10 flex items-center gap-1.5 font-semibold">
                Get a Free Quote
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-rp-grey-300 hover:text-white hover:bg-rp-surface border border-transparent hover:border-rp-border transition-colors"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-rp-red" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Bottom border red accent glow line on scroll */}
          {isScrolled && (
            <div className="absolute -bottom-px left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-rp-red to-transparent opacity-80" />
          )}
        </div>

        {/* Services Mega-Menu Dropdown Panel */}
        <AnimatePresence>
          {servicesMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
              className="pointer-events-auto absolute top-full mt-2 left-4 right-4 max-w-5xl mx-auto rounded-2xl bg-rp-ink/95 border border-rp-border backdrop-blur-2xl p-6 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(224,5,63,0.15)] z-50 overflow-hidden"
            >
              {/* Header inside mega-menu */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-rp-border/60">
                <div>
                  <h3 className="font-display font-bold text-sm text-rp-white tracking-wide uppercase">
                    Our Engineering & Growth Capabilities
                  </h3>
                  <p className="text-xs text-rp-grey-500 mt-0.5">
                    End-to-end digital craft tailored to transform and scale your enterprise.
                  </p>
                </div>
                <Link
                  href="/services"
                  className="text-xs font-mono text-rp-red hover:text-rp-red-bright flex items-center gap-1 group font-semibold"
                >
                  Explore All 8 Services
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* 8 Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {servicesData.map((service) => {
                  const Icon = iconMap[service.iconName] || Globe;
                  return (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group p-3 rounded-xl bg-rp-surface/40 hover:bg-rp-surface border border-transparent hover:border-rp-border/80 transition-all duration-200"
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-rp-surface-2 group-hover:bg-rp-red/20 text-rp-red transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-rp-white group-hover:text-rp-red transition-colors leading-snug">
                            {service.title}
                          </h4>
                          <p className="text-[11px] text-rp-grey-500 line-clamp-2 mt-1 leading-normal">
                            {service.shortDescription}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at top right)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 bg-rp-black/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 overflow-y-auto"
          >
            {/* Mobile Header Bar */}
            <div className="flex items-center justify-between border-b border-rp-border pb-4">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full p-0.5 bg-rp-surface border border-rp-red/40">
                  <Image
                    src="/images/logo-circled.png"
                    alt="Ronin Pulse Logo"
                    fill
                    sizes="40px"
                    className="object-contain p-0.5"
                  />
                </div>
                <span className="font-display font-bold italic tracking-wider text-base text-rp-white">
                  RŌNIN <span className="font-accent italic text-rp-red font-black">PULSE</span>
                </span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-full bg-rp-surface border border-rp-border text-rp-white hover:text-rp-red"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Staggered Navigation Links */}
            <nav className="flex flex-col gap-4 py-8">
              {siteConfig.navItems.map((item, idx) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-display text-2xl sm:text-3xl font-extrabold italic tracking-wide block transition-colors ${
                      pathname === item.href ? 'text-rp-red' : 'text-rp-white hover:text-rp-red'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Mobile Bottom Contact & Social Info */}
            <div className="border-t border-rp-border pt-6 flex flex-col gap-4">
              <div className="flex flex-wrap gap-4 text-xs font-mono text-rp-grey-300">
                <a href={siteConfig.contact.phoneTel} className="flex items-center gap-2 hover:text-rp-red">
                  <Phone className="w-3.5 h-3.5 text-rp-red" />
                  {siteConfig.contact.phoneDisplay}
                </a>
                <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
                  WhatsApp Direct
                </a>
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-rp-red">
                  {siteConfig.contact.email}
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 pt-2">
                {siteConfig.socials.map((soc) => (
                  <a
                    key={soc.name}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-rp-surface border border-rp-border hover:border-rp-red text-rp-grey-300 hover:text-white transition-colors"
                    aria-label={`Follow on ${soc.name}`}
                  >
                    <span className="text-xs font-bold">{soc.name.slice(0, 2)}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
