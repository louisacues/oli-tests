import { login } from "../../utils/helpers/login"
import { goToSSSFormTab } from "../../utils/helpers/goToSSSFormTab"
import { goToHomePage } from "../../utils/helpers/goToHomePage"
import { sssHeadingText, sssAugustHeadingText, clientName, noteInputText, commentContent } from "./sssTabConstants"

describe('Create SSS Special Form', () => {

    beforeEach(() => {
        goToHomePage()
        login()
        goToSSSFormTab()
    })

    it('should be able to see the SSS tab heading', () => {
        const sssHeading = cy.contains(sssHeadingText)
        sssHeading.should('exist')
    })

    it('should be able to view clients in the month of august', () => {
        const sssHeading = cy.contains(sssHeadingText)
        sssHeading.should('exist')

        const sssTableDiv = cy.get('div.flow-root.px-6.py-7')
        sssTableDiv.within(() => {
            cy.get('button:contains("View clients")').eq(4).click()
        })

        const sssAugustHeading = cy.contains(sssAugustHeadingText)
        sssAugustHeading.should('exist')
    })

    it('should be able to create SSS form for a client in the month of august', () => {
        const sssHeading = cy.contains(sssHeadingText)
        sssHeading.should('exist')

        const sssTableDiv = cy.get('div.flow-root.px-6.py-7')
        sssTableDiv.within(() => {
            cy.get('button:contains("View clients")').eq(4).click()
        })

        const sssAugustHeading = cy.contains(sssAugustHeadingText)
        sssAugustHeading.should('exist')

        const sssAddClientButton = cy.contains('Add Client')
        sssAddClientButton.should('exist')
        sssAddClientButton.click()

        const searchClientInput = cy.get('input[name="search-clients"]')
        searchClientInput.should('be.visible')
        searchClientInput.type(clientName)
        searchClientInput.invoke('val').should('eq', clientName)

        const clientList = cy.get('div[role="menu"]')
        clientList.should('be.visible')

        const clientAnthony = cy.contains(clientName)
        clientAnthony.click()

        const addSelectedClientButton = cy.contains('Add Selected Clients')
        addSelectedClientButton.should('be.visible')
        addSelectedClientButton.click()

        const sssFormsTable = cy.get('div.block.pb-20.xl\\:pb-0.font-raleway.text-\\[0\\.625rem\\].bg-white')
        sssFormsTable.should('exist')
        sssFormsTable.within(() => {
            cy.contains(clientName).should('be.visible').click()
        })

        const addNewNote = cy.contains('Add new note')
        addNewNote.click()

        const noteInputField = cy.get('input[placeholder="Enter new note"]')
        noteInputField.type(noteInputText)
        noteInputField.invoke('val').should('eq', noteInputText)

        const saveNoteButton = cy.get('button:contains("Save")')
        saveNoteButton.should('exist')
        saveNoteButton.click()

        const commentField = cy.get('div.ql-editor:last')
        commentField.click()
        commentField.type(commentContent)

        const commentButton = cy.contains("button", "COMMENT")
        commentButton.should('exist')
        commentButton.click()
        const commentDiv = cy.get('div.flex.flex-col.space-y-4.mb-4')
        commentDiv.within(() => {
            cy.get('p').should('contain', commentContent)
        })

        const startDateButton = cy.contains("button", "Set Start Date")
        startDateButton.should('exist')
        startDateButton.click()

        const startDateContainer = cy.get("div.absolute.z-50.block.pt-2.top-12.date-picker-container")
        startDateContainer.within(() => {
            cy.get('div.p-1').within(() =>{
                cy.get('span:nth-child(12)').click()
            })
        })

        const dueDateButton = cy.contains("button", "Set Due Date")
        dueDateButton.should('exist')
        dueDateButton.click()

        const dueDateContainer = cy.get("div.absolute.z-50.block.pt-2.top-12.date-picker-container")
        dueDateContainer.within(() => {
            cy.get('div.p-1').within(() =>{
                cy.get('span:nth-child(15)').click()
            })
        })

        const startDate = cy.get('button.w-full.flex.pl-3.pr-10.py-2.text-sm').eq(0)
        startDate.within(() => {
            cy.get('span').should('have.text', '08-Feb-2024')
        })

        const dueDate = cy.get('button.w-full.flex.pl-3.pr-10.py-2.text-sm').eq(1)
        dueDate.within(() => {
            cy.get('span').should('have.text', '11-Feb-2024')
        })

        const projectDeleteButton = cy.get('div.w-full.col-span-full')
        projectDeleteButton.within(() => {
            cy.get('button').click()
        })

        const deleteConfirmation = cy.get('div.flex.justify-center.items-center.space-x-4')
        deleteConfirmation.within(() => {
            cy.get('button:nth-child(2)').click()
        })

        
    })
})