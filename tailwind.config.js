/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark1: '#2E2E2E', 
        dark2: '#363636',
        darkpink: '#D62952',
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'], 
    },
    
  },
  plugins: [],
}

