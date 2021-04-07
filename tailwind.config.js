module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: ['./public/**/*.html', './src/**/*.vue'],
  },
  theme: {
    extend: {
      fontFamily: {
      },
      screens: {
        dark: {
          raw: '(prefers-color-scheme: dark)',
        },
        mobileOnly: '@media screen and (max-width: 768px)',
      },
      colors: {
        border: {
          input: '#cbd5e0',
        },
        body: {
          light: '#f7fafc',
        },
      },
      inset: {
        '5': '0.125rem',
      },
    },
  },
  variants: {},
  plugins: [],
}
