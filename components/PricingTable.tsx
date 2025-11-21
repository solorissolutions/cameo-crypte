"use client";

import React from "react";
import { GlassCard } from "./ui/GlassCard";
import { GlowingButton } from "./ui/GlowingButton";

/**
 * PricingTable
 *
 * Displays the pricing tiers for Caméo Crypté. There are two tiers
 * defined: free and premium. Each card outlines the price and
 * features, and includes a call‑to‑action button to create a Caméo.
 */
const pricing = [
  {
    title: "Free",
    price: "$0",
    description: "For wallets under 0.5 ETH",
    benefits: [
      "Liveness authentication",
      "Encrypted shard storage",
      "Basic support",
    ],
    cta: "Get Started",
  },
  {
    title: "Premium",
    price: "$99/year",
    description: "For serious HODLers",
    benefits: [
      "Priority liveness checks",
      "Guardian video call fallback",
      "Lower recovery fee (0.3%)",
    ],
    cta: "Upgrade Now",
  },
];

export const PricingTable: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      {pricing.map((tier) => (
        <GlassCard
          key={tier.title}
          className="flex-1 p-6 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-semibold text-text-100 mb-1">
              {tier.title}
            </h3>
            <p className="text-3xl font-bold text-accent mb-2">
              {tier.price}
            </p>
            <p className="text-text-200 mb-4">{tier.description}</p>
            <ul className="mb-6 space-y-2">
              {tier.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start">
                  <span className="mr-2 text-success">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <GlowingButton variant="primary" size="md">
            {tier.cta}
          </GlowingButton>
        </GlassCard>
      ))}
    </div>
  );
};