import { login } from '../../utils/helpers/login'
import { goToHomePage } from '../../utils/helpers/goToHomePage'

describe('Go to Projects Page', () => {
  beforeEach(goToHomePage)
  it('login to firm and goToHomepage', () => {
    login()
  })

  it('should be able to see Dashboard', () => {
    login()
    const dashboardElement = cy.get('body').find('h2.text-xl.font-semibold')
    dashboardElement.should('contain', 'Dashboard')
  })

  it('should be able to see Projects', () => {
    login()
    const projectHrefElement = cy.get('body').find('a[href="/projects"]')
    projectHrefElement.click()
    
    const projectHeaderElement = cy.get('body').find('h2.text-xl.font-semibold')
    projectHeaderElement.should('contain', 'Projects')
  })
})