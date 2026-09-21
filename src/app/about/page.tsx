import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { teamData } from '@/data/team';
import { 
  ShieldCheck, 
  Compass, 
  Target, 
  Sparkles, 
  ArrowRight, 
  Linkedin, 
  Github, 
  Twitter 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Our Technology Arm & Samurai Ethos',
  description:
    'Discover the philosophy, founding story, and cross-functional engineering team behind Ronin Pulse.',
};

const values = [
  {
    icon: Compass,
    title: 'Absolute Craftsmanship',
    desc: 'We refuse shortcut page-builders and copy-paste templates. Every line of TypeScript, shader instruction, and database query is written with architectural pride.',
  },
  {
    icon: ShieldCheck,
    title: 'Fierce Client Loyalty',
    desc: 'Like the masterless ronin of feudal Japan, we answer only to our clients’ missions. When we commit to your roadmap, we fight relentlessly for your commercial growth.',
  },
  {
    icon: Target,
    title: 'Commercial Pragmatism',
    desc: 'Aesthetic elegance is meaningless if it fails to convert. We benchmark every initiative against concrete ROI: lowered acquisition costs, boosted revenue, and sub-second load times.',
  },
  {
    icon: Sparkles,
    title: 'Continuous Velocity',
    desc: 'We operate in rapid two-week agile release cycles. We deliver working software to staging environments early and often, minimizing risk and maximizing feedback.',
  },
];

const milestones = [
  { year: '2018', title: 'The Genesis', desc: 'Founded in Sri Lanka as an elite boutique systems architecture consultancy.' },
  { year: '2020', title: 'Global Expansion', desc: 'Delivered first major multi-region logistics platform for North American maritime freight.' },
  { year: '2022', title: 'Headless & 3D Evolution', desc: 'Pioneered Next.js headless commerce and WebGL interactive experiences for luxury global brands.' },
  { year: '2024', title: 'Full Technology Arm', desc: 'Integrated technical SEO and performance marketing to provide complete end-to-end digital firepower.' },
  { year: '2026', title: '120+ Deployments', desc: 'Serving enterprise partners across UK, USA, Australia, and Asia with 99.9% uptime SLAs.' },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <SectionHeading
          eyebrow="Our Story & Code"
          title="The Independent Technology Arm"
          titleAccent="For High-Growth Brands."
          description="We are a multidisciplinary collective of systems architects, creative technologists, and digital growth strategists operating with unyielding discipline."
        />

        {/* Founding Story Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-16 py-12 border-t border-b border-rp-border">
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs text-rp-red uppercase tracking-widest font-semibold">
              // Why We Exist
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold italic text-rp-white">
              Born from frustration with bureaucratic agency complacency.
            </h2>
            <p className="text-sm sm:text-base text-rp-grey-300 leading-relaxed">
              Traditional software agencies trap clients in inflated hourly retainers, pass projects off to junior trainees, and ship bloated, sluggish websites built on precarious WordPress themes.
            </p>
            <p className="text-sm sm:text-base text-rp-grey-300 leading-relaxed">
              We founded <strong>Ronin Pulse</strong> on a radically different premise: deliver the senior-level technical depth of an in-house Silicon Valley engineering team with the agility and creative edge of a boutique design atelier.
            </p>
          </div>

          <div className="lg:col-span-6 p-8 rounded-3xl bg-rp-surface border border-rp-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rp-red-dark/30 rounded-full blur-3xl pointer-events-none" />
            <h3 className="font-display font-bold text-xl text-rp-white mb-4 flex items-center gap-2">
              <span className="text-rp-red">Why &ldquo;Ronin&rdquo;?</span>
            </h3>
            <p className="text-xs sm:text-sm text-rp-grey-300 leading-relaxed mb-4">
              In historical Japan, a <em>rōnin</em> was an independent samurai who answered to no feudal overlord. They carried unparalleled martial mastery and bound themselves solely to their code of personal honor and chosen cause.
            </p>
            <p className="text-xs sm:text-sm text-rp-grey-300 leading-relaxed">
              In the modern business landscape, we are that masterless force—free from the bureaucratic entanglements of mega-agencies, fiercely loyal to your company’s triumph, and armed with modern code to defeat your competition.
            </p>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="my-20">
          <SectionHeading
            eyebrow="Our North Star"
            title="The Principles That Guide Every"
            titleAccent="Commit."
            description="Our non-negotiable standards of engineering integrity, transparency, and commercial focus."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="p-6 rounded-2xl bg-rp-surface border border-rp-border hover:border-rp-red/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-rp-surface-2 text-rp-red flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-base text-rp-white mb-2">
                    {v.title}
                  </h4>
                  <p className="text-xs text-rp-grey-300 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Milestones Horizontal / Vertical Track */}
        <div className="my-20 py-12 border-t border-b border-rp-border">
          <SectionHeading
            eyebrow="Evolution"
            title="A Track Record of"
            titleAccent="Relentless Execution."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {milestones.map((m) => (
              <div key={m.year} className="p-6 rounded-2xl bg-rp-ink border border-rp-border">
                <span className="font-display font-black italic text-3xl text-rp-red block mb-2">
                  {m.year}
                </span>
                <h4 className="font-display font-bold text-sm text-rp-white mb-2">
                  {m.title}
                </h4>
                <p className="text-xs text-rp-grey-500 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <div className="my-20">
          <SectionHeading
            eyebrow="The Vanguard"
            title="Meet the Minds Behind"
            titleAccent="Ronin Pulse."
            description="Senior practitioners leading every architectural design, shader pipeline, and growth campaign."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.map((member) => (
              <div
                key={member.id}
                className="p-6 rounded-2xl bg-rp-surface border border-rp-border hover:border-rp-red/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-rp-red to-rp-red-bright text-white flex items-center justify-center font-display font-extrabold text-lg shadow-[0_0_20px_rgba(224,5,63,0.3)]">
                      {member.avatarInitials}
                    </div>
                    {/* Social links */}
                    <div className="flex items-center gap-2">
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-rp-surface-2 text-rp-grey-500 hover:text-white hover:bg-rp-red transition-colors"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {member.socials.github && (
                        <a
                          href={member.socials.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-rp-surface-2 text-rp-grey-500 hover:text-white hover:bg-rp-red transition-colors"
                          aria-label="GitHub"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {member.socials.x && (
                        <a
                          href={member.socials.x}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-rp-surface-2 text-rp-grey-500 hover:text-white hover:bg-rp-red transition-colors"
                          aria-label="X (Twitter)"
                        >
                          <Twitter className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-lg text-rp-white group-hover:text-rp-red-bright transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-mono text-rp-red font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-xs text-rp-grey-300 leading-relaxed mb-6">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-rp-border/60 flex flex-wrap gap-1.5">
                  {member.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded bg-rp-surface-2 font-mono text-[10px] text-rp-grey-500"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-24 p-10 sm:p-16 rounded-3xl bg-gradient-to-r from-rp-surface via-rp-ink to-rp-surface border border-rp-border text-center relative overflow-hidden">
          <h3 className="font-display text-2xl sm:text-4xl font-black italic text-rp-white mb-4">
            Partner with an elite squad devoted to your growth.
          </h3>
          <p className="text-sm text-rp-grey-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Ready to integrate a battle-hardened technology arm into your business? Let’s map out your roadmap.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-rp-red to-rp-red-bright shadow-[0_0_25px_rgba(224,5,63,0.5)] hover:shadow-[0_0_40px_rgba(224,5,63,0.8)] transition-all group"
          >
            <span>Start an Architectural Consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
