'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { marketingChartData } from '@/data/stats';
import { TrendingUp, Users, Target, ArrowUpRight } from 'lucide-react';

export function MarketingResultsSection() {
  const maxTraffic = 60000;

  return (
    <section className="relative py-24 sm:py-32 bg-rp-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Growth Telemetry"
          title="Data-Driven Results That Drive"
          titleAccent="Bottom-Line Revenue."
          description="We unify technical search engine domination with high-converting paid media acquisition funnels to deliver verifiable growth."
        />

        {/* Top 3 Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-8 rounded-2xl bg-rp-surface border border-rp-border hover:border-rp-red/40 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-rp-grey-500 uppercase">Average Client Return</span>
              <TrendingUp className="w-5 h-5 text-rp-red" />
            </div>
            <div className="font-display text-4xl sm:text-5xl font-black italic text-rp-white mb-2">
              {marketingChartData.overallRoi.averageRoas}
            </div>
            <p className="text-xs text-rp-grey-300">
              Blended Return on Ad Spend (ROAS) across active multi-channel campaigns.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-rp-surface border border-rp-border hover:border-rp-red/40 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-rp-grey-500 uppercase">Organic Search Lift</span>
              <Users className="w-5 h-5 text-rp-red-bright" />
            </div>
            <div className="font-display text-4xl sm:text-5xl font-black italic text-rp-white mb-2">
              {marketingChartData.overallRoi.trafficLift}
            </div>
            <p className="text-xs text-rp-grey-300">
              Average organic impressions and qualified keyword ranking surge within 90 days.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-rp-surface border border-rp-border hover:border-rp-red/40 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-rp-grey-500 uppercase">Customer Acquisition Cost</span>
              <Target className="w-5 h-5 text-rp-red" />
            </div>
            <div className="font-display text-4xl sm:text-5xl font-black italic text-rp-white mb-2">
              {marketingChartData.overallRoi.leadCostReduction}
            </div>
            <p className="text-xs text-rp-grey-300">
              Reduction in Cost Per Acquisition (CPA) through landing page conversion tuning.
            </p>
          </div>
        </div>

        {/* Visual Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Chart 1: Monthly Traffic Growth Bar/Line Simulation (7 cols) */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-rp-ink border border-rp-border flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display font-bold text-base text-rp-white">
                  Organic & Paid Traffic Compounding
                </h3>
                <span className="text-[11px] font-mono text-rp-red flex items-center gap-1">
                  <ArrowUpRight className="w-3.5 h-3.5" /> +317% Q2 Growth
                </span>
              </div>
              <p className="text-xs text-rp-grey-500 mb-8">
                Monthly qualified user sessions scaled across 6 consecutive months.
              </p>
            </div>

            {/* Custom Bar Chart Visualization */}
            <div className="h-56 flex items-end justify-between gap-4 pt-4 border-b border-rp-border">
              {marketingChartData.monthlyTraffic.map((item) => {
                const orgHeight = (item.organic / maxTraffic) * 100;
                const paidHeight = (item.paid / maxTraffic) * 100;

                return (
                  <div key={item.month} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                    <div className="w-full flex items-end justify-center gap-1.5 h-full">
                      {/* Organic Bar */}
                      <div
                        style={{ height: `${orgHeight}%` }}
                        className="w-full max-w-[22px] rounded-t-md bg-gradient-to-t from-rp-red to-rp-red-bright group-hover:shadow-[0_0_15px_#FF2D5F] transition-all duration-300"
                        title={`Organic: ${item.organic.toLocaleString()}`}
                      />
                      {/* Paid Bar */}
                      <div
                        style={{ height: `${paidHeight}%` }}
                        className="w-full max-w-[22px] rounded-t-md bg-rp-surface-2 group-hover:bg-rp-grey-500 transition-all duration-300"
                        title={`Paid: ${item.paid.toLocaleString()}`}
                      />
                    </div>
                    <span className="font-mono text-[11px] text-rp-grey-500 group-hover:text-white transition-colors">
                      {item.month}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-end gap-6 mt-4 text-[11px] font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded bg-rp-red" />
                <span className="text-rp-grey-300">Organic Search</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded bg-rp-surface-2" />
                <span className="text-rp-grey-300">Paid Media</span>
              </div>
            </div>
          </div>

          {/* Chart 2: Channel Lead Generation Breakdown (5 cols) */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-rp-ink border border-rp-border flex flex-col justify-between">
            <div>
              <h3 className="font-display font-bold text-base text-rp-white mb-2">
                Conversion by Channel
              </h3>
              <p className="text-xs text-rp-grey-500 mb-6">
                Attributed monthly leads and average on-page conversion rates.
              </p>
            </div>

            <div className="space-y-4">
              {marketingChartData.leadGeneration.map((lead) => (
                <div key={lead.channel} className="p-4 rounded-xl bg-rp-surface border border-rp-border">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-semibold text-rp-white">{lead.channel}</span>
                    <span className="font-mono text-rp-red font-bold">{lead.conversion} CR</span>
                  </div>
                  <div className="w-full h-2 bg-rp-surface-2 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-rp-red to-rp-red-bright"
                      style={{ width: `${(lead.leads / 500) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-rp-grey-500 mt-1.5">
                    <span>{lead.leads} Qualified Leads</span>
                    <span>Pipeline Verified</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Dummy data footnote */}
            <div className="mt-6 pt-4 border-t border-rp-border/60">
              <p className="text-[10px] font-mono text-rp-grey-500 italic">
                * Note: {marketingChartData.overallRoi.sampleNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
