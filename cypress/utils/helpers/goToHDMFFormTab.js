export function goToHDMFFormTab () {
    cy.contains('SSS, HDMF, PHIC').click()
    cy.get('a.pt-2.cursor-pointer:nth-child(3)').click()
}