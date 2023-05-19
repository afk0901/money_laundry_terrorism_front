import React from "react";
import CheckBox from "./additinal_forms/CheckBox";
import FormTitle from "./FormTitle";

class PoliticalConnections extends React.Component<any, any>{
    render() {
        return <>
            <FormTitle title={'Pólitísk tengsl'} />
            <CheckBox checked={true} question={'Er viðskiptavinur með pólítísk tengsl?'} add_description_if_checked={true}/>
            </>
    }
}

export default PoliticalConnections