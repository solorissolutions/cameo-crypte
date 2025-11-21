"use client";

import { useEffect } from 'react';

/**
 * Registers the service worker when running in the browser. The SW
 * will cache the app shell and enable offline access. It gracefully
 * handles environments where service workers are unavailable.
 */
export function ServiceWorkerRegister() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .catch((err) => console.error('Service worker registration failed', err));
    }
  }, []);
  return null;
}