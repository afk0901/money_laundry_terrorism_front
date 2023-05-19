import React from "react";
import DescriptionForm from "./additinal_forms/DescriptionForm";
import FormTitle from "./FormTitle";

class PurposeOfBusiness extends React.Component<any, any>{
    render() {
        return <>
            <FormTitle title={'Tilgangur og eðli viðskipta'} />
            <DescriptionForm description={'Description'}/>
        </>
    }
}

export default PurposeOfBusiness