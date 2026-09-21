import React from 'react';

const strip1 = [
  'Web Design & Development',
  'Next.js 14',
  'Custom ERP Systems',
  'Mobile Apps',
  'Technical SEO',
  'UI/UX Design Systems',
  'Cloud Infrastructure',
  'Digital Marketing Funnels',
  'High-Speed Microservices',
];

const strip2 = [
  'TypeScript',
  'Three.js 3D',
  'Shopify Plus',
  'AWS Architecture',
  'PostgreSQL',
  'Flutter & React Native',
  'Docker Containers',
  'GA4 & Looker Studio',
  'Algorithmic Paid Ads',
];

export function MarqueeSection() {
  return (
    <section className="relative py-12 bg-rp-ink border-t border-b border-rp-border overflow-hidden select-none">
      {/* Subtle edge fade gradient masks */}
      <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-rp-ink to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-rp-ink to-transparent z-10 pointer-events-none" />

      {/* Row 1: Leftward Infinite Flow */}
      <div className="flex w-max animate-marquee whitespace-nowrap mb-4">
        {[...strip1, ...strip1].map((item, idx) => (
          <div key={idx} className="flex items-center mx-6">
            <span
              className={`font-display text-xl sm:text-2xl font-extrabold italic tracking-wider ${
                idx % 2 === 0
                  ? 'text-rp-white'
                  : 'text-transparent stroke-text'
              }`}
            >
              {item}
            </span>
            <span className="w-2 h-2 rounded-full bg-rp-red mx-6 shadow-[0_0_8px_#FF2D5F]" />
          </div>
        ))}
      </div>

      {/* Row 2: Rightward Reverse Flow */}
      <div className="flex w-max animate-marquee-reverse whitespace-nowrap">
        {[...strip2, ...strip2].map((item, idx) => (
          <div key={idx} className="flex items-center mx-6">
            <span
              className={`font-display text-xl sm:text-2xl font-extrabold italic tracking-wider ${
                idx % 2 === 1
                  ? 'text-rp-white'
                  : 'text-transparent stroke-text'
              }`}
            >
              {item}
            </span>
            <span className="w-2 h-2 rounded-full bg-rp-red-bright mx-6 shadow-[0_0_8px_#FF2D5F]" />
          </div>
        ))}
      </div>
    </section>
  );
}
