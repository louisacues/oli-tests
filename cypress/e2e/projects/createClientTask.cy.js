import { login } from '../../utils/helpers/login'
import { goToHomePage } from '../../utils/helpers/goToHomePage'
import { goToProjectPage } from '../../utils/helpers/goToProjectPage'

describe('Go to Projects Page', () => {
  beforeEach(() => {
    goToHomePage()
    login()
  })
  
  it('should be able to see Dashboard', () => {
    const dashboardElement = cy.get('body').find('h2.text-xl.font-semibold')
    dashboardElement.should('contain', 'Dashboard')
  })

  it('should be able to see Projects', () => {
    goToProjectPage()
    const projectHeaderElement = cy.get('body').find('h2.text-xl.font-semibold')
    projectHeaderElement.should('contain', 'Projects')
  })
  it('should be able to see Client Tasks', () => {
    goToProjectPage()
    cy.wait(3000)
    const projectGetToClientTask = cy.get('div.flex.flex-col.w-full')
    projectGetToClientTask.contains('Anthony Corp').click()
    
    
    const projectHeaderElement = cy.get('body').find('h1.text-base.font-semibold.text-gray-900').first()
    projectHeaderElement.should('contain', 'Client Tasks')   
  })

  it('add client task, details and comment, and delete client tasks', () => {
    goToProjectPage()
    cy.wait(2000)
    const projectGetToClientTask = cy.get('div.flex.flex-col.w-full')
    projectGetToClientTask.contains('Anthony Corp').click()
    
    const projectLinkToClientTask = cy.get('.flex.bg-white.shadow-bottom-blue')
    projectLinkToClientTask.within(() =>{
      cy.get('a').contains('Client Task').click()
    })
    cy.wait(3000)
    const addTaskButton = cy.contains('button', 'Add Task')
    addTaskButton.click()

    const inputField = cy.get('#newTaskField')
    inputField.type('Adding Client Task')

    const addTask = cy.contains('button', 'Add')
    addTask.click()
    
    cy.wait(500)
    
    const descriptionField = cy.get('textarea.ring-2')
    descriptionField.click()

    const inputDescription = cy.get('textarea.ring-2')
    inputDescription.type('sampleee')

    const descriptionFieldCheckButton =cy.get('.absolute.bottom-2.right-2.space-x-1')
    descriptionFieldCheckButton.within(()=>{
      cy.get('button').eq(1).click()
    })
    cy.wait(3000)

    const commentField = cy.get('.ql-editor.ql-blank:last')
    commentField.type('a comment for the sample task')

    const addComment =cy.get('div.relative > button').contains('COMMENT')
    addComment.click()
    cy.wait(3000)
    const deleteClientTask = cy.contains('button','Delete')
    deleteClientTask.click()

    const deletingConfirmation = cy.get('div.flex.justify-center.items-center.space-x-4')
    deletingConfirmation.within(()=>{
        cy.get('button').eq(1).click()
      })
  })
  
})