import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // Scale down font sizes to 90% of default
    fontSize: {
      xs: ['0.675rem', { lineHeight: '0.9rem' }],      // was 0.75rem
      sm: ['0.7875rem', { lineHeight: '1.125rem' }],   // was 0.875rem
      base: ['0.9rem', { lineHeight: '1.35rem' }],     // was 1rem
      lg: ['1.0125rem', { lineHeight: '1.575rem' }],   // was 1.125rem
      xl: ['1.125rem', { lineHeight: '1.575rem' }],    // was 1.25rem
      '2xl': ['1.35rem', { lineHeight: '1.8rem' }],    // was 1.5rem
      '3xl': ['1.6875rem', { lineHeight: '2.025rem' }], // was 1.875rem
      '4xl': ['2.025rem', { lineHeight: '2.25rem' }],  // was 2.25rem
      '5xl': ['2.7rem', { lineHeight: '1' }],          // was 3rem
      '6xl': ['3.375rem', { lineHeight: '1' }],        // was 3.75rem
      '7xl': ['4.05rem', { lineHeight: '1' }],         // was 4.5rem
      '8xl': ['5.4rem', { lineHeight: '1' }],          // was 6rem
      '9xl': ['7.2rem', { lineHeight: '1' }],          // was 8rem
    },
    // Scale down spacing to 90% of default
    spacing: {
      px: '1px',
      0: '0',
      0.5: '0.1125rem',   // was 0.125rem
      1: '0.225rem',      // was 0.25rem
      1.5: '0.3375rem',   // was 0.375rem
      2: '0.45rem',       // was 0.5rem
      2.5: '0.5625rem',   // was 0.625rem
      3: '0.675rem',      // was 0.75rem
      3.5: '0.7875rem',   // was 0.875rem
      4: '0.9rem',        // was 1rem
      5: '1.125rem',      // was 1.25rem
      6: '1.35rem',       // was 1.5rem
      7: '1.575rem',      // was 1.75rem
      8: '1.8rem',        // was 2rem
      9: '2.025rem',      // was 2.25rem
      10: '2.25rem',      // was 2.5rem
      11: '2.475rem',     // was 2.75rem
      12: '2.7rem',       // was 3rem
      14: '3.15rem',      // was 3.5rem
      16: '3.6rem',       // was 4rem
      20: '4.5rem',       // was 5rem
      24: '5.4rem',       // was 6rem
      28: '6.3rem',       // was 7rem
      32: '7.2rem',       // was 8rem
      36: '8.1rem',       // was 9rem
      40: '9rem',         // was 10rem
      44: '9.9rem',       // was 11rem
      48: '10.8rem',      // was 12rem
      52: '11.7rem',      // was 13rem
      56: '12.6rem',      // was 14rem
      60: '13.5rem',      // was 15rem
      64: '14.4rem',      // was 16rem
      72: '16.2rem',      // was 18rem
      80: '18rem',        // was 20rem
      96: '21.6rem',      // was 24rem
    },
    extend: {
      colors: {
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        secondary: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
          950: '#500724',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        }
      },
      fontFamily: {
        sans: ['Sagitta Mont', 'Inter', 'system-ui', 'sans-serif'],
        sagittaMont: ['Sagitta Mont', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // Adjust max-width for containers to 90% scale
      maxWidth: {
        '7xl': '72rem',   // was 80rem - for container-custom
      },
    },
  },
  plugins: [],
}
export default config 