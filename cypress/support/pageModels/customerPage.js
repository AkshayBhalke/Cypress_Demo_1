const customerPage = {
    elements: {
        getCustomerLabel: () => cy.get('[apptestid="customer"]'),
        getCustomerDropDownInput: () => cy.get('[apptestid="customer_search_input"]'),
        getremoveCustomer: () => cy.get('[apptestid="remove-customer"]'),


        selectCustomerDropDown() {
            this.getCustomerDropDownInput().click()
            return cy.get('[apptestid="customer.euid"]').eq(1)
        },



        // main dropdown field 
        getCustomerDropDownInput() {
            return cy.get('[apptestid="customer_search_input"]')
        },

        //finding all options listed inside the dropdown
        //its usefull for checking options are displayed is working 
        getOptions() {
            return cy.get('.customer-name').click()

        },


        //click on the dropdown open list
        clickDropDown() {
            this.getCustomerDropDownInput().click()
        },


        //typing a customer name for searching
        typeCustomer(name) {

            this.getCustomerDropDownInput().type(name)
          cy.get('[apptestid="customer.euid"]').eq(0).click()
          //  cy.get('.customer-name').eq(0).click()

        },


        //it find and click the once matching the text name from dropdown
        getSelectCustomer(name) {
            this.getOptions().contains(name).click()
        },

        //to reset the dropdown to default get

        clearSelection() {
            this.getremoveCustomer().click()
        },

        //reuse () retrive the currently selected value 
        getSelectedValue() {
            return this.getCustomerDropDownInput()
        }




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
export default customerPage