module.exports = {
  extends: ['plugin:import/typescript', 'next/core-web-vitals'],
  overrides: [
    {
      files: ['*.+(ts|tsx)'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint/eslint-plugin'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        '@next/next/no-img-element': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off'
      }
    }
  ]
}
