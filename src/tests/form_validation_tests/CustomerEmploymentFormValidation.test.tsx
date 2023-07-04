import {screen} from "@testing-library/react";
import {
   fill_input_make_empty_expect_validation_error,
  initial_render_and_do_not_expect_validation_error
} from "../helpers/form_validation_test_helpers";

import {render_component_with_form_wizard, customer_employment_component} from "../helpers/test_doubles/components_test_doubles";


const job_cant_be_empty_validation_error  = "Atvinna viðskiptavinar má ekki vera tómt"

describe('Job validation', () => {

  test('No validation error for Customer Job when the user has not typed anything in initially', async () => {
    render_component_with_form_wizard(customer_employment_component())
    initial_render_and_do_not_expect_validation_error(job_cant_be_empty_validation_error);
  })

  test('Validates empty input after user types something in. Should only show the empty validation error.', async () => {

    render_component_with_form_wizard(customer_employment_component('Job'))
    await fill_input_make_empty_expect_validation_error(/Atvinna viðskiptavinar/i, 'My Job',
                                                        job_cant_be_empty_validation_error);
    expect(screen.getByText(job_cant_be_empty_validation_error)).toBeInTheDocument();
  });

  test('Validates empty input if it contains only white spaces', async () => {
    render_component_with_form_wizard(customer_employment_component('         '))
    await fill_input_make_empty_expect_validation_error(/Atvinna viðskiptavinar/i, '         ',
                                                        job_cant_be_empty_validation_error);
  })

})