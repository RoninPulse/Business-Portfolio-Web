import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
      <div className="relative w-12 h-12 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-rp-red/30 animate-ping" />
        <div className="w-8 h-8 rounded-full border-2 border-rp-red border-t-transparent animate-spin" />
      </div>
      <span className="font-mono text-xs text-rp-grey-500 uppercase tracking-widest">
        Syncing Ronin Mainframe...
      </span>
    </div>
  );
}
