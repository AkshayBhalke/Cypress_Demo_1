//login and tenant flow also validation

import loginPage from "../../support/pageModels/loginPage"
import otHomePage from "../../support/pageModels/otHomePage"
import tenantHomePage from "../../support/pageModels/tenantHomePage"

describe('template spec', () => {

  let testData

  beforeEach(() => {
    cy.fixture('testData.json').then((data) => {
      testData = data
    })
    cy.visit('/')
  })

  it('Login to Tenant UI - Successful login', () => {
    
    otHomePage.loginToTenantApplication()
    tenantHomePage.elements.getTenantCreateButton().click()
    tenantHomePage.elements.getDialogTitle().should('have.text', 'General Settings')
    tenantHomePage.elements.getCustomerLabel().should('have.text', 'Customer*')
    tenantHomePage.elements.selectCustomerDropDown().click()
    tenantHomePage.elements.getDisplayNameLabel().should('have.text','Display Name*')
    tenantHomePage.elements.getDisplayNameField().type('a1 test')
    tenantHomePage.elements.getEnvironmentTypeLabel().should('have.text','Environment Type*')
    tenantHomePage.elements.selectEnvironmentTypeDropDown().click()
    tenantHomePage.elements.getSaveButtton().click()
    //tenantHomePage.elements.getTenantCreateSuccessfully().should('have.text','Tenant Created Successfully*')
    tenantHomePage.elements.getTenantCreatedSuccessfully()
    
  
  })
  

})
