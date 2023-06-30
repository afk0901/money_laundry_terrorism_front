import { render} from '@testing-library/react';
import FormWizard from "../../components/FormWizard/FormWizard";
import React from "react";
import RealOwner from "../../components/forms/RealOwner";
import {clickNextButton} from "../helpers/clickNextAndBackButtons";
import userEvent from "@testing-library/user-event";
import {expect_step_completed} from "../helpers/stepTestHelpers";

//Testing forms that do not need to be filled out to be valid.

const handleChange = (stateKey: string) => (newValue: any) => {}

const real_owner_component = (is_real_owner : boolean) => {
  return <RealOwner is_real_owner={is_real_owner} onIsRealOwnerChange={handleChange("real_owner")} />
}

const render_formWizard_real_owner = (is_real_owner : boolean) => {
  render(<FormWizard steps={[real_owner_component(is_real_owner), real_owner_component(is_real_owner)]}/>)
}

describe('FormWizard - Valid forms', () => {

    test('Real Owner should be valid on Next click when not checked', async () => {
        render_formWizard_real_owner(false)
        const user = userEvent.setup()
        await clickNextButton(user)
        await expect_step_completed(["Raunverulegir eigendur"])
    })

    test('Real owner should be valid on Next click when checked', async () => {
        render_formWizard_real_owner(true)
        const user = userEvent.setup()
        await clickNextButton(user)
        await expect_step_completed(["Raunverulegir eigendur"])
    })

    test('Political connections should be valid on Next click when not checked', () => {

    })

    test('Risk should always be valid on Next click', () => {

    })
})