import { birFormType } from "./projectConstants"

export function goToBirFormsPage(){
    cy.contains('BIR Forms').click()
    cy.get('div.relative.flex-row.space-y-3').within(()=>{
        cy.get('div.grid.h-full.overflow-y-auto.divide-y.min-h-fit.max-h-60.divide-oli-blue-1.divide-opacity-50.gap-y-2').within(()=>{
            cy.get('a').contains(birFormType).should('contain.text',birFormType).click()
        })
    })
}