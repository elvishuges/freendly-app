module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  setupFiles: ['./__tests__/setup.js'],
  testMatch: [
    '**/__tests__/*.spec.(js|jsx|ts|tsx)'
  ],
  testURL: 'http://localhost/',// add this. see more //https://github.com/vuejs/vue-test-utils/issues/1459
}
