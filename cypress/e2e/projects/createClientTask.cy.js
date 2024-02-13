import { login } from '../../utils/helpers/login'
import { goToHomePage } from '../../utils/helpers/goToHomePage'
import { goToProjectPage } from '../../utils/helpers/goToProjectPage'
import { clientTaskTitle, comment, taskDescription } from '../../utils/helpers/clientTaskInputConstants'
import { clientName, linkToClientTask } from '../../utils/helpers/projectConstants'
import { addComment, addTask, addTaskButton, checkButton, deleteClientTask, deletingConfirmation, setDueDate, statusButton } from '../../utils/helpers/clientTaskButtonsConstants'

describe('Go to Projects Page', () => {
  beforeEach(() => {
    goToHomePage()
    login()
  })
  
  it('should be able to see Dashboard', () => {
    cy.wait(200)
    const dashboardElement = cy.get('body').find('h2.text-xl.font-semibold')
    dashboardElement.should('contain', 'Dashboard')
  })

  it('should be able to see Projects', () => {
    goToProjectPage()
    cy.wait(200)
    const projectHeaderElement = cy.get('body').find('h2.text-xl.font-semibold')
    projectHeaderElement.should('contain', 'Projects')
  })
  it('should be able to see Client Tasks', () => {
    goToProjectPage()
    cy.wait(200)
    const selectProjectClient = cy.get('div.flex.flex-col.w-full')
    selectProjectClient.contains(clientName).should('exist').click()
    
    cy.get('h2.text-xl.font-semibold').should('contain', clientName)
    
    const projectLinkToClientTask = cy.get('.flex.bg-white.shadow-bottom-blue')
    projectLinkToClientTask.within(() =>{
      cy.get('a').contains(linkToClientTask).should('exist').click()
    })
     
  })

  it('add client task, details, comment, set due date, update status, and delete client tasks', () => {
    goToProjectPage()
    cy.wait(200)
    const selectProjectClient = cy.get('div.flex.flex-col.w-full')
    selectProjectClient.contains(clientName).should('contain.text', clientName).click()
        
    const projectLinkToClientTask = cy.get('.flex.bg-white.shadow-bottom-blue')
    projectLinkToClientTask.within(() =>{
      cy.get('a').contains(linkToClientTask).should('contain.text',linkToClientTask).click()
    })
    cy.wait(2000)
    addTaskButton()

    const taskTitleField = cy.get('#newTaskField')
    taskTitleField.type(clientTaskTitle)
    addTask()
    
    cy.wait(500)
    cy.contains(clientTaskTitle).should('contain.text',clientTaskTitle)
    
    const descriptionField = cy.get('textarea.ring-2')
    descriptionField.click()

    const inputDescription = cy.get('textarea.ring-2')
    inputDescription.type(taskDescription)
    checkButton()
    
    const text = cy.get('textarea.ring-2')
    text.invoke('val').should('eq', taskDescription)

    const commentField = cy.get('.ql-editor.ql-blank:last')
    commentField.type(comment)
    addComment()
    cy.wait(1000)

    const commentContent = cy.get('div.relative.grid.grid-cols-1.gap-2.p-4.border.border-gray-200.rounded-lg.bg-white.shadow-md')
    commentContent.within(()=>{
      cy.get('p').should('contain.text', comment)
    })

    setDueDate()
    cy.wait(200)
    const datePicker = cy.get('div.date-picker-container')
    datePicker.within(()=>{
      cy.get('div.p-1').within(()=>{
        cy.get('span:nth-child(31)').should('contain.text','27').click()
      })
    })
    statusButton()
    const setStatus = cy.get('ul.absolute.mt-1.w-full.overflow-auto.rounded-md.bg-white.py-1.text-base')
    setStatus.within(()=>{
      cy.get('li').eq(1).should('contain.text','Completed').click()
    })
    deleteClientTask()
    deletingConfirmation()
  })
  
})