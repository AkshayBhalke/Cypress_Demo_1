class CustomerPage {

  get customerLabel() {
    return cy.get('[apptestid="customer"]');
  }

  get customerDropdownInput() {
    return cy.get('[apptestid="customer_search_input"]');
  }

  get removeCustomerButton() {
    return cy.get('[apptestid="remove-customer"]');
  }

  get options() {
    return cy.get('.customer-name');
  }

  clickCustomerDropdown() {
    this.customerDropdownInput.click();
  }

  typeCustomer(name) {
    this.customerDropdownInput.type(name);
  }

  selectCustomerByName(name) {
    this.options.contains(name).click();
  }

  clearCustomerSelection() {
    this.removeCustomerButton.click();
  }

  getSelectedCustomer() {
    return this.customerDropdownInput;
  }
}

export default new CustomerPage();