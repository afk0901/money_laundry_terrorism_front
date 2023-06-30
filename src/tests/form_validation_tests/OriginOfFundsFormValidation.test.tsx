import {render, screen} from "@testing-library/react";
import React from "react";
import {
   fill_input_make_empty_expect_validation_error,
  initial_render_and_do_not_expect_validation_error
} from "../helpers/form_validation_test_helpers";

import userEvent from "@testing-library/user-event";
import FormWizard from "../../components/FormWizard/FormWizard";
import OriginOfFunds from "../../components/forms/OriginOfFunds";


const origin_of_funds_cant_be_empty_validation_error  = "Uppruni fjármagns má ekki vera tómt"

const handleChange = (stateKey: string) => (newValue: any) => {}

const origin_of_funds_component = (value : string, next_button_clicked=false) => {
  return <OriginOfFunds description={value} onDescriptionChange={handleChange}
          next_button_clicked={next_button_clicked}
  />
}
describe('Origin Of Funds validation', () => {

  test('No validation error for Origin Of Funds validation when the user has not typed anything in initially', async () => {
    render(<FormWizard steps={[origin_of_funds_component(''), origin_of_funds_component('')]}/>)
    initial_render_and_do_not_expect_validation_error(origin_of_funds_cant_be_empty_validation_error);
  })

  test('Validates empty input after user types something in. Should only show the empty validation error.', async () => {

    render(<FormWizard steps={[origin_of_funds_component('Origin Of Funds'), origin_of_funds_component('')]}/>)
    await fill_input_make_empty_expect_validation_error(/uppruna fjármagns/i, 'Origin Of Funds',
                                                        origin_of_funds_cant_be_empty_validation_error);
    expect(screen.getByText(origin_of_funds_cant_be_empty_validation_error)).toBeInTheDocument();

  });

  test('Next button clicked but empty form - validation error', async () => {
    // Adding two components as the next button will not be displayed on the last step

    render(<FormWizard steps={[origin_of_funds_component('', true), origin_of_funds_component('Origins Of Funds')]}/>)
    // Clicking the step as we need to render the whole app to be able to click on the Next button
    const user = userEvent.setup()
    const nextButton = screen.getByText(/Next/i);
    await user.click(nextButton)
    expect(screen.getByText(origin_of_funds_cant_be_empty_validation_error)).toBeInTheDocument()
  })

})