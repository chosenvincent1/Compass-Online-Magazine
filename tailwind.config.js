/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif'],
        'Chonburi': ['Chonburi', 'sans-serif']
      }
    },
  },
  plugins: [],
}

