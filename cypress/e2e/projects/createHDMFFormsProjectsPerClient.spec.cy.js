import { login } from '../../utils/helpers/login'
import { goToHomePage } from '../../utils/helpers/goToHomePage'
import { selectCompanyOnProjectPerClient } from '../../utils/helpers/selectCompanyProjectPerClient'
import {
  acceptOrCancelDeleteButton,
  addFormButton,
  addFormCloseButton,
  addSelectedFormsButton,
  hdmfFormsViewAllButton,
  hdmfFormsPageIndicator,
  hdmfFormsPageIndicatorContent,
  hdmfDecemberFormIndicator,
  hdmfDecemberFormSelection,
  deleteFormButton,
  deselectAllButton,
  selectAllButton,
  hdmfDecemberSelectedFormIndicator,
} from '../../utils/helpers/getCreateHDMFFormsElements'

describe('Creating HDMF Form under Projects per Client tests', () => {
    beforeEach( () =>{
        goToHomePage()
        login()
        selectCompanyOnProjectPerClient(/padua corp llc/i)
      })
      it('should view the HDMF Forms of the Client', () => {
        cy.get(hdmfFormsViewAllButton).eq(3).should("exist");
        cy.get(hdmfFormsViewAllButton).eq(3).click();
        cy.get(hdmfFormsPageIndicator).should('contain', hdmfFormsPageIndicatorContent)
      });
      it('should create HDMF - December - 2024 Form', () => {
        cy.get(hdmfFormsViewAllButton).eq(3).should("exist");
        cy.get(hdmfFormsViewAllButton).eq(3).click();
        cy.get(hdmfFormsPageIndicator).should('contain', hdmfFormsPageIndicatorContent)

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

        cy.get(hdmfDecemberFormSelection).should('not.be.checked');
        cy.get(hdmfDecemberFormSelection).click()
        cy.get(hdmfDecemberFormSelection).should('be.checked');

        cy.contains(addSelectedFormsButton).should('exist')
        cy.contains(addSelectedFormsButton).click()

        cy.contains(hdmfDecemberFormIndicator).should('exist')
      });
      it('should check that HDMF - December - 2024 Form is not avaiable to be created again', () => {
        cy.get(hdmfFormsViewAllButton).eq(3).should("exist");
        cy.get(hdmfFormsViewAllButton).eq(3).click();
        cy.get(hdmfFormsPageIndicator).should('contain', hdmfFormsPageIndicatorContent)

        cy.get(addFormCloseButton).should('not.exist')

        cy.contains(addFormButton).should('exist')
        cy.contains(addFormButton).click()

        cy.get(hdmfDecemberFormSelection).should('not.exist');
      });
      it('should delete HDMF - December - 2024 Form', () => {
        cy.get(hdmfFormsViewAllButton).eq(3).should("exist");
        cy.get(hdmfFormsViewAllButton).eq(3).click();
        cy.get(hdmfFormsPageIndicator).should('contain', hdmfFormsPageIndicatorContent)

        cy.contains(hdmfDecemberFormIndicator).should('exist')
        cy.contains(hdmfDecemberFormIndicator).click()

        cy.get(hdmfDecemberSelectedFormIndicator).should('contain','HDMF - December - 2024')
        cy.get(deleteFormButton).should('exist')
        cy.get(deleteFormButton).click()

        cy.get(acceptOrCancelDeleteButton).eq(0).should('contain','No, cancel')
        cy.get(acceptOrCancelDeleteButton).eq(1).should('contain',"Yes, I'm sure")

        cy.get(acceptOrCancelDeleteButton).eq(0).click()

        cy.get(deleteFormButton).should('exist')
        cy.get(deleteFormButton).click()
        cy.get(acceptOrCancelDeleteButton).eq(1).click()
        cy.contains(hdmfDecemberFormIndicator).should('not.exist')
      });
})