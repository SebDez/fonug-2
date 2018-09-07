// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    jest: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: [
    'standard',
    'plugin:vue/recommended'
  ],
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    'vue/name-property-casing': ['error', 'kebab-case'],
    'vue/html-closing-bracket-newline': ['error', {
    //   'singleline': 'never',
    //   'multiline': 'always'
    }],
    "vue/max-attributes-per-line": [3, {
      "singleline": 3,
      "multiline": {
        "max": 3,
        "allowFirstLine": true
      }
    }]
  }
}
