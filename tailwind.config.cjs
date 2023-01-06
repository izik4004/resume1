/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#A6BCFA',
        // light: '#BDBDBD',
        // blue: '#3341C1',
        // grey: '#F2F2F2',
        // // grey: '#F5F5F5',
        
      },
    },
  },
  plugins: [],
}