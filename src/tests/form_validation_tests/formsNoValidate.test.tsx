import { render, screen} from '@testing-library/react';
import React from "react";
import {clickNextButton} from "../helpers/clickNextAndBackButtons";
import userEvent from "@testing-library/user-event";
import {click_on_step, expect_step_completed, expect_steps_not_completed} from "../helpers/stepTestHelpers";
import App from "../../components/App";
import {fill_into_every_element} from "../helpers/fill_into_inputs_and_steps_helpers";

//Testing forms that do not need to be filled out to be valid.
// Integration test. Rendering App may be slow later on, but it's a major headache to get these
//tests working by only rendering the FormWizard.

describe('FormWizard - Valid forms', () => {

    test('Real Owner should be valid on Next click when not checked', async () => {

        render(<App />)
        const user = userEvent.setup()
        const step = screen.getByTestId("step-4")
        await user.click(step)
        await clickNextButton(user)
        await expect_step_completed(["Raunverulegir eigendur"], 0)
    })

    test('Political connections should not be valid on Next click when checked but no description provided', async () => {
        render(<App />)
        const user = userEvent.setup()
        await click_on_step(user, 5)
        const checkbox = screen.getByRole('checkbox')
        await user.click(checkbox)
        await clickNextButton(user)
        await expect_steps_not_completed(["Pólitísk tengsl"])
    })

    test('Political connections should be valid on Next click when not checked', async () => {
        render(<App />)
        const user = userEvent.setup()
        await click_on_step(user, 5)
        await clickNextButton(user)
        await expect_step_completed(["Pólitísk tengsl"])
    })

    test('Risk should always be valid on Next click', () => {

    })
})