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
    setParentValidation? : (valid : boolean) => void
}

const CheckBox: React.FC<CheckBoxProps> = ({
    question,
    checked,
    onCheckboxChange,
    description,
    onDescriptionChange,
    description_placeholder,
    next_button_clicked,
    invalid_description_message
}) => {

    return (
        <>
            <div className="form-check">
                <input className="form-check-input"
                       type="checkbox"
                       name={question}
                       id={question}
                       onChange={(e) => onCheckboxChange(e.target.checked)}
                       checked={checked}
                />

                <label htmlFor={question}>
                    {question}
                </label>
            </div>
            {checked && onDescriptionChange
                && <DescriptionForm description={description || ''}
                                    onDescriptionChange={onDescriptionChange}
                                    placeholder={description_placeholder || ''}
                                    next_button_clicked={next_button_clicked ?? false}
                                    invalid_description_message={invalid_description_message ?? ""}
                />}
        </>
    )
}

export default CheckBox;
