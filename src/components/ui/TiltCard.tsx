'use client';

import React, { useRef, useState, MouseEvent } from 'react';
import { useReducedMotion, useIsTouch } from '@/hooks/useMediaQuery';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
}

export function TiltCard({ children, className = '', glowOnHover = true }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const isReducedMotion = useReducedMotion();
  const isTouch = useIsTouch();

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isReducedMotion || isTouch || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate rotation (-10 to 10 deg)
    const rY = ((mouseX - width / 2) / (width / 2)) * 8;
    const rX = -((mouseY - height / 2) / (height / 2)) * 8;

    setRotateX(rX);
    setRotateY(rY);

    // Glare position percentage
    const glareX = (mouseX / width) * 100;
    const glareY = (mouseY / height) * 100;
    setGlarePos({ x: glareX, y: glareY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
      }}
      className={`relative rounded-2xl bg-rp-surface border border-rp-border overflow-hidden group ${
        glowOnHover && isHovered ? 'border-rp-red/50 shadow-[0_0_30px_rgba(224,5,63,0.25)]' : ''
      } ${className}`}
    >
      {/* Dynamic Glare Reflection Overlay */}
      {isHovered && !isReducedMotion && !isTouch && (
        <div
          className="pointer-events-none absolute inset-0 z-20 opacity-25 mix-blend-overlay transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.8) 0%, rgba(224,5,63,0.3) 40%, transparent 80%)`,
          }}
        />
      )}

      {/* Card Content with 3D Depth */}
      <div style={{ transform: 'translateZ(20px)' }} className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}
