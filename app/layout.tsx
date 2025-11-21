import "./globals.css";
import "./fonts.css";

import { ParticleBackground } from "../components/three/ParticleBackground";
import { ServiceWorkerRegister } from "../components/ServiceWorkerRegister";
import { ReactNode } from "react";

export const metadata = {
  title: "Caméo Crypté",
  description:
    "Caméo Crypté – The only crypto recovery that requires you to prove you're still the same human.",
  openGraph: {
    title: "Caméo Crypté",
    description:
      "The only recovery that requires you to prove you're still the same human.",
    url: "https://cameocrypte.xyz",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-primary text-text-200 relative overflow-x-hidden">
        {/* Particle background as decoration */}
        <ParticleBackground />
        {/* Grain overlay on top of particles to add texture */}
        <div className="grain-overlay" />
        {/* Register the service worker for PWA */}
        <ServiceWorkerRegister />
        {children}
      </body>
    </html>
  );
}