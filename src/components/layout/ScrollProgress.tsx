'use client';

import React, { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-[100] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-rp-red via-rp-red-bright to-white transition-all duration-75 ease-out"
        style={{
          width: `${progress}%`,
          boxShadow: '0 0 10px #FF2D5F, 0 0 20px #E0053F',
        }}
      />
    </div>
  );
}
