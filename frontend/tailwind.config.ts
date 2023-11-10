import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#140F33',
        white: '#FFFFFF',
        green: {
          50: '#f0f9f4',
          100: '#d9f0eb',
          200: '#afd7cd',
          300: '#85beae',
          400: '#5ba58f',
          500: '#88A788', // figma 에서 사용하던 기본 색
          600: '#34806a',
          700: '#276254',
          800: '#1a473e',
          900: '#0d231c',
        },
        gray: '#D9D9D9',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
