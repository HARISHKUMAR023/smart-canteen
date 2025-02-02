/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}','./ui/**/*.{js,jsx,ts,tsx}','./pages/**/*.{js,jsx,ts,tsx}'], 
  theme: {
    extend: {
      colors: {
        'primary': '#FF4500',
        'secondary': '#fff',
      },
    },
  },
  plugins: [],
}

