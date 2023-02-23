/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-light': "url('/src/assets/images/bg-mobile-light.jpg')",
        'mobile-dark': "url('/src/assets/images/bg-mobile-dark.jpg')",
        'desktop-light': "url('/src/assets/images/bg-desktop-light.jpg')",
        'desktop-dark': "url('/src/assets/images/bg-desktop-dark.jpg')",
      }
    },
    fontFamily: {
      'josefin': ['Josefin Sans', 'sans-serif']
    },
  },
  plugins: [],
  darkMode: 'class',
}
