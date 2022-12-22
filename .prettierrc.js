/** @type {import('prettier').Config} */
module.exports = {
  trailingComma: 'none',
  tabWidth: 2,
  semi: false,
  printWidth: 80,
  singleQuote: true,
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  tailwindConfig: './tailwind.config.js'
}
