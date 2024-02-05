const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //baseUrl: 'https://app-dev.oli.com.ph',
    
    experimentalStudio: true
  },
});
