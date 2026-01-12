import React from "react";
import { render, screen } from "@testing-library/react";
import PoliticalConnections from "../../components/forms/PoliticalConnections";
import userEvent from "@testing-library/user-event";

const political_connection_validation_error = "Slá verður inn pólitísk tengsl eða afhaka við að þau séu til staðar";

describe('Political Connections Form Validation', () => {
    test('renders without validation error initially when checkbox is unchecked', () => {
        const mockOnDescriptionChange = jest.fn();
        const mockOnCheckboxChange = jest.fn();
        const mockSetValidation = jest.fn();
        
        render(<PoliticalConnections 
            description=""
            has_political_connection={false}
            onDescriptionChange={mockOnDescriptionChange}
            onHasPoliticalConnectionChange={mockOnCheckboxChange}
            setParentValidation={mockSetValidation}
            next_button_clicked={false}
        />);
        
        expect(screen.queryByText(political_connection_validation_error)).not.toBeInTheDocument();
    });

    test('renders without validation error initially when checkbox is checked', () => {
        const mockOnDescriptionChange = jest.fn();
        const mockOnCheckboxChange = jest.fn();
        const mockSetValidation = jest.fn();
        
        render(<PoliticalConnections 
            description=""
            has_political_connection={true}
            onDescriptionChange={mockOnDescriptionChange}
            onHasPoliticalConnectionChange={mockOnCheckboxChange}
            setParentValidation={mockSetValidation}
            next_button_clicked={false}
        />);
        
        expect(screen.queryByText(political_connection_validation_error)).not.toBeInTheDocument();
    });

    test('can click on checkbox to show description field', async () => {
        const mockOnDescriptionChange = jest.fn();
        const mockOnCheckboxChange = jest.fn();
        const mockSetValidation = jest.fn();
        
        render(<PoliticalConnections 
            description=""
            has_political_connection={false}
            onDescriptionChange={mockOnDescriptionChange}
            onHasPoliticalConnectionChange={mockOnCheckboxChange}
            setParentValidation={mockSetValidation}
            next_button_clicked={false}
        />);
        
        const user = userEvent.setup();
        const checkbox = screen.getByLabelText('Er viðskiptavinur með pólítísk tengsl?');
        await user.click(checkbox);
        
        expect(mockOnCheckboxChange).toHaveBeenCalledWith(true);
    });

    test('shows validation error when checkbox is checked but description is empty on next click', () => {
        const mockOnDescriptionChange = jest.fn();
        const mockOnCheckboxChange = jest.fn();
        const mockSetValidation = jest.fn();
        
        const { rerender } = render(<PoliticalConnections 
            description=""
            has_political_connection={true}
            onDescriptionChange={mockOnDescriptionChange}
            onHasPoliticalConnectionChange={mockOnCheckboxChange}
            setParentValidation={mockSetValidation}
            next_button_clicked={false}
        />);
        
        rerender(<PoliticalConnections 
            description=""
            has_political_connection={true}
            onDescriptionChange={mockOnDescriptionChange}
            onHasPoliticalConnectionChange={mockOnCheckboxChange}
            setParentValidation={mockSetValidation}
            next_button_clicked={true}
        />);
        
        expect(screen.getByText(political_connection_validation_error)).toBeInTheDocument();
    });

    test('validates description input after user checks checkbox, types in a value and clicks next', async () => {
        const mockOnDescriptionChange = jest.fn();
        const mockOnCheckboxChange = jest.fn();
        const mockSetValidation = jest.fn();
        
        const { rerender } = render(<PoliticalConnections 
            description=""
            has_political_connection={true}
            onDescriptionChange={mockOnDescriptionChange}
            onHasPoliticalConnectionChange={mockOnCheckboxChange}
            setParentValidation={mockSetValidation}
            next_button_clicked={false}
        />);
        
        const user = userEvent.setup();
        const textarea = screen.getByPlaceholderText(/nánari upplýsingar um tengslin/i);
        await user.type(textarea, 'Valid political connections description');
        
        rerender(<PoliticalConnections 
            description="Valid political connections description"
            has_political_connection={true}
            onDescriptionChange={mockOnDescriptionChange}
            onHasPoliticalConnectionChange={mockOnCheckboxChange}
            setParentValidation={mockSetValidation}
            next_button_clicked={true}
        />);
        
        expect(screen.queryByText(political_connection_validation_error)).not.toBeInTheDocument();
        expect(mockSetValidation).toHaveBeenLastCalledWith(true);
    });

    test('clears validation error when user unchecks checkbox', () => {
        const mockOnDescriptionChange = jest.fn();
        const mockOnCheckboxChange = jest.fn();
        const mockSetValidation = jest.fn();
        
        const { rerender } = render(<PoliticalConnections 
            description=""
            has_political_connection={true}
            onDescriptionChange={mockOnDescriptionChange}
            onHasPoliticalConnectionChange={mockOnCheckboxChange}
            setParentValidation={mockSetValidation}
            next_button_clicked={true}
        />);
        
        expect(screen.getByText(political_connection_validation_error)).toBeInTheDocument();
        
        rerender(<PoliticalConnections 
            description=""
            has_political_connection={false}
            onDescriptionChange={mockOnDescriptionChange}
            onHasPoliticalConnectionChange={mockOnCheckboxChange}
            setParentValidation={mockSetValidation}
            next_button_clicked={true}
        />);
        
        expect(screen.queryByText(political_connection_validation_error)).not.toBeInTheDocument();
    });
});