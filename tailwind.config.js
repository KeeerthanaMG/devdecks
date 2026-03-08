/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'electric-orange': '#FF5A1F',
        'acid-yellow': '#F7FF3C',
        'off-white': '#F8F8F8',
        'black': '#111111',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'neo': '8px 8px 0px 0px rgba(17,17,17,1)',
        'neo-sm': '4px 4px 0px 0px rgba(17,17,17,1)',
        'neo-hover': '2px 2px 0px 0px rgba(17,17,17,1)',
      },
      translate: {
        'neo': '6px',
        'neo-sm': '2px',
      }
    },
  },
  plugins: [],
}
