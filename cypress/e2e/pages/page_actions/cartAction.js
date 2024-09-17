import CartElements from '../page_elements/cartElements'

export class CartActions{

    static validateTitleCartPage(){
        cy.get(CartElements.TITLE).should('be.visible').should('have.text','Your Cart');
    }

    static validateItemInCart() {
        cy.get(CartElements.ITEM_1_CART).should('be.visible').should('have.text','Sauce Labs Backpack')
    }

    static clickCheckoutButton(){
        cy.get(CartElements.CHECKOUT_BUTTON).should('be.visible').click()
    }


}

export default CartActions;