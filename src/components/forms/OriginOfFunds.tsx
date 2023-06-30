import React from "react";
import DescriptionForm from "./additional_forms/DescriptionForm";
import FormTitle from "./FormTitle";

interface OriginOfFundsProps {
    description: string;
    onDescriptionChange: (newDescription: string) => void;
    next_button_clicked? : boolean;
    setParentValidation? : (valid : boolean) => void
}

const OriginOfFunds: React.FC<OriginOfFundsProps> = ({
    description,
    onDescriptionChange,
    next_button_clicked ,
    setParentValidation
}) => {
    return (
        <>
            <FormTitle title={"Uppruni fjármagns"} />
            <DescriptionForm
                description={description}
                onDescriptionChange={onDescriptionChange}
                placeholder={"Sláðu inn upplýsingar um uppruna fjármagns"}
                next_button_clicked={next_button_clicked}
                invalid_description_message={"Uppruni fjármagns má ekki vera tómt"}
                setParentValidation={setParentValidation}
            />
        </>
    );
}

export default OriginOfFunds;
