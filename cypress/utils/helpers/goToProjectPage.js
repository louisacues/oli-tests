export function goToProjectPage(){
  cy.get('a[href="/projects"]').click()
}