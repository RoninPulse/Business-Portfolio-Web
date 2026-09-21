'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useMediaQuery';

export function Preloader() {
  const [showPreloader, setShowPreloader] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const isReducedMotion = useReducedMotion();

  useEffect(() => {
    // Check session storage
    const hasLoaded = sessionStorage.getItem('rp_preloader_viewed');
    if (hasLoaded || isReducedMotion) {
      setShowPreloader(false);
      return;
    }

    setShowPreloader(true);

    // Smooth counter animation up to 100% in ~1.8 seconds
    const startTime = Date.now();
    const duration = 1600;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsCompleted(true);
          sessionStorage.setItem('rp_preloader_viewed', 'true');
          setTimeout(() => {
            setShowPreloader(false);
          }, 600);
        }, 200);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [isReducedMotion]);

  if (!showPreloader) return null;

  return (
    <AnimatePresence>
      {!isCompleted && (
        <motion.div
          key="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-rp-black overflow-hidden select-none"
        >
          {/* Concentric red expanding shockwave rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{ scale: [0.8, 2.2], opacity: [0.9, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
              className="absolute w-44 h-44 rounded-full border border-rp-red shadow-[0_0_40px_rgba(224,5,63,0.5)]"
            />
            <motion.div
              animate={{ scale: [0.8, 2.6], opacity: [0.7, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: 0.4, ease: 'easeOut' }}
              className="absolute w-56 h-56 rounded-full border border-rp-red-bright/40 shadow-[0_0_60px_rgba(224,5,63,0.3)]"
            />
          </div>

          {/* Center Brand Mark */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative z-10 flex flex-col items-center"
          >
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-6 rounded-full p-1 bg-rp-surface border border-rp-border shadow-[0_0_50px_rgba(224,5,63,0.5)]">
              <Image
                src="/images/logo-circled.png"
                alt="Ronin Pulse Logo"
                fill
                priority
                sizes="(max-width: 640px) 96px, 112px"
                className="object-contain p-1"
              />
            </div>

            <h1 className="font-display font-extrabold italic text-xl tracking-wider text-rp-white uppercase">
              RŌNIN <span className="font-accent italic font-black text-rp-red">PULSE</span>
            </h1>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-rp-grey-300 mt-1">
              Your Technology Arm
            </p>

            {/* Progress Bar & Counter */}
            <div className="w-56 mt-8 flex flex-col items-center">
              <div className="w-full h-1 bg-rp-surface-2 rounded-full overflow-hidden border border-rp-border/50">
                <motion.div
                  className="h-full bg-gradient-to-r from-rp-red to-rp-red-bright shadow-[0_0_15px_#FF2D5F]"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="font-mono text-xs text-rp-grey-500 mt-3 tracking-widest">
                {progress}%
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
