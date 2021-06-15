module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  plugins: [
    'promise'
  ],
  extends: [
    'airbnb-base',
    'plugin:promise/recommended'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'linebreak-style': 'off',
    'no-multi-str': 'off',
    'no-nested-ternary': 'off',
    'no-trailing-spaces': 'off',
    'arrow-body-style' : 'off',
    'arrow-parens' : 'off',
    'exclude-class-expressions' : 'off',
    'class-methods-use-this' : 'off',
    'max-classes-per-file' : ['error', 5],
    'max-len' : ['error', {
      'code': 400,
      'comments': 400,
    }],
  }
};
