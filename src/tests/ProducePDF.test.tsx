import {render, screen, act, waitFor} from "@testing-library/react";
import {click_on_step} from "./helpers/stepTestHelpers";
import userEvent from "@testing-library/user-event";
import App from "../components/App";

// Tests if the PDF document will be displayed. Only guarantees if the correct component is displayed.

describe('Money Laundry And Terrorism - PDF document test', () => {

     test('PDF document is produced on last step when clicked on Framkalla skjal', async () => {
         render(<App />)
         const user = userEvent.setup()
         await act(async () => {
             await click_on_step(user, 7)
         })
         const non_existing_money_laundry_terrorism_document = screen.queryByTestId('money_laundry_terrorism_document')
         expect(non_existing_money_laundry_terrorism_document).not.toBeInTheDocument()

         const produce_document_button = screen.getByRole('button', { name: /Framkalla skjal/i });
         await act(async () => {
             await user.click(produce_document_button)
         })
         const existing_money_laundry_terrorism_document = screen.queryByTestId('money_laundry_terrorism_document')
         expect(existing_money_laundry_terrorism_document).toBeInTheDocument()
     });
})
