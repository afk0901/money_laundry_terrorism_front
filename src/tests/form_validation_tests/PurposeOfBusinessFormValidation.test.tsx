import {render, screen} from "@testing-library/react";
import React from "react";
import {
   fill_input_make_empty_expect_validation_error,
  initial_render_and_do_not_expect_validation_error
} from "../helpers/form_validation_test_helpers";

import userEvent from "@testing-library/user-event";
import FormWizard from "../../components/FormWizard/FormWizard";
import PurposeOfBusiness from "../../components/forms/PurposeOfBusiness";


const purpose_of_business_cant_be_empty_validation_error  = "Tilgangur og eðli viðskipta má ekki vera tómt"

const handleChange = (stateKey: string) => (newValue: any) => {}

const purpose_of_business_component = (value : string, next_button_clicked=false) => {
  return <PurposeOfBusiness description={value} onDescriptionChange={handleChange}
          next_button_clicked={next_button_clicked}
  />
}
describe('Purpose Of Business validation', () => {

  test('No validation error for Purpose Of Business when the user has not typed anything in initially', async () => {
    render(<FormWizard steps={[purpose_of_business_component(''), purpose_of_business_component('')]}/>)
    initial_render_and_do_not_expect_validation_error(purpose_of_business_cant_be_empty_validation_error);
  })

  test('Validates empty input after user types something in. Should only show the empty validation error.', async () => {

    render(<FormWizard steps={[purpose_of_business_component('Purpose Of Business'), purpose_of_business_component('')]}/>)
    await fill_input_make_empty_expect_validation_error(/tilgang og eðli viðskipta/i, 'Purpose of business',
                                                        purpose_of_business_cant_be_empty_validation_error);
    expect(screen.getByText(purpose_of_business_cant_be_empty_validation_error)).toBeInTheDocument();

  });

  test('Next button clicked but empty form - validation error', async () => {
    // Adding two components as the next button will not be displayed on the last step

    render(<FormWizard steps={[purpose_of_business_component('', true), purpose_of_business_component('Purpose Of Business')]}/>)
    // Clicking the step as we need to render the whole app to be able to click on the Next button
    const user = userEvent.setup()
    const nextButton = screen.getByText(/Next/i);
    await user.click(nextButton)
    expect(screen.getByText(purpose_of_business_cant_be_empty_validation_error)).toBeInTheDocument()
  })

})