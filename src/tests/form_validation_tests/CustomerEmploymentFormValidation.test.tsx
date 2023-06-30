import {render, screen} from "@testing-library/react";
import React from "react";
import {
   fill_input_make_empty_expect_validation_error,
  initial_render_and_do_not_expect_validation_error
} from "../helpers/form_validation_test_helpers";

import CustomerEmployment from "../../components/forms/CustomerEmployment";
import userEvent from "@testing-library/user-event";
import FormWizard from "../../components/FormWizard/FormWizard";


const job_cant_be_empty_validation_error  = "Atvinna viðskiptavinar má ekki vera tómt"

const handleChange = (stateKey: string) => (newValue: any) => {}

const customer_employment_component = (value : string) => {
  return <CustomerEmployment
      customerEmployment={value}
      onCustomerEmploymentChange={handleChange("customer_employment")}
  />
}
describe('Job validation', () => {

  test('No validation error for Customer Job when the user has not typed anything in initially', async () => {
    render(<FormWizard steps={[customer_employment_component(''), customer_employment_component('')]}/>)
    initial_render_and_do_not_expect_validation_error(job_cant_be_empty_validation_error);
  })

  test('Validates empty input after user types something in. Should only show the empty validation error.', async () => {

    render(<FormWizard steps={[customer_employment_component('Job'), customer_employment_component('')]}/>)
    await fill_input_make_empty_expect_validation_error(/Atvinna viðskiptavinar/i, 'My Job',
                                                        job_cant_be_empty_validation_error);
    expect(screen.getByText(job_cant_be_empty_validation_error)).toBeInTheDocument();
  });

  test('Validates empty input if it contains only white spaces', async () => {
    render(<FormWizard steps={[customer_employment_component('Job'), customer_employment_component('')]}/>)
    await fill_input_make_empty_expect_validation_error(/Atvinna viðskiptavinar/i, '         ',
                                                        job_cant_be_empty_validation_error);
  })

  test('Next button clicked but empty form - validation error', async () => {
    // Adding two components as the next button will not be displayed on the last step

    render(<FormWizard steps={[customer_employment_component(''), customer_employment_component('Job')]}/>)
    // Clicking the step as we need to render the whole app to be able to click on the Next button
    const user = userEvent.setup()
    const nextButton = screen.getByText(/Next/i);
    await user.click(nextButton)
    expect(screen.getByText(job_cant_be_empty_validation_error)).toBeInTheDocument()
  })

})