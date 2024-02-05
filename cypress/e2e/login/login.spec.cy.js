import { login } from '../../utils/helpers/login'
import { goToHomePage } from '../../utils/helpers/goToHomePage'

describe('Oli Firm Login', () => {
  beforeEach(goToHomePage)
  it('login to firm and goToHompage', () => {
    login()
  })

  it('should be able to see Dashboard', () => {
    login()
    const dashboardElement = cy.get('body').find('h2.text-xl.font-semibold')
    dashboardElement.should('contain', 'Dashboard')
  })

  // cy.get(':nth-child(2) > :nth-child(2) > .text-sm > .text-oli-blue-1').click()
  // cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .inline-block > .text-oli-blue-1 > .text-sm').click()
  // cy.get('.space-x-2 > .text-gray-500').click()
  // cy.get('.pl-4 > .ring-1').type('note')
  // cy.get('.bg-oli-blue-4').click()
  
})