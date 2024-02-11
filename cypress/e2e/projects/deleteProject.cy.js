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
    cy.wait(2000)
    const projectHeaderElement = cy.get('body').find('h2.text-xl.font-semibold')
    projectHeaderElement.should('contain', 'Projects')

    const searchClientElement = cy.get('body').find('input[placeholder="Search by Client Name or Project Title"]')
    searchClientElement.type(projectName)
    /* cy.get('input[placeholder="Search by Client Name or Project Title"]').type(projectName) */

    const projectTask = cy.get('.max-w-full')
      projectTask.within(() => {
        cy.contains(projectName).click()
      })    
    /* cy.get(':nth-child(3) > .col-span-4').then(element => element.click()) */
    
    const manageButton = cy.contains('button', 'Manage')
    manageButton.click()
    /* cy.contains('button','Manage').click();  */

    const deleteButton = cy.contains('a', 'Delete Project')
    deleteButton.click()
    /* cy.contains('a','Delete Project').click();  */

    const confirmationButton = cy.contains('button', "Yes, I'm sure")
    confirmationButton.click()
    /* cy.get('button[type="button"][class*="bg-red"]').contains("Yes, I'm sure").click(); */ 
    
  })

})