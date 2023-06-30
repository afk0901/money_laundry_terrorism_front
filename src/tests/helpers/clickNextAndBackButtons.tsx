import {screen} from "@testing-library/react";
import {UserEvent} from "@testing-library/user-event/setup/setup";
import userEvent from "@testing-library/user-event";
import {fill_into_every_element} from "./fill_into_inputs_and_steps_helpers";

/**
 * Clicks the next button
 *
 * @param user - User event that has been set up, for example user event.setup()
 */
export const clickNextButton = async (user : UserEvent) => {
    const nextButton = screen.getByRole('button', { name: /next/i });
    await user.click(nextButton);
}

/**
 * Clicks the back button
 *
 * @param user - User event that has been set up, for example user event.setup()
 */
export const clickBackButton = async (user : UserEvent) => {
    const backButton = screen.getByRole('button', { name: /previous/i });
    await user.click(backButton)
}

/**
 * Clicks the next button N times and fills into every input on the page
 * to make the form valid. Also asserts that there are no validation errors
 * on the way when the next button is clicked N times if validationErrors array is provided.
 *
 * @param n - How many times the next button is clicked on
 * @param validationErrors - An Optional list of validation errors to not be in the document when things are valid
 */
export async function clickNextButtonNTimes(n : number, validationErrors : string[] = []) {
    const user = userEvent.setup()
    if (n <= 0) return;

    // Initially, there should be no validation error for the current step.
    const initialValidationError = screen.queryByText(validationErrors[n-1]) !== null;
    expect(initialValidationError).toBe(false);

    // Fill into inputs and checkboxes.
    await fill_into_every_element(user);
    await clickNextButton(user);

    // The next validation error should not appear in the next step when the next button is clicked.
    const nextValidationErrorFound = n < validationErrors.length ? screen.queryByText(validationErrors[n]) !== null : false;
    // The current step should not display any validation error either.
    const currentValidationError = screen.queryByText(validationErrors[n-1]) !== null;

    // Expect no validation errors to be visible.
    expect(currentValidationError || nextValidationErrorFound).toBe(false);

    await clickNextButtonNTimes(n - 1, validationErrors);
}



module.exports = {clickNextButton, clickBackButton, clickNextButtonNTimes}