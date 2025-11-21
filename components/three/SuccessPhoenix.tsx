"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { PhoenixLogo3D } from "./PhoenixLogo3D";
import { ParticleBackground } from "./ParticleBackground";

/**
 * SuccessPhoenix
 *
 * Combines the PhoenixLogo3D with additional particle effects for
 * success states (e.g. after a successful enrollment or recovery).
 */
export const SuccessPhoenix: React.FC = () => {
  return (
    <div
      className="relative w-full h-64"
      role="img"
      aria-label="Success phoenix animation"
    >
      {/* Reuse Phoenix logo inside its own canvas */}
      <PhoenixLogo3D className="absolute inset-0 w-full h-full" />
      {/* Add subtle background particles for celebration */}
      <ParticleBackground />
    </div>
  );
};