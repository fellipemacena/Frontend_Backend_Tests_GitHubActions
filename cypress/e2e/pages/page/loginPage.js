import LoginPageAction from "../page_actions/loginAction";

export class LoginPage {

    static loginEmailFail() {
        LoginPageAction.loginEmailFail();
    } 

    static loginPasswordFail() {
        LoginPageAction.loginPasswordFail();
    } 

    static loginSuccesfully() {
        LoginPageAction.loginSuccesfully();
    } 
}

export default LoginPage;
