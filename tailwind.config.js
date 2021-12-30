module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    backdropFilter: {
      none: 'none',
      blur: 'blur(20px)'
    }
  },
  plugins: [require('tailwindcss-filters')]
}
