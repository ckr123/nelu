module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderColor: theme => ({
      'primary': '#d6c4ba'
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
