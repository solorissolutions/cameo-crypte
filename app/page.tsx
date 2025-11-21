//page.tsx
"use client";


import Link from "next/link";
import { PhoenixLogo3D } from "../components/three/PhoenixLogo3D";
import { Timeline3D } from "../components/three/Timeline3D";
import { ThreatModelTable } from "../components/ThreatModelTable";
import { PricingTable } from "../components/PricingTable";
import { GlowingButton } from "../components/ui/GlowingButton";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-start min-h-screen text-center pb-24">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center pt-20 px-6">
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <PhoenixLogo3D className="w-64 h-64 md:w-80 md:h-80" />
        </div>
        <h1 className="relative z-10 text-5xl md:text-7xl font-heading text-white mb-4">
          Caméo Crypté
        </h1>
        <p className="relative z-10 text-lg md:text-2xl text-text-200 max-w-2xl mb-8">
          The only recovery that requires you to prove you’re still the same human.
        </p>
        <p className="relative z-10 text-sm md:text-lg text-text-200 italic mb-12">
          One 15-second cameo. Eternal sovereignty.
        </p>
        <div className="relative z-10">
          <GlowingButton
            variant="primary"
            size="lg"
            onClick={() => window.open("/app", "_blank")}
          >
            Create your Caméo
          </GlowingButton>
        </div>
      </section>
      {/* Problem Section */}
      <section id="problem" className="max-w-5xl w-full px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-heading text-accent mb-6">
          The Problem
        </h2>
        <p className="text-lg md:text-xl text-text-200 max-w-3xl mx-auto">
          Seeds get stolen. Guardians collude. Hardware fails. You die → funds gone
          forever. Traditional recovery mechanisms are brittle and easily
          compromised. Caméo Crypté brings biometrics and decentralized storage
          together to fix that.
        </p>
      </section>
      {/* Solution Section */}
      <section id="solution" className="max-w-5xl w-full px-6 py-16 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-heading text-accent mb-6">Our Solution</h2>
        <p className="text-lg text-text-200 mb-8 max-w-3xl text-center">
          Enroll once with a 15-second cameo. Time passes; we continuously
          validate your liveness. When recovery is needed, prove you’re still
          the same person through an aging morph. No one else can recover
          without your face.
        </p>
        <Timeline3D />
      </section>
      {/* How It Works Section */}
      <section id="how" className="max-w-5xl w-full px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-heading text-accent mb-6">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex flex-col items-start p-4 border-l-4 border-accent">
            <h3 className="text-xl font-semibold text-text-100 mb-2">Enroll</h3>
            <p className="text-text-200">
              Connect your wallet and record a 15‑second cameo. Our 3D
              liveness model captures your biometric face map and encrypts it
              using Lit Protocol.
            </p>
          </div>
          <div className="flex flex-col items-start p-4 border-l-4 border-accent">
            <h3 className="text-xl font-semibold text-text-100 mb-2">Prove Life</h3>
            <p className="text-text-200">
              Periodically prove you’re alive with quick liveness checks. Your
              encrypted shards remain safe on Arweave via Bundlr, ready only
              when you need them.
            </p>
          </div>
          <div className="flex flex-col items-start p-4 border-l-4 border-accent">
            <h3 className="text-xl font-semibold text-text-100 mb-2">Recover</h3>
            <p className="text-text-200">
              When recovery is needed, your guardians initiate the process. You
              prove your identity through a new cameo; we morph your aging
              face and unlock the shards. Funds are restored only upon proof
              of life.
            </p>
          </div>
        </div>
      </section>
      {/* Threat Model Section */}
      <section id="threats" className="max-w-5xl w-full px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-heading text-accent mb-6">
          Threat Model
        </h2>
        <ThreatModelTable />
      </section>
      {/* Pricing Section */}
      <section id="pricing" className="max-w-5xl w-full px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-heading text-accent mb-6">
          Pricing
        </h2>
        <PricingTable />
      </section>
      {/* Roadmap & Waitlist Section */}
      <section id="roadmap" className="max-w-5xl w-full px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-heading text-accent mb-6">
          Roadmap
        </h2>
        <ul className="space-y-3 text-text-200 text-left max-w-md mx-auto mb-8">
          <li>
            <span className="text-accent font-semibold">Q4 2025:</span> Private
            Beta with limited wallets
          </li>
          <li>
            <span className="text-accent font-semibold">Q1 2026:</span> Public
            release, premium tier, guardian dashboard
          </li>
          <li>
            <span className="text-accent font-semibold">Q2 2026:</span> Cross‑chain
            recovery support, mobile native apps
          </li>
        </ul>
        <p className="text-lg text-text-200 mb-4">
          Join the private beta and secure your future today.
        </p>
        <GlowingButton
          variant="primary"
          size="lg"
          onClick={() => window.open("/app", "_blank")}
        >
          Join Waitlist
        </GlowingButton>
      </section>
      {/* Footer */}
      <footer className="w-full border-t border-secondary/50 py-8 px-6 text-center text-sm text-text-200">
        <p>
          © {new Date().getFullYear()} Caméo Crypté. All rights reserved.
        </p>
        <div className="mt-3 flex justify-center space-x-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            Twitter
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            Discord
          </a>
          <Link href="/docs" className="hover:text-accent">
            Docs
          </Link>
        </div>
      </footer>
    </main>
  );
}