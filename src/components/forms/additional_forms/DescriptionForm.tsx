import React, {useCallback, useEffect, useState} from 'react';

interface DescriptionFormProps {
    description : string
    onDescriptionChange : (newDescription : string) => void
    placeholder : string
    next_button_clicked? : boolean
    invalid_description_message : string
    setParentValidation? : (valid : boolean) => void
}

const DescriptionForm: React.FC<DescriptionFormProps> =
    ({   description,
         placeholder,
         next_button_clicked,
        onDescriptionChange,
        invalid_description_message,
        setParentValidation
    }) => {

    const [emptyDescription, setEmptyDescription] = useState(true);

    const validate = useCallback((description : string) => {
        !description ? setEmptyDescription(true) : setEmptyDescription(false)

        if(setParentValidation) {
                description ? setParentValidation(true) :setParentValidation(false)
            }
        onDescriptionChange(description)
    }, [setEmptyDescription, onDescriptionChange, setParentValidation])
    
    // Validate the email whenever it changes or the next button is clicked.
    useEffect(() => {
        if (next_button_clicked) {
            validate(description);
        }
    }, [description, next_button_clicked, validate]);

    const handleDescriptionChange = (event : React.ChangeEvent<HTMLTextAreaElement>) => {
            const description = event.target.value
            validate(description)
        }

    return (
        <>
        <textarea
            className={`form-control ${ (emptyDescription) ? 'is-invalid' : 'is-valid'}`}
            cols={50}
            rows={5}
            maxLength={255}
            value={description}
            onChange={handleDescriptionChange}
            placeholder={placeholder}
        />
        {emptyDescription && <div className="invalid-feedback">{invalid_description_message}</div>}
        </>
    );
};

export default DescriptionForm;
