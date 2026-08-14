/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#F7D65A',
          500: '#F5CE46',
          600: '#D9B42C',
        },
        luxe: {
          bg: '#FAF9F5',
          footer: '#E8E6E1',
          black: '#111111',
          charcoal: '#1A1A1A',
          grey: '#707070',
          border: '#E2E0D9',
          gold: '#F5CE46',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
