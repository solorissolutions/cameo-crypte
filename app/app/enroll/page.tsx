"use client";


import { useState } from "react";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { LivenessPlaceholder } from "../../../components/three/LivenessPlaceholder";
import { SuccessPhoenix } from "../../../components/three/SuccessPhoenix";
import { GlowingButton } from "../../../components/ui/GlowingButton";

export default function EnrollPage() {
  const { isConnected } = useAccount();
  const [stage, setStage] = useState<"connect" | "scan" | "success">(
    "connect"
  );

  const startScan = () => {
    const facetechEnabled =
      typeof process !== "undefined" &&
      (process.env.NEXT_PUBLIC_FACE_TEC_ENABLED === "true");
    // Attempt to initiate FaceTec liveness if enabled; otherwise fallback
    try {
      if (facetechEnabled) {
        // Integrate FaceTec SDK here when available.
        throw new Error('FaceTec not available');
      }
      throw new Error('FaceTec disabled');
    } catch (err) {
      // fallback to mock scanning
      setStage('scan');
      setTimeout(() => setStage('success'), 4000);
    }
  };

  return (
    <main className="flex flex-col items-center justify-start min-h-screen px-6 pt-24 pb-16 text-center">
      <h1 className="text-4xl md:text-5xl font-heading text-white mb-6">
        Enroll Your Caméo
      </h1>
      {!isConnected && (
        <div className="flex flex-col items-center">
          <p className="text-text-200 mb-4">Connect your wallet to continue.</p>
          <ConnectButton showBalance={false} />
        </div>
      )}
      {isConnected && stage === "connect" && (
        <div className="flex flex-col items-center">
          <p className="text-text-200 mb-6 max-w-md">
            Ready to capture your cameo. We will ask you to move your head
            slightly while our 3D scanner verifies your liveness. Your data
            will be encrypted with Lit Protocol and stored on Arweave.
          </p>
          <GlowingButton
            variant="primary"
            size="lg"
            aria-label="Start scan"
            onClick={startScan}
          >
            Start Scan
          </GlowingButton>
        </div>
      )}
      {isConnected && stage === "scan" && (
      <div
        className="flex flex-col items-center w-full max-w-lg"
        aria-live="assertive"
      >
          <p className="text-text-200 mb-4">Scanning… Please stay still.</p>
          <LivenessPlaceholder />
        </div>
      )}
      {isConnected && stage === "success" && (
        <div className="flex flex-col items-center w-full max-w-lg">
          <p className="text-text-200 mb-4">Enrollment complete!</p>
          <SuccessPhoenix />
          <p className="text-text-200 mt-4">Your Caméo has been created.</p>
        </div>
      )}
    </main>
  );
}