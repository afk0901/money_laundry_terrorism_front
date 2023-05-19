import React from "react";
import DescriptionForm from "./additinal_forms/DescriptionForm";
import FormTitle from "./FormTitle";

class AnotherRisk extends React.Component<any, any> {
    render() {
        return <>
            <FormTitle title={'Aðrar áhættur'} />
            <DescriptionForm description={'Description'}/>
        </>
    }
}

export default AnotherRisk