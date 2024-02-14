export function selectCompanyOnProjectPerClient(){
    const projectsPerClientHrefElement = cy.get('[class="truncate"]').contains(/Projects per client/i)
    projectsPerClientHrefElement.should("exist")
    projectsPerClientHrefElement.click()
    
    const noRecordsFoundErrorMessage = cy.contains(/No Records Found/i)
    noRecordsFoundErrorMessage.should("not.exist")

    const searchInputElement = cy.get('[placeholder="Search"]')
    searchInputElement.should("exist")
    searchInputElement.type("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    noRecordsFoundErrorMessage.should("exist")
    searchInputElement.clear()

    searchInputElement.type("padua corp llc")
    searchInputElement.should("have.value", "padua corp llc")

    const selectCompanyHrefElement = cy.get('[class="font-semibold text-xs text-oli-blue-6"]').contains(/padua corp llc/i)
    selectCompanyHrefElement.should("exist")
    selectCompanyHrefElement.click()
    selectCompanyHrefElement.should("not.exist")
  }