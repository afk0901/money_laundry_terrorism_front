describe("Step Click and Validation Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should show validation errors when clicking each required step and then next button without filling fields", () => {
    const requiredSteps = [0, 1, 2, 3];

    requiredSteps.forEach((stepNumber) => {
      cy.log(`Testing step ${stepNumber}`);

      // Click on the step in the step bar
      cy.get(`#step-${stepNumber}`).click();

      // Go to next without filling any fields
      cy.get("#next").click();

      // Verify that validation error(s) appear
      cy.get(".invalid-feedback").should("be.visible");
    });
  });
});
