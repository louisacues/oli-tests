import { login } from '../../utils/helpers/login'
import { goToHomePage } from '../../utils/helpers/goToHomePage'
import { companyName, zipCode, sssNo, tradeName, businessNumber, hdmfNumber, countryOfIncorporation, contactBusinessEmail, dateOfIncorporation, RDO, certificateOfIncorporationNumber, TIN, natureOfBusiness, incomeTaxOption, principalBusinessAddress, phicNo } from './updateCompanyConstants'

describe('Go to Home Page and', () => {
    beforeEach(() => {
        goToHomePage()
        login()
    })

    it('should be able to update company details', () => {
       
        const projectHeaderElement = cy.get('body').find('h2.text-xl.font-semibold')
        projectHeaderElement.should('contain', 'Dashboard')

        const accountHeaderElement = cy.get('body').find('button[aria-haspopup="menu"]')
        accountHeaderElement.should('contain', 'JI').click()

        const settingsButtonElement = cy.get('.py-1')
        settingsButtonElement.within(() => {
            cy.contains('a', 'Settings').click()
        })
       
        const settingsHeaderElement = cy.get('body').find('h2.text-xl.font-semibold')
        settingsHeaderElement.should('contain', 'Settings')
        
        const accountButton = cy.contains('button', 'Account')
        accountButton.should('contain', 'Account')

        const companyButton = cy.contains('button', 'Company')
        companyButton.should('contain', 'Company').click()
        
        const editDetailsElement = cy.get('.py-4 > .group')
        editDetailsElement.within(() => {
            cy.contains('button', 'Edit Details').click()
        })

        const editCompanyDetailsTitle = cy.get('body').find('h3.text-xl.font-semibold')
        editCompanyDetailsTitle.should('contain', 'Edit Company Details')

        const companyInformationTitle = cy.get('.p-6')
        companyInformationTitle.within(() => {
            cy.get('h3').should('contain', 'Company Information')
        })


        /* COMPANY NAME */
        const companyNameElement = cy.contains('label', 'Company Name')
        companyNameElement.should('contain', 'Company Name')

        const companyNameInput = cy.get('#companyName').clear()
        companyNameInput.type(companyName)
        companyNameInput.invoke('val').should('eq', companyName)

        /* ZIP CODE */
        const zipCodeElement = cy.contains('label', 'Zip Code')
        zipCodeElement.should('contain', 'Zip Code')

        const zipCodeInput = cy.get('#zipCode').clear()
        zipCodeInput.type(zipCode)
        zipCodeInput.invoke('val').should('eq', zipCode)

        /* SSS No. */
        const sssNumberElement = cy.contains('label', 'SSS No.')
        sssNumberElement.should('contain', 'SSS No.')

        const sssNumberInput = cy.get('#SSSNo').clear()
        sssNumberInput.type(sssNo)
        sssNumberInput.invoke('val').should('eq', sssNo)

        /* TRADE NAME */
        const tradeNameElement = cy.contains('label', 'Trade Name')
        tradeNameElement.should('contain', 'Trade Name')

        const tradeNameInput = cy.get('#tradeName').clear()
        tradeNameInput.type(tradeName)
        tradeNameInput.invoke('val').should('eq', tradeName)

        /* CONTACT BUSINESS NUMBER */
        const contactBusinessNumberElement = cy.contains('label', 'Contact Business Number')
        contactBusinessNumberElement.should('contain', 'Contact Business Number')

        const contactBusinessNumberInput = cy.get('#contactBusinessNumber').clear()
        contactBusinessNumberInput.type(businessNumber)
        contactBusinessNumberInput.invoke('val').should('eq', businessNumber)

        /* HDMF No. */
        const hdmfNumberElement = cy.contains('label', 'HDMF No.')
        hdmfNumberElement.should('contain', 'HDMF No.')

        const hdmfNumberInput = cy.get('#HDMFNo').clear()
        hdmfNumberInput.type(hdmfNumber)
        hdmfNumberInput.invoke('val').should('eq', hdmfNumber)

        /* COUNTRY OF INCORPORATION */
        const countryOfIncorporationElement = cy.contains('label', 'Country of Incorporation')
        countryOfIncorporationElement.should('contain', 'Country of Incorporation')

        const countryOfIncorporationInput = cy.get('#countryOfIncorporation')
        countryOfIncorporationInput.select(countryOfIncorporation)
        countryOfIncorporationInput.invoke('val').should('eq', countryOfIncorporation)

        /* CONTACT BUSINESS EMAIL */
        const contactBusinessEmailElement = cy.contains('label', 'Contact Business Email')
        contactBusinessEmailElement.should('contain', 'Contact Business Email')

        const contactBusinessEmailInput = cy.get('#contactBusinessEmail').clear()
        contactBusinessEmailInput.type(contactBusinessEmail)
        contactBusinessEmailInput.invoke('val').should('eq', contactBusinessEmail)

        /* DATE OF INCORPORATION */
        /* const dateOfIncorporationElement = cy.contains('label', 'Date of Incorporation')
        dateOfIncorporationElement.should('contain', 'Date of Incorporation')

        const dateOfIncorporationInput = cy.get('#dateOfIncorporation')
        dateOfIncorporationInput.type(dateOfIncorporation)
        dateOfIncorporationInput.invoke('val').should('eq', dateOfIncorporation)
 */
        /* RDO */
       /*  const rdoElement = cy.contains('label', 'RDO')
        rdoElement.should('contain', 'RDO')

        const rdoInput = cy.get('#RDO').clear()
        rdoInput.type(RDO)
        rdoInput.invoke('val').should('eq', RDO) */

        /* CERTIFICATE OF INCORPORATION NUMBER*/
        const certificateOfIncorporationNumberElement = cy.contains('label', 'Certificate of Incorporation Number')
        certificateOfIncorporationNumberElement.should('contain', 'Certificate of Incorporation Number')

        const certificateOfIncorporationNumberInput = cy.get('#certificateOfIncorporationNumber').clear()
        certificateOfIncorporationNumberInput.type(certificateOfIncorporationNumber)
        certificateOfIncorporationNumberInput.invoke('val').should('eq', certificateOfIncorporationNumber)

        /* TIN */
        /* const tinElement = cy.contains('label', 'TIN')
        tinElement.should('contain', 'TIN')

        const tinInput = cy.get('#TIN').clear()
        tinInput.type(TIN)
        tinInput.invoke('val').should('eq', TIN) */

        /* NATURE OF BUSINESS */
        const natureOfBusinessElement = cy.contains('label', 'Nature of Business')
        natureOfBusinessElement.should('contain', 'Nature of Business')

        const natureOfBusinessInput = cy.get('#natureOfBusiness')
        natureOfBusinessInput.select(natureOfBusiness)
        natureOfBusinessInput.invoke('val').should('eq', natureOfBusiness)

        /* INCOME TAX OPTION */
        /* const incomeTaxOptionElement = cy.contains('label', 'Income Tax Option')
        incomeTaxOptionElement.should('contain', 'Income Tax Option')

        const incomeTaxOptionInput = cy.get('#incomeTaxOption').clear()
        incomeTaxOptionInput.type(incomeTaxOption)
        incomeTaxOptionInput.invoke('val').should('eq', incomeTaxOption) */

        /* PRINCIPAL BUSINESS ADDRESS */
        const principalBusinessAddressElement = cy.contains('label', 'Principal Business Address')
        principalBusinessAddressElement.should('contain', 'Principal Business Address')

        const principalBusinessAddressInput = cy.get('#principalBusinessAddress').clear()
        principalBusinessAddressInput.type(principalBusinessAddress)
        principalBusinessAddressInput.invoke('val').should('eq', principalBusinessAddress)

        /* PHIC NO. */
        const phicNoElement = cy.contains('label', 'PHIC No.')
        phicNoElement.should('contain', 'PHIC No.')

        const phicNoInput = cy.get('#PHICNo').clear()
        phicNoInput.type(phicNo)
        phicNoInput.invoke('val').should('eq', phicNo)


        const saveButton = cy.contains('button', 'Save')
        saveButton.should('exist').click()

        cy.wait(2000)
    })

    it('should be able to check company details', () => {
       
        const projectHeaderElement = cy.get('body').find('h2.text-xl.font-semibold')
        projectHeaderElement.should('contain', 'Dashboard')

        const accountHeaderElement = cy.get('body').find('button[aria-haspopup="menu"]')
        accountHeaderElement.should('contain', 'JI').click()

        const settingsButtonElement = cy.get('.py-1')
        settingsButtonElement.within(() => {
            cy.contains('a', 'Settings').click()
        })
       
        const settingsHeaderElement = cy.get('body').find('h2.text-xl.font-semibold')
        settingsHeaderElement.should('contain', 'Settings')
        
        const accountButton = cy.contains('button', 'Account')
        accountButton.should('contain', 'Account')

        const companyButton = cy.contains('button', 'Company')
        companyButton.should('contain', 'Company').click()
        
        const companyInformationElement = cy.get('.p-6')
        companyInformationElement.should('contain', 'Company Information')

        cy.contains('Firm Type').next('dd').should('contain', 'Corporation')
        cy.contains('Company Name').next('dd').should('contain', companyName)
        cy.contains('Zip Code').next('dd').should('contain', zipCode)
        cy.contains('SSS No').next('dd').should('contain', sssNo)
        cy.contains('Trade Name').next('dd').should('contain', tradeName)
        cy.contains('Contact Business Number').next('dd').should('contain', businessNumber)
        cy.contains('HDMF No').next('dd').should('contain', hdmfNumber)
        cy.contains('Country Of Incorporation').next('dd').should('contain', countryOfIncorporation)
        cy.contains('Contact Business Email').next('dd').should('contain', contactBusinessEmail)
        /* cy.contains('Date Of Incorporation').next('dd').should('contain', dateOfIncorporation) */
        /* cy.contains('RDO').next('dd').should('contain', RDO) */
        cy.contains('Certificate Of Incorporation Number').next('dd').should('contain', certificateOfIncorporationNumber)
        /* cy.contains('TIN').next('dd').should('contain', TIN) */
        cy.contains('Nature Of Business').next('dd').should('contain', natureOfBusiness)
        /* cy.contains('Income Tax Option').next('dd').should('contain', incomeTaxOption) */ 
        cy.contains('Principal Business Address').next('dd').should('contain', principalBusinessAddress)
        cy.contains('PHIC No').next('dd').should('contain', phicNo)
       
  })


  it('should be able to update company profile picture', () => {
       
        const projectHeaderElement = cy.get('body').find('h2.text-xl.font-semibold')
        projectHeaderElement.should('contain', 'Dashboard')

        const accountHeaderElement = cy.get('body').find('button[aria-haspopup="menu"]')
        accountHeaderElement.should('contain', 'JI').click()

        const settingsButtonElement = cy.get('.py-1')
        settingsButtonElement.within(() => {
            cy.contains('a', 'Settings').click()
        })
       
        const settingsHeaderElement = cy.get('body').find('h2.text-xl.font-semibold')
        settingsHeaderElement.should('contain', 'Settings')
        
        const accountButton = cy.contains('button', 'Account')
        accountButton.should('contain', 'Account')

        const companyButton = cy.contains('button', 'Company')
        companyButton.should('contain', 'Company').click()
        
        const editDetailsElement = cy.get('.py-4 > .group')
        editDetailsElement.within(() => {
            cy.contains('button', 'Edit Details').click()
        })

        const editCompanyDetailsTitle = cy.get('body').find('h3.text-xl.font-semibold')
        editCompanyDetailsTitle.should('contain', 'Edit Company Details')

        /* const companyInformationTitle = cy.get('body').find('.p-6')
        companyInformationTitle.should('contain', 'Company Information') */

        const companyInformationTitle = cy.get('.p-6')
        companyInformationTitle.within(() => {
            cy.get('h3').should('contain', 'Company Logo')
        })

       /*  const companyTitleElement = cy.get('h4.text-xl.font-semibold')
        companyTitleElement.should('contain', companyName)
        companyTitleElement.invoke('val').should('eq', companyName) */

        cy.contains('button', 'Change Photo').click();
      /*  // Assuming you want to upload a file named "new_photo.png"
        const fileName = 'sample-image.png';
        const fileType = 'image/png';

        // Upload a new photo
        cy.fixture(fileName).then(fileContent => {
        cy.get('#profile-upload').then(function(el) {
            const blob = Cypress.Blob.base64StringToBlob(fileContent, fileType);
            const file = new File([blob], fileName, { type: fileType });
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);

            el[0].files = dataTransfer.files;
            cy.wrap(el).trigger('change', { force: true });
        });
        }); */

        /* const saveButton = cy.contains('button', 'Save')
        saveButton.should('exist').click() */
    })

})