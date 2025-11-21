"use client";

import { PhoenixLogo3D } from "../../components/three/PhoenixLogo3D";

export default function AppLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen text-center">
      <div className="w-20 h-20 animate-spin-slow">
        <PhoenixLogo3D className="w-full h-full" />
      </div>
    </div>
  );
}