///<reference types = "cypress"/>
import LoginPage from "../page/loginPage";

describe("Feature: Testes de login no site saucedemo.com", () => {
  beforeEach("", () => {
    cy.visit("https://www.saucedemo.com/");
  });

    it("Login com usuário incorreto", () => {
      LoginPage.loginEmailFail();
    });

    it("Login com senha incorreto", () => {
      LoginPage.loginPasswordFail();
    });

    it("Login com dados corretos", () => {
      LoginPage.loginSuccesfully();
    });
  });
