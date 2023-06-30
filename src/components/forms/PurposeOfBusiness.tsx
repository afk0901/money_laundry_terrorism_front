import React from "react";
import DescriptionForm from "./additional_forms/DescriptionForm";
import FormTitle from "./FormTitle";

interface PurposeOfBusinessProps {
    description: string;
    onDescriptionChange: (newDescription: string) => void;
    next_button_clicked? : boolean
    setParentValidation? : (valid : boolean) => boolean
}

class PurposeOfBusiness extends React.Component<PurposeOfBusinessProps>{
    render() {
        return (
            <>
                <FormTitle title={'Tilgangur og eðli viðskipta'} />
                <DescriptionForm
                    description={this.props.description}
                    placeholder={"Sláðu inn upplýsingar um tilgang og eðli viðskipta"}
                    onDescriptionChange={this.props.onDescriptionChange}
                    next_button_clicked={this.props.next_button_clicked ?? false}
                    invalid_description_message={"Tilgangur og eðli viðskipta má ekki vera tómt"}
                    setParentValidation={this.props.setParentValidation}
                />
            </>
        );
    }
}

export default PurposeOfBusiness;
