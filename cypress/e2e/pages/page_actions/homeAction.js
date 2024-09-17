import HomeElements from '../page_elements/homeElements'

export class HomeActions{

    static validateTitleHomePage(){
        cy.wait(1000)
        cy.get(HomeElements.TITLE).should('be.visible').should('have.text','Products');
    }

    static addItem1Cart() {
        cy.wait(1000)
        cy.get(HomeElements.NAME_ITEM_1).should('be.visible').should('have.text','Sauce Labs Backpack')
        cy.get(HomeElements.ADD_TO_CART_ITEM_1).should('be.visible').click()
    }

    static goToCartPage(){
        cy.wait(1000)
        cy.get(HomeElements.CART_PAGE).should('be.visible').click()
    }


}

export default HomeActions;