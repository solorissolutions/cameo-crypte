"use client";

import React from "react";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  RainbowKitProvider,
  midnightTheme,
  getDefaultConfig,
} from "@rainbow-me/rainbowkit";
import { mainnet, polygon, arbitrum } from "wagmi/chains";

// Replace with your actual WalletConnect Project ID
// Get it for free at: https://cloud.walletconnect.com
const WALLET_CONNECT_PROJECT_ID = "YOUR_PROJECT_ID_HERE";

// Best practice: use RainbowKit's getDefaultConfig (recommended for v2)
const config = getDefaultConfig({
  appName: "Caméo Crypté",
  projectId: "da983951239d3b22bcbb8d506cf6b633",
  chains: [mainnet, polygon, arbitrum],
  // Optional: customize transports (defaults to http() with fallback)
  // transports are automatically set if you don't specify
});

const queryClient = new QueryClient();

export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={midnightTheme({
            accentColor: "#FF4700",
            accentColorForeground: "#000000",
            borderRadius: "large",
          })}
          // chains are automatically passed via config in RainbowKit v2+
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};