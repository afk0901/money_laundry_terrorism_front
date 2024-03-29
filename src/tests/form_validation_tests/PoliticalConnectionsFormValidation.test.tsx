import React from "react";
import {act, render, screen} from "@testing-library/react";
import FormWizard from "../../components/FormWizard/FormWizard";
import PoliticalConnections from "../../components/forms/PoliticalConnections";
import {fill_input_make_empty_expect_validation_error} from "../helpers/form_validation_test_helpers";
import userEvent from "@testing-library/user-event";

const political_connection_validation_error = "Slá verður inn pólitísk tengsl eða afhaka við að þau séu til staðar"

const handleChange = (stateKey: string = '') => (newValue: any) => {}

// Components initial state
const political_connection_component = (value : string, has_political_connections=false, next_button_clicked=false) => {
    return <PoliticalConnections description={value}
                                 has_political_connection={has_political_connections}
                                 onDescriptionChange={handleChange}
                                 onHasPoliticalConnectionChange={handleChange('political_connections')}
                                 next_button_clicked={next_button_clicked}
  />
}

describe('Political Connections Form Validation test', () => {

    test('No validation error for Political Connections when the user has not checked the checkbox', async () => {
        render(<FormWizard produce_document={handleChange} steps={[political_connection_component(''), political_connection_component('')]}/>)
        expect(screen.queryByText(political_connection_validation_error)).not.toBeInTheDocument()
    })

    test('No validation error should be shown initially when Political connections is checked', async () => {
        render(<FormWizard produce_document={handleChange} steps={[political_connection_component('', true), political_connection_component('', true)]}/>)
        expect(screen.queryByText(political_connection_validation_error)).not.toBeInTheDocument()
    })

    test('Can click on the checkbox', async () => {

        //Expecting that the checkbox has not been clicked on.
        // Checking for the checkbox in this test case as we need to set the props of the mock component manually
      render(<FormWizard produce_document={handleChange} steps={[political_connection_component('', ),
        political_connection_component('')]}/>)

      const user = userEvent.setup()
      const checkbox = screen.getByLabelText('Er viðskiptavinur með pólítísk tengsl?')
      await user.click(checkbox)
    })

    test('Validates empty input after user checks the checkbox and types something in the description box.' +
                'Should only show the empty validation error.', async () => {

        render(<FormWizard produce_document={handleChange} steps={[political_connection_component('Political connections', true),
            political_connection_component('')]}/>)

        // Description checkbox is shown; we are expecting that the checkbox is already clicked on.
        await act( async () => {
            await fill_input_make_empty_expect_validation_error(/nánari upplýsingar um tengslin/i, 'Political Connections',
                political_connection_validation_error);
        })
  });
})