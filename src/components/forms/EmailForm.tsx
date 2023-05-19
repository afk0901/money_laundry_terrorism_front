import React from "react";
import FormTitle from "./FormTitle";

class EmailForm extends React.Component<any, any>{
    render() {
        return (
            <form>
                <div className="mb-3">
                    <FormTitle title={"Netfang"}></FormTitle>
                    <input placeholder='Netfang' type="email" className="form-control"
                    value={this.props.email}
                    />
                </div>
            </form>
        )
    }
}

export default EmailForm