import { login } from '../../utils/helpers/login'
import { goToHomePage } from '../../utils/helpers/goToHomePage'
import { projectName, projectClientName } from './constants'

describe('Go to Recycle Bin', () => {
  beforeEach(goToHomePage)
  it('login to firm and goToHomepage', () => {
    login()
  })
it('should be able to delete the deleted project on the recycle bin', async () => {
    login()
    const projectHrefElement = cy.get('body').find('a[href="/recycle-bin"]')
    projectHrefElement.click()
    cy.wait(2000)
    const projectHeaderElement = cy.get('body').find('h2.text-xl.font-semibold')
    projectHeaderElement.should('contain', 'Recycle Bin')

    const recycleBinSearchElement = cy.get('body').find('#input-search')
    recycleBinSearchElement.type(projectName)
    /* cy.get('#input-search').type(projectName) */

    
    /* cy.get('input[type="checkbox"]').click() */
  })
})