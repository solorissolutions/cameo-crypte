"use client";



import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState } from "react";
import { GlowingButton } from "../../../components/ui/GlowingButton";

interface Request {
  id: number;
  wallet: string;
  status: "pending" | "approved" | "denied";
}

export default function GuardianPage() {
  const { isConnected } = useAccount();
  const [requests, setRequests] = useState<Request[]>([
    { id: 1, wallet: "0x1234...abcd", status: "pending" },
    { id: 2, wallet: "0xabcd...1234", status: "pending" },
  ]);

  const handleAction = (id: number, action: "approved" | "denied") => {
    setRequests((reqs) =>
      reqs.map((r) => (r.id === id ? { ...r, status: action } : r))
    );
  };

  return (
    <main className="flex flex-col items-center justify-start min-h-screen px-6 pt-24 pb-16 text-center">
      <h1 className="text-4xl md:text-5xl font-heading text-white mb-6">
        Guardian Dashboard
      </h1>
      {!isConnected && (
        <div className="flex flex-col items-center">
          <p className="text-text-200 mb-4">Connect your wallet to manage requests.</p>
          <ConnectButton showBalance={false} />
        </div>
      )}
      {isConnected && (
        <div className="w-full max-w-xl space-y-4">
          {requests.map((req) => (
            <div
              key={req.id}
              className="p-4 border border-secondary rounded-lg bg-secondary/40 flex flex-col md:flex-row items-start md:items-center justify-between"
            >
              <div className="mb-3 md:mb-0">
                <p className="text-text-100 font-semibold">
                  Wallet: {req.wallet}
                </p>
                <p className="text-sm text-text-200">
                  Status: <span className="text-accent">{req.status}</span>
                </p>
              </div>
              {req.status === "pending" && (
                <div className="flex space-x-2">
                  <GlowingButton
                    variant="primary"
                    size="sm"
                    onClick={() => handleAction(req.id, "approved")}
                  >
                    Approve
                  </GlowingButton>
                  <GlowingButton
                    variant="secondary"
                    size="sm"
                    onClick={() => handleAction(req.id, "denied")}
                  >
                    Deny
                  </GlowingButton>
                </div>
              )}
              {req.status !== "pending" && (
                <p className="text-sm text-success font-medium">
                  {req.status === "approved" ? "Approved" : "Denied"}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}