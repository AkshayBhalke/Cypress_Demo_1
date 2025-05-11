import loginPage from './loginPage';
import UiConstants from '../constants/UiConstants';

class OtHomePage {
  //elements=>
  menuOptionButton = () => cy.get('.button-3-points > .material-icons');
  tenantMenuListItem = () => cy.get('.test_tenant_ui');
  logoutButton = () => cy.get(".logout")

  //methods=>
  loginToTenantApp = () => {
    loginPage.login(Cypress.config('username'), Cypress.config('password'));
    this.menuOptionButton().click();
    cy.wait(2000);
    this.tenantMenuListItem().click();
    cy.url({ timeout: 8000 }).should('include', UiConstants.Common.TENANT_URL);
  };
}

export default new OtHomePage();
