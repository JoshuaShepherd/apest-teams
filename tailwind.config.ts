import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-body)', 'Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['var(--font-heading)', 'Newsreader', 'ui-serif', 'Georgia', 'serif'],
        serif: ['var(--font-heading)', 'Newsreader', 'ui-serif', 'Georgia', 'serif'],
        reader: ['var(--font-reader)', 'Manrope', 'ui-sans-serif', 'sans-serif'],
        mono: [
          'var(--font-mono)',
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'monospace',
        ],
      },
      borderRadius: {
        button: 'var(--radius-button)',
        card: 'var(--radius-card)',
        panel: 'var(--radius-panel)',
        pill: 'var(--radius-pill)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        nav: 'var(--shadow-nav)',
        tile: 'var(--shadow-tile)',
        'primary-glow': 'var(--shadow-primary-glow)',
        'primary-glow-md': 'var(--shadow-primary-glow-md)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        surface: {
          DEFAULT: 'hsl(var(--surface))',
          warm: 'hsl(var(--surface-warm))',
          panel: 'hsl(var(--surface-panel))',
          raised: 'hsl(var(--surface-raised))',
          base: 'hsl(var(--background))',
          subtle: 'hsl(var(--surface-container-low, var(--muted)))',
          muted: 'hsl(var(--muted))',
          border: 'hsl(var(--border-rule))',
        },
        ink: {
          primary: 'hsl(var(--foreground))',
          secondary: 'hsl(var(--reader-ink-soft, var(--muted-foreground)))',
          tertiary: 'hsl(var(--muted-subtle, var(--muted-foreground)))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          container: 'hsl(var(--primary-container))',
          hover: 'hsl(var(--primary-hover))',
          soft: 'var(--primary-soft)',
          line: 'var(--primary-line)',
          lift: 'var(--primary-lift)',
        },
        clay: {
          DEFAULT: 'hsl(var(--clay))',
          foreground: 'hsl(var(--clay-foreground))',
          line: 'var(--clay-line)',
          soft: 'var(--clay-soft)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
          subtle: 'hsl(var(--muted-subtle))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        border: {
          DEFAULT: 'hsl(var(--border))',
          soft: 'hsl(var(--border-soft))',
          rule: 'hsl(var(--border-rule))',
          faint: 'hsl(var(--border-faint))',
        },
        // Fivefold APEST Palette harmonized with Alan's Plum & Clay
        apostle: {
          DEFAULT: '#881337', // Deep rose-900 / wine
          light: '#ffe4e6',
          dark: '#4c0519',
        },
        prophet: {
          DEFAULT: 'hsl(var(--primary))', // Alan's Amethyst Plum is the Prophet signature!
          light: 'hsl(var(--accent))',
          dark: 'hsl(var(--primary-hover))',
        },
        evangelist: {
          DEFAULT: 'hsl(var(--clay))', // Alan's Ochre Clay is the Evangelist signature!
          light: '#fef3c7',
          dark: '#78350f',
        },
        shepherd: {
          DEFAULT: '#065f46', // Deep emerald-800
          light: '#d1fae5',
          dark: '#022c22',
        },
        teacher: {
          DEFAULT: '#075985', // Deep sky-800 / navy
          light: '#e0f2fe',
          dark: '#0c4a6e',
        },
      },
    },
  },
  plugins: [],
};

export default config;
