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
        // display: ['Nunito', 'ui-sans-serif', 'system-ui'],
        // body: ['Inter', 'ui-sans-serif', 'system-ui']
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
      height: {
        'screen-4/6': '66.6vh',
        'screen-5/6': '83.3vh'
      }
    }
  },
  plugins: []
}
