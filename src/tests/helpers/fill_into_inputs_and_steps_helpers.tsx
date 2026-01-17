import { screen } from "@testing-library/react";
import { UserEvent } from "@testing-library/user-event/setup/setup";

/**
 * Types into every input so it's valid. Input means textarea and input fields. Visible or not.
 *
 * @param user - userEvent that has been set up, for example, with the setup() method.
 **/

async function type_into_all_inputs(user: UserEvent) {
  const totalInputs = screen.queryAllByRole("textbox").length;

  for (let i = 0; i < totalInputs; i++) {
    //Re-querying as if React re-renders the component then we need to use the new inputs
    // it generates, not the old ones. Even tho the old ones are the same inputs.

    const inputs = screen.queryAllByRole("textbox");
    await user.type(inputs[i], "email@email.com");
  }
}

/**
 * Clicks on all the checkboxes on the page to make them valid.
 *
 * @param user - userEvent that has been set up, for example, with the setup() method.
 *
 */
async function click_all_checkboxes(user: UserEvent) {
  const totalCheckboxes = screen.queryAllByRole("checkbox").length;

  for (let i = 0; i < totalCheckboxes; i++) {
    const checkboxes = screen.queryAllByRole("checkbox");
    await user.click(checkboxes[i]);
  }
}

/**
 * Fills into every element on the page, including checkboxes.
 *
 * @param user - userEvent that has been set up, for example, with the setup() method.
 *
 */

export async function fill_into_every_element(user: UserEvent) {
  await click_all_checkboxes(user);
  await type_into_all_inputs(user);
}

module.exports = { fill_into_every_element };
