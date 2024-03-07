export function goToBusinessDocumentPage(){
    cy.get('a[href="/form?groupId=cloxcuqsi002plewsrcb1ki9u"]').click()
    cy.url().should('eq','https://app-dev.oli.com.ph/form?groupId=cloxcuqsi002plewsrcb1ki9u')
}