export function goToAddClientPage(){
    const clientHrefElement = cy.get('body').find('a[href="/clients"]')
    clientHrefElement.click()

    const createClientButton = cy.getDataClass('flex space-x-2')
    createClientButton.should('exist')

    createClientButton.within(()=> {
        cy.get('button:nth-child(1)').should('exist');
        cy.get('button:nth-child(1)').click();
    })
  }