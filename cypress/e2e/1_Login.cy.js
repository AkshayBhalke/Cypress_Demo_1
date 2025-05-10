import otHomePage from '../support/pageModels/otHomePage';
import tenantHomePage from '../support/pageModels/tenantHomePage';
import UiConstants from '../support/constants/UiConstants';

describe('Tenant Flow - Login and Create Tenant', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('TC-01: should successfully login, open Create Tenant form, and create a tenant', () => {
    otHomePage.loginToTenantApp();
    tenantHomePage.createButton().should('be.visible').click();

    // Verify the dialog and form labels are as expected
    tenantHomePage.dialogTitle().should('have.text', UiConstants.Tenant.DIALOG_TITLE);
    tenantHomePage.customerLabel().should('have.text', UiConstants.Tenant.CUSTOMER_LABEL);
    tenantHomePage.displayNameLabel().should('have.text', UiConstants.Tenant.DISPLAY_NAME_LABEL);
    tenantHomePage.environmentTypeLabel().should('have.text', UiConstants.Tenant.ENVIRONMENT_TYPE_LABEL);
    // Select customer and fill the form
    tenantHomePage.selectCustomerFromDropdown();
    tenantHomePage.enterDisplayName('a1 test');
    tenantHomePage.selectEnvironmentType();
    // Save and verify tenant creation
    tenantHomePage.saveTenant();
    tenantHomePage.verifyTenantCreated();
  });
});
