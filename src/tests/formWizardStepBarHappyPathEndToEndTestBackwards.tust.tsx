import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../components/App';
import userEvent from "@testing-library/user-event";
import {clickNextButtonNTimes, clickBackButton} from "./helpers/clickNextAndBackButtons";

describe('App End-to-End Test', () => {

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

        for (let i = 0; i < stepLabels.length - 1; i++) {
            await clickNextButtonNTimes(1)

            // Check that we are on the current step by verifying the active step label
            let stepLabelElements = screen.getAllByText(stepLabels[i+1]);
            const activeStepLabel = stepLabelElements.find(label => label.classList.contains('active'));
            expect(activeStepLabel).toBeInTheDocument();

            await clickBackButton(user)

            // Check that we are back on the previous step by verifying the active step label

            //TODO: Move this in a helper function

            stepLabelElements = screen.getAllByText(stepLabels[i]);
            expect(stepLabelElements).toHaveLength(2);
            const activeFirstStepLabel = stepLabelElements.find(label => label.classList.contains('active'));
            expect(activeFirstStepLabel).toBeInTheDocument();

            // Go forward again for the next iteration
            await clickNextButtonNTimes(1)
        }

        // Check for 'Yfirlit' step

        //TODO: This should be moved to the Forward happy path test.
        // Has nothing to do with the back functionality.

        await clickNextButtonNTimes(1)
        let stepLabelElement = screen.getByText(/Yfirlit/i);
        expect(stepLabelElement).toBeInTheDocument();
        expect(screen.getByText(/Allt rétt/i)).toBeInTheDocument();
    });
});
