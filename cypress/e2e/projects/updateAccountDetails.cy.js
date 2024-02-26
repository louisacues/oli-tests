import { login } from '../../utils/helpers/login'
import { goToHomePage } from '../../utils/helpers/goToHomePage'
import { accountFirstName, accountLastName, accountEmail, accountBirthDate, accountContactNumber, accountPosition, accountTIN, accountHDMFNo, accountSSSNo, accountPHICNo, emergencyContactEmail, emergencyContactFirstName, emergencyContactLastName, emergencyContactNumber, fileName, fileType} from './updateAccountConstants'

describe('Go to Home Page and', () => {
    beforeEach(() => {
        goToHomePage()
        login()
    })

    it('should be able to update account details', () => {
       
        const projectHeaderElement = cy.get('body').find('h2.text-xl.font-semibold')
        projectHeaderElement.should('contain', 'Dashboard')

        const accountHeaderElement = cy.get('body').find('button[aria-haspopup="menu"]')
        accountHeaderElement.should('exist').click()

        const settingsButtonElement = cy.get('.py-1')
        settingsButtonElement.within(() => {
            cy.contains('a', 'Settings').click()
        })
       
        const settingsHeaderElement = cy.get('body').find('h2.text-xl.font-semibold')
        settingsHeaderElement.should('contain', 'Settings')
        
        const accountButton = cy.contains('button', 'Account')
        accountButton.should('contain', 'Account')

        const accountDetailsTitle = cy.get(':nth-child(1) > .bg-white > form > .grid > :nth-child(2)')
        accountDetailsTitle.should('contain', 'Personal Details')
        
        /* FIRST NAME */
        const firstNameElement = cy.contains('label', 'First Name')
        firstNameElement.should('contain', 'First Name')
        cy.wait(1000)
        const firstNameInput = cy.get('#firstName')
        firstNameInput.clear().then(() => {
        firstNameInput.type(accountFirstName);
        firstNameInput.invoke('val').should('eq', accountFirstName);
        });

        /* LAST NAME */
        const lastNameElement = cy.contains('label', 'Last Name')
        lastNameElement.should('contain', 'Last Name')

        const lastNameInput = cy.get('#lastName').clear()
        lastNameInput.type(accountLastName)
        lastNameInput.invoke('val').should('eq', accountLastName)

        /* BIRTHDATE */
        const birthDateElement = cy.contains('label', 'Birthdate')
        birthDateElement.should('contain', 'Birthdate')

        const birthDateInput = cy.get('#birthDate').clear()
        birthDateInput.type(accountBirthDate)
        birthDateInput.invoke('val').should('eq', accountBirthDate)

        /* CONTACT NUMBER */
        const contactNumberElement = cy.contains('label', 'Contact Number')
        contactNumberElement.should('contain', 'Contact Number')

        const contactNumberInput = cy.get('#contactNumber').clear()
        contactNumberInput.type(accountContactNumber)
        contactNumberInput.invoke('val').should('eq', accountContactNumber)

        /* POSITION */
        const positionElement = cy.contains('label', 'Position')
        positionElement.should('contain', 'Position')

        const positionInput = cy.get('#position').clear()
        positionInput.type(accountPosition)
        positionInput.invoke('val').should('eq', accountPosition)

        /* TIN */
        const tinElement = cy.contains('label', 'TIN')
        tinElement.should('contain', 'TIN')

        const tinInput = cy.get('#TIN').clear()
        tinInput.type(accountTIN)
        tinInput.invoke('val').should('eq', accountTIN)

        /* SSS */
        const sssElement = cy.contains('label', 'SSS')
        sssElement.should('contain', 'SSS')

        const sssInput = cy.get('#SSSNo').clear()
        sssInput.type(accountSSSNo)
        sssInput.invoke('val').should('eq', accountSSSNo)

        /* PAG-IBIG */
        const hdmfNumberElement = cy.contains('label', 'Pag-ibig')
        hdmfNumberElement.should('contain', 'Pag-ibig')

        const hdmfNumberInput = cy.get('#HDMFNo').clear()
        hdmfNumberInput.type(accountHDMFNo)
        hdmfNumberInput.invoke('val').should('eq', accountHDMFNo)

        /* PHIC NO. */
        const phicNoElement = cy.contains('label', 'PHIC')
        phicNoElement.should('contain', 'PHIC')

        const phicNoInput = cy.get('#PHICNo').clear()
        phicNoInput.type(accountPHICNo)
        phicNoInput.invoke('val').should('eq', accountPHICNo)
        
       
        const saveButton = cy.contains('button', 'Save')
        saveButton.should('exist').click()
  })


  it('should be able to update emergency contact', () => {
       
        const projectHeaderElement = cy.get('body').find('h2.text-xl.font-semibold')
        projectHeaderElement.should('contain', 'Dashboard')

        const accountHeaderElement = cy.get('body').find('button[aria-haspopup="menu"]')
        accountHeaderElement.should('exist').click()

        const settingsButtonElement = cy.get('.py-1')
        settingsButtonElement.within(() => {
            cy.contains('a', 'Settings').click()
        })
       
        const accountButton = cy.contains('button', 'Account')
        accountButton.should('contain', 'Account')

        const emergencyContactTitle = cy.get('h1.col-span-2')
        emergencyContactTitle.should('contain', 'Emergency Contact')

        /* FIRST NAME */
        const emergencyContactFirstNameElement = cy.contains('label', 'First Name')
        emergencyContactFirstNameElement.should('contain', 'First Name')
        cy.wait(1000)

        const emergencyContactFirstNameInput = cy.get('#emergencyContactFirstName')
        emergencyContactFirstNameInput.clear().then(() => {
        emergencyContactFirstNameInput.type(emergencyContactFirstName);
        emergencyContactFirstNameInput.invoke('val').should('eq', emergencyContactFirstName);
        });


        /* LAST NAME */
        const emergencyContactLastNameElement = cy.contains('label', 'Last Name')
        emergencyContactLastNameElement.should('contain', 'Last Name')

        const emergencyContactLastNameInput = cy.get('#emergencyContactLastName').clear()
        emergencyContactLastNameInput.type(emergencyContactLastName)
        emergencyContactLastNameInput.invoke('val').should('eq', emergencyContactLastName)

        /* EMAIL */
        const emailElement = cy.contains('label', 'Email')
        emailElement.should('contain', 'Email')

        const emailInput = cy.get('#emergencyContactEmail').clear()
        emailInput.type(emergencyContactEmail)
        emailInput.invoke('val').should('eq', emergencyContactEmail)

        /* CONTACT NUMBER */
        const contactNumberElement = cy.contains('label', 'Contact Number')
        contactNumberElement.should('contain', 'Contact Number')

        const contactNumberInput = cy.get('#emergencyContactContactNumber').clear()
        contactNumberInput.type(emergencyContactNumber)
        contactNumberInput.invoke('val').should('eq', emergencyContactNumber)

        const saveButton = cy.contains('button', 'Save')
        saveButton.should('exist').click()
  })

  it('should be able to check Account Details', () => {
       
        const projectHeaderElement = cy.get('body').find('h2.text-xl.font-semibold')
        projectHeaderElement.should('contain', 'Dashboard')

        const accountHeaderElement = cy.get('body').find('button[aria-haspopup="menu"]')
        accountHeaderElement.should('exist').click()

        const settingsButtonElement = cy.get('.py-1')
        settingsButtonElement.within(() => {
            cy.contains('a', 'Settings').click()
        })
       
        const accountButton = cy.contains('button', 'Account')
        accountButton.should('contain', 'Account')

        /* CHECK ACCOUNT DETAILS */
        const accountDetailsTitle = cy.get(':nth-child(1) > .bg-white > form > .grid > :nth-child(2)')
        accountDetailsTitle.should('contain', 'Personal Details')

        cy.get('#firstName').should('have.value', accountFirstName)
        cy.get('#lastName').should('have.value', accountLastName)
        cy.get('#email').should('have.value', accountEmail)
        cy.get('#birthDate').should('have.value', accountBirthDate) 
        cy.get('#contactNumber').should('have.value', accountContactNumber)
        cy.get('#position').should('have.value', accountPosition)
        cy.get('#TIN').should('have.value', accountTIN)
        cy.get('#SSSNo').should('have.value', accountSSSNo)
        cy.get('#HDMFNo').should('have.value', accountHDMFNo)
        cy.get('#PHICNo').should('have.value', accountPHICNo)

        /* CHECK EMERGENCY CONTACT */
        const emergencyContactTitle = cy.get('h1.col-span-2')
        emergencyContactTitle.should('contain', 'Emergency Contact')

        cy.get('#emergencyContactFirstName').should('have.value', emergencyContactFirstName)
        cy.get('#emergencyContactLastName').should('have.value', emergencyContactLastName)
        cy.get('#emergencyContactEmail').should('have.value', emergencyContactEmail)
        cy.get('#emergencyContactContactNumber').should('have.value', emergencyContactNumber)
    })

  it('should be able to update profile picture', () => {
       
        const projectHeaderElement = cy.get('body').find('h2.text-xl.font-semibold')
        projectHeaderElement.should('contain', 'Dashboard')

        const accountHeaderElement = cy.get('body').find('button[aria-haspopup="menu"]')
        accountHeaderElement.should('exist').click()

        const settingsButtonElement = cy.get('.py-1')
        settingsButtonElement.within(() => {
            cy.contains('a', 'Settings').click()
        })
       
        const settingsHeaderElement = cy.get('body').find('h2.text-xl.font-semibold')
        settingsHeaderElement.should('contain', 'Settings')
        
        const accountButton = cy.contains('button', 'Account')
        accountButton.should('contain', 'Account')

        const accountDetailsTitle = cy.get(':nth-child(1) > .bg-white > form > .grid > :nth-child(2)')
        accountDetailsTitle.should('contain', 'Personal Details')
        
        const profilePicture = cy.get('.px-4 > :nth-child(2) > .flex')
        profilePicture.should('exist')
        
        const profileName = cy.get('.px-4 > .flex-col > div > .text-xl')
        profileName.should('exist')

        const confirmationButton = cy.contains('button', 'Change Photo')
        confirmationButton.should('exist').click()


        cy.fixture(fileName).then(fileContent => {
        cy.get('#profile-upload').then(function(el) {
            const blob = Cypress.Blob.base64StringToBlob(fileContent, fileType)
            const file = new File([blob], fileName, { type: fileType })
            const dataTransfer = new DataTransfer()
            dataTransfer.items.add(file)

            el[0].files = dataTransfer.files
            cy.wrap(el).trigger('change', { force: true })
        })
        })

        const saveButton = cy.contains('button', 'Save')
        saveButton.should('exist').click()

  })
})