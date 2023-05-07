/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js,jsx}", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
}

