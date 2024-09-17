import CheckoutActions from '../page_actions/checkoutAction'

export class CheckoutPage{

    static validateTitleCheckoutPage(){
        CheckoutActions.validateTitleCheckoutPage();
    }

    static fillFormCheckout(){
        CheckoutActions.fillFormCheckout();
    }

    static clickContinueButton(){
        CheckoutActions.clickContinueButton();
    }

    static validateCheckoutOverviewTitle(){
        CheckoutActions.validateCheckoutOverviewTitle();
    }

    static validateInformationCartCheckout(){
    CheckoutActions.validateInformationCartCheckout();
}

    static clickFinishButton(){
        CheckoutActions.clickFinishButton();
    }

    static validateFinalCheckoutMessage(){
        CheckoutActions.validateFinalCheckoutMessage();
    }
    


}

export default CheckoutPage;