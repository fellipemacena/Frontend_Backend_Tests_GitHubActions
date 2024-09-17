///<reference types = "cypress"/>
import LoginPage from "../page/loginPage";
import HomePage from "../page/homePage";
import CartPage from "../page/cartPage";
import CheckoutPage from "../page/checkoutPage";

describe("Feature:Fluxo completo de compra e checkout no site Saucedemo", () => {
  it("Login, seleção de item e checkout", () => {
    //Acesso a página inicial
    cy.visit("https://www.saucedemo.com/");

    //Login
    LoginPage.loginSuccesfully();

    //Valida acesso a Home Page
    HomePage.validateTitleHomePage();

    //Adiciona o item ao carrinho
    HomePage.addItem1Cart();

    //Acessa a página do carrinho
    HomePage.goToCartPage();

    //Valida acesso a página do carrinho
    CartPage.validateTitleCartPage();

    //Valida Item do carrinho
    CartPage.validateItemInCart();

    //Clica no botão de checkout
    CartPage.clickCheckoutButton();

    //Valida acesso na página de checkout
    CheckoutPage.validateTitleCheckoutPage();

    //Preenche formulário de checkout
    CheckoutPage.fillFormCheckout();

    //Clica no botão de continuar
    CheckoutPage.clickContinueButton();

    //Acessa a próxima página de checkout
    CheckoutPage.validateCheckoutOverviewTitle();

    //Valida informações de checkout para finalizar
    CheckoutPage.validateInformationCartCheckout();

    //Clica no botão de finalizar
    CheckoutPage.clickFinishButton();

    //Valida mensagem final
    CheckoutPage.validateFinalCheckoutMessage();
  });
});
