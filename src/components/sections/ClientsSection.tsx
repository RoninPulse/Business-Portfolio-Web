import React from 'react';
import { clientsData } from '@/data/clients';

export function ClientsSection() {
  return (
    <section className="relative py-20 bg-rp-black border-t border-b border-rp-border overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-rp-grey-500 block mb-10">
          Trusted by Innovative Forward-Thinking Brands Worldwide
        </span>

        {/* Client Logos Wall Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {clientsData.map((client) => (
            <div
              key={client.id}
              className="p-5 rounded-xl bg-rp-surface/40 hover:bg-rp-surface border border-rp-border/50 hover:border-rp-red/40 transition-all duration-300 flex flex-col items-center justify-center group"
            >
              <div className="w-9 h-9 rounded-lg bg-rp-surface-2 group-hover:bg-rp-red/20 flex items-center justify-center font-display font-extrabold text-xs text-rp-grey-300 group-hover:text-rp-red-bright mb-2 transition-colors">
                {client.symbol}
              </div>
              <span className="font-display font-bold text-xs text-rp-grey-300 group-hover:text-rp-white transition-colors tracking-wide">
                {client.name}
              </span>
              <span className="text-[10px] font-mono text-rp-grey-500 mt-0.5">
                {client.tagline}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
