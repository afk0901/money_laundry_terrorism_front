import { no_validation_error, verify_valid_steps } from "../helpers/validation";
import { fill_and_click_next } from "../helpers/happyflow";

/**
 * This test suite verifies that:
 * - The produce_document_butt button is disabled when on the last step and any previous step is invalid or neutral
 * - The produce_document_butt button is enabled only when ALL steps are valid (on the last step)
 */

const email = "email@email.com";
const customer_job = "some customer job";

const next_id = "#next";
const produce_document_button = ".produce_document_butt";

describe("Produce document button disabled state on last step", () => {
  it("should have produce_document_butt disabled when not all steps are valid", () => {
    cy.visit("localhost:3000");

    // Fill step 0: Email
    no_validation_error();
    fill_and_click_next(next_id, '[placeholder="Netfang"]', email);
    verify_valid_steps(0);

    // Fill step 1: Customer Employment
    no_validation_error();
    fill_and_click_next(
      next_id,
      '[placeholder="Atvinna viðskiptavinar"]',
      customer_job,
    );
    verify_valid_steps(1);

    // Click on step 5 (last step) directly from step bar to navigate there
    cy.get("#step-6").click();

    // On last step, produce_document_butt should be disabled because step 2 is neutral/invalid
    cy.get(produce_document_button).should("be.disabled");
  });

  it("should have produce_document_butt disabled when some steps are invalid", () => {
    cy.visit("localhost:3000");

    // Fill step 0 with invalid email
    cy.get('[placeholder="Netfang"]').type("invalidemail");
    cy.get(next_id).click();

    cy.get("#step-1").click();
    // Fill step 1: Customer Employment
    no_validation_error();
    fill_and_click_next(
      next_id,
      '[placeholder="Atvinna viðskiptavinar"]',
      customer_job,
    );

    // Click on step 5 (last step) directly from step bar to navigate there
    cy.get("#step-6").click();

    // On last step, produce_document_butt should be disabled because step 0 has invalid email
    cy.get(produce_document_button).should("be.disabled");
  });
});
