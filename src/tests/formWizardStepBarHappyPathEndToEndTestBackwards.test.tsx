import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../components/App';
import userEvent from "@testing-library/user-event";
import {clickNextButtonNTimes, clickBackButton, clickNextButton} from "./helpers/clickNextAndBackButtons";

describe('App End-to-End Test - Backwards', () => {

    it('should navigate through steps and back when the "Next" and "Back" buttons are clicked', async () => {
        render(<App />);
        const user = userEvent.setup();

        const stepLabels = [
            /Netfang/i,
            /Atvinna viðskiptavinar/i,
            /Tilgangur og eðli viðskipta/i,
            /Uppruni fjármagns/i,
            /Raunverulegir eigendur/i,
            /Pólitísk tengsl/i,
            /Áhætta af viðskiptum/i
        ];

        // Iterate over all the steps except the last one
    for (let i = 0; i < stepLabels.length - 1; i++) {

        // Click on the next button
        await clickNextButtonNTimes(1)

        // Find the active step label after proceeding
        let stepLabelElements = screen.getAllByText(stepLabels[i+1]);
        const activeStepLabel = stepLabelElements.find((label: HTMLElement) => label.classList.contains('active'));
        // Assert that the active step label is displayed
        expect(activeStepLabel).toBeInTheDocument();

        // Go back to the previous step
        await clickBackButton(user)

        // Find the active step label after going back
        stepLabelElements = screen.getAllByText(stepLabels[i]);
        const activeFirstStepLabel = stepLabelElements.find((label: HTMLElement) => label.classList.contains('active'));
        // Assert that we are back on the previous step
        expect(activeFirstStepLabel).toBeInTheDocument();

        // Proceed to the next step for the next iteration
        await clickNextButton(user)
}
    });
});
