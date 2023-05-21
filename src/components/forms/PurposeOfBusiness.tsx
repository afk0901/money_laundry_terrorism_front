import React from "react";
import DescriptionForm from "./additinal_forms/DescriptionForm";
import FormTitle from "./FormTitle";

class PurposeOfBusiness extends React.Component<any, any>{
    render() {
        return <>
            <FormTitle title={'Tilgangur og eðli viðskipta'} />
            <DescriptionForm description={this.props.description}
                             onDescriptionChange={this.props.purposeOfBusinessFormChange} />
        </>
    }
}

export default PurposeOfBusiness