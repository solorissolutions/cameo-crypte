"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * ParticleBackground
 *
 * Renders a full-screen animated particle system using Three.js.
 * Hundreds of small points move slowly in random directions,
 * glowing in orange and violet hues. The entire scene is
 * rendered behind other content using absolute positioning via
 * Tailwind classes. Use this as a decorative background.
 */
function Particles() {
  const points = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const arr = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, []);
  const colors = useMemo(() => {
    const arr = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000; i++) {
      // Interpolate between accent orange and violet for each particle
      const t = Math.random();
      const color = new THREE.Color().lerpColors(
        new THREE.Color("#FF4700"),
        new THREE.Color("#8B00FF"),
        t
      );
      arr[i * 3 + 0] = color.r;
      arr[i * 3 + 1] = color.g;
      arr[i * 3 + 2] = color.b;
    }
    return arr;
  }, []);
  useFrame(() => {
    if (!points.current) return;
    const positionsAttr = points.current.geometry.attributes.position;
    const array = positionsAttr.array as Float32Array;
    for (let i = 0; i < array.length; i += 3) {
      array[i] += 0.0005 * (Math.random() - 0.5);
      array[i + 1] += 0.0005 * (Math.random() - 0.5);
      array[i + 2] += 0.0005 * (Math.random() - 0.5);
    }
    positionsAttr.needsUpdate = true;
  });
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.6}
        depthWrite={false}
      />
    </points>
  );
}

export const ParticleBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <Particles />
      </Canvas>
    </div>
  );
};