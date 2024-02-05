export function login() {
  cy.get('#email').type('isipjazmine1@gmail.com')
  cy.get('#password').type('AKV6fAXTrUt8')
  cy.get('.group').click()
}