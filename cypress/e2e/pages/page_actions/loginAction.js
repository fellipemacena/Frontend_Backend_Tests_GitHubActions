import LoginElements from "../page_elements/loginElements";

export class LoginPageAction {

  static loginEmailFail() {
    cy.get(LoginElements.INPUT_USERNAME).should('be.visible').clear().type('userNameIncorrect');
    cy.get(LoginElements.INPUT_PASSWORD).should('be.visible').clear().type(LoginElements.DEFAULT_PASSWORD);
    cy.get(LoginElements.BUTTON_LOGIN).click();
    cy.get(LoginElements.ERRO_MESSAGE).should('be.visible');
  }

  static loginPasswordFail() {
    cy.get(LoginElements.INPUT_USERNAME).should('be.visible').clear().type(LoginElements.USERNAME_STANDARD_USER);
    cy.get(LoginElements.INPUT_PASSWORD).clear().type('WrongPassword');
    cy.get(LoginElements.BUTTON_LOGIN).click();
    cy.get(LoginElements.ERRO_MESSAGE).should('be.visible');
  }

  static loginSuccesfully(){
    cy.get(LoginElements.INPUT_USERNAME).should('be.visible').clear().type(LoginElements.USERNAME_STANDARD_USER);
    cy.get(LoginElements.INPUT_PASSWORD).clear().type(LoginElements.DEFAULT_PASSWORD);
    cy.get(LoginElements.BUTTON_LOGIN).click();
  }
}

export default LoginPageAction;
