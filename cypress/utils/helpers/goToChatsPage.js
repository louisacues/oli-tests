export function goToChatsPage() {
    const chatsHrefElement = cy.get('body').find('a[href="/conversations"]')
    chatsHrefElement.should('exist');
    chatsHrefElement.click();
  }