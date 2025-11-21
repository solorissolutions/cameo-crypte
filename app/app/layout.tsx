import "./globals.css";
import "./fonts.css";
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from "../../components/providers";
import { ParticleBackground } from "../../components/three/ParticleBackground";
import { ServiceWorkerRegister } from "../../components/ServiceWorkerRegister";
import { ReactNode } from "react";

export const metadata = {
  title: "Caméo Crypté App",
  description: "Recover your crypto with biometric liveness and guardians.",
};

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-primary text-text-200 relative overflow-x-hidden">
        <ParticleBackground />
        <div className="grain-overlay" />
        <ServiceWorkerRegister />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}