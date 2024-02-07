import { login } from '../../utils/helpers/login'
import { goToHomePage } from '../../utils/helpers/goToHomePage'
import { goToAddClientPage } from '../../utils/helpers/goToAddClientPage'

describe('Go to Projects Page', () => {
  beforeEach( () =>{
    goToHomePage()
    login()
    goToAddClientPage()
  })

  it('should be able to go to Create Client Page', () => {
    cy.get('[class="text-xl font-semibold"]:nth-child(2)').should('contain', 'Client');
  })

  it('should click the Add Client Button without any inputs', () => {
    cy.get('[class="text-xl font-semibold"]:nth-child(2)').should('contain', 'Client');
    cy.contains(/add client/i).click();
    cy.contains(/Company Name is required/i).should('exist');
    cy.contains(/Contact Person First Name is required/i).should('exist');
    cy.contains(/Contact Person Last Name is required/i).should('exist');
    cy.contains(/Contact Person Number is required/i).should('exist');
    cy.contains(/Enter a valid email/i).should('exist');
    cy.contains(/Date is required/i).should('exist');
  })

  it('should select different client types', () => {
    cy.get('#clientType').select('SoleProprietorship');
    cy.get('#clientType').should('have.value','SoleProprietorship');
    
    cy.get('#clientType').select('Partnership');
    cy.get('#clientType').should('have.value','Partnership');

    cy.get('#clientType').select('Individual');
    cy.get('#clientType').should('have.value','Individual');

    cy.get('#clientType').select('Others');
    cy.get('#clientType').should('have.value','Others');
  });

  it('should fill up the required fields with wrong inputs', () => {
    cy.get('#companyName').type('123123');
    cy.get('#contactPersonFirstName').type('123123');
    cy.get('#contactPersonLastName').type('123123');
    cy.get('#contactPersonNumber').type('abc');
    cy.get('#contactPersonEmail').type('abc');
    cy.get('#startDate').type('abc');
    cy.contains(/add client/i).click();
    cy.contains(/Enter a valid email/i).should('exist');
    cy.contains(/Invalid date format. Expected format: YYYY-MM-DD/i).should('exist');
  });

  it('should fill up the required fields with wrong inputs, then, add correct email and date format', () => {
    cy.get('#companyName').type('123123');
    cy.get('#contactPersonFirstName').type('123123');
    cy.get('#contactPersonLastName').type('123123');
    cy.get('#contactPersonNumber').type('abc');
    cy.get('#contactPersonEmail').type('sampleEmail');
    cy.get('#startDate').type('abc');
    cy.contains(/add client/i).click();
    cy.contains(/Enter a valid email/i).should('exist');
    cy.contains(/Invalid date format. Expected format: YYYY-MM-DD/i).should('exist');

    cy.get('#contactPersonEmail').clear();
    cy.get('#startDate').clear();
    cy.get('#startDate').type('2024-01-01');
    cy.get('#companyName').click();
    cy.get('#contactPersonEmail').type('sampleEmail2@google.com');

    cy.contains(/Enter a valid email/i).should('not.exist');
    cy.contains(/Invalid date format. Expected format: YYYY-MM-DD/i).should('not.exist');
  });
  
  it('should fill up the all fields with correct inputs and click add client button', () => {
    cy.get('#companyName').type('sample corp');
    cy.get('#zipCode').type('2200');
    cy.get('#SSSNo').type('123 123 123');

    cy.get('#tradeName').type('sample corp');
    cy.get('#contactBusinessNumber').type('0917 123 1234');
    cy.get('#HDMFNo').type('123 123 123');

    cy.get('#contactBusinessEmail').type('samplecorp@gmail.com');
    cy.get('#contactPersonFirstName').type('John');
    cy.get('#contactPersonLastName').type('Doe');

    cy.get('#dateOfIncorporation').type('2024-01-01');
    cy.get('#RDO').click();
    cy.get('#RDO').type('sample');
    cy.get('#contactPersonNumber').type('0917 123 1234');

    cy.get('#certificateOfIncorporationNumber').type('123 123 123');
    cy.get('#TIN').type('123 123 123');
    cy.get('#contactPersonEmail').type('sampleEmail4@google.com');
    
    cy.get('#natureOfBusiness').select('Manufacturing');
    cy.get('#incomeTaxOption').type('sample');
    cy.get('#birthdate').type('2010-01-01');

    cy.get('#principalBusinessAddress').click();
    cy.get('#principalBusinessAddress').type('#1 ABC Street Barangay New Manila');
    cy.get('#PHICNo').type('123 123 123');
    cy.get('#startDate').type('2024-01-01');
    cy.get('#principalBusinessAddress').click();


    cy.contains(/add client/i).click();

    const dashboardElement = cy.get('body').find('h2.text-xl.font-semibold')
    dashboardElement.should('contain', 'Client Vault')
  });
})