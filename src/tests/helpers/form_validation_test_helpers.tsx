import {render, screen} from "@testing-library/react";
import App from "../../components/App";
import React from "react";
import userEvent from "@testing-library/user-event";


/**
   * Expects the error not to be in the document when the App is rendered.
   * @param the_error_not_expected - expected error to NOT be in the document.
 */
export const initial_render_and_do_not_expect_validation_error = (the_error_not_expected: string) => {
    render(<App/>);
    expect(screen.queryByText(the_error_not_expected)).not.toBeInTheDocument()
}

/**
    * Fills in the input, makes it empty (clears it) and asserts if there is a
    * validation error as expected.
    * Also asserts if there is only space and fails if that's the case
    *
    * @param placeholder - The input placeholder as a regular expression
    * @param value - The value to type into the input
    * @param errorMsg - The validation error message to assert for.
 */
export const fill_input_make_empty_expect_validation_error = async (placeholder : RegExp, value : string, errorMsg : string) => {
  const user = userEvent.setup()
  const input = screen.getByPlaceholderText(placeholder);

  //Writing something in and error should not be in the document
  await userEvent.type(input, value);
  expect(screen.queryByText(errorMsg)).not.toBeInTheDocument();

  //Clear the input and check the error
  await user.clear(input)
  expect(screen.getByText(errorMsg)).toBeInTheDocument();

  //Checking if the input only contains white-spaces.
  if(/^\s*$/.test(value)) {
    expect(screen.getByText(errorMsg)).toBeInTheDocument();
  }
};

/**
 * Clicks a checkbox and asserts that the given error message is not in the document.
 *
 * @param checkboxLabel - The label of the checkbox
 * @param errorMsg - The given error message that's not supposed to be in the document.
 */
export const click_checkbox_expect_validation_error = async (checkboxLabel : string, errorMsg : string) => {
  const user = userEvent.setup()
  const checkbox = screen.getByLabelText(checkboxLabel);

  await user.click(checkbox);
  expect(screen.queryByText(errorMsg)).not.toBeInTheDocument();
};

module.exports = {initial_render_and_do_not_expect_validation_error,
                  fill_input_make_empty_expect_validation_error, click_checkbox_expect_validation_error
}
