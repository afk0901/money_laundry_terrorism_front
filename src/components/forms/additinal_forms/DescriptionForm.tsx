import React from "react";

class DescriptionForm extends React.Component<any, any> {
    render() {
        return <textarea cols={50} rows={5} maxLength={255}
                         value={this.props.description}/>
    }
}

export default DescriptionForm
