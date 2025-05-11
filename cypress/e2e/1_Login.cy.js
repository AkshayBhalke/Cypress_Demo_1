import otHomePage from '../support/pageModels/otHomePage';
import tenantHomePage from '../support/pageModels/tenantHomePage';
import UiConstants from '../support/constants/UiConstants';


describe('Tenant Flow - Login and Create Tenant', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('TC-01: should successfully login, open Create Tenant form, and create a tenant', () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const displayName = `a${randomNum} test`

    otHomePage.loginToTenantApp();
    cy.verifyElementHaveText(otHomePage.logoutButton(),"Logout")
    tenantHomePage.createButton().should('be.visible').click()

    // Verify the dialog and form labels are as expected
    cy.verifyElementHaveText(tenantHomePage.dialogTitle(),UiConstants.Tenant.DIALOG_TITLE)
    cy.verifyElementHaveText(tenantHomePage.customerLabel(),UiConstants.Tenant.CUSTOMER_LABEL)
    cy.verifyElementHaveText(tenantHomePage.displayNameLabel(),UiConstants.Tenant.DISPLAY_NAME_LABEL)
    cy.verifyElementHaveText(tenantHomePage.environmentTypeLabel(),UiConstants.Tenant.ENVIRONMENT_TYPE_LABEL)

    // Select customer and fill the form
    tenantHomePage.selectCustomerFromDropdown("1a");
    tenantHomePage.enterDisplayName(displayName);
    tenantHomePage.selectEnvironmentType("test");
    
    // Save and verify tenant creation
    tenantHomePage.saveTenant();
    tenantHomePage.verifyTenantCreated();
  });
});
