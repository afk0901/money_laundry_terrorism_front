import React, {useEffect, useState} from 'react';

interface DescriptionFormProps {
    description : string
    onDescriptionChange : (newDescription : string) => void
    placeholder : string
    next_button_clicked? : boolean
    invalid_description_message : string
    setParentValidation? : (valid : boolean) => boolean
}

const DescriptionForm: React.FC<DescriptionFormProps> =
    ({   description,
         placeholder,
         next_button_clicked,
        onDescriptionChange,
        invalid_description_message,
        setParentValidation
    }) => {

    const [emptyDescription, setEmptyDescription] = useState(false);

    const validate = (description : string) => {
        if(!description){
            setEmptyDescription(true)
            if(setParentValidation) {setParentValidation(false)}
        }
        else {
            setEmptyDescription(false)
            if(setParentValidation) {setParentValidation(true)}
        }
    }

    const handleDescriptionChange = (event : React.ChangeEvent<HTMLTextAreaElement>) => {
            const description = event.target.value
            validate(description)
            onDescriptionChange(description)
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
