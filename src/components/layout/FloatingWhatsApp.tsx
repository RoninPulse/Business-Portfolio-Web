'use client';

import React from 'react';
import { siteConfig } from '@/config/site';
import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  return (
    <aside
      aria-label="Contact via WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center group select-none"
    >
      {/* Expanding Ripple Ring */}
      <span className="absolute -inset-2 rounded-full border border-emerald-500/40 animate-ping pointer-events-none" />

      {/* Tooltip on hover */}
      <div className="mr-3 px-3 py-1.5 rounded-lg bg-rp-surface border border-rp-border text-xs font-medium text-rp-white shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 hidden sm:flex items-center gap-2 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>Chat with our team</span>
      </div>

      <a
        href={siteConfig.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Ronin Pulse on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 text-white shadow-[0_4px_20px_rgba(16,185,129,0.4)] hover:shadow-[0_4px_30px_rgba(16,185,129,0.7)] hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <MessageCircle className="w-7 h-7 fill-white/20" />
      </a>
    </aside>
  );
}
