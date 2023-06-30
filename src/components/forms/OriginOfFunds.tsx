import React from "react";
import DescriptionForm from "./additional_forms/DescriptionForm";
import FormTitle from "./FormTitle";

interface OriginOfFundsProps {
    description: string;
    onDescriptionChange: (newDescription: string) => void;
    next_button_clicked? : boolean
}

class OriginOfFunds extends React.Component<OriginOfFundsProps>{
    render() {
        return (
            <>
                <FormTitle title={"Uppruni fjármagns"} />
                <DescriptionForm
                    description={this.props.description}
                    onDescriptionChange={this.props.onDescriptionChange}
                    placeholder={"Sláðu inn upplýsingar um uppruna fjármagns"}
                    next_button_clicked={this.props.next_button_clicked ?? false}
                    invalid_description_message={"Uppruni fjármagns má ekki vera tómt"}
                />
            </>
        );
    }
}

export default OriginOfFunds;
