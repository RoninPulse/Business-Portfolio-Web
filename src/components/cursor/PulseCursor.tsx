'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useReducedMotion, useIsTouch } from '@/hooks/useMediaQuery';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export function PulseCursor() {
  const isReducedMotion = useReducedMotion();
  const isTouch = useIsTouch();

  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [lagPos, setLagPos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'link' | 'view' | 'drag' | 'explore' | 'text' | 'hidden'>('default');
  const [cursorText, setCursorText] = useState('');
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [velocity, setVelocity] = useState({ x: 0, y: 0, speed: 0 });

  const lagPosRef = useRef({ x: -100, y: -100 });
  const targetPosRef = useRef({ x: -100, y: -100 });
  const prevMousePos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (isTouch || isReducedMotion) return;

    let animFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      targetPosRef.current = { x: e.clientX, y: e.clientY };
      setMousePos({ x: e.clientX, y: e.clientY });

      // Calculate instantaneous velocity for squash & stretch
      const vx = e.clientX - prevMousePos.current.x;
      const vy = e.clientY - prevMousePos.current.y;
      const speed = Math.sqrt(vx * vx + vy * vy);
      setVelocity({ x: vx, y: vy, speed: Math.min(speed, 50) });
      prevMousePos.current = { x: e.clientX, y: e.clientY };

      // Inspect target element under cursor for special cursor modes
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorAttr = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      if (cursorAttr) {
        if (cursorAttr === 'view') {
          setCursorType('view');
          setCursorText('VIEW');
          return;
        }
        if (cursorAttr === 'drag') {
          setCursorType('drag');
          setCursorText('DRAG');
          return;
        }
        if (cursorAttr === 'explore') {
          setCursorType('explore');
          setCursorText('EXPLORE');
          return;
        }
        if (cursorAttr === 'hidden') {
          setCursorType('hidden');
          return;
        }
      }

      if (target.closest('a, button, input[type="submit"], [role="button"], .interactive-hover')) {
        setCursorType('link');
        setCursorText('');
        return;
      }

      if (target.closest('p, h1, h2, h3, h4, span, li, blockquote') && !target.closest('a, button')) {
        // Subtle text bar hover
        setCursorType('text');
        setCursorText('');
        return;
      }

      setCursorType('default');
      setCursorText('');
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleClick = (e: MouseEvent) => {
      const newRipple: Ripple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };
      setRipples((prev) => [...prev.slice(-4), newRipple]);

      // Remove after shockwave expansion
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 900);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('click', handleClick);

    // Spring interpolation for smooth lagging ring
    const updateLag = () => {
      const ease = 0.18;
      lagPosRef.current.x += (targetPosRef.current.x - lagPosRef.current.x) * ease;
      lagPosRef.current.y += (targetPosRef.current.y - lagPosRef.current.y) * ease;
      setLagPos({ x: lagPosRef.current.x, y: lagPosRef.current.y });
      animFrameId = requestAnimationFrame(updateLag);
    };
    animFrameId = requestAnimationFrame(updateLag);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animFrameId);
    };
  }, [isTouch, isReducedMotion]);

  if (isTouch || isReducedMotion || !isVisible || cursorType === 'hidden') {
    return null;
  }

  // Calculate velocity rotation angle
  const angle = Math.atan2(velocity.y, velocity.x) * (180 / Math.PI);
  const stretchScaleX = 1 + Math.min(velocity.speed * 0.015, 0.4);
  const stretchScaleY = 1 - Math.min(velocity.speed * 0.008, 0.2);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Expanding shockwave click ripples */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-rp-red animate-ripple-expand"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            width: '60px',
            height: '60px',
            boxShadow: '0 0 25px rgba(224, 5, 63, 0.6), inset 0 0 15px rgba(224, 5, 63, 0.4)',
          }}
        />
      ))}

      {/* Lagging Ring with Heartbeat Pulse or Action Label */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out flex items-center justify-center font-mono font-bold tracking-widest text-[10px] text-white select-none"
        style={{
          left: `${lagPos.x}px`,
          top: `${lagPos.y}px`,
          width: cursorType === 'view' || cursorType === 'drag' || cursorType === 'explore' ? '72px' : cursorType === 'link' ? '48px' : cursorType === 'text' ? '4px' : '36px',
          height: cursorType === 'view' || cursorType === 'drag' || cursorType === 'explore' ? '72px' : cursorType === 'link' ? '48px' : cursorType === 'text' ? '24px' : '36px',
          borderRadius: cursorType === 'text' ? '2px' : '50%',
          backgroundColor:
            cursorType === 'view' || cursorType === 'drag' || cursorType === 'explore'
              ? 'rgba(224, 5, 63, 0.85)'
              : cursorType === 'link'
              ? 'rgba(224, 5, 63, 0.2)'
              : cursorType === 'text'
              ? '#FF2D5F'
              : 'transparent',
          border: cursorType === 'text' ? 'none' : cursorType === 'link' ? '1.5px solid #FF2D5F' : '1px solid rgba(255, 45, 95, 0.5)',
          boxShadow: cursorType !== 'text' ? '0 0 20px rgba(224, 5, 63, 0.35)' : '0 0 12px #FF2D5F',
          transform: `translate(-50%, -50%) rotate(${angle}deg) scale(${stretchScaleX}, ${stretchScaleY})`,
        }}
      >
        {cursorText && (
          <span
            className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            style={{ transform: `rotate(${-angle}deg)` }}
          >
            {cursorText}
          </span>
        )}
      </div>

      {/* Precise red center core dot */}
      {cursorType !== 'text' && cursorType !== 'view' && cursorType !== 'drag' && cursorType !== 'explore' && (
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-rp-red transition-all duration-100"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            width: cursorType === 'link' ? '4px' : '7px',
            height: cursorType === 'link' ? '4px' : '7px',
            boxShadow: '0 0 10px #FF2D5F, 0 0 18px #E0053F',
          }}
        />
      )}
    </div>
  );
}
