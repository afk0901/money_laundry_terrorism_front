import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../components/App';
import {clickNextButtonNTimes} from "./helpers/clickNextAndBackButtons";
import {
    click_on_step,
    expect_one_text_element_to_be_completed_when_step_and_next_button_is_clicked,
    expectNStepsToBeCompleted
}
    from "./helpers/stepTestHelpers"

import {stepLabels, validationErrors} from "./helpers/labelsAndValidationErrors";
import userEvent from "@testing-library/user-event";


describe('Form Wizard Happy path - forward', () => {

    describe('Testing when clicked on individual steps', () => {

    stepLabels.forEach((text, index) => {

        test(`Step ${index + 1} is completed when next button is clicked`, async () => {
            render(<App/>);
            await expect_one_text_element_to_be_completed_when_step_and_next_button_is_clicked(stepLabels, index)
            });
        })

        test("Yfirlit step clicked", async () => {
            render(<App />)
            const user = userEvent.setup()
            await click_on_step(user, 7)
            const overview_text = screen.getByText(/Yfirlit/i);
            expect(overview_text).toBeInTheDocument();
            expect(screen.getByText(/Allt rétt/i)).toBeInTheDocument();
        })
    })


   describe('Testing when clicked on next button N times - should never produce validation error', () => {

    stepLabels.forEach((text, index) => {
        test(`when the form is valid and next button is clicked, step ${index + 1} then expect previous steps to be completed`, async () => {
            render(<App />);
            await clickNextButtonNTimes(index+1, validationErrors);
            await expectNStepsToBeCompleted(stepLabels, 0, index)
            });
        });

    test("Yfirlit step clicked", async () => {
            render(<App />)
            const user = userEvent.setup()
            await clickNextButtonNTimes(7, validationErrors)
            const overview_text = screen.getByText(/Yfirlit/i);
            expect(overview_text).toBeInTheDocument();
            expect(screen.getByText(/Allt rétt/i)).toBeInTheDocument();
        })
    })
});
