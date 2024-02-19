import { login } from '../../utils/helpers/login'
import { goToHomePage } from '../../utils/helpers/goToHomePage'
import { goToChatsPage } from '../../utils/helpers/goToChatsPage'
import {
    allConversationsTab,
    clientsTab,
    internalTab,
    newConversationInformation,
    newConversationButton,
    selectParticipantsErrorMessage,
    selectParticipantInput,
    selectedParticipantButton,
    noOptionsErrorMessage,
    removeParticipantButton,
    selectedParticipantNameOnInput,
    firstChatBox,
    allChatDivs,
    sendMessageInput,
    sendMessageButton,

} from '../../utils/helpers/getSendMessageOnChatElements'

describe('Send message to Clients and Internal Members tests', () => { 
    beforeEach( () =>{
        goToHomePage()
        login()
        goToChatsPage()
      })
      it('should navigate to All Conversations, Clients and Internal Chats', () => {
        cy.get(allConversationsTab).should('have.attr', 'data-headlessui-state', 'selected');
        cy.get(clientsTab).click();
        cy.get(clientsTab).should('have.attr', 'data-headlessui-state', 'selected');
        cy.get(internalTab).click();
        cy.get(internalTab).should('have.attr', 'data-headlessui-state', 'selected');
      });
      it('should start a new conversation', () => {

        cy.contains(newConversationInformation).should('not.exist')
        cy.get(newConversationButton).should('exist')
        cy.get(newConversationButton).click()
        cy.contains(newConversationInformation).should('exist')

        cy.get(newConversationButton).eq(0).click()
        cy.contains(newConversationInformation).should('not.exist')
        cy.get(newConversationButton).click()

        cy.contains(selectParticipantsErrorMessage).should('not.exist')
        cy.get(newConversationButton).eq(1).click() // start conversation now button
        cy.contains(selectParticipantsErrorMessage).should('exist')

        cy.get(selectParticipantInput).type("aaaaaaaaaaaaaa")
        cy.contains(noOptionsErrorMessage).should('exist')
        cy.get(selectParticipantInput).clear()

        cy.get(selectParticipantInput).type("padua corp llc")
        cy.get(selectParticipantInput).type("{enter}")
        cy.get(selectedParticipantButton).should('exist')
        cy.get(removeParticipantButton).should('exist')

        cy.get(removeParticipantButton).click()
        cy.get(selectedParticipantNameOnInput).should('not.exist')
        cy.get(removeParticipantButton).should('not.exist')

        cy.get(selectParticipantInput).type("padua corp llc")
        cy.get(selectParticipantInput).type("{enter}")
        cy.get(newConversationButton).eq(1).click()
      });
      it.only('should add new message to the newly created chat', () => {
        cy.get(firstChatBox).click();
        let length;
        cy.get(allChatDivs).its('length').then(len => {
            length = len;
        }).then(() => {
            cy.get(sendMessageButton).click()
            cy.get(allChatDivs).should('have.length', length);

            // Now that we have the length, we can proceed with the other actions and assertions
            cy.get(allChatDivs)
            cy.get(sendMessageInput).type("sample")
            cy.get(sendMessageButton).click()
            
            // Perform the assertion inside this .then() block
            cy.get(allChatDivs).should('have.length', length + 1);
        });
      });
    
})