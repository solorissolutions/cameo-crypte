"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AppError({ error }: { error: Error & { digest?: string } }) {
  const router = useRouter();
  useEffect(() => {
    const id = setTimeout(() => {
      router.replace("/app");
    }, 5000);
    return () => clearTimeout(id);
  }, [router]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <h1 className="text-3xl font-heading text-accent mb-4">Error</h1>
      <p className="text-text-200 mb-4">An error occurred while using the app.</p>
      <p className="text-sm text-text-200">
        Error reference: {error.digest || error.message}
      </p>
    </div>
  );
}