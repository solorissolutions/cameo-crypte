"use client";

import { LivenessPlaceholder } from "../../../components/three/LivenessPlaceholder";

export default function RecoverLoading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <p className="text-text-200 mb-4">Preparing recovery…</p>
      <LivenessPlaceholder />
    </div>
  );
}