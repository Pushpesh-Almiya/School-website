/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e0e6ed',
          100: '#b3bed0',
          200: '#8090b0',
          300: '#4d6290',
          400: '#1f366d',
          500: '#192d5b',
          600: '#14264b',
          700: '#0e1d39',
          800: '#081327',
          900: '#040918',
        },
      },
    },
  },
  plugins: [],
}

