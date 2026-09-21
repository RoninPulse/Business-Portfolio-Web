'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { projectsData, ProjectItem } from '@/data/projects';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';

const categories = ['All', 'Web', 'Software', 'Mobile', 'Marketing', 'Branding', 'Cloud'] as const;

export function FeaturedProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProjects = selectedCategory === 'All'
    ? projectsData.filter((p) => p.featured).slice(0, 6)
    : projectsData.filter((p) => p.category === selectedCategory).slice(0, 6);

  return (
    <section className="relative py-24 sm:py-32 bg-rp-ink border-t border-rp-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            align="left"
            eyebrow="Case Studies"
            title="Engineered for Performance,"
            titleAccent="Built to Scale."
            description="Explore our flagship client engagements across bespoke web applications, high-throughput software, and digital marketing engines."
            className="mb-0"
          />

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-rp-red text-white shadow-[0_0_15px_rgba(224,5,63,0.4)]'
                    : 'bg-rp-surface text-rp-grey-300 hover:text-white border border-rp-border hover:border-rp-border/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              data-cursor="view"
              className="group rounded-2xl bg-rp-surface border border-rp-border hover:border-rp-red/50 overflow-hidden transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(224,5,63,0.2)]"
            >
              {/* Project Procedural Visual Graphic */}
              <div
                className={`relative w-full h-56 bg-gradient-to-br ${project.gradientTheme} p-6 flex flex-col justify-between overflow-hidden border-b border-rp-border/60`}
              >
                {/* Visual Browser/Device Wireframe Simulation */}
                <div className="w-full flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="font-mono text-[10px] text-white/40 tracking-wider">
                    {project.client}
                  </span>
                </div>

                {/* Abstract UI Blocks Mockup */}
                <div className="space-y-2 py-4">
                  <div className="w-3/4 h-3 rounded bg-white/20" />
                  <div className="w-1/2 h-2 rounded bg-white/10" />
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    <div className="h-8 rounded bg-white/5 border border-white/10" />
                    <div className="h-8 rounded bg-white/5 border border-white/10" />
                    <div className="h-8 rounded bg-white/5 border border-white/10" />
                  </div>
                </div>

                {/* Primary Result Pill */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-rp-black/60 border border-white/10 font-mono text-xs font-bold text-rp-red-bright">
                    {project.results[0].metric} {project.results[0].label}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-rp-red transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Project Card Meta Info */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="red">{project.category}</Badge>
                    <span className="font-mono text-xs text-rp-grey-500">{project.year}</span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-rp-white group-hover:text-rp-red transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-rp-grey-300 line-clamp-2 leading-relaxed mb-6">
                    {project.overview}
                  </p>
                </div>

                {/* Tech stack badges */}
                <div className="pt-4 border-t border-rp-border/60 flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-rp-surface-2 text-rp-grey-500"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 text-rp-grey-500">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-16 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-rp-red to-rp-red-bright hover:shadow-[0_0_30px_rgba(224,5,63,0.5)] transition-all duration-300 group"
          >
            <span>Explore All 9+ Client Case Studies</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
