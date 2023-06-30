import React from "react";
import CheckBox from "./additional_forms/CheckBox";
import FormTitle from "./FormTitle";

interface RealOwnerProps {
    is_real_owner: boolean;
    onIsRealOwnerChange: (newValue: boolean) => void;
    isValid: () => boolean;
}

class RealOwner extends React.Component<RealOwnerProps> {
    render() {
        return(
            <>
                <FormTitle title={'Raunverulegir eigendur'} />
                <CheckBox
                    question={'Er viðskiptavinur Raunverulegur eigandi?'}
                    checked={this.props.is_real_owner}
                    onCheckboxChange={this.props.onIsRealOwnerChange}
                />
            </>
        );
    }
}

export default RealOwner;
