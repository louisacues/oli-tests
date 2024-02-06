export function goToProjectsPage() {
    cy.get('a[href="/projects"]').click()
}