/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff5733',     // your orange/red button color
        'gray-bg': '#f8fafc',
      },
    },
  },
  plugins: [],
}
