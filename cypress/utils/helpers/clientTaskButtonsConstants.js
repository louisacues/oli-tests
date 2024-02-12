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
    cy.get('div.relative > button').contains('COMMENT').click()
}

export function deleteClientTask(){
    cy.contains('button','Delete').click()
}

export function deletingConfirmation() {
    cy.get('div.flex.justify-center.items-center.space-x-4').within(()=>{
        cy.get('button').eq(1).click()
    })
}