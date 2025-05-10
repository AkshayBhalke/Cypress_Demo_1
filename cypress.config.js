const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  retries: {
    // Configure retry attempts for `cypress run`. Default is 0
    runMode: 2,
    // Configure retry attempts for `cypress open`. Default is 0
    openMode: 0
  },
  e2e: {

    baseUrl: 'https://www.google.com/',
    username: 'otdev',
    password: 'vocera_16',
    apiURL: 'https://www.google.com/',
    specPattern: [
      '**/*.cy.js'
    ]
  }
});