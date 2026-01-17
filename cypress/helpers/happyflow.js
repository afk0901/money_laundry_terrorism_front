/**
 * This module contains everything needed for the happy flow of the application,
 * such as filling into the forms or checking values and clicking the next and back buttons in
 * a way the input is supposed to be valid.
 */

import { verify_valid_steps } from "./validation";

/**
 * Fills in the input and clicks next
 *
 * @param selector - the css selector of the input
 * @param value - the input value
 * @param next_id - the id of the next button
 */
export const fill_and_click_next = (next_id, selector, value) => {
  cy.get(selector).type(value);
  cy.get(next_id).click();
};

/**
 * Verifying if the overview states the correct information.
 * Risk changes, but has fixed value, so we want to
 * check the overview with different risk values.
 *
 */
export const verify_overview = (
  email,
  purpose_of_business,
  origin_of_funds,
  risk,
) => {
  cy.get(".container").contains("Allt rétt?");
  cy.get(".container").contains("Netfang");
  cy.get(".container").contains(email);
  cy.get(".container").contains("Tilgangur og eðli viðskipta");
  cy.get(".container").contains(purpose_of_business);
  cy.get(".container").contains("Uppruni fjármagns");
  cy.get(".container").contains(origin_of_funds);
  cy.get(".container").contains("Raunverulegir eigendur");
  cy.get(".container").contains("Er raunverulegur eigandi");
  cy.get(".container").contains("Pólitísk tengsl");
  cy.get(".container").contains("Political connections is yada yada");
  cy.get(".container").contains(
    "Áhætta af viðskiptum með hliðsjón af áhættumati",
  );
  cy.get(".container").contains(risk);

  //step one, two, three, four, five and six should be valid now.
  verify_valid_steps(5);
};

exports = { fill_and_click_next };
