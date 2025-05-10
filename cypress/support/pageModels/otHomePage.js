import loginPage from "./loginPage"

const otHomePage = {

    elements: {
        getMenuOptionButton: () => cy.get('.button-3-points > .material-icons'),
        getTenantMenuListItem: () => cy.get('.test_tenant_ui'),
    },

    loginToTenantApplication(_username, _password) {
        loginPage.loginToApplication(Cypress.config('username'), Cypress.config('password'))
        this.elements.getMenuOptionButton().click()
        cy.wait(2000)
        this.elements.getTenantMenuListItem().click()
        cy.url({ timeout: 8000 }).should('include', '/tenant')
    }
}

export default otHomePage