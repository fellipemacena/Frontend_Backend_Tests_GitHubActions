import HomeActions from '../page_actions/homeAction'

export class SaucedemoHomePage{


    static validateTitleHomePage(){
        HomeActions.validateTitleHomePage();
    }

    static addItem1Cart(){
        HomeActions.addItem1Cart();
    }

    static goToCartPage(){
        HomeActions.goToCartPage();
    }

}

export default SaucedemoHomePage;