import { login } from '../../utils/helpers/login'
import { goToHomePage } from '../../utils/helpers/goToHomePage'
import { projectName, projectClientName, createProjectHeader } from './constants'

describe('Go to Projects Page and', () => {
  beforeEach(goToHomePage)
  it('login to firm and goToHomepage', () => {
    login()
  })

  it('should be able add new project', () => {
    login()
    const projectHeaderElement = cy.get('body').find('h2.text-xl.font-semibold')
    projectHeaderElement.should('contain', 'Dashboard')

    const buttonHeaderElement = cy.get('body').find('.space-x-3 > .group')
    buttonHeaderElement.should('contain', createProjectHeader).click()

    const modalHeaderElement = cy.get('h1.text-lg.font-semibold')
    modalHeaderElement.should('contain', createProjectHeader)

    const clientTitleElement = cy.contains('label', 'Client')
    clientTitleElement.should('contain', 'Client')

    const searchClientElement = cy.get('body').find('input[placeholder="Search Client"]')
    searchClientElement.should('exist')
    searchClientElement.type(projectClientName)

    const projectNameTitleElement = cy.contains('label', 'Project Name')
    projectNameTitleElement.should('contain', 'Project Name')

    const currentDate = new Date()
    const timestamp = `${currentDate.getFullYear()}/${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getDate().toString().padStart(2, '0')}_${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}.${currentDate.getSeconds().toString().padStart(2, '0')}`
    const uniqueProjectName = `${projectName}_${timestamp}`

    const projectNameElement = cy.get('#projectName')
    /* projectNameElement.should('exist') */
    projectNameElement.type(uniqueProjectName)
    projectNameElement.invoke('val').should('eq', uniqueProjectName)

    const submitElement = cy.get('body').find('.justify-end > .group')
    submitElement.should('exist')
    submitElement.click()
  })
})