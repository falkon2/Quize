/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/*.{js,jsx}', './src/**/*.{js,jsx}'
  ],
  plugins: [
    require("daisyui")
  ],
}
