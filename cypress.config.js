const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 2010,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 30000,
  chromeWebSecurity: false,
  video: true,
  screenshotOnRunFailure: true,
  e2e: {
    specPattern: "**/*.spec.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      env:{
        hideXhr: true
        snapshotOnly: true
      }
    return config;
    },
  },
});
