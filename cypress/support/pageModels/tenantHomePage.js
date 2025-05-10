const tenantHomePage = {

    elements: {
        getTenantCreateButton: () => cy.get('tenant-root').shadow().find('[apptestid="btn_create-tenant"]'),
        getDialogTitle: () => cy.get('.dialog-title'),
        getCustomerLabel: () => cy.get('[apptestid="customer"]'),
        getCustomerInput: () => cy.get('[apptestid="customer_search_input"]'),
        getDisplayNameLabel: ()=> cy.get('[apptestid="display_name"]'),
        getDisplayNameField: ()=> cy.get('[apptestid="input_display_name"]'),
        getEnvironmentTypeLabel: ()=> cy.get('[apptestid="environment_type"]'),
        getEnvironmentTypeDropDown: ()=> cy.get('[apptestid="environmentType_dropdown"]'),
        getSaveButtton: () => cy.get('[apptestid="btn_save"]'),
        getTenantCreatedSuccessfully: () => cy.get('.success'),
        getSearchCustomer: ()=> cy.get('[apptestid="input_tenant_search"]'),
        
        
        

       selectCustomerDropDown() {
            this.getCustomerInput().click()
            return cy.get('[apptestid="customer.euid"]').eq(1)
        },
        
        typeDisplayName(Name){
            this.getDisplayNameField().type('a1 test')
        },

        selectEnvironmentTypeDropDown() {

            cy.get('[apptestid="environmentType_dropdown"]').click()
            return cy.get('[apptestid^="environmentType').eq(3)
        },

        getSaveButtton(){
            this.getSaveButtton().click()

        },
        
        TenantCreatedSuccessfully(){
            this.getTenantCreatedSuccessfully().should('be.visible')
        },


  
        // TenantCreatedSuccessfullyNotVisible(){
        //     //this.getTenantCreatedSuccessfully().should('not.be.visible')
        //     cy.get('.success').should('not.be.visible')
        // }
     
    },



    loginToApplication(_username, _password) {
        const sentArgs = { username: _username, password: _password }
        this.elements.getLoginPageTitleLabel().should('have.text', 'Vocera Operations Tools')
        this.elements.getSSOButton().click()
        

        cy.origin('https://login.tools.np.vocera.io/', { args: sentArgs }, ({ username, password }) => {
            cy.get('#username').type(username)
            cy.get('#password').type(password)
            cy.get('#kc-login').click()
        })
    }

}

export default tenantHomePage
