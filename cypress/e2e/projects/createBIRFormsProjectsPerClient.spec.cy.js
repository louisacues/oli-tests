import { login } from '../../utils/helpers/login'
import { goToHomePage } from '../../utils/helpers/goToHomePage'
import { selectCompanyOnProjectPerClient } from '../../utils/helpers/selectCompanyProjectPerClient'
import {
  acceptOrCancelDeleteButton,
  addFormButton,
  addFormCloseButton,
  addSelectedFormsButton,
  birFormsViewAllButton,
  birformsPageIndicator,
  birformsPageIndicatorContent,
  businessRenewalFormIndicator,
  businessRenewalFormSelection,
  businessRenewalSelectedFormIndicator,
  deleteFormButton,
  deselectAllButton,
  selectAllButton,
} from '../../utils/helpers/getCreateBIRFormsElements'

describe('Creating BIR Forms under Projects per Client tests', () => {
    beforeEach( () =>{
        goToHomePage()
        login()
        selectCompanyOnProjectPerClient(/padua corp llc/i)
      })
      it('should view the BIR Forms of the Client', () => {
        cy.get(birFormsViewAllButton).eq(1).should("exist");
        cy.get(birFormsViewAllButton).eq(1).click();
        cy.get(birformsPageIndicator).should('contain', birformsPageIndicatorContent)
      });
      it.only('should create 0605RF: Business Renewal Form', () => {
        cy.get(birFormsViewAllButton).eq(1).should("exist");
        cy.get(birFormsViewAllButton).eq(1).click();

        cy.get(birformsPageIndicator).should("exist")

        cy.get(addFormCloseButton).should('not.exist')

        cy.contains(addFormButton).should('exist')
        cy.contains(addFormButton).click()

        // cy.get(addFormCloseButton).should('exist')

        cy.contains(addSelectedFormsButton).should('not.exist')

        cy.contains(selectAllButton).should('exist')
        cy.contains(selectAllButton).click()

        cy.contains(deselectAllButton).should('exist')
        cy.contains(deselectAllButton).click()

        cy.contains(selectAllButton).should('exist')

        cy.get(businessRenewalFormSelection).should('not.be.checked');
        cy.get(businessRenewalFormSelection).click()
        cy.get(businessRenewalFormSelection).should('be.checked');

        cy.contains(addSelectedFormsButton).should('exist')
        cy.contains(addSelectedFormsButton).click()

        cy.contains(businessRenewalFormIndicator).should('exist')
      });
      it.only('should check that 0605RF: Business Renewal Form is not avaiable to be created again', () => {
        cy.get(birFormsViewAllButton).eq(1).should("exist");
        cy.get(birFormsViewAllButton).eq(1).click();

        cy.get(birformsPageIndicator).should("exist")

        cy.get(addFormCloseButton).should('not.exist')

        cy.contains(addFormButton).should('exist')
        cy.contains(addFormButton).click()

        cy.get(businessRenewalFormSelection).should('not.exist');
      });
      it.only('should delete 0605RF: Business Renewal Form', () => {
        cy.get(birFormsViewAllButton).eq(1).should("exist");
        cy.get(birFormsViewAllButton).eq(1).click();

        cy.get(birformsPageIndicator).should("exist")

        cy.contains(businessRenewalFormIndicator).should('exist')
        cy.contains(businessRenewalFormIndicator).click()

        cy.get(businessRenewalSelectedFormIndicator).should('contain','0605RF: Business Renewal - 2024')
        cy.get(deleteFormButton).should('exist')
        cy.get(deleteFormButton).click()

        cy.get(acceptOrCancelDeleteButton).eq(0).should('contain','No, cancel')
        cy.get(acceptOrCancelDeleteButton).eq(1).should('contain',"Yes, I'm sure")

        cy.get(acceptOrCancelDeleteButton).eq(0).click()

        cy.get(deleteFormButton).should('exist')
        cy.get(deleteFormButton).click()
        cy.get(acceptOrCancelDeleteButton).eq(1).click()
        cy.contains(businessRenewalFormIndicator).should('not.exist')

      });
})