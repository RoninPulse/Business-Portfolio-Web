'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { projectsData, ProjectItem } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';
import { Search, ExternalLink, ArrowRight } from 'lucide-react';

const categories = ['All', 'Software', 'Web', 'Mobile', 'Cloud', 'Marketing', 'Branding'] as const;

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Case Studies & Deliverables"
          title="Flagship Systems Engineered for"
          titleAccent="Global Enterprise."
          description="Explore our complete archive of client software systems, high-converting digital storefronts, and multi-region infrastructure setups."
        />

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 p-6 rounded-2xl bg-rp-surface border border-rp-border">
          {/* Category Chips */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-rp-red text-white shadow-[0_0_15px_rgba(224,5,63,0.4)]'
                    : 'bg-rp-surface-2 text-rp-grey-300 hover:text-white border border-rp-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-rp-grey-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack, client, keywords..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-rp-ink border border-rp-border focus:border-rp-red text-xs text-white placeholder:text-rp-grey-500 focus:outline-none focus:ring-1 focus:ring-rp-red"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="p-16 rounded-3xl bg-rp-surface border border-rp-border text-center">
            <h3 className="font-display font-bold text-lg text-rp-white mb-2">
              No matching engagements found
            </h3>
            <p className="text-xs text-rp-grey-500 mb-6">
              Try adjusting your search query or selecting a different category filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-full bg-rp-red text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                data-cursor="view"
                className="group rounded-2xl bg-rp-surface border border-rp-border hover:border-rp-red/50 overflow-hidden transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(224,5,63,0.2)]"
              >
                {/* Visual Header Mockup */}
                <div
                  className={`relative w-full h-56 bg-gradient-to-br ${project.gradientTheme} p-6 flex flex-col justify-between overflow-hidden border-b border-rp-border/60`}
                >
                  <div className="w-full flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="font-mono text-[10px] text-white/50 tracking-wider">
                      {project.client}
                    </span>
                  </div>

                  <div className="space-y-2 py-4">
                    <div className="w-3/4 h-3 rounded bg-white/20" />
                    <div className="w-1/2 h-2 rounded bg-white/10" />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-rp-black/70 border border-white/10 font-mono text-xs font-bold text-rp-red-bright">
                      {project.results[0].metric} {project.results[0].label}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-rp-red transition-colors">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
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
        )}
      </div>
    </div>
  );
}
