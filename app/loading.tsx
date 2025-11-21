"use client";

import { PhoenixLogo3D } from "../components/three/PhoenixLogo3D";

/**
 * Global fallback while the root layout or page is loading.
 * Displays a simple spinner/phoenix to reassure the user.
 */
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen text-center">
      <div className="w-24 h-24 animate-spin-slow">
        <PhoenixLogo3D className="w-full h-full" />
      </div>
    </div>
  );
}