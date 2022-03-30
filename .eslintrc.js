module.exports = {
  extends: ['airbnb/base', 'airbnb-typescript/base'],
  rules: {
    'arrow-parens': 0,
    'comma-dangle': 0,
    'func-names': 0,
    'no-func-assign': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
    'no-use-before-define': 0,
  },
  env: {
    browser: true,
  },
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
    project: './tsconfig.json',
  },
};
