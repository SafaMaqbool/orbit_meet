import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        dark: {
          11: '#f6f6f6',
          10: '#e7e7e7',
          9: '#d1d1d1',
          8: '#b0b0b0',
          7: '#888888',
          6: '#6d6d6d',
          5: '#5d5d5d',
          4: '#4f4f4f',
          3: '#454545',
          2: '#3d3d3d',
          1: '#171717',
        },

        blue: {
          1: '#00ABEE',
        },
        sky: {
          1: '#C9DDFF',
          2: '#ECF0FF',
          3: '#F5FCFF',
        },
        orange: {
          1: '#FF742E',
        },
        purple: {
          1: '#830EF9',
        },
        yellow: {
          1: '#FBC332',
        },
        green: {
          1: '#8EDB23',
        },
        atlantis: {
        11: '#f7fde8',
        10: '#eafacd',
        9: '#d6f4a2',
        8: '#b9eb6b',
        7: '#9ddd3e',
        6: '#8edb23',
        5: '#619b15',
        4: '#4a7714',
        3: '#3c5e16',
        2: '#355017',
        1: '#192c07',
    },
    
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        hero: "url('/images/hero-background.png')",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;