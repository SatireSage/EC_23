/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'zoom-in': {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1'}
        }
      },
      animation: {
        'zoom-in': 'zoom-in 500ms ease-in-out'
      }
    },
  },
  plugins: [],
}

