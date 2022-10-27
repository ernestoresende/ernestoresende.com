module.exports = {
  extends: [
    'plugin:astro/recommended',
    'plugin:astro/jsx-a11y-recommended',
    'plugin:import/errors',
    'plugin:import/typescript'
  ],
  env: {
    browser: true,
    node: true
  },
  overrides: [
    {
      files: ['*.+(ts|tsx)'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint/eslint-plugin'],
      extends: ['plugin:@typescript-eslint/recommended']
    },
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      }
    }
  ]
}
