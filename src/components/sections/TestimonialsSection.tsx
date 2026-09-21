'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { testimonialsData } from '@/data/testimonials';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-24 sm:py-32 bg-rp-ink border-t border-rp-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Direct Endorsements"
          title="Battle-Tested by Leaders,"
          titleAccent="Trusted by Innovators."
          description="Read how executives and founders rely on Ronin Pulse as their mission-critical technology arm."
        />

        {/* Testimonials Carousel Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 sm:p-12 rounded-3xl bg-rp-surface border border-rp-border shadow-2xl">
            <Quote className="w-12 h-12 text-rp-red/30 absolute top-8 right-8 pointer-events-none" />

            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(testimonialsData[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-rp-red text-rp-red" />
              ))}
            </div>

            {/* Content Quote */}
            <p className="font-display text-lg sm:text-2xl italic font-semibold text-rp-white leading-relaxed mb-8">
              &ldquo;{testimonialsData[activeIndex].content}&rdquo;
            </p>

            {/* Author Footer Info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-rp-border/60">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-rp-red to-rp-red-bright flex items-center justify-center font-display font-extrabold text-white text-base shadow-[0_0_15px_rgba(224,5,63,0.4)]">
                  {testimonialsData[activeIndex].avatarInitials}
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-rp-white">
                    {testimonialsData[activeIndex].name}
                  </h4>
                  <p className="text-xs text-rp-grey-300">
                    {testimonialsData[activeIndex].role} · <span className="text-rp-red">{testimonialsData[activeIndex].company}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full bg-rp-surface-2 hover:bg-rp-red text-rp-grey-300 hover:text-white border border-rp-border transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full bg-rp-surface-2 hover:bg-rp-red text-rp-grey-300 hover:text-white border border-rp-border transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Indicator Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'w-8 bg-rp-red' : 'w-2 bg-rp-surface-2 hover:bg-rp-grey-500'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
