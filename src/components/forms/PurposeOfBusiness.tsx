import React from "react";
import DescriptionForm from "./additional_forms/DescriptionForm";
import FormTitle from "./FormTitle";

interface PurposeOfBusinessProps {
    description: string;
    onDescriptionChange: (newDescription: string) => void;
    next_button_clicked? : boolean;
    setParentValidation? : (valid : boolean) => boolean;
}

const PurposeOfBusiness: React.FC<PurposeOfBusinessProps> = ({
    description,
    onDescriptionChange,
    next_button_clicked = false,
    setParentValidation
}) => {
    return (
        <>
            <FormTitle title={'Tilgangur og eðli viðskipta'} />
            <DescriptionForm
                description={description}
                placeholder={"Sláðu inn upplýsingar um tilgang og eðli viðskipta"}
                onDescriptionChange={onDescriptionChange}
                next_button_clicked={next_button_clicked}
                invalid_description_message={"Tilgangur og eðli viðskipta má ekki vera tómt"}
                setParentValidation={setParentValidation}
            />
        </>
    );
}

export default PurposeOfBusiness;
