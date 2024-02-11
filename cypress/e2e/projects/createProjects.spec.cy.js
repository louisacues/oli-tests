import { login } from '../../utils/helpers/login'
import { goToHomePage } from '../../utils/helpers/goToHomePage'
import { projectName, projectClientName } from './constants'

describe('Go to Projects Page', () => {
  beforeEach(goToHomePage)
  it('login to firm and goToHomepage', () => {
    login()
  })

  it('should be able add new project', () => {
    login()
    const projectHeaderElement = cy.get('body').find('h2.text-xl.font-semibold')
    projectHeaderElement.should('contain', 'Dashboard')

    const buttonHeaderElement = cy.get('body').find('.space-x-3 > .group')
    buttonHeaderElement.should('contain', 'Create Project').click()

    const searchClientElement = cy.get('body').find('input[placeholder="Search Client"]')
    searchClientElement.type(projectClientName)

    const projectNameElement = cy.get('body').find('#projectName')
    projectNameElement.type(projectName)

    const submitElement = cy.get('body').find('.justify-end > .group')
    submitElement.click()
  })
})