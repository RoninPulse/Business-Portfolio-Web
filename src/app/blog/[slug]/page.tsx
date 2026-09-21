import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPostsData, BlogPost } from '@/data/posts';
import { Badge } from '@/components/ui/Badge';
import { ArrowLeft, Clock, Calendar, Share2, ArrowRight } from 'lucide-react';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = blogPostsData.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Article Not Found | Ronin Pulse' };

  return {
    title: `${post.title} | Ronin Pulse Insights`,
    description: post.excerpt,
  };
}

export default function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const post = blogPostsData.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-rp-grey-500 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-rp-red" />
          <span>Back to Articles</span>
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="red">{post.category}</Badge>
            <span className="text-xs font-mono text-rp-grey-500 flex items-center gap-1">
              <Clock className="w-3 h-3" /> {post.readingTime}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold italic text-rp-white tracking-tight leading-[1.15] mb-6">
            {post.title}
          </h1>

          <div className="flex items-center justify-between pb-6 border-b border-rp-border text-xs text-rp-grey-300">
            <div>
              <span className="font-bold text-rp-white block">{post.author.name}</span>
              <span className="font-mono text-rp-grey-500 text-[11px]">{post.author.role}</span>
            </div>
            <span className="font-mono text-rp-grey-500">{post.publishedAt}</span>
          </div>
        </header>

        {/* Table of Contents Box */}
        <div className="p-6 rounded-2xl bg-rp-surface border border-rp-border mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-rp-red font-semibold block mb-3">
            Table of Contents
          </span>
          <ul className="space-y-2 text-xs font-medium">
            {post.tableOfContents.map((toc, idx) => (
              <li key={toc.id}>
                <a
                  href={`#${toc.id}`}
                  className="text-rp-grey-300 hover:text-rp-red transition-colors flex items-center gap-2"
                >
                  <span className="font-mono text-rp-grey-500">0{idx + 1}.</span>
                  <span>{toc.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Body Content */}
        <div className="prose prose-invert max-w-none space-y-6 text-sm sm:text-base text-rp-grey-300 leading-relaxed font-normal">
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('### ')) {
              const headingText = paragraph.replace('### ', '');
              const tocItem = post.tableOfContents.find(
                (t) => t.title.toLowerCase() === headingText.toLowerCase()
              );
              const anchorId = tocItem ? tocItem.id : undefined;

              return (
                <h2
                  key={index}
                  id={anchorId}
                  className="font-display font-bold text-xl sm:text-2xl text-rp-white pt-6 pb-2 scroll-mt-28"
                >
                  {headingText}
                </h2>
              );
            }

            return (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Article Footer & Consultation CTA */}
        <div className="mt-16 pt-8 border-t border-rp-border p-8 rounded-3xl bg-rp-surface flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-base text-rp-white mb-1">
              Need technical guidance on this topic?
            </h3>
            <p className="text-xs text-rp-grey-300">
              Speak with our senior architects and get a customized feasibility assessment.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-rp-red hover:bg-rp-red-bright text-white text-xs font-semibold flex items-center gap-2 flex-shrink-0 transition-colors"
          >
            <span>Talk with Engineers</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
