module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple auto column grid
        auto: 'repeat(auto-fill, minmax(250px, 1fr))'
      },
      screens: {
        mob: { max: '768px' }
      // => @media (max-width: 768px) { ... }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
