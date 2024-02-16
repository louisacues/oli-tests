import { goToCustomBirFormsPage } from "../../utils/helpers/goToCustomBirFormsPage"
import { goToHomePage } from "../../utils/helpers/goToHomePage"
import { login } from "../../utils/helpers/login"
import { addClientButton, addComment, addNewNote, addSelectedClient, clientName, comment, commentField, customBirFormHeader, customFormDescription, customFormType, datePicker, deleteClientTask, deletingConfirmation, enterNewNote, getTeamAndStatus, memberName, newNote, saveNote, selectClientOnDropDown, selectItem, setDueDate, setStartDate, status, viewClientButton } from "../../utils/helpers/projectConstants"

describe('Adding Custom BIR form',()=>{
    beforeEach(()=>{
        goToHomePage()
        login()
    })
    it('Should be able to see Dashboard',()=>{
        cy.wait(200)
        const dashboardElement = cy.get('body').find('h2.text-xl.font-semibold')
        dashboardElement.should('contain', 'Dashboard')
    })
    it('Adding Custom BIR Form',()=>{
        cy.get('div.relative.flex-row.space-y-3').should('not.exist')
        const selectBIRFormButton = cy.contains('BIR Forms')
        selectBIRFormButton.should('contain.text','BIR Forms').click()

        const addCustomBIRForm = cy.get('div.relative.flex-row.space-y-3')
        addCustomBIRForm.should('exist').within(()=>{
            cy.contains('button','Add BIR Forms').should('contain.text','Add BIR Forms').click()
        })

        const projectHeaderElement = cy.get('h3.text-xl.font-semibold.leading-7.text-oli-blue-4')
        projectHeaderElement.should('contain.text','Add BIR Form')

        const listOfBIRType = cy.get('div.relative.mt-2')
        listOfBIRType.within(()=>{
            cy.get('ul').should('not.exist')
        })

        const inputFormType = cy.get('div.relative.mt-2')
        inputFormType.within(()=>{
            cy.get('button').click()
        })
        const selectBIRType = cy.get('div.relative.mt-2')
        selectBIRType.within(()=>{
            cy.get('ul').should('exist').within(()=>{
                cy.get('li').first().click()
            })
        })
        const formType = cy.get('div.relative.mt-2')
        formType.within(()=>{
            cy.get('input').invoke('val').should('eq',customFormType)
        })

        const submitCustomBIRForm = cy.contains('button','Submit')
        submitCustomBIRForm.should('contain.text','Submit').click()

        const customFormHeader = cy.get('h1.text-2xl.font-semibold')
        customFormHeader.should('contain.text',customBirFormHeader)
    })
    it.only('add client, note, comment, start date, due date, assign member, update status, and delete form',()=>{
        goToCustomBirFormsPage()
        viewClientButton()
        addClientButton()
        selectClientOnDropDown().contains(clientName).should('contain.text',clientName).click()
        addSelectedClient()
        cy.wait(3000)
        const openClient = cy.get('div.col-span-3')
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
              cy.get('span:nth-child(18)').should('contain.text','14').click()
            })
          })
        setDueDate()
        datePicker().within(()=>{
            cy.get('div.p-1').within(()=>{
              cy.get('span:nth-child(31)').should('contain.text','27').click()
            })
          })
        cy.wait(300)
        getTeamAndStatus().eq(0).click()
        selectItem().within(()=>{
            cy.get('li').eq(4).should('contain.text',memberName).click()
        })
        cy.wait(3000)
        getTeamAndStatus().eq(1).click()
        selectItem().within(()=>{
            cy.get('li').eq(2).should('contain.text',status).click()
        })
        deleteClientTask()
        deletingConfirmation()
    })
})