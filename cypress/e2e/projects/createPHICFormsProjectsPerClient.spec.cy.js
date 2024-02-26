import { login } from '../../utils/helpers/login'
import { goToHomePage } from '../../utils/helpers/goToHomePage'
import { selectCompanyOnProjectPerClient } from '../../utils/helpers/selectCompanyProjectPerClient'
import { 
  phicFormsViewAllButton,
  phicFormsPageIndicator,
  phicFormsPageIndicatorContent,
  phicDecemberFormIndicator,
  phicDecemberSelectedFormIndicator,
  addFormCloseButton,
  addFormButton,
  addSelectedFormsButton,
  selectAllButton,
  deselectAllButton,
  deleteFormButton,
  acceptOrCancelDeleteButton,
  phicDecemberFormSelection,
 } from '../../utils/helpers/getCreatePHICFormsElements'

describe('Creating PHIC Form under Projects per Client tests', () => {
    beforeEach( () =>{
        goToHomePage()
        login()
        selectCompanyOnProjectPerClient(/padua corp llc/i)
      })
      it('should view the PHIC Forms of the Client', () => {
        cy.get(phicFormsViewAllButton).eq(4).should("exist");
        cy.get(phicFormsViewAllButton).eq(4).click();
        cy.get(phicFormsPageIndicator).should('contain', phicFormsPageIndicatorContent)
      });
      it('should create PHIC - December - 2024 Form', () => {
        cy.get(phicFormsViewAllButton).eq(4).should("exist");
        cy.get(phicFormsViewAllButton).eq(4).click();
        cy.get(phicFormsPageIndicator).should('contain', phicFormsPageIndicatorContent)

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

        cy.get(phicDecemberFormSelection).should('not.be.checked');
        cy.get(phicDecemberFormSelection).click()
        cy.get(phicDecemberFormSelection).should('be.checked');

        cy.contains(addSelectedFormsButton).should('exist')
        cy.contains(addSelectedFormsButton).click()

        cy.contains(phicDecemberFormIndicator).should('exist')
      });
      it('should check that PHIC - December - 2024 Form is not avaiable to be created again', () => {
        cy.get(phicFormsViewAllButton).eq(4).should("exist");
        cy.get(phicFormsViewAllButton).eq(4).click();
        cy.get(phicFormsPageIndicator).should('contain', phicFormsPageIndicatorContent)

        cy.get(addFormCloseButton).should('not.exist')

        cy.contains(addFormButton).should('exist')
        cy.contains(addFormButton).click()

        cy.get('input[name="PHIC - December"]').should('not.exist');
      });
      it('should delete PHIC - December - 2024 Form', () => {
        cy.get(phicFormsViewAllButton).eq(4).should("exist");
        cy.get(phicFormsViewAllButton).eq(4).click();
        cy.get(phicFormsPageIndicator).should('contain', phicFormsPageIndicatorContent)

        cy.contains(phicDecemberFormIndicator).should('exist')
        cy.contains(phicDecemberFormIndicator).click()

        cy.get(phicDecemberSelectedFormIndicator).should('contain',phicDecemberFormIndicator)
        cy.get(deleteFormButton).should('exist')
        cy.get(deleteFormButton).click()

        cy.get(acceptOrCancelDeleteButton).eq(0).should('contain','No, cancel')
        cy.get(acceptOrCancelDeleteButton).eq(1).should('contain',"Yes, I'm sure")

        cy.get(acceptOrCancelDeleteButton).eq(0).click()

        cy.get(deleteFormButton).should('exist')
        cy.get(deleteFormButton).click()
        cy.get(acceptOrCancelDeleteButton).eq(1).click()
        cy.contains(phicDecemberFormIndicator).should('not.exist')
      });
})