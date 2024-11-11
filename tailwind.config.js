/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: ["./src/**/*.{html,js}",flowbite.content()],
  theme: {
    extend: {
      colors:{
        'sage':'#E2F1E7'
      }
    }
  },
  plugins: [flowbite.plugin()],
}

