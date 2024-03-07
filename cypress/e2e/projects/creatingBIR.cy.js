import { goToBirFormsPage } from "../../utils/helpers/goToBirFormsPage"
import { goToHomePage } from "../../utils/helpers/goToHomePage"
import { login } from "../../utils/helpers/login"
import { addComment, setDueDate, setStartDate, datePicker, deleteClientTask, deletingConfirmation, comment, newNote, birFormTypeDescription, viewClientButton, addClientButton, selectClientOnDropDown, clientName, addSelectedClient, addNewNote, enterNewNote, saveNote, commentField, selectItem, getTeamAndStatus, memberName, status } from "../../utils/helpers/projectConstants"

describe('Creating BIR Special Form',()=>{
    beforeEach(()=>{
        goToHomePage()
        login()
    })
    it('should be able to see Dashboard', () => {
        cy.wait(200)
        const dashboardElement = cy.get('body').find('h2.text-xl.font-semibold')
        dashboardElement.should('contain', 'Dashboard')
        cy.url().should('eq','https://app-dev.oli.com.ph/')
      })
    it('should be able to see BIR Form type and description',()=>{
        goToBirFormsPage()
        const projectHeaderElement = cy.get('h1.text-2xl.font-semibold')
        projectHeaderElement.should('contain.text',birFormTypeDescription)
    })
    it('view and add client',()=>{
        goToBirFormsPage()
        viewClientButton()
        cy.url().should('eq','https://app-dev.oli.com.ph/form/tasks?groupId=clslca54o007xct8jszk49cuf&templateId=clslca54y007yct8jvcyz4qkj&year=2024')
        addClientButton()
        selectClientOnDropDown().contains(clientName).should('contain.text',clientName).click()
        addSelectedClient()
    })
    it.only('add note, comment, start date, due date, assign member, update status, and delete form',()=>{
        goToBirFormsPage()
        viewClientButton()
        cy.url().should('eq','https://app-dev.oli.com.ph/form/tasks?groupId=clslca54o007xct8jszk49cuf&templateId=clslca54y007yct8jvcyz4qkj&year=2024')
        cy.wait(3000)
        const openClient = cy.get('div.col-span-3')
        cy.url().should('include', 'groupId=clslca54o007xct8jszk49cuf&templateId=clslca54y007yct8jvcyz4qkj&year=2024')
        openClient.contains(clientName).should('contain.text',clientName).click()

        const clientNameHeader = cy.get('div.flex.px-4.space-x-2.mb-10.pb-10.rounded-b-xl.bg-white')
        clientNameHeader.within(()=>{
            cy.get('div.flex.flex-col').contains(clientName).should('contain.text',clientName)
        })
        addNewNote()
        enterNewNote().type(newNote)
        saveNote()
        cy.wait(200)
        const enteredNote = cy.get('input.text-sm.flex.w-full.bg-gray-50.outline-oli-blue-1.px-1')
        enteredNote.invoke('val').should('eq',newNote)

        commentField().type(comment)
        addComment()
        cy.wait(200)

        const commentContent = cy.get('div.relative.grid.grid-cols-1.gap-2.p-4.border.border-gray-200.rounded-lg.bg-white.shadow-md').eq(0)
        commentContent.within(()=>{
        cy.get('p').should('contain.text', comment)
        })
        setStartDate()
        datePicker().within(()=>{
            cy.get('div.p-1').within(()=>{
              cy.get('span:nth-child(18)').should('contain.text','13').click()
            })
          })
        setDueDate()
        datePicker().within(()=>{
            cy.get('div.p-1').within(()=>{
              cy.get('span:nth-child(31)').should('contain.text','26').click()
            })
          })
        getTeamAndStatus().eq(0).click()
        selectItem().within(()=>{
            cy.get('li').eq(4).should('contain.text',memberName).click()
        })
        getTeamAndStatus().eq(1).click()
        selectItem().within(()=>{
            cy.get('li').eq(2).should('contain.text',status).click()
        })
        deleteClientTask()
        deletingConfirmation()
    })
})