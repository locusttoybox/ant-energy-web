/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montsserat: ['"Montserrat"', 'sans-serif'],
      },
    },
    colors: {
      background: 'var(--background)',
      foreground: 'var(--foreground)',
      primary: 'var(--primary)',
      secondary: 'var(--secondary)',
      accent: 'var(--accent)',
    },
    fontSize: {
      '6xl': [
        '3.75rem',
        {
          lineHeight: '4.25rem',
          fontWeight: '700',
        },
      ],
      '5xl': [
        '3rem',
        {
          lineHeight: '3.5rem',
          fontWeight: '700',
        },
      ],
      '4xl': [
        '2.25rem',
        {
          lineHeight: '3.25rem',
          fontWeight: '700',
        },
      ],
      '3xl': [
        '1.875rem',
        {
          lineHeight: '2.5rem',
          fontWeight: '600',
        },
      ],
      '2xl': [
        '1.5rem',
        {
          lineHeight: '2rem',
          fontWeight: '500',
        },
      ],
      base: [
        '1rem',
        {
          lineHeight: '1.5rem',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        },
      ],
      secondary: [
        '1.25rem',
        {
          lineHeight: '1.75rem',
          letterSpacing: '-0.02em',
          fontWeight: '500',
        },
      ],
    },
  },
  plugins: [],
};
