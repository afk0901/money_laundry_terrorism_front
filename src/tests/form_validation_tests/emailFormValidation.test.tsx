import {render, screen} from "@testing-library/react";
import App from "../../components/App";
import userEvent from "@testing-library/user-event";
import React from "react";
import {initial_render_and_do_not_expect_validation_error, fill_input_make_empty_expect_validation_error}
        from "../helpers/form_validation_test_helpers"

import {clickNextButton} from "../helpers/clickNextAndBackButtons"
import FormWizard from "../../components/FormWizard/FormWizard";
import EmailForm from "../../components/forms/EmailForm";

const email_cant_be_empty_validation_error = "Netfang má ekki vera tómt"
const email_has_invalid_format_validation_error = "Netfang er á ógildu sniði"

const handleChange = (stateKey: string) => (newValue: any) => {}

const email_component = (value : string) => {
  return <EmailForm email={value} onEmailChange={handleChange("email")}/>
}

const render_empty_email_component = (value : string = '') => {
  render(<FormWizard steps={[email_component(value), email_component(value)]}/>)
}

describe('Email Validation', () => {

  test('Next button clicked but empty form - validation error', async () => {
    render_empty_email_component()
    const user = userEvent.setup()
    await clickNextButton(user)
    const email_error_el = screen.queryByText(email_cant_be_empty_validation_error)
    expect(email_error_el).toBeInTheDocument()
  })

  test('Next button clicked but empty form - step-bar validation error', async () => {
    render_empty_email_component()
    const user = userEvent.setup()
    await clickNextButton(user)
    const step_bar_err_in_place = screen.queryByTestId('invalid-step')
    expect(step_bar_err_in_place).toBeInTheDocument()
  })

  test('No validation error for Netfang when the user has not typed anything in (empty email error)', async () => {
    initial_render_and_do_not_expect_validation_error(email_cant_be_empty_validation_error);
  })

  test('No validation error for Netfang when the user has not typed anything in (invalid email but not empty error)', async () => {
    initial_render_and_do_not_expect_validation_error(email_has_invalid_format_validation_error);
  })

  test('Validates empty input after user types something in. Should only show the empty validation error.', async () => {
    render_empty_email_component('Value')
    await fill_input_make_empty_expect_validation_error(/Netfang/i, 'test@test.com', email_cant_be_empty_validation_error);
    expect(screen.queryByText(email_has_invalid_format_validation_error)).not.toBeInTheDocument();
  });

  test('Validates invalid email - invalidEmail', async () => {
    render_empty_email_component()
    const user = userEvent.setup()
    const input = screen.getByPlaceholderText(/Netfang/i);
    await user.type(input, 'invalidEmail');
    expect(screen.getByText(email_has_invalid_format_validation_error)).toBeInTheDocument();
  });

  test('Validates invalid email - invalid@', async () => {
    render_empty_email_component()
    const user = userEvent.setup()
    const input = screen.getByPlaceholderText(/Netfang/i);
    await user.type(input, 'invalidEmail@');
    expect(screen.getByText(email_has_invalid_format_validation_error)).toBeInTheDocument();
  })

  test('Validates invalid email - (invalid@.', async () => {
    render_empty_email_component()
    const user = userEvent.setup()
    const input = screen.getByPlaceholderText(/Netfang/i);
    await user.type(input, 'invalidEmail@.');
    expect(screen.getByText(email_has_invalid_format_validation_error)).toBeInTheDocument();
  })

});