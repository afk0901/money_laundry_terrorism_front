import {render, screen} from "@testing-library/react";
import {click_on_step} from "./helpers/stepTestHelpers";
import userEvent from "@testing-library/user-event";
import App from "../components/App";

describe('Money Laundry And Terrorism - PDF document test', () => {
     test('PDF document is produced on last step when clicked on Framkalla skjal', async () => {
         render(<App />)
         const user = userEvent.setup()
         await click_on_step(user, 7)
         const money_laundry_terrorism_document = screen.queryByTestId('money_laundry_terrorism_document')
         expect(money_laundry_terrorism_document).not.toBeInTheDocument()

         const produce_document_button = screen.getByRole('button', { name: /Framkalla skjal/i });
         await user.click(produce_document_button)
         expect(money_laundry_terrorism_document).toBeInTheDocument()
     });
})
