import {act, render, screen} from "@testing-library/react";
import App from "../../components/App";
import userEvent from "@testing-library/user-event";
import {clickNextButton} from "../helpers/clickNextAndBackButtons";
import React from "react";
import {expect_steps_not_completed} from "../helpers/stepTestHelpers";

const political_connection_validation_error = "Slá verður inn pólitísk tengsl eða afhaka við að þau séu til staðar"
test('Should not be valid if checkbox is checked but description is empty', async () => {
         render(<App />)
         const user = userEvent.setup()
         const step = screen.getByTestId ('step-5')

         await act( async () => {
             await user.click(step)
              })

         const checkbox = screen.getByLabelText('Er viðskiptavinur með pólítísk tengsl?')

         await act( async () => {
             await user.click(checkbox)
             })
          await act( async () => {
              await clickNextButton(user)
          })

         expect(screen.getByText(political_connection_validation_error)).toBeInTheDocument();
    })