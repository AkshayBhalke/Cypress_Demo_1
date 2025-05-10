import otHomePage from '../../support/pageModels/otHomePage';
import tenantHomePage from '../../support/pageModels/tenantHomePage';
import customerPage from '../../support/pageModels/customerPage';
import UiConstants from '../../support/constants/UiConstants';

describe('Customer Dropdown Behavior', () => {
  beforeEach(() => {
    cy.visit('/');
    otHomePage.loginToTenantApp();
    tenantHomePage.createButton.click();
  });

  it('TC-01: Should show customer dropdown and list items correctly', () => {
    customerPage.customerLabel.should('have.text', UiConstants.Tenant.CUSTOMER_LABEL);
    customerPage.clickCustomerDropdown();
    customerPage.options.should('have.length.greaterThan', 0);
    customerPage.customerDropdownInput.blur();
    customerPage.options.should('not.be.visible');
  });

  it('TC-02: Should filter and select customer correctly', () => {
    customerPage.clickCustomerDropdown();
    customerPage.typeCustomer('1a');
    customerPage.customerDropdownInput.should('have.value', '1a');
    customerPage.selectCustomerByName('1a');
    customerPage.getSelectedCustomer().should('have.text', '1a');
    customerPage.clearCustomerSelection();
    customerPage.customerDropdownInput.should('have.value', '');
  });

  it('TC-03: Should handle invalid and edge case inputs gracefully', () => {
    customerPage.clickCustomerDropdown();
    customerPage.typeCustomer('abc123');
    cy.contains(UiConstants.Common.NO_RESULT_TEXT).should('be.visible');
    customerPage.options.should('not.exist');
    const longString = 'a'.repeat(300);
    customerPage.typeCustomer(longString);
    cy.contains(UiConstants.Common.NO_RESULT_TEXT).should('be.visible');
  });
});
