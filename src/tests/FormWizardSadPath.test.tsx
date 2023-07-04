import App from "../components/App";
import userEvent from "@testing-library/user-event";
import {clickNextButton, clickNextButtonNTimes} from "./helpers/clickNextAndBackButtons";
import {render, screen} from "@testing-library/react";
import {stepLabels, validationErrors} from "./helpers/labelsAndValidationErrors";
import {click_on_step, expect_steps_not_completed} from "./helpers/stepTestHelpers";

describe('Sad path - Empty form and next button clicked', () => {

    describe('Testing when clicked on individual steps', () => {

        stepLabels.forEach((text, index) => {
            // Everything after the first four steps should always be valid.
            // See formsNoValidate.test.tsx for tests for these forms.

            if(index < 4) {
                test(`Step ${index + 1} is not completed when next button is clicked`, async () => {
                    render(<App/>);
                    const user = userEvent.setup()
                    await click_on_step(user, index)
                    await clickNextButton(user)
                    await expect_steps_not_completed(stepLabels, index)
                });
            }
            })
        })


    describe('Testing when clicked on next button N+1 times - should produce validation error at step N+1', () => {

    stepLabels.forEach((text, index) => {
        test(`Next button clicked ${index + 1} but empty form - validation error`, async () => {
            render(<App/>)
            const user = userEvent.setup()
            await clickNextButtonNTimes(index, validationErrors);
            await clickNextButton(user)
            //Expecting the validation errors are in the correct order.
            const error_el = screen.queryByText(validationErrors[index])
            expect(error_el).toBeInTheDocument()
        })

        test('Next button clicked but empty form - step-bar validation error', async () => {
            render(<App/>)
            const user = userEvent.setup()
            await clickNextButtonNTimes(index, validationErrors);
            await clickNextButton(user)
            const step_bar_err_in_place = screen.queryByTestId('invalid-step')
            expect(step_bar_err_in_place).toBeInTheDocument()
        })
    })
})
     })

