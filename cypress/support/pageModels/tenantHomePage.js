import UiConstants from '../constants/UiConstants';

class TenantHomePage {
  createButton = () => cy.getShadowElement('tenant-root', '[apptestid="btn_create-tenant"]')
  dialogTitle = () => cy.get('.dialog-title');
  customerLabel = () => cy.get('[apptestid="customer"]');
  customerInput = () => cy.get('[apptestid="customer_search_input"]');
  displayNameLabel = () => cy.get('[apptestid="display_name"]');
  displayNameField = () => cy.get('[apptestid="input_display_name"]');
  environmentTypeLabel = () => cy.get('[apptestid="environment_type"]');
  environmentTypeDropdown = () => cy.get('[apptestid="environmentType_dropdown"]');
  saveButton = () => cy.get('[apptestid="btn_save"]');
  successToast = () => cy.get('.success');
  searchCustomerField = () => cy.get('[apptestid="input_tenant_search"]');

  selectCustomerFromDropdown = (name) => {
    this.customerInput().click();
    return cy.get('[apptestid="customer.euid"]')
      .filter((element) => {
        return Cypress.$(element).text() === name;
      })
      .click();
  };

  enterDisplayName = (name) => {
    this.displayNameField().type(name);
  };

  selectEnvironmentType = (env) => {
    this.environmentTypeDropdown().click();
    return cy.get('[apptestid^="environmentType"]')
      .filter((element) => {
        return Cypress.$(element).text() === env;
      })
      .click();
  };

  saveTenant = () => {
    this.saveButton().click({ force: true });
  };

  verifyTenantCreated = () => {
    this.successToast().should('be.visible');
  };
}

export default new TenantHomePage();
