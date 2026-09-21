'use client';

import React, { useEffect, useState } from 'react';
import { useReducedMotion } from '@/hooks/useMediaQuery';

export function AmbientBackground() {
  const isReducedMotion = useReducedMotion();
  const [mouseCoord, setMouseCoord] = useState({ x: 50, y: 50 });

  useEffect(() => {
    if (isReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const xPct = Math.round((e.clientX / window.innerWidth) * 100);
      const yPct = Math.round((e.clientY / window.innerHeight) * 100);
      setMouseCoord({ x: xPct, y: yPct });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isReducedMotion]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Dark Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Interactive Ambient Red Glow that follows cursor softly */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-15 transition-all duration-1000 ease-out"
        style={{
          background: 'radial-gradient(circle, #E0053F 0%, #4A0613 50%, transparent 70%)',
          left: `${mouseCoord.x}%`,
          top: `${mouseCoord.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Persistent Atmospheric Ambient Corner Orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-rp-red-dark/30 blur-[120px]" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-rp-red-deep/20 blur-[150px]" />
      <div className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] rounded-full bg-rp-red-dark/25 blur-[160px]" />
    </div>
  );
}
