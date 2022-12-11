const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      zIndex: {
        background: '-5',
        behind: '-1'
      },
      fontFamily: {
        display: ['var(--font-nunito)', ...fontFamily.sans],
        body: ['var(--font-inter)', ...fontFamily.sans]
      },
      colors: {
        'eletric-pink': '#F42A8B',
        'deep-lilac': '#9D4CCE',
        'french-blue': '#1F89DB',
        'chinese-black': '#13111C',
        'flash-white': '#F1F1F2',
        'lavander-gray': '#C4C1D4',
        'light-slate': '#777F9B'
      },
      maxHeight: {
        112: '28rem',
        128: '32rem',
        148: '38rem',
        170: '48rem'
      },
      height: {
        'screen-4/6': '66.6vh',
        'screen-5/6': '83.3vh',
        112: '28rem',
        128: '32rem',
        148: '38rem',
        170: '48rem'
      },
      gridTemplateColumns: {
        '3/2': '2fr 1fr'
      }
    }
  },
  plugins: [
    function ({ addBase, theme }) {
      function extractColorVars(colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey]
          const cssVariable =
            colorKey === 'DEFAULT'
              ? `--color${colorGroup}`
              : `--color${colorGroup}-${colorKey}`

          const newVars =
            typeof value === 'string'
              ? { [cssVariable]: value }
              : extractColorVars(value, `-${colorKey}`)

          return { ...vars, ...newVars }
        }, {})
      }

      addBase({
        ':root': extractColorVars(theme('colors'))
      })
    }
  ]
}
