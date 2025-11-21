"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Global error boundary for the marketing site.
 * Displays a user friendly message and navigates back to home after
 * a short delay.
 */
export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  const router = useRouter();
  useEffect(() => {
    // Redirect back home after 5 seconds
    const id = setTimeout(() => {
      router.replace("/");
    }, 5000);
    return () => clearTimeout(id);
  }, [router]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <h1 className="text-3xl font-heading text-accent mb-4">Something went wrong</h1>
      <p className="text-text-200 mb-4">
        An unexpected error occurred. We’re redirecting you back to safety.
      </p>
      <p className="text-sm text-text-200">
        Error reference: {error.digest || error.message}
      </p>
    </div>
  );
}