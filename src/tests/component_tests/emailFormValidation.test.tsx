import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EmailForm from "../../components/forms/EmailForm";
import { textInputValidationTests } from "../helpers/textInputValidationTests";

const validationErrorText =
  /Netfang má ekki vera tómt|Netfang er á ógildu sniði/i;

textInputValidationTests(
  "Email input",
  EmailForm,
  "email",
  "onEmailChange",
  validationErrorText,
  "test@example.com",
);

describe("Email format validation", () => {
  test("Validates invalid email - invalidEmail", async () => {
    const mockOnChange = jest.fn();
    const mockSetValidation = jest.fn();

    render(
      <EmailForm
        email=""
        onEmailChange={mockOnChange}
        setParentValidation={mockSetValidation}
        next_button_clicked={false}
      />,
    );

    const user = userEvent.setup();
    const input = screen.getByRole("textbox");

    await user.type(input, "invalidEmail");

    expect(screen.getByText(/Netfang er á ógildu sniði/i)).toBeInTheDocument();
  });

  test("Validates invalid email - invalid@", async () => {
    const mockOnChange = jest.fn();
    const mockSetValidation = jest.fn();

    render(
      <EmailForm
        email=""
        onEmailChange={mockOnChange}
        setParentValidation={mockSetValidation}
        next_button_clicked={false}
      />,
    );

    const user = userEvent.setup();
    const input = screen.getByRole("textbox");

    await user.type(input, "invalidEmail@");

    expect(screen.getByText(/Netfang er á ógildu sniði/i)).toBeInTheDocument();
  });

  test("Validates invalid email - invalidEmail@.", async () => {
    const mockOnChange = jest.fn();
    const mockSetValidation = jest.fn();

    render(
      <EmailForm
        email=""
        onEmailChange={mockOnChange}
        setParentValidation={mockSetValidation}
        next_button_clicked={false}
      />,
    );

    const user = userEvent.setup();
    const input = screen.getByRole("textbox");

    await user.type(input, "invalidEmail@.");

    expect(screen.getByText(/Netfang er á ógildu sniði/i)).toBeInTheDocument();
  });
});
