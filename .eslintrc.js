module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'block-spacing': ['error', 'always'],
    'comma-dangle': ['error', 'only-multiline'],
    indent: 'off', // https://github.com/eslint/eslint/issues/13956
    '@typescript-eslint/indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'react/react-in-jsx-scope': 'off', // can ignore from react version 17
    'react/prop-types': 'off' // https://stackoverflow.com/a/64707357/5225993
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      plugins: [
        '@typescript-eslint',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
      },
      rules: {
      },
    },
  ],
};