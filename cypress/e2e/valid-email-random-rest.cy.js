import {verify_valid_steps, no_validation_error} from '../helpers/validation'
import {fill_and_click_next} from '../helpers/happyflow'

/**
 * This test suite verifies that:
 * - Email is filled correctly (valid format)
 * - All other forms are filled with random strings
 * - On the next-to-last step (Political Connections, step 5), the next button should be disabled 
 *   only when one or more inputs from previous steps are invalid
 */

const valid_email = 'test@example.com'
const next_id = '#next'

// Helper to generate random strings
const generateRandomString = (length = 10) => {
    return Math.random().toString(36).substring(2, 2 + length);
}

describe('Valid email with random inputs for other forms', () => {

    it('should fill email correctly, fill rest with random strings, and disable next button on step 5 when any previous step is invalid', () => {

        cy.visit('localhost:3000')

        // Step 0: Email Form - Fill with valid email
        no_validation_error()
        fill_and_click_next(next_id, '[placeholder="Netfang"]', valid_email)
        verify_valid_steps(0)

        // Step 1: Customer Employment - Fill with random string
        no_validation_error()
        fill_and_click_next(next_id, '[placeholder="Atvinna viðskiptavinar"]', generateRandomString())
        verify_valid_steps(1)

        // Step 2: Purpose of Business - Fill with random string
        no_validation_error()
        cy.get('.description').clear()
        fill_and_click_next(next_id, '.description', generateRandomString())
        verify_valid_steps(2)

        // Step 3: Origin of Funds - Fill with random string
        no_validation_error()
        cy.get('.description').clear()
        fill_and_click_next(next_id, '.description', generateRandomString())
        verify_valid_steps(3)

        // Step 4: Real Owner - Check checkbox
        no_validation_error()
        cy.get('.checkbox').check()
        cy.get(next_id).click()
        verify_valid_steps(4)

        // Step 5: Political Connections - Fill with random string
        no_validation_error()
        cy.get('.checkbox').check()
        cy.get('.description').clear()
        fill_and_click_next(next_id, '.description', generateRandomString())
        verify_valid_steps(5)

        // Step 6: Overview - Should be on overview page now
        cy.contains('Allt rétt?').should('be.visible')

        
        // Now go back to test that next button is disabled on step 5 when any previous step is invalid
        cy.get('#back').click() // Go back to Political Connections
        
        // Verify next button is enabled when all previous steps are valid
        cy.get(next_id).should('not.be.disabled')
        
        // Go back further to invalidate a previous step
        cy.get('#back').click() // Go back to Origin of Funds
        cy.get('#back').click() // Go back to Purpose of Business
        
        // Step 2: Clear the Purpose of Business field to make it invalid
        cy.get('.description').clear()
        cy.get(next_id).click()
        
        // Step 2 should now be invalid
        cy.get('#step-3 .invalid-step').should('exist')
        
        // Navigate forward to Political Connections - the step before Overview
        cy.get(next_id).click() // Go to Origin of Funds

        cy.get("#step-5").click() // Go to Political Connections
        
        // Step 5: Next button should be disabled because some step is invalid
        cy.get(next_id).should('be.disabled')
        
        // Go back and fix the invalid step
        cy.get('#back').click() // Go back to Real Owner
        cy.get('#back').click() // Go back to Origin of Funds
        
        // Fill Purpose of Business with random string again to fix it
        cy.get('.description').clear()
        fill_and_click_next(next_id, '.description', generateRandomString(15))
        verify_valid_steps(2)
        
        // Navigate forward again to step 5
        cy.get(next_id).click()
        cy.get(next_id).click()
        
        // Step 5: Next button should now be enabled since all steps are valid
        cy.get(next_id).should('not.be.disabled')
        
        // Proceed to overview
        cy.get(next_id).click()
        
        // Should be on overview page now
        cy.contains('Allt rétt?').should('be.visible')
        verify_valid_steps(4)
    })

    it('should disable next button on step 5 when earlier steps are untouched', () => {

        cy.visit('localhost:3000')

        // Jump directly to the next-to-last step (Political Connections)
        cy.get('#step-5').click()

        // Next should be disabled because prior steps are untouched (undefined)
        cy.get('#next').should('be.disabled')
    })
})
