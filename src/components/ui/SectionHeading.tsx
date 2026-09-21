import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  titleAccent,
  description,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignmentClasses[align]} ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rp-surface border border-rp-border/80 text-[11px] font-mono uppercase tracking-[0.2em] text-rp-red mb-4 shadow-[0_0_12px_rgba(224,5,63,0.15)]">
          <span className="w-1.5 h-1.5 rounded-full bg-rp-red animate-ping" />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold italic text-rp-white tracking-tight leading-[1.15]">
        {title}{' '}
        {titleAccent && (
          <span className="font-accent font-black italic text-rp-red drop-shadow-[0_0_25px_rgba(224,5,63,0.5)]">
            {titleAccent}
          </span>
        )}
      </h2>

      {description && (
        <p className="text-sm sm:text-base text-rp-grey-300 mt-4 leading-relaxed max-w-2xl font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
