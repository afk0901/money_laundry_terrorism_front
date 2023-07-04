import {
    customer_employment_component,
    render_component_with_form_wizard
} from "../helpers/test_doubles/components_test_doubles";
import userEvent from "@testing-library/user-event/index";
import {screen} from "@testing-library/react";

const job_cant_be_empty_validation_error  = "Atvinna viðskiptavinar má ekki vera tómt"

test('Next button clicked but empty form - validation error', async () => {
    // Adding two components as the next button will not be displayed on the last step

    render_component_with_form_wizard(customer_employment_component())
    // Clicking the step as we need to render the whole app to be able to click on the Next button
    const user = userEvent.setup()
    const nextButton = screen.getByText(/Next/i);
    await user.click(nextButton)
    expect(screen.getByText(job_cant_be_empty_validation_error)).toBeInTheDocument()
  })

