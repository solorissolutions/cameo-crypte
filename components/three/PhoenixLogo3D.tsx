"use client";

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { TorusKnot } from "@react-three/drei";
import * as THREE from "three";

/**
 * PhoenixLogo3D
 *
 * A minimalistic 3D logo inspired by a phoenix. We approximate the
 * phoenix with a torus knot rendered in wireframe mode. The knot
 * rotates slowly, and on hover its colour shifts toward violet,
 * hinting at the morph into a vault. A glow effect is achieved via
 * additive blending and custom material settings.
 */
const PhoenixMesh: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  useFrame(() => {
    meshRef.current.rotation.x += 0.002;
    meshRef.current.rotation.y += 0.004;
  });
  return (
    <TorusKnot
      ref={meshRef}
      args={[1, 0.4, 100, 16]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshBasicMaterial
        attach="material"
        wireframe
        color={hovered ? "#8B00FF" : "#FF4700"}
        opacity={0.9}
        transparent
      />
    </TorusKnot>
  );
};

export const PhoenixLogo3D: React.FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <div className={className} role="img" aria-label="Caméo Crypté phoenix logo">
      <Canvas
        camera={{ position: [0, 0, 3] }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1.5} />
        <PhoenixMesh />
      </Canvas>
    </div>
  );
};