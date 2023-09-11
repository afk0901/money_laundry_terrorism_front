/**
 * This test suite verifies if clicking on steps produces the correct forms.
 *
 */

describe('Click on steps and check the form', () => {

    beforeEach(()=> {
        // We want a clean state to verify that each step produces the correct form.
        cy.visit('localhost:3000')
    })

    it('should produce the correct form when step one is clicked', () => {
        cy.get('#step-0').click()
        cy.get(`[placeholder="Netfang]`)
    });

    it('should produce the correct form when step two is clicked', () => {
        cy.get('#step-1').click()
        cy.get(`[placeholder="Atvinna viðskiptavinar"]`)
    });

    it('should produce the correct form when step three is clicked', () => {
        cy.get('#step-2').click()
        cy.get(`[placeholder="Sláðu inn upplýsingar um tilgang og eðli viðskipta"]`)
    });

    it('should produce the correct form when step four is clicked', () => {
        cy.get('#step-3').click()
        cy.get(`[placeholder="Sláðu inn upplýsingar um uppruna fjármagns"]`)
    });

    it('should produce the correct form when step five is clicked', () => {
        cy.get('#step-4').click()
        cy.get('.container').contains("Er viðskiptavinur Raunverulegur eigandi?")
    });

    it('should produce the correct form when step six is clicked', () => {
        cy.get('#step-5').click()
        cy.get('.container').contains("Er viðskiptavinur með pólítísk tengsl?")
    });

    it('should produce the correct form when step seven is clicked', () => {
        cy.get('#step-6').click()
        cy.get('.container').contains("Hvar fellur viðskiptamaður í áhættumatið og hver er áhættan af fyrirhuguðum viðskiptum.")
    });
})