'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, X } from 'lucide-react';

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('rp_cookie_consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('rp_cookie_consent', 'accepted');
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem('rp_cookie_consent', 'declined');
    setShow(false);
  };

  if (!show) return null;

  return (
    <aside
      aria-label="Cookie consent banner"
      className="fixed bottom-6 left-6 right-6 sm:right-auto sm:max-w-md z-40 p-5 rounded-2xl bg-rp-surface/95 border border-rp-border backdrop-blur-xl shadow-2xl animate-fadeIn text-xs select-none"
    >
      <div className="flex items-start gap-3 mb-3">
        <ShieldCheck className="w-5 h-5 text-rp-red flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-display font-bold text-sm text-rp-white mb-1">
            Privacy & Performance Telemetry
          </h4>
          <p className="text-rp-grey-300 leading-relaxed text-[11px]">
            We use anonymized session telemetry to calibrate sub-second page performance and ensure flawless interactive 3D rendering.{' '}
            <Link href="/privacy" className="text-rp-red hover:underline">
              Learn more
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="flex items-center justify-end gap-2 pt-2 border-t border-rp-border/60">
        <button
          onClick={handleDecline}
          className="px-3 py-1.5 rounded-lg text-rp-grey-500 hover:text-white transition-colors text-[11px] font-mono"
        >
          Decline
        </button>
        <button
          onClick={handleAccept}
          className="px-4 py-1.5 rounded-lg bg-rp-red hover:bg-rp-red-bright text-white text-[11px] font-semibold transition-colors shadow-[0_0_12px_rgba(224,5,63,0.4)]"
        >
          Accept Telemetry
        </button>
      </div>
    </aside>
  );
}
