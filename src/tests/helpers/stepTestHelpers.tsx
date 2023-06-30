import {fill_into_every_element} from "./fill_into_inputs_and_steps_helpers";
import {clickNextButton} from "./clickNextAndBackButtons";
import userEvent from "@testing-library/user-event";
import {screen} from "@testing-library/react";
import {UserEvent} from "@testing-library/user-event/setup/setup";

/**
 * Click on a step according to the stepIndex parameter
 *
 * @param user - userEvent.setup()
 * @param stepIndex - The index of the step in the step-bar
 */
async function click_on_step(user : UserEvent, stepIndex : number) {
    const step = screen.getByTestId(`step-${stepIndex}`);
    await user.click(step);
}

/**
 * Asserts that a random step is completed.
 *
 * @param stepLabels - The step labels of the step-bar.
 * @param stepIndex - Index of the corresponding step label of the step to assert.
 */
export async function expect_step_completed(stepLabels : string[] , stepIndex : number  = 0) {
     const completedElements = screen.getAllByText(stepLabels[stepIndex])
                                    .filter(element => element.classList.contains('completed'));
          expect(completedElements.length).toBe(1);
}

/**
 * Expects N steps to be completed starting from a specified step number to
 * another specified step number. Expects a range of steps to be completed.
 * For example, step 0 to step 6 or step 1 to step 4 and so on.
 *
 * @param stepLabels - Array of step-labels.
 * It can be all the step labels or simply just the step labels of the steps you are checking on
 *
 * @param startStepNumber - the number of the starting step, 0 indexed.
 * For example, the first step would be number 0, the second step number 1 and so on
 *
 * @param endStepNumber - the number of the ending step, 0 indexed.
 * For example, ending on the first step would be number 0, the second step number 1 and so on
 *
 */
export async function expectNStepsToBeCompleted(stepLabels : string[], startStepNumber : number, endStepNumber : number ) {

    let completedElements = 0
    // For each text label, check if everything from that text label is completed
    stepLabels.slice(startStepNumber, endStepNumber + 1).forEach((textElement) => {
      // Do we find textElement with the completed class?
      const text_elements = screen.getAllByText(textElement)
      const text_labels = text_elements.filter(element => element.classList.contains('completed'));
      completedElements += text_labels.length
    });
    expect(completedElements).toBe(endStepNumber + 1);
}

/**
   * Expect one of the textElements (the step labels) to be completed; with other words,
   * one random step should be completed when the next button is clicked on the random step.
   *
   * @param stepLabels - step labels text
   * @param stepIndex - the index of the step - the step number
   */
  export async function expect_one_text_element_to_be_completed_when_step_and_next_button_is_clicked(stepLabels : string[], stepIndex : number) {

        const user = userEvent.setup()

        // Click on a random step
        await click_on_step(user, stepIndex)
        // Fill into inputs and checkboxes
        await fill_into_every_element(user) // This is slowing things down, find a way to fill into only elements in the step
        await clickNextButton(user)

        // Expect that random step to be completed.
        await expect_step_completed(stepLabels, stepIndex)
  }

/**
 * Expects all the given step-bar icons to be in the document
 *
 * @param stepBarIcons - Array of step-bar icons to be in the document
 */
export async function expectAllStepIconsInDocument(stepBarIcons : HTMLElement[]) {
        stepBarIcons.forEach(icon => {
        expect(icon).toBeInTheDocument();
        expect(icon).toContainHTML('svg');
    });
  }

  module.exports = {expect_one_text_element_to_be_completed_when_step_and_next_button_is_clicked,
                    expectNStepsToBeCompleted, expectAllStepIconsInDocument, expect_step_completed}