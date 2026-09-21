import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { teamData } from '@/data/team';
import { Linkedin, Github, Twitter, ArrowRight, Code, Terminal, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Engineering Team & Technical Leadership',
  description:
    'Meet the senior software architects, creative technologists, and performance growth engineers at Ronin Pulse.',
};

export default function TeamPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Builders"
          title="Senior Engineering &"
          titleAccent="Product Leadership."
          description="We do not employ account middlemen. Our leadership team consists of active builders, system architects, and creative technologists who code every day."
        />

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="p-8 rounded-3xl bg-rp-surface border border-rp-border hover:border-rp-red/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-rp-red to-rp-red-bright text-white flex items-center justify-center font-display font-black text-xl shadow-[0_0_25px_rgba(224,5,63,0.35)]">
                    {member.avatarInitials}
                  </div>
                  <div className="flex items-center gap-2">
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-rp-surface-2 text-rp-grey-500 hover:text-white hover:bg-rp-red transition-colors"
                        aria-label="LinkedIn Profile"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-rp-surface-2 text-rp-grey-500 hover:text-white hover:bg-rp-red transition-colors"
                        aria-label="GitHub Profile"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.x && (
                      <a
                        href={member.socials.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-rp-surface-2 text-rp-grey-500 hover:text-white hover:bg-rp-red transition-colors"
                        aria-label="X Profile"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="font-display font-bold text-xl text-rp-white group-hover:text-rp-red transition-colors mb-1">
                  {member.name}
                </h3>
                <p className="font-mono text-xs text-rp-red font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-xs sm:text-sm text-rp-grey-300 leading-relaxed mb-6 font-normal">
                  {member.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-rp-border/60">
                <span className="text-[10px] font-mono text-rp-grey-500 uppercase tracking-wider block mb-2">
                  Specialized Disciplines
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {member.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-md bg-rp-surface-2 font-mono text-[11px] text-rp-white border border-rp-border/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Culture & Standards Banner */}
        <div className="p-10 sm:p-14 rounded-3xl bg-rp-ink border border-rp-border my-16 text-center">
          <Award className="w-10 h-10 text-rp-red mx-auto mb-4" />
          <h3 className="font-display text-2xl sm:text-3xl font-bold italic text-rp-white mb-3">
            Want to build the next generation of web software?
          </h3>
          <p className="text-xs sm:text-sm text-rp-grey-300 max-w-lg mx-auto mb-8">
            We are always scouting for world-class TypeScript engineers, WebGL artists, and technical marketers with samurai discipline.
          </p>
          <a
            href="mailto:careers@roninpulse.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-xs text-white bg-rp-surface hover:bg-rp-surface-2 border border-rp-border hover:border-rp-red transition-all"
          >
            <span>Explore Engineering Openings</span>
            <ArrowRight className="w-4 h-4 text-rp-red" />
          </a>
        </div>
      </div>
    </div>
  );
}
