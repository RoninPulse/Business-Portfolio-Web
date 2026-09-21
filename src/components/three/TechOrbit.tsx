'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import { useReducedMotion } from '@/hooks/useMediaQuery';

const techItems = [
  'Next.js', 'React', 'TypeScript', 'Node.js', 'Python',
  'Flutter', 'React Native', 'PostgreSQL', 'Docker', 'AWS',
  'Tailwind CSS', 'Three.js', 'Shopify', 'Figma', 'GraphQL',
  'Google Ads', 'Meta Ads', 'GA4', 'Redis', 'Kubernetes'
];

function OrbitCloud() {
  const groupRef = useRef<THREE.Group>(null);

  // Distribute items uniformly on a sphere using Fibonacci spiral
  const items = useMemo(() => {
    const phi = Math.PI * (Math.sqrt(5) - 1); // Golden ratio angle
    const radius = 3.2;

    return techItems.map((tech, i) => {
      const y = 1 - (i / (techItems.length - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY * radius;
      const z = Math.sin(theta) * radiusAtY * radius;
      const posY = y * radius;

      return {
        name: tech,
        position: [x, posY, z] as [number, number, number],
      };
    });
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.y = time * 0.12;
    groupRef.current.rotation.x = Math.sin(time * 0.08) * 0.2;
  });

  return (
    <group ref={groupRef}>
      {items.map((item, idx) => (
        <group key={item.name} position={item.position}>
          <Text
            fontSize={0.28}
            color={idx % 2 === 0 ? '#F7EEF0' : '#FF2D5F'}
            anchorX="center"
            anchorY="middle"
          >
            {item.name}
          </Text>
        </group>
      ))}
    </group>
  );
}

export function TechOrbit() {
  const isReducedMotion = useReducedMotion();

  if (isReducedMotion) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-3 p-6 max-w-4xl mx-auto">
        {techItems.map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 rounded-full bg-rp-surface border border-rp-border text-xs font-mono font-medium text-rp-white hover:border-rp-red hover:text-rp-red-bright transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div
      data-cursor="drag"
      className="relative w-full h-[400px] sm:h-[480px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
    >
      <Canvas camera={{ position: [0, 0, 6.5], fov: 50 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#FF2D5F" />
        <OrbitCloud />
      </Canvas>
    </div>
  );
}
