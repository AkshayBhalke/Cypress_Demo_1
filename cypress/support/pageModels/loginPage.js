const loginPage = {

    elements: {
        getLoginPageTitleLabel: () => cy.get('.title'),
        getSSOButton: () => cy.get('.submit'),
        getLoginPageHeader: () => cy.get('[id="kc-page-title"]'),
    },

    loginToApplication(_username, _password) {
        const sentArgs = { username: _username, password: _password }
        this.elements.getLoginPageTitleLabel().should('have.text', 'Vocera Operations Tools')
        this.elements.getSSOButton().click()
        cy.wait(200)

        cy.origin('https://login.tools.np.vocera.io/', { args: sentArgs }, ({ username, password }) => {

            cy.get('#username').type(username)
            cy.get('#password').type(password)
            cy.get('#kc-login').click()

        })
    }
}

export default loginPage
