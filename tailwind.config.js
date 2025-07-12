/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Azul vibrante para FoxyU - educación y confianza
        secondary: '#FBBF24', // Amarillo para CTAs - energía y motivación
      },
    },
  },
  plugins: [],
};