import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projectsData, ProjectItem } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';
import { 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  Quote, 
  CheckCircle2, 
  Layers, 
  Calendar, 
  UserCheck 
} from 'lucide-react';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Case Study Not Found | Ronin Pulse' };

  return {
    title: `${project.title} | Case Study`,
    description: project.tagline,
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const currentIndex = projectsData.findIndex((p) => p.slug === params.slug);
  if (currentIndex === -1) notFound();

  const project = projectsData[currentIndex];
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : projectsData[0];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back navigation */}
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-xs font-mono text-rp-grey-500 hover:text-rp-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-rp-red" />
          <span>Back to Case Studies</span>
        </Link>

        {/* Hero Section with Procedural Visual */}
        <div className="p-8 sm:p-14 rounded-3xl bg-rp-surface border border-rp-border mb-16 relative overflow-hidden">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="red">{project.category}</Badge>
              <span className="text-xs font-mono text-rp-grey-500">Completed in {project.year}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-extrabold italic text-rp-white tracking-tight mb-4">
              {project.title}
            </h1>

            <p className="text-base sm:text-xl text-rp-grey-300 font-medium mb-6">
              {project.tagline}
            </p>
          </div>

          {/* Results Counters Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-rp-border/60">
            {project.results.map((res) => (
              <div key={res.label} className="p-4 rounded-xl bg-rp-ink border border-rp-border">
                <span className="font-display text-3xl font-black italic text-rp-red block mb-1">
                  {res.metric}
                </span>
                <span className="text-xs font-mono text-rp-grey-300 uppercase">
                  {res.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Split Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Main Case Study Narrative (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <div className="p-8 rounded-3xl bg-rp-surface border border-rp-border">
              <h2 className="font-display font-bold text-xl text-rp-white mb-4">
                Executive Overview
              </h2>
              <p className="text-sm sm:text-base text-rp-grey-300 leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* The Challenge */}
            <div className="p-8 rounded-3xl bg-rp-surface border border-rp-border">
              <span className="font-mono text-xs text-rp-red uppercase tracking-wider font-semibold block mb-2">
                01. The Problem
              </span>
              <h2 className="font-display font-bold text-xl text-rp-white mb-4">
                The Operational Challenge
              </h2>
              <p className="text-sm sm:text-base text-rp-grey-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* The Solution */}
            <div className="p-8 rounded-3xl bg-rp-surface border border-rp-border">
              <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider font-semibold block mb-2">
                02. Engineering & Strategy
              </span>
              <h2 className="font-display font-bold text-xl text-rp-white mb-4">
                The Architectural Solution
              </h2>
              <p className="text-sm sm:text-base text-rp-grey-300 leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Client Testimonial */}
            <div className="p-8 rounded-3xl bg-rp-ink border border-rp-border relative">
              <Quote className="w-10 h-10 text-rp-red/20 absolute top-6 right-6" />
              <p className="font-display text-base sm:text-lg italic text-rp-white mb-6 leading-relaxed">
                &ldquo;{project.testimonial.quote}&rdquo;
              </p>
              <div>
                <h4 className="font-display font-bold text-sm text-rp-white">
                  {project.testimonial.author}
                </h4>
                <p className="text-xs text-rp-grey-500">
                  {project.testimonial.role}, {project.testimonial.company}
                </p>
              </div>
            </div>
          </div>

          {/* Sticky Meta Sidebar (4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="p-6 rounded-3xl bg-rp-surface border border-rp-border space-y-6">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-rp-grey-500 block mb-1">
                  Client Partner
                </span>
                <p className="font-display font-bold text-sm text-rp-white">
                  {project.client}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-rp-grey-500 block mb-2">
                  Capabilities Deployed
                </span>
                <div className="space-y-1.5">
                  {project.servicesUsed.map((svc) => (
                    <div key={svc} className="text-xs text-rp-grey-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rp-red" />
                      <span>{svc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-rp-grey-500 block mb-2">
                  Technology Stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-rp-surface-2 font-mono text-[11px] text-rp-white border border-rp-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-rp-border/60">
                <Link
                  href="/contact"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-rp-red to-rp-red-bright text-white text-xs font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(224,5,63,0.4)] hover:shadow-[0_0_30px_rgba(224,5,63,0.6)] transition-all"
                >
                  <span>Build Similar System</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Prev / Next Project Navigation */}
        <div className="pt-12 border-t border-rp-border flex items-center justify-between gap-4">
          <Link
            href={`/portfolio/${prevProject.slug}`}
            className="group flex flex-col items-start"
          >
            <span className="text-[10px] font-mono text-rp-grey-500 uppercase flex items-center gap-1">
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Previous
            </span>
            <span className="font-display font-bold text-sm text-rp-white group-hover:text-rp-red transition-colors line-clamp-1">
              {prevProject.title}
            </span>
          </Link>

          <Link
            href={`/portfolio/${nextProject.slug}`}
            className="group flex flex-col items-end"
          >
            <span className="text-[10px] font-mono text-rp-grey-500 uppercase flex items-center gap-1">
              Next <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="font-display font-bold text-sm text-rp-white group-hover:text-rp-red transition-colors line-clamp-1">
              {nextProject.title}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
