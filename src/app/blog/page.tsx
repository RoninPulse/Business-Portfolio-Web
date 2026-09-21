'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { blogPostsData, BlogPost } from '@/data/posts';
import { Badge } from '@/components/ui/Badge';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';

const categories = ['All', 'Engineering', 'Design', 'Marketing'] as const;

export default function BlogListingPage() {
  const [selectedCat, setSelectedCat] = useState<string>('All');

  const filteredPosts = selectedCat === 'All'
    ? blogPostsData
    : blogPostsData.filter((p) => p.category === selectedCat);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Insights & Analysis"
          title="Engineering Truths &"
          titleAccent="Growth Playbooks."
          description="In-depth technical architecture breakdowns, conversion experiments, and strategic analyses from the Ronin Pulse team."
        />

        {/* Category Filter Chips */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                selectedCat === cat
                  ? 'bg-rp-red text-white shadow-[0_0_15px_rgba(224,5,63,0.4)]'
                  : 'bg-rp-surface text-rp-grey-300 hover:text-white border border-rp-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="p-8 rounded-3xl bg-rp-surface border border-rp-border hover:border-rp-red/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(224,5,63,0.2)]"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <Badge variant="red">{post.category}</Badge>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-rp-grey-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readingTime}</span>
                  </div>
                </div>

                <h2 className="font-display font-bold text-xl sm:text-2xl text-rp-white group-hover:text-rp-red transition-colors mb-3 leading-snug">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="text-xs sm:text-sm text-rp-grey-300 leading-relaxed line-clamp-3 mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-rp-border/60 flex items-center justify-between">
                <div>
                  <p className="font-display font-bold text-xs text-rp-white">
                    {post.author.name}
                  </p>
                  <p className="text-[10px] font-mono text-rp-grey-500">
                    {post.publishedAt}
                  </p>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-rp-red group-hover:text-rp-red-bright transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
