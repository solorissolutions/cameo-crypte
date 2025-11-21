"use client";



import { GlowingButton } from "../../components/ui/GlowingButton";
import { PhoenixLogo3D } from "../../components/three/PhoenixLogo3D";
import Link from "next/link";

export default function AppHome() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-6 pt-24 pb-16">
      <div className="relative w-48 h-48 mb-8">
        <PhoenixLogo3D className="w-full h-full" />
      </div>
      <h1 className="text-4xl md:text-6xl font-heading text-white mb-4">
        Caméo Crypté
      </h1>
      <p className="text-text-200 text-base md:text-lg max-w-lg mb-10">
        Your personal sovereign crypto recovery. Enroll your face, verify
        liveness, and recover your wallet when life happens.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/app/enroll">
          <GlowingButton variant="primary" size="lg">
            Enroll Now
          </GlowingButton>
        </Link>
        <Link href="/app/recover">
          <GlowingButton variant="secondary" size="lg">
            Recover Funds
          </GlowingButton>
        </Link>
      </div>
    </main>
  );
}