import CartActions from '../page_actions/cartAction'

export class CartPage{

    static validateTitleCartPage(){
        CartActions.validateTitleCartPage();
    }

    static validateItemInCart(){
        CartActions.validateItemInCart();
    }

    static clickCheckoutButton(){
        CartActions.clickCheckoutButton();
    }

}

export default CartPage;