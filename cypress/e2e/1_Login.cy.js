import loginPage from '../support/pageModels/loginPage';
import otHomePage from '../support/pageModels/otHomePage';
import tenantHomePage from '../support/pageModels/tenantHomePage';
import UiConstants from '../support/constants/UiConstants';

describe('Tenant Flow - Login and Create Tenant', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('User Should login, open Create Tenant form, and successfully create a tenant', () => {
    otHomePage.loginToTenantApp();
    tenantHomePage.createButton.should('be.visible');
    tenantHomePage.createButton.click();
    tenantHomePage.dialogTitle.should('have.text', UiConstants.Tenant.DIALOG_TITLE);
    tenantHomePage.customerLabel.should('have.text', UiConstants.Tenant.CUSTOMER_LABEL);
    tenantHomePage.selectCustomerFromDropdown();
    tenantHomePage.displayNameLabel.should('have.text', UiConstants.Tenant.DISPLAY_NAME_LABEL);
    tenantHomePage.enterDisplayName('a1 test');
    tenantHomePage.environmentTypeLabel.should('have.text', UiConstants.Tenant.ENVIRONMENT_TYPE_LABEL);
    tenantHomePage.selectEnvironmentType();
    tenantHomePage.saveTenant();
    tenantHomePage.verifyTenantCreated();
  });
});
