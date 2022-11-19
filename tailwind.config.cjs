/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#460165",
          default: "#550065",
          light: "#702A7D"
        },
        gray: {
          50: "#F5F7F9",
        }
      },
    },
  },
  plugins: [],
}
