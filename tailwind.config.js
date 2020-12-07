module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  important: false,
  purge: [],
  theme: {
    fontFamily: { sans: ['Raleway'] },

    extend: {
      colors: {
        primary: '#1E213A',
        second: '#100E1D',
        variants: '#FFEC65',
        fontC: '#E7E7EB',
        fontD: '#A09FB1',
      },
      fontSize: {
        '9xl': '9rem',
      },
      maxWidth: {
        10: '7rem',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '2days': 'repeat(2, minmax(0, 120px))',
        '3days': 'repeat(3, minmax(0, 120px))',
      },
      gridTemplateRows: {
        // Simple 8 row grid
        2: 'repeat(2, minmax(0, 160px))',
      },
      gridAutoRows: {
        min: 'minmax(0, 160px)',
      },
    },
  },
  variants: {},
  plugins: [],
};
