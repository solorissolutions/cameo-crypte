const defaultTheme = require('tailwindcss/defaultTheme');

/**
 * Tailwind configuration for Caméo Crypté.
 *
 * The palette and typography strictly follow the
 * luxurious cyber‑noir theme described in the project
 * requirements. Colours are defined as CSS variables
 * so that they can be easily consumed in component code
 * and customised by postprocessing effects (e.g. glow
 * gradients) without modifying the core Tailwind theme.
 */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Global tokens based on the provided palette.
        primary: '#000000',
        secondary: '#0A0A0A',
        accent: '#FF4700',
        violet: '#8B00FF',
        success: '#00FF9F',
        text: {
          100: '#E4E4E4',
          200: '#AAAAAA',
          hero: '#FFFFFF',
          body: '#AAAAAA',
        },
      },
      fontFamily: {
        heading: [
          'Aeonik Pro',
          'Neue Montreal Medium',
          ...defaultTheme.fontFamily.sans,
        ],
        body: [
          'Satoshi',
          'General Sans',
          'Inter',
          ...defaultTheme.fontFamily.sans,
        ],
        code: [
          'JetBrains Mono',
          'PP Mori',
          ...defaultTheme.fontFamily.mono,
        ],
      },
      backgroundImage: {
        'gradient-fire-violet': 'linear-gradient(135deg, #FF4700, #8B00FF)',
      },
      boxShadow: {
        glow: '0 0 8px 4px rgba(255, 71, 0, 0.5), 0 0 16px 8px rgba(139, 0, 255, 0.4)',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        spin: 'spin 1s linear infinite',
        'spin-slow': 'spin 4s linear infinite',
      },
    },
  },
  plugins: [],
};