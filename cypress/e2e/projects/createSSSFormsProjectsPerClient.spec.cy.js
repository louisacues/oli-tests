import { login } from '../../utils/helpers/login'
import { goToHomePage } from '../../utils/helpers/goToHomePage'
import { selectCompanyOnProjectPerClient } from '../../utils/helpers/selectCompanyProjectPerClient'
import { 
  sssFormsViewAllButton,
  sssFormsPageIndicator,
  sssFormsPageIndicatorContent,
  sssDecemberFormIndicator,
  sssDecemberSelectedFormIndicator,
  addFormCloseButton,
  addFormButton,
  addSelectedFormsButton,
  selectAllButton,
  deselectAllButton,
  deleteFormButton,
  acceptOrCancelDeleteButton,
  sssDecemberFormSelection,
 } from '../../utils/helpers/getCreateSSSFormsElements'

describe('Creating SSS Form under Projects per Client tests', () => {
    beforeEach( () =>{
        goToHomePage()
        login()
        selectCompanyOnProjectPerClient(/padua corp llc/i)
      })
      it('should view the SSS Forms of the Client', () => {
        cy.get(sssFormsViewAllButton).eq(1).should("exist");
        cy.get(sssFormsViewAllButton).eq(1).click();
        cy.get(sssFormsPageIndicator).should('contain', sssFormsPageIndicatorContent)
      });
      it('should create SSS - December - 2024 Form', () => {
        cy.get(sssFormsViewAllButton).eq(1).should("exist");
        cy.get(sssFormsViewAllButton).eq(1).click();
        cy.get(sssFormsPageIndicator).should('contain', sssFormsPageIndicatorContent)

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

        cy.get(sssDecemberFormSelection).should('not.be.checked');
        cy.get(sssDecemberFormSelection).click()
        cy.get(sssDecemberFormSelection).should('be.checked');

        cy.contains(addSelectedFormsButton).should('exist')
        cy.contains(addSelectedFormsButton).click()

        cy.contains(sssDecemberFormIndicator).should('exist')
      });
      it('should check that SSS - December - 2024 Form is not avaiable to be created again', () => {
        cy.get(sssFormsViewAllButton).eq(1).should("exist");
        cy.get(sssFormsViewAllButton).eq(1).click();
        cy.get(sssFormsPageIndicator).should('contain', sssFormsPageIndicatorContent)

        cy.get(addFormCloseButton).should('not.exist')

        cy.contains(addFormButton).should('exist')
        cy.contains(addFormButton).click()

        cy.get('input[name="sss - December"]').should('not.exist');
      });
      it('should delete SSS - December - 2024 Form', () => {
        cy.get(sssFormsViewAllButton).eq(1).should("exist");
        cy.get(sssFormsViewAllButton).eq(1).click();
        cy.get(sssFormsPageIndicator).should('contain', sssFormsPageIndicatorContent)

        cy.contains(sssDecemberFormIndicator).should('exist')
        cy.contains(sssDecemberFormIndicator).click()

        cy.get(sssDecemberSelectedFormIndicator).should('contain',sssDecemberFormIndicator)
        cy.get(deleteFormButton).should('exist')
        cy.get(deleteFormButton).click()

        cy.get(acceptOrCancelDeleteButton).eq(0).should('contain','No, cancel')
        cy.get(acceptOrCancelDeleteButton).eq(1).should('contain',"Yes, I'm sure")

        cy.get(acceptOrCancelDeleteButton).eq(0).click()

        cy.get(deleteFormButton).should('exist')
        cy.get(deleteFormButton).click()
        cy.get(acceptOrCancelDeleteButton).eq(1).click()
        cy.contains(sssDecemberFormIndicator).should('not.exist')
      });
})