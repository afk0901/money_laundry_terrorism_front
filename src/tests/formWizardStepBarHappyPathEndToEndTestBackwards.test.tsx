import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../components/App';
import userEvent from "@testing-library/user-event";
import { clickNextButtonNTimes, clickBackButton, clickNextButton } from "./helpers/clickNextAndBackButtons";
import {getActiveStepLabel} from "./helpers/stepTestHelpers";

const stepLabels = [
            /Netfang/i,
            /Atvinna viðskiptavinar/i,
            /Tilgangur og eðli viðskipta/i,
            /Uppruni fjármagns/i,
            /Raunverulegir eigendur/i,
            /Pólitísk tengsl/i,
            /Áhætta af viðskiptum/i
        ];

describe('App End-to-End Test - Next and Backwards', () => {

    for (let i = 0; i < stepLabels.length - 1; i++) {

        it(`should be able to navigate through ${i + 1} step(s) and then click on the back button.`, async () => {
            render(<App/>);
            const user = userEvent.setup();
            await clickNextButtonNTimes(1);
            expect(getActiveStepLabel(stepLabels[i + 1])).toBeInTheDocument();

            // await clickBackButton(user);
            // expect(getActiveStepLabel(stepLabels[i])).toBeInTheDocument();
            //
            // await clickNextButton(user);
        });
    }
});

describe('App End-to-End Test - Next and Backwards', () => {

});

describe("Final step", () => {
    it('should be able to navigate back when on the last step', () => {

    });
})
