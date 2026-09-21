import React from 'react';
import Link from 'next/link';
import { ArrowLeft, RefreshCw } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-24 text-center select-none">
      <div className="max-w-xl mx-auto space-y-8">
        {/* Flatline ECG Visual */}
        <div className="relative w-full h-24 overflow-hidden flex items-center justify-center">
          <svg
            className="w-full h-full text-rp-red"
            viewBox="0 0 600 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Flatline pulse fading into a straight line */}
            <path
              d="M0,40 L150,40 L165,15 L175,70 L185,40 L600,40"
              stroke="#FF2D5F"
              strokeWidth="2.5"
              strokeDasharray="4 2"
              className="opacity-70 animate-pulse"
              style={{ filter: 'drop-shadow(0 0 10px #FF2D5F)' }}
            />
          </svg>
        </div>

        {/* Flatline Status */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rp-red/10 border border-rp-red/30 text-xs font-mono text-rp-red">
          <span className="w-2 h-2 rounded-full bg-rp-red animate-ping" />
          <span>STATUS: SIGNAL FLATLINED · ERROR 404</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-extrabold italic text-rp-white">
          Pulse Lost in Transmission.
        </h1>

        <p className="text-xs sm:text-sm text-rp-grey-300 max-w-md mx-auto leading-relaxed">
          The coordinates you requested do not correlate with an active node. Re-establish telemetry with our primary mainframe.
        </p>

        <div className="flex items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="px-7 py-3.5 rounded-full font-bold text-xs text-white bg-gradient-to-r from-rp-red to-rp-red-bright shadow-[0_0_20px_rgba(224,5,63,0.5)] hover:shadow-[0_0_30px_rgba(224,5,63,0.8)] transition-all flex items-center gap-2 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Headquarters</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
