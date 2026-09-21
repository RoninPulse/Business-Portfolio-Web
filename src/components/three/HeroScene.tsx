'use client';

import React, { useRef, useMemo, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useReducedMotion } from '@/hooks/useMediaQuery';

// 1. Animated Concentric Shockwave Rings (Logo Ripple Motif)
function ShockwaveRings() {
  const ringsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ringsRef.current) return;
    const time = state.clock.getElapsedTime();

    ringsRef.current.children.forEach((child, index) => {
      const mesh = child as THREE.Mesh;
      const speed = 0.8;
      const offset = (index * 0.75 + time * speed) % 3;

      // Scale grows outward
      const scale = 1 + offset * 1.8;
      mesh.scale.set(scale, scale, scale);

      // Opacity fades as it expands
      const material = mesh.material as THREE.MeshBasicMaterial;
      material.opacity = Math.max(0, (1 - offset / 3) * 0.65);
    });
  });

  return (
    <group ref={ringsRef} position={[1.8, 0, -0.5]}>
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.5, 1.54, 64]} />
          <meshBasicMaterial
            color="#FF2D5F"
            transparent
            opacity={0.5}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

// 2. The Signature Pulse Core (Crimson glowing energy sphere)
function PulseCore({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const glowMeshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Heartbeat pulse rhythm: double beat
    const beat = Math.pow(Math.sin(time * 3), 16) * 0.25;
    const scale = 1.3 + beat;

    if (meshRef.current) {
      meshRef.current.scale.set(scale, scale, scale);
      meshRef.current.rotation.y = time * 0.25;
      meshRef.current.rotation.x = time * 0.15;
    }

    if (wireframeRef.current) {
      const wireScale = scale * 1.18;
      wireframeRef.current.scale.set(wireScale, wireScale, wireScale);
      wireframeRef.current.rotation.y = -time * 0.35;
      wireframeRef.current.rotation.z = time * 0.2;
    }

    if (glowMeshRef.current) {
      const glowScale = scale * 1.4;
      glowMeshRef.current.scale.set(glowScale, glowScale, glowScale);
    }
  });

  return (
    <group position={[1.8, 0, 0]}>
      {/* Inner Solid Orb */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1, 4]} />
        <meshStandardMaterial
          color="#8B0A24"
          emissive="#E0053F"
          emissiveIntensity={1.8}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Wireframe Energy Cage */}
      <mesh ref={wireframeRef}>
        <icosahedronGeometry args={[1, 2]} />
        <meshBasicMaterial
          color="#FF2D5F"
          wireframe
          transparent
          opacity={0.7}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Outer Halo Glow */}
      <mesh ref={glowMeshRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color="#E0053F"
          transparent
          opacity={0.12}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

// 3. Reactive Drifting Particle Field
function ParticleField({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 1000;

  const [positions, initialPositions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const initial = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 16;
      const y = (Math.random() - 0.5) * 12;
      const z = (Math.random() - 0.5) * 10 - 2;

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      initial[i * 3] = x;
      initial[i * 3 + 1] = y;
      initial[i * 3 + 2] = z;
    }
    return [pos, initial];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    const geo = pointsRef.current.geometry;
    const posAttr = geo.attributes.position as THREE.BufferAttribute;
    const array = posAttr.array as Float32Array;

    const mx = mouse.current[0] * 3;
    const my = mouse.current[1] * 3;

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      // Gentle floating motion
      array[idx] = initialPositions[idx] + Math.sin(time * 0.3 + i) * 0.3;
      array[idx + 1] = initialPositions[idx + 1] + Math.cos(time * 0.2 + i) * 0.3;

      // Mouse repulsion
      const dx = array[idx] - mx;
      const dy = array[idx + 1] - my;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 2.5) {
        const force = (2.5 - dist) * 0.15;
        array[idx] += dx * force;
        array[idx + 1] += dy * force;
      }
    }

    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#FF2D5F"
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

// 4. Parallax Camera Rig
function CameraRig({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  useFrame((state) => {
    const targetX = mouse.current[0] * 0.6;
    const targetY = mouse.current[1] * 0.4;
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.05);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

// 5. Fallback Static Visual (when WebGL is disabled or on low power/reduced motion)
export function HeroFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-end pr-10 md:pr-24 overflow-hidden pointer-events-none">
      <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-rp-red/30 animate-pulse" />
        <div className="absolute inset-6 rounded-full border border-rp-red-bright/40" />
        <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-rp-red-dark via-rp-red to-rp-red-bright shadow-[0_0_80px_rgba(224,5,63,0.6)] animate-pulse-slow" />
      </div>
    </div>
  );
}

// 6. Exported HeroScene
export default function HeroScene() {
  const isReducedMotion = useReducedMotion();
  const [hasWebGL, setHasWebGL] = useState(true);
  const mouse = useRef<[number, number]>([0, 0]);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = [
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1,
      ];
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isReducedMotion || !hasWebGL) {
    return <HeroFallback />;
  }

  return (
    <div
      data-cursor="explore"
      className="absolute inset-0 w-full h-full pointer-events-auto cursor-grab active:cursor-grabbing"
    >
      <Suspense fallback={<HeroFallback />}>
        <Canvas
          dpr={[1, 1.75]}
          camera={{ position: [0, 0, 6], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.6} />
          <pointLight position={[5, 5, 5]} intensity={2.5} color="#FF2D5F" />
          <pointLight position={[-5, -5, 2]} intensity={1.2} color="#8B0A24" />

          <PulseCore mouse={mouse} />
          <ShockwaveRings />
          <ParticleField mouse={mouse} />
          <CameraRig mouse={mouse} />
        </Canvas>
      </Suspense>
    </div>
  );
}
