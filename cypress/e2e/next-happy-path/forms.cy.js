const email = 'email@email.com'
const customer_job = 'some customer job'
const purpose_of_business = 'purpose of business is yada yada'
const origin_of_funds = 'origin of funds is yada yada'
const political_connections = 'Political connections is yada yada'

const next_id = '#next'
const back_id = "#back"

/**
 * Verifies if <= some number of steps are valid.
 * 
 * @param current_step - The number of the current step being validated (starting from 0)
 *
 */
const verify_valid_steps = (current_step) => {
    for (let i = 0; i <= current_step; i++) {
        cy.get(`#step-${i} .valid-step`).should('exist');
    }
};

/**
 * Validates if the input is invalid when next button is clicked.
 * @param feedback - validation feedback that contains the input.
 * @param step_number - number of the step that's invalid
 */
const click_next_and_invalidate = (feedback, step_number) => {
    cy.get(next_id).click();
    cy.get('.invalid-feedback').contains(feedback || 'má ekki vera tómt');
    console.log(step_number)
    cy.get(`#step-${step_number} .invalid-step`).should('exist')
};

/**
 * Fills in the input and clicks next
 *
 * @param selector - the css selector of the input
 * @param value - the input value
 *
 */
const fill_and_click_next = (selector, value) => {
    cy.get(selector).type(value);
    cy.get(next_id).click();
};

const verify_overview = () => {

    cy.get('.container').contains('Allt rétt?')
    cy.get('.container').contains('Netfang')
    cy.get('.container').contains(email)
    cy.get('.container').contains('Tilgangur og eðli viðskipta')
    cy.get('.container').contains(purpose_of_business)
    cy.get('.container').contains('Uppruni fjármagns')
    cy.get('.container').contains(origin_of_funds)
    cy.get('.container').contains('Raunverulegir eigendur')
    cy.get('.container').contains('Er raunverulegur eigandi')
    cy.get('.container').contains('Pólitísk tengsl')
    cy.get('.container').contains('Political connections is yada yada')
    cy.get('.container').contains('Áhætta af viðskiptum með hliðsjón af áhættumati')
    cy.get('.container').contains('Mikil')

    //step one, two, three, four, five and six should be valid now.
    verify_valid_steps(5)
}
describe('Click on next and check the forms', () => {

    it('should be able to go to the next step when the form is valid and produces validation errors correctly', () => {

        cy.visit('localhost:3000')

        // Email
        click_next_and_invalidate(undefined, 0)

        // Should produce validation error if email is invalid on clicking next,
        // otherwise, should be able to continue
        fill_and_click_next('[placeholder="Netfang"]', "wrongyemail")
        click_next_and_invalidate('ógildu sniði', 0)
        fill_and_click_next('[placeholder="Netfang"]', email)

        //step one should be valid now.
        verify_valid_steps(0)

        // Customer Job
        click_next_and_invalidate(undefined, 1)
        fill_and_click_next('[placeholder="Atvinna viðskiptavinar"]', customer_job)
        verify_valid_steps(1)

        // Purpose of business
        click_next_and_invalidate(undefined, 2)
        fill_and_click_next('.description', purpose_of_business)

        //step one, two and three should be valid now.
        verify_valid_steps(2)

        //Origin Of Funds
        click_next_and_invalidate(undefined, 3)
        fill_and_click_next('.description', origin_of_funds)

        //step one, two, three and four should be valid now.
        verify_valid_steps(3)

        //Real Owner
        cy.get('.checkbox').check()
        cy.get(next_id).click()

        //step one, two, three, four and five should be valid now.
        verify_valid_steps(4)

        //Political connections (without a description)
        cy.get(next_id).click()

        //step one, two, three, four, five and six should be valid now.
        verify_valid_steps(5)

        // Go back so we can validate the description box.
        cy.get(back_id).click()

        // Political connections (with description)
        cy.get('.checkbox').check()
        verify_valid_steps(4)
          //Step 6 should be invalid but others valid.
        click_next_and_invalidate('Slá verður inn pólitísk tengsl', 5)

        fill_and_click_next('.description', political_connections)

        //step one, two, three, four, five and six should be valid now.
        verify_valid_steps(5)

        // Risk (Small)
        cy.get('select').select('Lítil')
        cy.get(next_id).click()

        //step one, two, three, four, five, six and seven should be valid now.
        verify_valid_steps(5)

        cy.get(back_id).click()

        // Risk (Medium)
        cy.get('select').select('Miðlungs')
        cy.get(next_id).click()

        //step one, two, three, four, five, six and seven should be valid now.
        verify_valid_steps(6)

        cy.get(back_id).click()

        // Risk (High)
        cy.get('select').select('Mikil')
        cy.get(next_id).click()

        //step one, two, three, four, five, six and seven should be valid now.
        verify_valid_steps(6)

        // Verify the information in the overview
        verify_overview()

        //TODO: Verify overview with different risks.

        // Produce document
        cy.get('.produce_document_butt').click()
    })
})