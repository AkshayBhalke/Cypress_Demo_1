import otHomePage from '../../support/pageModels/otHomePage';
import tenantHomePage from '../../support/pageModels/tenantHomePage';
import customerPage from '../../support/pageModels/customerPage';
import UiConstants from '../../support/constants/UiConstants';

describe('Customer Dropdown Tests', () => {
  let testData;

  beforeEach(() => {
    cy.fixture('testData.json').then((data) => {
      testData = data;
    });
    cy.visit('/');
    otHomePage.loginToTenantApp();
    tenantHomePage.createButton.click();
  });

  it('TC-01 Customer name label is correct', () => {
    customerPage.customerLabel.should('have.text', UiConstants.Tenant.CUSTOMER_LABEL);
    customerPage.clickCustomerDropdown();
  });

  it('TC-02 Customer list shows on dropdown click', () => {
    customerPage.clickCustomerDropdown();
    customerPage.options.should('have.length.greaterThan', 0);
  });

  it('TC-03 Filter customer on input', () => {
    customerPage.clickCustomerDropdown();
    customerPage.typeCustomer('1a');
    customerPage.customerDropdownInput.should('have.value', '1a');
  });

  it('TC-04 Select specific customer', () => {
    customerPage.clickCustomerDropdown();
    customerPage.typeCustomer('1a');
    customerPage.selectCustomerByName('1a');
    customerPage.getSelectedCustomer().should('have.text', '1a');
  });

  it('TC-05 Show no result for invalid customer', () => {
    customerPage.clickCustomerDropdown();
    customerPage.typeCustomer('abc123');
    cy.contains(UiConstants.Common.NO_RESULT_TEXT).should('be.visible');
  });

  it('TC-06 Clear customer selection', () => {
    customerPage.clickCustomerDropdown();
    customerPage.typeCustomer('1a');
    customerPage.selectCustomerByName('1a');
    customerPage.clearCustomerSelection();
    customerPage.getSelectedCustomer().should('have.text', '1a');
  });

  it('TC-07 Dropdown closes on outside click', () => {
    customerPage.clickCustomerDropdown();
    customerPage.customerDropdownInput.blur();
    customerPage.options.should('not.be.visible');
  });

  it('TC-08 Handle long string input gracefully', () => {
    const longString = 'a'.repeat(300);
    customerPage.clickCustomerDropdown();
    customerPage.typeCustomer(longString);
    cy.contains(UiConstants.Common.NO_RESULT_TEXT).should('be.visible');
  });
});