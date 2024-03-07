import { customBirFormType } from "./projectConstants"

export function goToCustomBirFormsPage(){
    cy.get('div.relative.flex-row.space-y-3').should('not.exist')
    cy.contains('BIR Forms').should('contain.text','BIR Forms').click()
    cy.get('div.relative.flex-row.space-y-3').should('exist').within(()=>{
        cy.get('div.grid.h-full.overflow-y-auto.divide-y.min-h-fit.max-h-60.divide-oli-blue-1.divide-opacity-50.gap-y-2').within(()=>{
            cy.get('a:nth-child(2)').should('contain.text',customBirFormType).click()
            cy.url().should('include','form')
        })
    })
}