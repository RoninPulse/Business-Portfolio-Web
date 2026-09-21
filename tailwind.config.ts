import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        rp: {
          black: '#000000',
          ink: '#0A0A0C',
          surface: '#121216',
          'surface-2': '#1A1A20',
          border: '#26262E',
          red: '#E0053F',
          'red-bright': '#FF2D5F',
          'red-deep': '#8B0A24',
          'red-dark': '#4A0613',
          white: '#F7EEF0',
          'grey-100': '#D9D6D8',
          'grey-300': '#A1A0A6',
          'grey-500': '#6B6A72',
        },
      },
      fontFamily: {
        display: ['var(--font-archivo)', 'sans-serif'],
        accent: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      boxShadow: {
        'rp-glow': '0 0 25px rgba(224, 5, 63, 0.45)',
        'rp-glow-lg': '0 0 50px rgba(224, 5, 63, 0.6)',
        'rp-glow-sm': '0 0 12px rgba(224, 5, 63, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ripple-expand': 'ripple 3s ease-out infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
      },
      keyframes: {
        ripple: {
          '0%': { transform: 'scale(0.8)', opacity: '0.9' },
          '100%': { transform: 'scale(2.5)', opacity: '0' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.08)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
