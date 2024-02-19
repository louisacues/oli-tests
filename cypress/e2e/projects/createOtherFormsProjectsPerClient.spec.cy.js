import { login } from '../../utils/helpers/login'
import { goToHomePage } from '../../utils/helpers/goToHomePage'
import { selectCompanyOnProjectPerClient } from '../../utils/helpers/selectCompanyProjectPerClient'
import {
  otherFormsViewAllButton,
  otherFormsPageIndicator,
  otherFormsPageIndicatorContent,
  certificateOfIncorporationFormIndicator,
  certificateOfIncorporationSelectedFormIndicator,
  addFormCloseButton,
  addFormButton,
  addSelectedFormsButton,
  selectAllButton,
  deselectAllButton,
  deleteFormButton,
  acceptOrCancelDeleteButton,
  certificateOfIncorporationFormSelection,
} from '../../utils/helpers/getCreateOtherFormsElements'

describe('Creating Other Form under Projects per Client tests', () => {
    beforeEach( () =>{
        goToHomePage()
        login()
        selectCompanyOnProjectPerClient(/padua corp llc/i)
      })
      it('should view the Other Form of the Client', () => {
        cy.get(otherFormsViewAllButton).eq(4).should("exist");
        cy.get(otherFormsViewAllButton).eq(4).click();
        cy.get(otherFormsPageIndicator).should('contain', otherFormsPageIndicatorContent)
      });
      it('should create Certificate of Incorporation - 2024 Form', () => {
        
        cy.get(otherFormsViewAllButton).eq(4).should("exist");
        cy.get(otherFormsViewAllButton).eq(4).click();
        cy.get(otherFormsPageIndicator).should('contain', otherFormsPageIndicatorContent)

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

        cy.get(certificateOfIncorporationFormSelection).should('not.be.checked');
        cy.get(certificateOfIncorporationFormSelection).click()
        cy.get(certificateOfIncorporationFormSelection).should('be.checked');

        cy.contains(addSelectedFormsButton).should('exist')
        cy.contains(addSelectedFormsButton).click()

        cy.contains(certificateOfIncorporationFormIndicator).should('exist')
      });
      it('should check that Certificate of Incorporation - 2024 Form is not avaiable to be created again', () => {
        cy.get(otherFormsViewAllButton).eq(4).should("exist");
        cy.get(otherFormsViewAllButton).eq(4).click();

        cy.get(otherFormsPageIndicator).should("exist")

        cy.get(addFormCloseButton).should('not.exist')

        cy.contains(addFormButton).should('exist')
        cy.contains(addFormButton).click()

        cy.get(certificateOfIncorporationFormSelection).should('not.exist');
      });
      it('should delete Certificate of Incorporation - 2024 Form', () => {
        cy.get(otherFormsViewAllButton).eq(4).should("exist");
        cy.get(otherFormsViewAllButton).eq(4).click();

        cy.get(otherFormsPageIndicator).should("exist")

        cy.contains(certificateOfIncorporationFormIndicator).should('exist')
        cy.contains(certificateOfIncorporationFormIndicator).click()

        cy.get(certificateOfIncorporationSelectedFormIndicator).should('contain',certificateOfIncorporationFormIndicator)
        cy.get(deleteFormButton).should('exist')
        cy.get(deleteFormButton).click()

        cy.get(acceptOrCancelDeleteButton).eq(0).should('contain','No, cancel')
        cy.get(acceptOrCancelDeleteButton).eq(1).should('contain',"Yes, I'm sure")

        cy.get(acceptOrCancelDeleteButton).eq(0).click()

        cy.get(deleteFormButton).should('exist')
        cy.get(deleteFormButton).click()
        cy.get(acceptOrCancelDeleteButton).eq(1).click()
        cy.contains(certificateOfIncorporationFormIndicator).should('not.exist')
      });
})