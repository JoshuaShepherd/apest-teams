import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          base: '#fbfbf9',
          card: '#ffffff',
          subtle: '#f4f4f0',
          muted: '#e7e7e2',
          border: '#dcdcd6',
        },
        ink: {
          primary: '#111827',
          secondary: '#4b5563',
          tertiary: '#9ca3af',
        },
        apostle: {
          DEFAULT: '#9f1239',
          light: '#ffe4e6',
          dark: '#881337',
        },
        prophet: {
          DEFAULT: '#4338ca',
          light: '#e0e7ff',
          dark: '#3730a3',
        },
        evangelist: {
          DEFAULT: '#d97706',
          light: '#fef3c7',
          dark: '#b45309',
        },
        shepherd: {
          DEFAULT: '#047857',
          light: '#d1fae5',
          dark: '#065f46',
        },
        teacher: {
          DEFAULT: '#0369a1',
          light: '#e0f2fe',
          dark: '#075985',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
