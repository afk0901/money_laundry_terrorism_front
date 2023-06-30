import { render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../components/App';
import {clickNextButtonNTimes} from "./helpers/clickNextAndBackButtons";
import {
    expect_one_text_element_to_be_completed_when_step_and_next_button_is_clicked,
    expectNStepsToBeCompleted
}
    from "./helpers/stepTestHelpers"

const stepLabels = [
    "Netfang",
    "Atvinna viðskiptavinar",
    "Tilgangur og eðli viðskipta",
    "Uppruni fjármagns",
    "Raunverulegir eigendur",
    "Pólitísk tengsl",
    "Áhætta af viðskiptum"
  ];

//If validation error text changes, change this array
 const validationErrors = [
      "Netfang má ekki vera tómt",
      "Atvinna viðskiptavinar má ekki vera tómt",
      "Tilgangur og eðli viðskipta má ekki vera tómt",
      "Uppruni fjármagns má ekki vera tómt",
      "Slá verður inn pólitísk tengsl eða afhaka við að þau séu til staðar"
  ]


describe('Form Wizard Happy path - forward', () => {

    describe('Testing when clicked on individual steps', () => {

    stepLabels.forEach((text, index) => {
        test(`Step ${index + 1} is completed when next button is clicked`, async () => {
            render(<App/>);
            await expect_one_text_element_to_be_completed_when_step_and_next_button_is_clicked(stepLabels, index)
            });
        })
    })

    describe('Testing when clicked on next button N times - should never produce validation error', () => {

    stepLabels.forEach((text, index) => {
        test(`when the form is valid and next button is clicked, step ${index + 1} then expect previous steps to be completed`, async () => {
            render(<App />);
            await clickNextButtonNTimes(index+1, validationErrors);
            await expectNStepsToBeCompleted(stepLabels, 0, index)
            });
        });
    })
});


