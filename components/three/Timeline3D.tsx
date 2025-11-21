"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, Text } from "@react-three/drei";
import * as THREE from "three";

/**
 * Timeline3D
 *
 * Displays a simple 3D timeline consisting of three glowing boxes
 * labeled "Enroll", "Time", and "Recover". The boxes pulse in
 * sequence to illustrate the flow of the process. This component is
 * intended for the marketing site under the solution section.
 */
const Step: React.FC<{
  position: [number, number, number];
  label: string;
  index: number;
}> = ({ position, label, index }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    const scale = 1 + 0.2 * Math.sin(elapsed * 2 - index * 0.8);
    meshRef.current.scale.set(scale, scale, scale);
  });
  return (
    <group position={position}>
      <Box ref={meshRef} args={[1, 1, 1]}>
        <meshStandardMaterial
          color="#FF4700"
          emissive="#FF4700"
          emissiveIntensity={0.5}
        />
      </Box>
      <Text
        position={[0, -0.8, 0]}
        fontSize={0.3}
        color="#E4E4E4"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
};

export const Timeline3D: React.FC = () => {
  return (
    <div className="w-full h-64 md:h-72 lg:h-80 relative">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1.5} />
        <Step position={[-2, 0, 0]} label="Enroll" index={0} />
        <Step position={[0, 0, 0]} label="Time" index={1} />
        <Step position={[2, 0, 0]} label="Recover" index={2} />
      </Canvas>
    </div>
  );
};