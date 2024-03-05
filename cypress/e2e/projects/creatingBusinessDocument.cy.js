import { goToBusinessDocumentPage } from "../../utils/helpers/goToBusinessDocumentPage"
import { goToHomePage } from "../../utils/helpers/goToHomePage"
import { login } from "../../utils/helpers/login"
import { addClientButton, addComment, addNewNote, addSelectedClient, bizDocumentHeader, clientName, comment, commentField, datePicker, deleteClientTask, deletingConfirmation, enterNewNote, getTeamAndStatus, memberName, newNote, saveNote, selectClientOnDropDown, selectItem, setDueDate, setStartDate, status, viewClientButton } from "../../utils/helpers/projectConstants"

describe('Creating Business Document Special Form',()=>{
    beforeEach(()=>{
        goToHomePage()
        login()
    })
    it('should be able to see Dashboard', () => {
        cy.wait(200)
        const dashboardElement = cy.get('body').find('h2.text-xl.font-semibold')
        dashboardElement.should('contain', 'Dashboard')
    })
    it('should be able to see business document header',()=>{
        cy.wait(300)
        goToBusinessDocumentPage()
        const projectHeaderElement = cy.get('h1.text-2xl.font-semibold')
        projectHeaderElement.should('contain.text',bizDocumentHeader)
    })
    it('view and add client',()=>{
        cy.wait(300)
        goToBusinessDocumentPage()
        viewClientButton()
        const projectHeaderElement = cy.get('h1.text-2xl.font-semibold')
        projectHeaderElement.should('contain.text','Certificate of Incorporation - 2024')
        addClientButton()
        selectClientOnDropDown().contains(clientName).should('contain.text',clientName).click()
        addSelectedClient()
        cy.wait(200)
    })
    it('add note, comment, start date, due date, assign member, update status, and delete form',()=>{
        cy.wait(300)
        goToBusinessDocumentPage()
        viewClientButton()
        const openClient = cy.get('div.col-span-3')
        openClient.contains(clientName).should('contain.text',clientName).click()

        const clientNameHeader = cy.get('div.flex.px-4.space-x-2.mb-10.pb-10.rounded-b-xl.bg-white')
        clientNameHeader.within(()=>{
            cy.get('div.flex.flex-col').contains(clientName).should('contain.text',clientName)
        })
        addNewNote()
        enterNewNote().type(newNote)
        saveNote()
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
                cy.get('span:nth-child(19)').should('contain.text','14').click()
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