class CustomerPage {

  customerLabel = () => cy.get('[apptestid="customer"]');
  customerDropdownInput = () => cy.get('[apptestid="customer_search_input"]');
  removeCustomerButton = () => cy.get('[apptestid="remove-customer"]');
  options = () => cy.get('.customer-name');
  dropdownContainer = () => cy.get('.dropdown-container')

  clickCustomerDropdown = () => {
    this.customerDropdownInput().click();
  };

  typeCustomer = (name) => {
    this.customerDropdownInput().type(name);
  };

  selectCustomerByName = (name) => {
    this.options().contains(name).click();
  };

  clearCustomerSelection = () => {
    this.removeCustomerButton().click();
  };

  getSelectedCustomer = () => {
    cy.scrollTo('top');
    return customerDropdownInput();

  };
}

export default new CustomerPage();
