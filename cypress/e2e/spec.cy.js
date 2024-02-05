describe('Oli Cypress', () => {
  beforeEach('login page', () => {
    cy.visit('https://app-dev.oli.com.ph')
    cy.viewport(1024, 693)
  })

  it('login', () => {
    cy.get('#email').type('isipjazmine1@gmail.com')
    cy.get('#password').type('AKV6fAXTrUt8')
    cy.get('.group').click()

    cy.get(':nth-child(2) > :nth-child(2) > .text-sm > .text-oli-blue-1').click()
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .inline-block > .text-oli-blue-1 > .text-sm').click()
    cy.get('.space-x-2 > .text-gray-500').click()
    cy.get('.pl-4 > .ring-1').type('note')
    cy.get('.bg-oli-blue-4').click()
  })
  
})