/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1E1E1E',
        dark1: '#2E2E2E', 
        dark2: '#363636',
        darkpink: '#D62952',
        niceblue:'#3498DB',
        niceyellow:'#feca57',
        nicewhite:'#f5f5f5',
        darkwhite:'#9b9b9b ',
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'], 
    },
    
  },
  plugins: [],
}

