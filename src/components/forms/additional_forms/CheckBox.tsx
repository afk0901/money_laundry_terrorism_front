import React from "react";
import DescriptionForm from "./DescriptionForm";

interface CheckBoxProps {
    question: string;
    checked: boolean;
    onCheckboxChange: (newValue: boolean) => void;
    description?: string;
    onDescriptionChange?: (newValue: string) => void;
    description_placeholder?: string;
    next_button_clicked?: boolean
    invalid_description_message? : string
}

class CheckBox extends React.Component<CheckBoxProps> {

    render() {
        return (
            <>
                <div className="form-check">
                    <input className="form-check-input"
                           type="checkbox"
                           name={this.props.question}
                           id={this.props.question}
                           onChange={(e) => this.props.onCheckboxChange(e.target.checked)}
                           checked={this.props.checked}
                    />

                    <label htmlFor={this.props.question}>
                        {this.props.question}
                    </label>
                </div>
                {this.props.checked && this.props.onDescriptionChange
                    && <DescriptionForm description={this.props.description || ''}
                                        onDescriptionChange={this.props.onDescriptionChange}
                                        placeholder={this.props.description_placeholder || ''}
                                        next_button_clicked={this.props.next_button_clicked ?? false}
                                        invalid_description_message={this.props.invalid_description_message ?? ""}
                    />}
            </>
        )
    }
}

export default CheckBox;
