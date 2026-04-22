/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        accent: {
          50: '#eefbf9',
          100: '#d5f5f0',
          500: '#0f766e',
          600: '#0d615b',
          900: '#123f3a',
        },
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        rise: 'rise 700ms ease-out forwards',
      },
    },
  },
  plugins: [],
}