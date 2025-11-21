"use client";

export const metadata = {
  title: "Documentation – Caméo Crypté",
  description: "Explore the technology and security behind Caméo Crypté.",
};

import Link from "next/link";

export default function DocsPage() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen px-6 pt-24 pb-16 text-left max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-heading text-white mb-6">
        Documentation
      </h1>
      <section className="mb-10">
        <h2 className="text-2xl font-heading text-accent mb-3">Overview</h2>
        <p className="text-text-200 leading-relaxed">
          Caméo Crypté is a decentralized recovery solution that combines
          biometric liveness with distributed key custody. Users record a
          15‑second cameo to generate a 3D face map. Lit Protocol securely
          encrypts and manages shards, while Bundlr & Arweave provide
          permanent storage. Guardians facilitate recoveries through
          transparent approvals and fallback video calls via LiveKit.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-heading text-accent mb-3">Technology</h2>
        <ul className="list-disc pl-5 space-y-2 text-text-200">
          <li>
            <span className="text-text-100 font-medium">Next.js 15</span> –
            Modern React framework using the App Router, server actions and
            improved caching for fast PWA delivery.
          </li>
          <li>
            <span className="text-text-100 font-medium">React Three Fiber</span>
            – Declarative wrapper around three.js to create custom 3D
            components such as the Phoenix logo and particle systems.
          </li>
          <li>
            <span className="text-text-100 font-medium">Framer Motion & GSAP</span>
            – Provide smooth page transitions, hover interactions and
            scroll‑linked animations.
          </li>
          <li>
            <span className="text-text-100 font-medium">FaceTec SDK</span> –
            Performs 3D liveness detection to ensure the real person is
            present. Our placeholder demonstrates scanning until the SDK is
            integrated.
          </li>
          <li>
            <span className="text-text-100 font-medium">Lit Protocol</span> –
            Decentralized key management network for encrypting shards and
            executing programmable recovery logic.
          </li>
          <li>
            <span className="text-text-100 font-medium">Viem & Wagmi</span> –
            Provide TypeScript‑first Ethereum interactions and React hooks for
            wallet connection. RainbowKit offers a polished wallet UI.
          </li>
          <li>
            <span className="text-text-100 font-medium">LiveKit</span> –
            Enables secure fallback video calls between guardians during
            recovery approvals.
          </li>
          <li>
            <span className="text-text-100 font-medium">Arweave via Bundlr</span>
            – Permanently stores encrypted shards with fast multichain uploads.
          </li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-heading text-accent mb-3">Threat Model</h2>
        <p className="text-text-200">
          Caméo Crypté defends against seed theft, colluding guardians,
          hardware failure and the ultimate threat: death. By requiring
          biometric proof of life, encrypted shards cannot be reconstructed
          without the rightful owner’s presence. Guardians cannot recover
          alone; multiple approvals plus liveness are mandatory.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-heading text-accent mb-3">API & SDKs</h2>
        <p className="text-text-200 mb-4">
          Developer access will be provided via GraphQL and REST endpoints.
          You can programmatically verify cameo enrollment status, trigger
          recoveries, and manage guardians. SDKs in TypeScript and Python
          will be released during the public beta.
        </p>
      </section>
      <p className="text-text-200">
        Have more questions? Join our community on{' '}
        <a
          href="https://discord.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent"
        >
          Discord
        </a>{' '}
        or read our <Link href="/app/threat-model" className="text-accent">Threat
        Model</Link> page.
      </p>
    </main>
  );
}