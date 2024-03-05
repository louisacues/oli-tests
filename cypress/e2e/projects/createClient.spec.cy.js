import { login } from '../../utils/helpers/login'
import { goToHomePage } from '../../utils/helpers/goToHomePage'
import { goToAddClientPage } from '../../utils/helpers/goToAddClientPage'

// PAGE INDICATOR ELEMENTS IMPORTS
import { clientPageIndicator } from "../../utils/helpers/getCreateClientPageIndicatorElements";
import { selectedClientPageIndicator } from "../../utils/helpers/getCreateClientPageIndicatorElements";

//BUTTON ELEMENTS IMPORTS
import { addClientButton } from "../../utils/helpers/getCreateClientButtonElements";

//ERROR MESSAGES ELEMENTS IMPORTS
import { companyNameErrorMessage } from "../../utils/helpers/getCreateClientErrorMessagesElements";
import { contactPersonFirstNameErrorMessage } from "../../utils/helpers/getCreateClientErrorMessagesElements";
import { contactPersonLastNameErrorMessage } from "../../utils/helpers/getCreateClientErrorMessagesElements";
import { contactPersonNumberErrorMessage } from "../../utils/helpers/getCreateClientErrorMessagesElements";
import { contactPersonEmailErrorMessage } from "../../utils/helpers/getCreateClientErrorMessagesElements";
import { clientStartDateInvalidDateErrorMessage } from "../../utils/helpers/getCreateClientErrorMessagesElements";
import { missingClientStartDateErrorMessage } from "../../utils/helpers/getCreateClientErrorMessagesElements";

//INPUT ELEMENTS IMPORTS
import { clientType } from "../../utils/helpers/getCreateClientInputElements";
import { companyName } from "../../utils/helpers/getCreateClientInputElements";
import { zipCode } from "../../utils/helpers/getCreateClientInputElements";
import { SSSNo } from "../../utils/helpers/getCreateClientInputElements";
import { tradeName } from "../../utils/helpers/getCreateClientInputElements";
import { contactBusinessNumber } from "../../utils/helpers/getCreateClientInputElements";
import { HDMFNo } from "../../utils/helpers/getCreateClientInputElements";
import { contactBusinessEmail } from "../../utils/helpers/getCreateClientInputElements";
import { contactPersonFirstName } from "../../utils/helpers/getCreateClientInputElements";
import { contactPersonLastName } from "../../utils/helpers/getCreateClientInputElements";
import { dateOfIncorporation } from "../../utils/helpers/getCreateClientInputElements";
import { RDO } from "../../utils/helpers/getCreateClientInputElements";
import { contactPersonNumber } from "../../utils/helpers/getCreateClientInputElements";
import { certificateOfIncorporationNumber } from "../../utils/helpers/getCreateClientInputElements";
import { TIN } from "../../utils/helpers/getCreateClientInputElements";
import { contactPersonEmail } from "../../utils/helpers/getCreateClientInputElements";
import { natureOfBusiness } from "../../utils/helpers/getCreateClientInputElements";
import { incomeTaxOption } from "../../utils/helpers/getCreateClientInputElements";
import { birthdate } from "../../utils/helpers/getCreateClientInputElements";
import { principalBusinessAddress } from "../../utils/helpers/getCreateClientInputElements";
import { PHICNo } from "../../utils/helpers/getCreateClientInputElements";
import { startDate } from "../../utils/helpers/getCreateClientInputElements";

describe('Create Client Page Tests', () => {
  beforeEach( () =>{
    goToHomePage()
    login()
    goToAddClientPage()
  })

  it.only('should be able to go to Create Client Page', () => {
    cy.get(clientPageIndicator).should('contain', 'Client');
  })

  it('should click the Add Client Button without any inputs', () => {
    cy.get(clientPageIndicator).should('contain', 'Client');
    cy.contains(addClientButton).click();
    cy.contains(companyNameErrorMessage).should('exist');
    cy.contains(contactPersonFirstNameErrorMessage).should('exist');
    cy.contains(contactPersonLastNameErrorMessage).should('exist');
    cy.contains(contactPersonNumberErrorMessage).should('exist');
    cy.contains(contactPersonEmailErrorMessage).should('exist');
    cy.contains(missingClientStartDateErrorMessage).should('exist');
  })

  it('should select different client types', () => {
    cy.get(clientType).select('SoleProprietorship');
    cy.get(clientType).should('have.value','SoleProprietorship');
    
    cy.get(clientType).select('Partnership');
    cy.get(clientType).should('have.value','Partnership');

    cy.get(clientType).select('Individual');
    cy.get(clientType).should('have.value','Individual');

    cy.get(clientType).select('Others');
    cy.get(clientType).should('have.value','Others');
  });

  it('should fill up the required fields with wrong inputs', () => {
    cy.get(companyName).should('exist');
    cy.get(contactPersonFirstName).should('exist');
    cy.get(contactPersonLastName).should('exist');
    cy.get(contactPersonNumber).should('exist');
    cy.get(contactPersonEmail).should('exist');
    cy.get(startDate).should('exist');
    
    cy.get(companyName).type('123123');
    cy.get(contactPersonFirstName).type('123123');
    cy.get(contactPersonLastName).type('123123');
    cy.get(contactPersonNumber).type('abc');
    cy.get(contactPersonEmail).type('abc');
    cy.get(startDate).type('abc');

    cy.get(companyName).should('have.value','123123');
    cy.get(contactPersonFirstName).should('have.value','123123');
    cy.get(contactPersonLastName).should('have.value','123123');
    cy.get(contactPersonNumber).should('have.value','abc');
    cy.get(contactPersonEmail).should('have.value','abc');
    cy.get(startDate).should('have.value','abc');

    cy.contains(addClientButton).click();
    cy.contains(contactPersonEmailErrorMessage).should('exist');
    cy.contains(clientStartDateInvalidDateErrorMessage).should('exist');
  });

  it('should fill up the required fields with wrong inputs, then, add correct email and date format', () => {
    cy.get(companyName).should('exist');
    cy.get(contactPersonFirstName).should('exist');
    cy.get(contactPersonLastName).should('exist');
    cy.get(contactPersonNumber).should('exist');
    cy.get(contactPersonEmail).should('exist');
    cy.get(startDate).should('exist');
    
    cy.get(companyName).type('123123');
    cy.get(contactPersonFirstName).type('123123');
    cy.get(contactPersonLastName).type('123123');
    cy.get(contactPersonNumber).type('abc');
    cy.get(contactPersonEmail).type('abc');
    cy.get(startDate).type('abc');

    cy.get(companyName).should('have.value','123123');
    cy.get(contactPersonFirstName).should('have.value','123123');
    cy.get(contactPersonLastName).should('have.value','123123');
    cy.get(contactPersonNumber).should('have.value','abc');
    cy.get(contactPersonEmail).should('have.value','abc');
    cy.get(startDate).should('have.value','abc');

    cy.contains(addClientButton).should('exist');
    cy.contains(addClientButton).click();
    cy.contains(contactPersonEmailErrorMessage).should('exist');
    cy.contains(clientStartDateInvalidDateErrorMessage).should('exist');

    cy.get(contactPersonEmail).clear();
    cy.get(startDate).clear();
    cy.get(startDate).type('2024-01-01');
    cy.get(companyName).click();
    cy.get(contactPersonEmail).type('sampleEmail2@google.com');

    cy.contains(contactPersonEmailErrorMessage).should('not.exist');
    cy.contains(clientStartDateInvalidDateErrorMessage).should('not.exist');
  });
  
  it('should fill up the all fields with correct inputs and click add client button', () => {
    let randomNumber = Math.floor(Math.random() * 100000);

    cy.get(companyName).should('exist');
    cy.get(zipCode).should('exist');
    cy.get(SSSNo).should('exist');
    cy.get(tradeName).should('exist');
    cy.get(contactBusinessNumber).should('exist');
    cy.get(HDMFNo).should('exist');
    cy.get(contactBusinessEmail).should('exist');
    cy.get(contactPersonFirstName).should('exist');
    cy.get(contactPersonLastName).should('exist');
    cy.get(dateOfIncorporation).should('exist');
    cy.get(RDO).should('exist');
    cy.get(contactPersonNumber).should('exist');
    cy.get(certificateOfIncorporationNumber).should('exist');
    cy.get(TIN).should('exist');
    cy.get(contactPersonEmail).should('exist');    
    cy.get(natureOfBusiness).should('exist');
    cy.get(incomeTaxOption).should('exist');
    cy.get(birthdate).should('exist');
    cy.get(principalBusinessAddress).should('exist');
    cy.get(PHICNo).should('exist');
    cy.get(startDate).should('exist');

    cy.get(companyName).type('sample corp');
    cy.get(zipCode).type('2200');
    cy.get(SSSNo).type('123 123 123');

    cy.get(tradeName).type('sample corp');
    cy.get(contactBusinessNumber).type('0917 123 1234');
    cy.get(HDMFNo).type('123 123 123');

    cy.get(contactBusinessEmail).type('samplecorp@gmail.com');
    cy.get(contactPersonFirstName).type('John');
    cy.get(contactPersonLastName).type('Doe');

    cy.get(dateOfIncorporation).type('2024-01-01');
    cy.get(RDO).click();
    cy.get(RDO).type('sample');
    cy.get(contactPersonNumber).type('0917 123 1234');

    cy.get(certificateOfIncorporationNumber).type('123 123 123');
    cy.get(TIN).type('123 123 123');
    cy.get(contactPersonEmail).type('sampleEmail1'+randomNumber+'@google.com');
    
    cy.get(natureOfBusiness).select('Manufacturing');
    cy.get(incomeTaxOption).type('sample');
    cy.get(birthdate).type('2010-01-01');

    cy.get(principalBusinessAddress).click();
    cy.get(principalBusinessAddress).type('1 ABC Street Barangay New Manila');
    cy.get(PHICNo).type('123 123 123');
    cy.get(startDate).type('2024-01-01');
    cy.get(principalBusinessAddress).click();


    cy.get(companyName).should('have.value','sample corp');
    cy.get(zipCode).should('have.value','2200');
    cy.get(SSSNo).should('have.value','123 123 123');
    cy.get(tradeName).should('have.value','sample corp');
    cy.get(contactBusinessNumber).should('have.value','0917 123 1234');
    cy.get(HDMFNo).should('have.value','123 123 123');
    cy.get(contactBusinessEmail).should('have.value','samplecorp@gmail.com');
    cy.get(contactPersonFirstName).should('have.value','John');
    cy.get(contactPersonLastName).should('have.value','Doe');
    cy.get(dateOfIncorporation).should('have.value','2024-01-01');
    cy.get(RDO).should('have.value','sample');
    cy.get(contactPersonNumber).should('have.value','0917 123 1234');
    cy.get(certificateOfIncorporationNumber).should('have.value','123 123 123');
    cy.get(TIN).should('have.value','123 123 123');
    cy.get(contactPersonEmail).should('have.value','sampleEmail1'+randomNumber+'@google.com');    
    cy.get(natureOfBusiness).should('have.value','Manufacturing');
    cy.get(incomeTaxOption).should('have.value','sample');
    cy.get(birthdate).should('have.value','2010-01-01');
    cy.get(principalBusinessAddress).should('have.value','1 ABC Street Barangay New Manila');
    cy.get(PHICNo).should('have.value','123 123 123');
    cy.get(startDate).should('have.value','2024-01-01');

    cy.contains(addClientButton).click();

    const clientVaultElement = cy.get('body').find(selectedClientPageIndicator)
    clientVaultElement.should('contain', 'Client Vault')
  });
})