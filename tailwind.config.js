/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        portfolio: '#DCA1A1',
        'portfolio-light': '#e5c5c5',
        white: '#FFF',
        gray : '#d3d1d1',
        'dark-gray':'#434242'
      },
    },
  },
  plugins: [],
}