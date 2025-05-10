import UiConstants from '../constants/UiConstants';

class TenantHomePage {
    get createButton() {
      return cy.get('tenant-root').shadow().find('[apptestid="btn_create-tenant"]');
    }
  
    get dialogTitle() {
      return cy.get('.dialog-title');
    }
  
    get customerLabel() {
      return cy.get('[apptestid="customer"]');
    }
  
    get customerInput() {
      return cy.get('[apptestid="customer_search_input"]');
    }
  
    get displayNameLabel() {
      return cy.get('[apptestid="display_name"]');
    }
  
    get displayNameField() {
      return cy.get('[apptestid="input_display_name"]');
    }
  
    get environmentTypeLabel() {
      return cy.get('[apptestid="environment_type"]');
    }
  
    get environmentTypeDropdown() {
      return cy.get('[apptestid="environmentType_dropdown"]');
    }
  
    get saveButton() {
      return cy.get('[apptestid="btn_save"]');
    }
  
    get successToast() {
      return cy.get('.success');
    }
  
    get searchCustomerField() {
      return cy.get('[apptestid="input_tenant_search"]');
    }
  
    selectCustomerFromDropdown() {
      this.customerInput.click();
      return cy.get('[apptestid="customer.euid"]').eq(1).click();
    }
  
    enterDisplayName(name) {
      this.displayNameField.type(name);
    }
  
    selectEnvironmentType() {
      this.environmentTypeDropdown.click();
      return cy.get('[apptestid^="environmentType"]').eq(3).click();
    }
  
    saveTenant() {
      this.saveButton.click();
    }
  
    verifyTenantCreated() {
      this.successToast.should('be.visible');
    }
  }
  export default new TenantHomePage();
  