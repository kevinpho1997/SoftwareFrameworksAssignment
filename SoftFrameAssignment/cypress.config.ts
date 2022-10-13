import { defineConfig } from 'cypress'

export default defineConfig({
  
  e2e: {
    'baseUrl': 'http://localhost:4200',
    supportFile: false,
    // setupNodeEvents(on, config) {
    //   require("cypress-localstorage-commands/plugin")(on, config);
    //   return config;
    // }
  },
  
  
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts'
  }
  
})
