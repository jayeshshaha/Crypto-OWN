/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        cGreen:"#00df9a",
        cBlue:'#017BFE',
        cGray:"#6C757D",
        cRed:'#DC3444',
        cYellow:'#FFC007',
        lightBlack:'#343A3F',
        lightWhite:'#F8F9FA',
        cBlack:"#000300",
      }
    },
  },
  plugins: [],
}

