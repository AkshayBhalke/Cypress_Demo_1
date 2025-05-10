import UiConstants from '../constants/UiConstants';

class LoginPage {
    loginPageTitleLabel = () => cy.get('.title');
    ssoButton = () => cy.get('.submit');
    loginPageHeader = () => cy.get('[id="kc-page-title"]');
    userName = () => cy.get('#username');
    password = () => cy.get('#password');
    loginButton = () => cy.get('#kc-login');

    login(username, password) {
        this.loginPageTitleLabel.should('have.text', UiConstants.Login.PAGE_TITLE);
        this.ssoButton.click();
        cy.wait(200);

        cy.origin('https://login.ocera.io/', { args: { username, password } }, ({ username, password }) => {
            cy.get('#username').should('be.visible').type(username);
            cy.get('#password').should('be.visible').type(password);
            cy.get('#kc-login').should('be.enabled').click();
        });
    }
}

export default new LoginPage();