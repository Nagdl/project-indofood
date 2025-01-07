/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        biruIndofood: '#00529d',
      },
      colors: {
        FontbiruIndofood: '#00529d',
      },
      width:{
        1140: '1140px',
        960: '960px',
      }
    },
  },
  plugins: [],
}

