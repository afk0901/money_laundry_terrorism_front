import React from "react";
import CheckBox from "./additional_forms/CheckBox"
import FormTitle from "./FormTitle";

interface PoliticalConnectionsProps {
    description: string;
    has_political_connection: boolean;
    onDescriptionChange: (newDescription: string) => void;
    onHasPoliticalConnectionChange: (newCheckState: boolean) => void;
    next_button_clicked? : boolean
}

class PoliticalConnections extends React.Component<PoliticalConnectionsProps> {

    render() {
        return (
            <>
                <FormTitle title={'Pólitísk tengsl'} />

                <CheckBox
                    question={'Er viðskiptavinur með pólítísk tengsl?'}
                    description={this.props.description}
                    onDescriptionChange={this.props.onDescriptionChange}
                    onCheckboxChange={this.props.onHasPoliticalConnectionChange}
                    checked={this.props.has_political_connection}
                    description_placeholder={"Sláðu inn nánari upplýsingar um tengslin"}
                    invalid_description_message={"Slá verður inn pólitísk tengsl eða afhaka við að þau séu til staðar"}
                    next_button_clicked={this.props.next_button_clicked}
                />
            </>
        );
    }
}

export default PoliticalConnections;
