import { render, screen } from '@testing-library/react';
import App from '../components/App';
import {expectAllStepIconsInDocument} from "./helpers/stepTestHelpers";

describe('Initial rendering', () => {

  test('Initial state of step-bar is empty with 8 SVG icons', () => {
    render(<App />);
    const stepBarIcons = screen.getAllByTestId('empty-step-icon');

    expect(stepBarIcons).toHaveLength(8);
    expectAllStepIconsInDocument(stepBarIcons)

  });

  test('Initial state shows only next button', () => {
    render(<App />);

    const nextButton = screen.getByRole('button', { name: /next/i });
    expect(nextButton).toBeInTheDocument();

    const backButton = screen.queryByRole('button', { name: /back/i });
    expect(backButton).not.toBeInTheDocument();
  });

  test('Initially an input with the placeholder Netfang should be visible and only that input', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('Netfang') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.type).toBe('email');

    const allInputs = screen.getAllByPlaceholderText(/.*/);
    expect(allInputs).toHaveLength(1);
  });
});
