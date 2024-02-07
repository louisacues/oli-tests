import { login } from '../../utils/helpers/login'
import { goToHomePage } from '../../utils/helpers/goToHomePage'

describe('Go to Projects Page', () => {
  beforeEach(goToHomePage)
  it('login to firm and goToHompage', () => {
    login()
  })

  it('should be able add new project', () => {
    login()
    cy.get('.space-x-3 > .group').click();
    cy.get('input[placeholder="Search Client"]').type('padua corp llc (padua corp llc){enter}')
    cy.get('#projectName').type('Sample Project')
    cy.get('.justify-end > .group').click()
    cy.wait(3000)
  })
  
  it('should be able to delete the added project', () => {
    login()
    const projectHrefElement = cy.get('body').find('a[href="/projects"]')
    projectHrefElement.click()
    cy.wait(2000)
    const projectHeaderElement = cy.get('body').find('h2.text-xl.font-semibold')
    projectHeaderElement.should('contain', 'Projects')

    cy.get('input[placeholder="Search by Client Name or Project Title"]').type('Sample Project')
    cy.get(':nth-child(3) > .col-span-4').click()
    cy.get('button[id="headlessui-menu-button-:r9:"]').should('exist').click(); 
    cy.get('a[id="headlessui-menu-item-:rd:"]').click(); 
    cy.get('button[type="button"][class*="bg-red"]').contains("Yes, I'm sure").click();
    cy.wait(2000)
  })
  
  it('should be able to delete the deleted project on the recycle bin', () => {
    login()
    const projectHrefElement = cy.get('body').find('a[href="/recycle-bin"]')
    projectHrefElement.click()
    cy.wait(2000)
    const projectHeaderElement = cy.get('body').find('h2.text-xl.font-semibold')
    projectHeaderElement.should('contain', 'Recycle Bin')

    cy.get('#input-search').type('Sample Project')
    /* cy.get('input[type="checkbox"]').click() */
    
  })
})