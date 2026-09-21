'use client';

import { useState, useEffect } from 'react';

export interface MousePosition {
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
}

export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({
    x: -100,
    y: -100,
    velocityX: 0,
    velocityY: 0,
  });

  useEffect(() => {
    let lastX = -100;
    let lastY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      const vx = e.clientX - lastX;
      const vy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;

      setPosition({
        x: e.clientX,
        y: e.clientY,
        velocityX: vx,
        velocityY: vy,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return position;
}
