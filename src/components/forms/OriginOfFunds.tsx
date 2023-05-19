import React from "react";
import DescriptionForm from "./additinal_forms/DescriptionForm";
import FormTitle from "./FormTitle";

class OriginOfFunds extends React.Component<any, any>{
    render() {
        return <>
            <FormTitle title={"Uppruni fjármagns"} />
        <DescriptionForm description={'Description'}/>
        </>
    }
}

export default OriginOfFunds