const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      title: ['Iceberg'],
      subtitle: ['Iceland'],
    },
    flex: {
      2: '2 2 0%',
    },
    extend: {
      colors: {
        gray: colors.warmGray,
        teal: {
          ...colors.teal,
          primary: '#77FFFF',
        },
        pink: {
          ...colors.pink,
          primary: '#F155FF',
        },
      },
      width: {
        fit: 'fit-content',
      },
      dropShadow: {
        brand: 'drop-shadow(-3px 3px 5px rgba(241,85,255, 0.8)) drop-shadow(-3px 3px 5px rgba(119,255,255, 0.8))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
