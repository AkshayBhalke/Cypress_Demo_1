import UiConstants from '../constants/UiConstants';

class LoginPage {
    get loginPageTitleLabel() {
        return cy.get('.title');
    }

    get ssoButton() {
        return cy.get('.submit');
    }

    get loginPageHeader() {
        return cy.get('[id="kc-page-title"]');
    }

    get userName() {
        return cy.get('#username');
    }

    get password() {
        return cy.get('#password');
    }

    get loginButton(){
        return cy.get('#kc-login');
    }

    login(username, password) {
        this.loginPageTitleLabel.should('have.text', UiConstants.Login.PAGE_TITLE);
        this.ssoButton.click();
        cy.wait(200);

        cy.origin('https://login.tools.np.vocera.io/', { args: { username, password } }, ({ username, password }) => {
            this.userName.type(username);
            this.password.type(password);
            this.loginButton.click();
        });
    }
}

export default new LoginPage();