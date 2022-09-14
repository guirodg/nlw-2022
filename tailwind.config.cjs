/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url('/backgound.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 16.08%, #43E7AD 33.94%, #E1D55D 55.57%)'
      }
    },
  },
  plugins: [],
}
