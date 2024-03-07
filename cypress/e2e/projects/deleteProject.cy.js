import { login } from '../../utils/helpers/login'
import { goToHomePage } from '../../utils/helpers/goToHomePage'
import { projectName } from './constants'

describe('Go to Projects', () => {
  beforeEach(goToHomePage)
  it('login to firm and goToHomepage', () => {
    login()
  })
  it('should be able to delete the added project',  () => {
    login()
    const projectHrefElement = cy.get('body').find('a[href="/projects"]')
    projectHrefElement.click()
    
    const projectHeaderElement = cy.get('body').find('h2.text-xl.font-semibold')
    projectHeaderElement.should('contain', 'Projects')
    
    cy.url().should('include','projects')

    const searchClientInProjectElement = cy.get('body').find('input[placeholder="Search by Client Name or Project Title"]')
    searchClientInProjectElement.should('exist')
    searchClientInProjectElement.type(projectName)

    const projectTask = cy.get('.max-w-full')
      projectTask.within(() => {
        cy.contains(projectName).click()
      })    

    const manageButton = cy.contains('button', 'Manage')
    manageButton.should('contain', 'Manage')
    manageButton.click()

    const deleteButton = cy.contains('a', 'Delete Project')
    deleteButton.should('contain', 'Delete Project')
    deleteButton.click()

    const confirmationButton = cy.contains('button', "Yes, I'm sure")
    confirmationButton.should('exist').click()
  })

})