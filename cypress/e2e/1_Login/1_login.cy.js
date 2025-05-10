import loginPage from '../../support/pageModels/loginPage';
import otHomePage from '../../support/pageModels/otHomePage';
import tenantHomePage from '../../support/pageModels/tenantHomePage';
import UiConstants from '../../support/constants/UiConstants';

describe('Tenant Flow Tests', () => {
  let testData;

  beforeEach(() => {
    cy.fixture('testData.json').then((data) => {
      testData = data;
    });
    cy.visit('/');
  });

  it('Login and verify Create Tenant form', () => {
    otHomePage.loginToTenantApp();

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
