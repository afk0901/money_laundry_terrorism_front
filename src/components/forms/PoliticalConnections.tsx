import React from "react";
import CheckBox from "./additinal_forms/CheckBox";
import FormTitle from "./FormTitle";

class PoliticalConnections extends React.Component<any, any>{

    render() {
        return <>
            <FormTitle title={'Pólitísk tengsl'} />

            <CheckBox question={'Er viðskiptavinur með pólítísk tengsl?'}
                      description={this.props.description}
                      onDescriptionChange={this.props.political_connections_descriptionFormChange}
                      onCheckboxChange={this.props.politicalConnectionFormChange}
                      checked={this.props.has_political_connection}
                      description_placeholder={"Sláðu inn nánari upplýsingar um tengslin"}
            />
            </>
    }
}

export default PoliticalConnections