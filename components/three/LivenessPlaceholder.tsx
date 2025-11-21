"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

/**
 * LivenessPlaceholder
 *
 * A placeholder for the FaceTec liveness check. It displays a 3D
 * sphere with an animated scanning line moving up and down. Use
 * this placeholder until the real FaceTec SDK is integrated.
 */
const ScanLine: React.FC = () => {
  const planeRef = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    const t = (Math.sin(clock.getElapsedTime() * 2) + 1) / 2;
    // Move the plane along the Y axis between -1 and 1
    planeRef.current.position.y = THREE.MathUtils.lerp(-1.2, 1.2, t);
  });
  return (
    <mesh ref={planeRef} rotation={[Math.PI / 2, 0, 0]}>
      <planeGeometry args={[3, 0.02]} />
      <meshBasicMaterial
        color="#8B00FF"
        transparent
        opacity={0.7}
      />
    </mesh>
  );
};

export const LivenessPlaceholder: React.FC = () => {
  return (
    <div className="w-full h-64 relative" role="img" aria-label="Liveness scan placeholder">
      <Canvas camera={{ position: [0, 0, 3] }} gl={{ alpha: true }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        {/* Face sphere */}
        <Sphere args={[1, 32, 32]}>
          <meshBasicMaterial
            color="#FF4700"
            wireframe
            opacity={0.8}
            transparent
          />
        </Sphere>
        {/* Scanning line */}
        <ScanLine />
      </Canvas>
    </div>
  );
};