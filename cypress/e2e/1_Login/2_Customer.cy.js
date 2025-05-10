import otHomePage from "../../support/pageModels/otHomePage"
import tenantHomePage from "../../support/pageModels/tenantHomePage"
import customerPage from "../../support/pageModels/CustomerPage"



describe('Customer Validation', () => {
    // beforeEach(()=>{
    //     cy.visit('/')
    // })


    let testData

    beforeEach(() => {
        cy.fixture('testData.json').then((data) => {
            testData = data
        })
        cy.visit('/')
        otHomePage.loginToTenantApplication()
        tenantHomePage.elements.getTenantCreateButton().click()
        tenantHomePage.elements.getDialogTitle().should('have.text', 'General Settings')



    })

    it('TC-01 Customer name select from the customer dropdown', () => {      //pass
        customerPage.elements.getCustomerLabel().should('have.text', 'Customer*')
        customerPage.elements.getCustomerDropDownInput().click()

    })

    it('TC-02 Should display customer name list on click', () => {
        customerPage.elements.clickDropDown()
        customerPage.elements.getOptions().should('have.length.greaterThan', 0)  //check at least one customer visible

    })

 
    it('TC-03 Should filter customer name on typing', () => {                  //pass
        customerPage.elements.clickDropDown()
        customerPage.elements.typeCustomer('1a')
        customerPage.elements.getCustomerDropDownInput().should('have.value', '1a')   //1a is input elemnets and input el store user entered text in the value attribute, not as inner text
    })



    it('TC-04 Should select correct customer', () => {
        customerPage.elements.clickDropDown()
        customerPage.elements.typeCustomer('1a')
        customerPage.elements.getSelectCustomer('1a')
        customerPage.elements.getSelectedValue().should('have.text', '1a')

    })


    it('TC-05 Should show No result found on invalid input', () => {
        customerPage.elements.clickDropDown()
        customerPage.elements.typeCustomer('abc123')        //trying search for non-existent name 
        cy.contains('No Result').should('be.visible')      //verify that 'No Result' found is shown

    })



    it('TC-06 Should clear selection properly', () => {
        customerPage.elements.clickDropDown()
        customerPage.elements.typeCustomer('1a')
        customerPage.elements.getSelectCustomer('1a')
        customerPage.elements.clearSelection()
        customerPage.elements.getSelectedValue().should('have.text', '1a')
    })

    it('TC-07 Should close dropdown on outside click', () => {
        customerPage.elements.clickDropDown()
        customerPage.elements.getCustomerDropDownInput().blur() // triggers blur
        customerPage.elements.getOptions().should('not.be.visible')

    })


    it('TC-08 Should handle long string', () => {
        const longString = 'a'.repeat(300)
        customerPage.elements.clickDropDown()
        customerPage.elements.typeCustomer(longString)
        cy.contains('No Result').should('be.visible')

    })




    //     // customerPage.elements.getCustomerInput('a1')



    // //  customerPage.elements.getOptions().contains('1a')









})


