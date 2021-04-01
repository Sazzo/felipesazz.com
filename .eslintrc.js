module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'eslint-config-prettier'
  ],
  plugins: [],
  // add your custom rules here
  rules: {}
}
