'use client';

import React, { useRef, useState, MouseEvent } from 'react';
import { useReducedMotion, useIsTouch } from '@/hooks/useMediaQuery';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
}

export function MagneticButton({
  children,
  className = '',
  onClick,
  strength = 0.35,
}: MagneticButtonProps) {
  const btnRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isReducedMotion = useReducedMotion();
  const isTouch = useIsTouch();

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isReducedMotion || isTouch || !btnRef.current) return;

    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: position.x === 0 ? 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)' : 'transform 0.1s ease-out',
      }}
      className={`inline-block ${className}`}
    >
      {children}
    </div>
  );
}
