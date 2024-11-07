/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode:"class",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Merriweather', 'serif'], // Merriweather fontunu ekliyoruz
      },
    },
  },
  plugins: [],
}
