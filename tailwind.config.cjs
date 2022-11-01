/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      zIndex: {
        'background': '-5',
        'behind': '-1',
      },
      fontFamily: {
        'display': ['Nunito', 'ui-sans-serif', 'system-ui'],
        'body': ['Inter', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        'eletric-pink': '#F42A8B',
        'deep-lilac': '#9D4CCE',
        'french-blue': '#1F89DB',
        'chinese-black': '#13111C',
        'flash-white': '#F1F1F2',
        'lavander-gray': '#C4C1D4',
        'light-slate': '#777F9B',
      }
    }
  },
  plugins: []
}
