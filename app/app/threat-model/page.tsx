"use client";

export const metadata = {
  title: "Threat Model – Caméo Crypté",
  description: "Understand the security assumptions and mitigations of Caméo Crypté.",
};

import { ThreatModelTable } from "../../../components/ThreatModelTable";

export default function ThreatModelPage() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen px-6 pt-24 pb-16 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-heading text-white mb-6">
        Threat Model
      </h1>
      <p className="text-text-200 mb-8">
        Our security model is centred on biometrics and decentralisation. Below
        is a summary of common attack vectors and how Caméo Crypté mitigates
        them.
      </p>
      <ThreatModelTable />
    </main>
  );
}