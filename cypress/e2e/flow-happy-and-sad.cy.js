import {verify_valid_steps, no_validation_error, click_next_and_invalidate}
        from '../helpers/validation'

import {fill_and_click_next} from '../helpers/happyflow'

/**
 * This test suit verifies the flow of the application by
 * clicking next for each form and also by leaving it invalidated
 * and checks the state of the step-bar.
 * Tests the happy path with a sad path.
 *
 **/

const email = 'email@email.com'
const customer_job = 'some customer job'
const purpose_of_business = 'purpose of business is yada yada'
const origin_of_funds = 'origin of funds is yada yada'
const political_connections = 'Political connections is yada yada'

const next_id = '#next'
const back_id = "#back"

const empty_feedback_substring = 'má ekki vera tómt'



describe('Click on next and check the forms', () => {

    it('should be able to go to the next step when the form is valid and produces validation errors correctly and overview should be correctly produced', () => {

        cy.visit('localhost:3000')

        // Email
        no_validation_error()
        click_next_and_invalidate(next_id, empty_feedback_substring, 0)

        // Should produce validation error if email is invalid on clicking next,
        // otherwise, should be able to continue
        fill_and_click_next(next_id,'[placeholder="Netfang"]', "wrongyemail")
        click_next_and_invalidate(next_id,'ógildu sniði', 0)
        fill_and_click_next(next_id, '[placeholder="Netfang"]', email)

        //step one should be valid now.
        verify_valid_steps(0)

        // Customer Job
        no_validation_error()
        click_next_and_invalidate(next_id,empty_feedback_substring, 1)
        fill_and_click_next(next_id, '[placeholder="Atvinna viðskiptavinar"]', customer_job)
        verify_valid_steps(1)

        // Purpose of business
        no_validation_error()
        click_next_and_invalidate(next_id,empty_feedback_substring, 2)
        fill_and_click_next(next_id, '.description', purpose_of_business)

        //step one, two and three should be valid now.
        verify_valid_steps(2)

        //Origin Of Funds
        no_validation_error()
        click_next_and_invalidate(next_id,empty_feedback_substring, 3)
        fill_and_click_next(next_id, '.description', origin_of_funds)

        //step one, two, three and four should be valid now.
        verify_valid_steps(3)

        //Real Owner
        no_validation_error()
        cy.get('.checkbox').check()
        cy.get(next_id).click()

        //step one, two, three, four and five should be valid now.
        verify_valid_steps(4)

        cy.get(next_id).click()

        //Political connections (without a description)
        no_validation_error()
        verify_valid_steps(5)

        // Go back so we can validate the description box.
        cy.get(back_id).click()
        verify_valid_steps(5)

        // Political connections (with description)
        no_validation_error()
        cy.get('.checkbox').check()

        //Step 6 should be invalid but others valid.
        click_next_and_invalidate(next_id, 'Slá verður inn pólitísk tengsl', 5)

        fill_and_click_next(next_id, '.description', political_connections)

        //step one, two, three, four, five and six should be valid now.
        verify_valid_steps(5)

        // Produce document
        cy.get('.produce_document_butt').click()
    })
})