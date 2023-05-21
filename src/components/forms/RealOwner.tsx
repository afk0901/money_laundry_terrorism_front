import React from "react";
import CheckBox from "./additinal_forms/CheckBox";
import FormTitle from "./FormTitle";

class RealOwner extends React.Component<any, any> {

    render() {
        return<>
            <FormTitle title={'Raunverulegir eigendur'} />
            <CheckBox question={'Er viðskiptavinur Raunverulegur eigandi?'}
                      checked={this.props.is_real_owner}
                      onCheckboxChange={this.props.realOwnerFormChange}
            />
        </>
    }
}

export default RealOwner