// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'google',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'semi': ['error', 'never'],
    'no-var': 'error',
    'new-cap': ['error', { 'capIsNew': false }],
    'comma-dangle': ['error', 'never']
  }
}
