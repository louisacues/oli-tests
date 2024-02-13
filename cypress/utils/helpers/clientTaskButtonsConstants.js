export function addTaskButton(){
    cy.contains('button', 'Add Task').click()
} 
export function addTask(){
    cy.contains('button', 'Add').click()
} 

export function checkButton() {
    cy.get('.absolute.bottom-2.right-2.space-x-1').within(()=>{
        cy.get('button').eq(1).click()
    })
}

export function addComment(){
    cy.get('div.relative > button').contains('COMMENT').should('contain.text','COMMENT').click()
}

export function setDueDate(){
    cy.contains('button','Set Due Date').should('contain.text','Set Due Date').click()
} 

export function statusButton() {
    cy.get('button > div > span.truncate').click()
}

export function deleteClientTask(){
    cy.contains('button','Delete').should('contain.text','Delete').click()
}

export function deletingConfirmation() {
    cy.get('div.flex.justify-center.items-center.space-x-4').within(()=>{
        cy.get('button').eq(1).should('contain.text',"Yes, I'm sure").click()
    })
}