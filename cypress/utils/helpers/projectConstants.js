export const clientName = 'Anthony Corp'
export const projectTitle = 'Test Anthony Project'
export const linkToClientTask = 'Client Task'
export const comment = 'A sample Comment'
export const newNote = 'Sample note'
export const birFormType = '1800'
export const birFormTypeDescription = "1800: Donor's Tax Return - 2024"
export const memberName = 'Jazmine Isip'
export const status = 'Done'
export const bizDocumentHeader = 'Business Permits: Business Registration or Renewal - 2024'
export const customFormType = '0611-A - Payment Form Covered by a Letter Notice'
export const customBirFormHeader = '0611-A: Payment Form Covered by a Letter Notice - 2024'
export const customBirFormType = '0611-A'

export function viewClientButton(){
    cy.contains('button',"View clients").should('contain.text','View clients').click()
}

export function addClientButton (){
    cy.contains('button','Add Client').should('contain.text','Add Client').click()
}

export function selectClientOnDropDown(){
    return cy.get('div.relative.flex.items-start.text-gray-900.dropdown-item.p-1')
}

export function addSelectedClient(){
    cy.contains('button','Add Selected Clients').should('contain.text','Add Selected Clients').click()
}

export function addNewNote(){
    cy.contains('button','Add new note').should('contain.text','Add new note').click()
}

export function enterNewNote(){
    return cy.get('input.text-sm.ring-1.ring-oli-blue-1')
}

export function saveNote(){
    cy.contains('button','Save').should('contain.text','Save').click()
}

export function commentField(){
    return cy.get('.ql-editor.ql-blank:last')
}
export function addComment(){
    cy.get('div.relative > button').contains('COMMENT').should('contain.text','COMMENT').click()
}

export function setStartDate(){
    cy.contains('button','Set Start Date').should('contain.text','Set Start Date').click()
}  

export function setDueDate(){
    cy.contains('button','Set Due Date').should('contain.text','Set Due Date').click()
} 

export function datePicker(){
    return cy.get('div.date-picker-container')
}

export function getTeamAndStatus(){
    return cy.get('div.w-full.relative > div.relative.mt-2')
}

export function selectItem(){
    return  cy.get('ul.absolute.mt-1.w-full.overflow-auto')
}

export function deleteClientTask(){
    cy.contains('button','Delete').should('contain.text','Delete').click()
}

export function deletingConfirmation() {
    cy.get('div.flex.justify-center.items-center.space-x-4').within(()=>{
        cy.get('button').eq(1).should('contain.text',"Yes, I'm sure").click()
    })
}