import CheckoutElements from '../page_elements/checkoutElements'

export class CheckoutActions{

    static validateTitleCheckoutPage(){
        cy.get(CheckoutElements.TITLE).should('be.visible').should('have.text','Checkout: Your Information');
    }

    static fillFormCheckout() {
        cy.get(CheckoutElements.FIRST_NAME_FIELD).should('be.visible').type('firstNameSaucedemo').should('have.value','firstNameSaucedemo')
        cy.wait(500)
        cy.get(CheckoutElements.LAST_NAME_FIELD).should('be.visible').type('lastNameSaucedemo').should('have.value','lastNameSaucedemo')
        cy.wait(500)
        cy.get(CheckoutElements.ZIP_CODE_FIELD).should('be.visible').type('15687531').should('have.value','15687531')
        cy.wait(500)
    }

    static clickContinueButton(){
        cy.get(CheckoutElements.CONTINUE_BUTTON).should('be.visible').click()
    }

    static validateCheckoutOverviewTitle(){
        cy.get(CheckoutElements.TITLE).should('be.visible').should('have.text','Checkout: Overview');
    }

    static validateInformationCartCheckout(){
        cy.get(CheckoutElements.ITEM_NAME).should('be.visible').should('have.text','Sauce Labs Backpack');
        cy.get(CheckoutElements.ITEM_PRICE).should('be.visible').should('have.text','$29.99');
        cy.get(CheckoutElements.PRICE_TOTAL).should('be.visible').should('have.text','Total: $32.39');
    }

    static clickFinishButton(){
        cy.get(CheckoutElements.FINISH_BUTTON).should('be.visible').click()
    }

    static validateFinalCheckoutMessage(){
        cy.get(CheckoutElements.FINAL_CHECKOUT_MESSAGE).should('be.visible').should('have.text','Thank you for your order!');
    }


}

export default CheckoutActions;