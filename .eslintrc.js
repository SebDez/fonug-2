module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    jest: true,
    node: true
  },
  'extends': [
    'standard',
    'plugin:vue/recommended',
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'vue/name-property-casing': [
      'error',
      'kebab-case'
    ],
    'vue/max-attributes-per-line': [
      3,
      {
        singleline: 3,
        multiline: {
          max: 3,
          allowFirstLine: true
        }
      }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
