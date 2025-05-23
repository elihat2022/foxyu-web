/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Azul vibrante para FoxyVerbs
        secondary: '#FBBF24', // Amarillo para CTAs
      },
    },
  },
  plugins: [],
};