describe('login tests', () => {
  beforeEach(() =>{
    cy.viewport(1024, 768)
    cy.visit('app-dev.oli.com.ph')
  })
  it('checks sign up', () => {
    cy.getDataClass('font-medium text-oli-blue-1 hover:underline').should('contain', 'Sign up')
  })
  it('login correctly', () => {
    cy.getDataID('email').type("kimpadua09@gmail.com")
    cy.getDataID('password').type("password123!!!")
    cy.get('button[type=submit]').click()
  });
})