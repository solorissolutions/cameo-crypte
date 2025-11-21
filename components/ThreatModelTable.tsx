"use client";

import React from "react";
import { GlassCard } from "./ui/GlassCard";

/**
 * ThreatModelTable
 *
 * Presents a concise table summarising the attack vectors and how
 * Caméo Crypté mitigates them. This component uses a glass card
 * container and emphasises risks using the accent colour.
 */
export const ThreatModelTable: React.FC = () => {
  const rows = [
    {
      risk: "Seed Theft",
      description:
        "Seed phrases are physically stolen or phished. Caméo encrypts shards and stores them off‑chain.",
    },
    {
      risk: "Guardian Collusion",
      description:
        "Guardians agree to recover your funds. Caméo requires proof of life via biometric liveness.",
    },
    {
      risk: "Hardware Failure",
      description:
        "Wallet device breaks. Caméo ensures recovery keys are distributed across the network.",
    },
    {
      risk: "Death or Incapacity",
      description:
        "You are gone. Without Caméo your funds die. With Caméo, your trusted recipients can recover through your last Cameo.",
    },
  ];
  return (
    <GlassCard className="p-6 overflow-x-auto">
      <table className="min-w-full text-left text-sm">
        <thead>
          <tr>
            <th className="pb-3 text-lg font-medium text-text-100">Risk</th>
            <th className="pb-3 text-lg font-medium text-text-100">Mitigation</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.risk} className="border-t border-secondary/50">
              <td className="py-3 font-semibold text-accent">{row.risk}</td>
              <td className="py-3 text-text-200 leading-snug">
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </GlassCard>
  );
};