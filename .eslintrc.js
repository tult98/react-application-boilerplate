module.exports = {
  parser: '@babel/eslint-parser',
  plugins: ['@babel'],
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  rules: {
    'no-unused-vars': 2,
  },
}
