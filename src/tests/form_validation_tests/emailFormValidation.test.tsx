import {screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {initial_render_and_do_not_expect_validation_error, fill_input_make_empty_expect_validation_error}
        from "../helpers/form_validation_test_helpers"

import {render_component_with_form_wizard, email_component} from "../helpers/test_doubles/components_test_doubles";

const email_cant_be_empty_validation_error = "Netfang má ekki vera tómt"
const email_has_invalid_format_validation_error = "Netfang er á ógildu sniði"


describe('Email Validation', () => {

  test('No validation error for Netfang when the user has not typed anything in (empty email error)', async () => {
    initial_render_and_do_not_expect_validation_error(email_cant_be_empty_validation_error);
  })

  test('No validation error for Netfang when the user has not typed anything in (invalid email but not empty error)', async () => {
    initial_render_and_do_not_expect_validation_error(email_has_invalid_format_validation_error);
  })

  test('Validates empty input after user types something in. Should only show the empty validation error.', async () => {
    render_component_with_form_wizard(email_component('Value'))
    await fill_input_make_empty_expect_validation_error(/Netfang/i, 'test@test.com', email_cant_be_empty_validation_error);
    expect(screen.queryByText(email_has_invalid_format_validation_error)).not.toBeInTheDocument();
  });

  test('Validates invalid email - invalidEmail', async () => {
    render_component_with_form_wizard(email_component())
    const user = userEvent.setup()
    const input = screen.getByPlaceholderText(/Netfang/i);
    await user.type(input, 'invalidEmail');
    expect(screen.getByText(email_has_invalid_format_validation_error)).toBeInTheDocument();
  });

  test('Validates invalid email - invalid@', async () => {
    render_component_with_form_wizard(email_component())
    const user = userEvent.setup()
    const input = screen.getByPlaceholderText(/Netfang/i);
    await user.type(input, 'invalidEmail@');
    expect(screen.getByText(email_has_invalid_format_validation_error)).toBeInTheDocument();
  })

  test('Validates invalid email - (invalid@.', async () => {
    render_component_with_form_wizard(email_component())
    const user = userEvent.setup()
    const input = screen.getByPlaceholderText(/Netfang/i);
    await user.type(input, 'invalidEmail@.');
    expect(screen.getByText(email_has_invalid_format_validation_error)).toBeInTheDocument();
  })

});