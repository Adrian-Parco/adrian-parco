/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        mainWhite: '#F4F4F2',
        mainGray: '#7F7B82',
        mainYellow: '#FFC800',
        mainTomato: '#F06449'
      }
    },
  },
  plugins: [],
}