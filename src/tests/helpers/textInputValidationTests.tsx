import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

interface MinimumFormProps {
  setParentValidation?: (valid: boolean) => void;
  next_button_clicked?: boolean;
}

/**
 * Creates a complete test suite for a text input form component
 * 
 * @param componentName - Display name for the test suite
 * @param FormComponent - The React component to test
 * @param propName - The name of the value prop
 * @param onChangePropName - The name of the onChange callback prop
 * @param validationErrorRegex - Regex to match the validation error text
 * @param testValue - Valid value to type into the input
 */
export function textInputValidationTests<T extends MinimumFormProps>(
  componentName: string,
  FormComponent: React.ComponentType<T>,
  propName: string,
  onChangePropName: string,
  validationErrorRegex: RegExp,
  testValue: string
) {
  
  const createProps = (overrides: Record<string, unknown> = {}): T => ({
    [propName]: "",
    [onChangePropName]: jest.fn(),
    setParentValidation: jest.fn(),
    next_button_clicked: false,
    ...overrides
  } as unknown as T);

  describe(componentName, () => {
    test('renders initially without validation error', async () => {
      render(<FormComponent {...createProps()} />);
      expect(screen.queryByText(validationErrorRegex)).not.toBeInTheDocument();
    });

    test('shows validation error when next button clicked with empty input', async () => {
      const { rerender } = render(<FormComponent {...createProps()} />);
      rerender(<FormComponent {...createProps({ next_button_clicked: true })} />);
      expect(screen.getByText(validationErrorRegex)).toBeInTheDocument();
    });

    test('validates input after user types', async () => {
      const user = userEvent.setup();
  const mockOnChange = jest.fn();
  const mockSetValidation = jest.fn();
  
  const { rerender } = render(<FormComponent {...createProps({ 
    [onChangePropName]: mockOnChange,
    setParentValidation: mockSetValidation,
    next_button_clicked: false
  })} />);

  await user.type(screen.getByDisplayValue(''), testValue);

  // Trigger validation by setting next_button_clicked
  rerender(<FormComponent {...createProps({
    [propName]: testValue,
    [onChangePropName]: mockOnChange,
    setParentValidation: mockSetValidation,
    next_button_clicked: true
  })} />);

  expect(mockOnChange).toHaveBeenCalled();
  expect(mockSetValidation).toHaveBeenLastCalledWith(true);
    });
  });
}
