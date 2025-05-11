import otHomePage from '../support/pageModels/otHomePage';
import tenantHomePage from '../support/pageModels/tenantHomePage';
import customerPage from '../support/pageModels/customerPage';
import UiConstants from '../support/constants/UiConstants';

describe('Customer Dropdown Behavior', () => {
  // Visit the page and log in before each test
  beforeEach(() => {
    cy.visit('/');
    otHomePage.loginToTenantApp();
    tenantHomePage.createButton().click();
  });

  it('TC-01: Should show customer dropdown and list items correctly', () => {
    // Verify the customer label
    customerPage.customerLabel().should('have.text', UiConstants.Tenant.CUSTOMER_LABEL);
    customerPage.clickCustomerDropdown();
    customerPage.options().should('have.length.greaterThan', 0);

    // Blur the input and ensure the dropdown options are hidden
    customerPage.customerDropdownInput().blur();
    customerPage.dropdownContainer().should('not.exist');
  });

  it('TC-02: Should filter and select customer correctly', () => {
    customerPage.clickCustomerDropdown();
    customerPage.typeCustomer('1a');
    cy.wait(2000)
    // Ensure the input value is correct
    customerPage.customerDropdownInput().should('have.value', '1a');
    customerPage.selectCustomerByName('1a');
    customerPage.getSelectedCustomer().should('have.value', '1a');
    
    // Clear the customer selection and ensure the input is empty
    customerPage.clearCustomerSelection();
    customerPage.customerDropdownInput().should('have.value', '');
  });

  it('TC-03: Should handle invalid inputs correctly', () => {
    customerPage.clickCustomerDropdown();
    customerPage.typeCustomer('abc123');
    cy.contains(UiConstants.Common.NO_RESULT_TEXT).should('be.visible');
    customerPage.options().should('not.exist');
    // Test with a long input string and check for no result
    const longString = 'a'.repeat(300);
    customerPage.typeCustomer(longString);
    cy.contains(UiConstants.Common.NO_RESULT_TEXT).should('be.visible');
  });
});
