import { birFormType } from "./projectConstants"

export function goToBirFormsPage(){
    cy.get('div.relative.flex-row.space-y-3').should('not.exist')
    cy.contains('BIR Forms').should('contain.text','BIR Forms').click()
    cy.get('div.relative.flex-row.space-y-3').should('exist').within(()=>{
        cy.get('div.grid.h-full.overflow-y-auto.divide-y.min-h-fit.max-h-60.divide-oli-blue-1.divide-opacity-50.gap-y-2').within(()=>{
            cy.get('a').contains(birFormType).should('contain.text',birFormType).click()
            cy.url().should('eq', 'https://app-dev.oli.com.ph/form?groupId=clslca54o007xct8jszk49cuf')
        })
    })
}