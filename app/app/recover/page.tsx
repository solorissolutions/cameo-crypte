"use client";



import { useState } from "react";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { LivenessPlaceholder } from "../../../components/three/LivenessPlaceholder";
import { SuccessPhoenix } from "../../../components/three/SuccessPhoenix";
import { GlowingButton } from "../../../components/ui/GlowingButton";

export default function RecoverPage() {
  const { isConnected } = useAccount();
  const [address, setAddress] = useState("");
  const [stage, setStage] = useState<"connect" | "enter" | "scan" | "success">(
    "connect"
  );
  const handleStart = () => {
    if (!address) return;
    const facetechEnabled =
      typeof process !== "undefined" &&
      (process.env.NEXT_PUBLIC_FACE_TEC_ENABLED === "true");
    try {
      if (facetechEnabled) {
        throw new Error('FaceTec not available');
      }
      throw new Error('FaceTec disabled');
    } catch (err) {
      setStage('scan');
      setTimeout(() => setStage('success'), 5000);
    }
  };
  return (
    <main className="flex flex-col items-center justify-start min-h-screen px-6 pt-24 pb-16 text-center">
      <h1 className="text-4xl md:text-5xl font-heading text-white mb-6">
        Recover Your Wallet
      </h1>
      {!isConnected && (
        <div className="flex flex-col items-center">
          <p className="text-text-200 mb-4">Connect your wallet to begin.</p>
          <ConnectButton showBalance={false} />
        </div>
      )}
      {isConnected && stage === "connect" && (
        <div className="flex flex-col items-center w-full max-w-md">
          <p className="text-text-200 mb-6">
            To recover funds, enter the wallet address you wish to restore or
            scan its QR code.
          </p>
          <input
            type="text"
            aria-label="Wallet address"
            placeholder="0x…"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-3 bg-secondary/50 border border-secondary rounded-lg text-text-100 placeholder-text-200 focus:outline-none focus:ring-2 focus:ring-accent mb-4"
          />
          <GlowingButton
            variant="primary"
            size="lg"
            aria-label="Start recovery"
            onClick={() => {
              if (address) setStage("scan");
            }}
          >
            Start Recovery
          </GlowingButton>
        </div>
      )}
      {isConnected && stage === "scan" && (
      <div
        className="flex flex-col items-center w-full max-w-lg"
        aria-live="assertive"
      >
          <p className="text-text-200 mb-4">
            Please verify your identity to unlock your funds.
          </p>
          <LivenessPlaceholder />
        </div>
      )}
      {isConnected && stage === "success" && (
        <div className="flex flex-col items-center w-full max-w-lg">
          <p className="text-text-200 mb-4">Recovery successful!</p>
          <SuccessPhoenix />
          <p className="text-text-200 mt-4">Your funds have been restored.</p>
        </div>
      )}
    </main>
  );
}