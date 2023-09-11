/**
 * This module contains validation helpers for testing purposes.
 * Such as verifying the step states or verify if the input
 * is invalid.
 *
 */

/**
 * Validates if the input is invalid when next button is clicked.
 *
 * @param next_id - the id of the next button
 * @param feedback - validation feedback that contains the input.
 * @param step_number - number of the step that's invalid
 *
 */
export const click_next_and_invalidate = (next_id, feedback, step_number) => {
    cy.get(next_id).click();
    cy.get('.container').contains(feedback)
    cy.get(`#step-${step_number} .invalid-step`).should('exist')
};

/**
 * Verifies if <= some number of steps are valid.
 *
 * @param current_step - The number of the current step being validated (starting from 0)
 *
 */
export const verify_valid_steps = (current_step) => {
    for (let i = 0; i <= current_step; i++) {
        cy.get(`#step-${i} .valid-step`).should('exist');
    }
};

/**
 * Reduces the risk of accidental validation errors when there are supposed to be no validation errors.
 *
 */
export const no_validation_error = () => {
     cy.get('.container').contains('má ekki vera tómt').should('not.exist')
     cy.get('.container').contains('ógildu sniði').should('not.exist')
     cy.get('.container').contains('Slá verður inn pólitísk tengsl').should('not.exist')
     cy.get('.container').not('.invalid')
}

exports = {verify_valid_steps, no_validation_error}
