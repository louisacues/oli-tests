export function goToHomePage(){
  cy.visit('https://app-dev.oli.com.ph')
  cy.viewport(1440,900)
}