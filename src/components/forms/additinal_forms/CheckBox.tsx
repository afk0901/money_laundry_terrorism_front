import React from "react";
import DescriptionForm from "./DescriptionForm";

class CheckBox extends React.Component<any, any>{
    render() {
        return (
            <>
                <div className="form-check">
                <input className="form-check-input"
                       type="checkbox"
                       name={this.props.question}
                       id={this.props.question}
                       checked={this.props.checked}
                />
                <label>
                    {this.props.question}
                </label>
                </div>
                {this.props.add_description_if_checked && this.props.checked
                    && <DescriptionForm description={'Description'} />}
            </>
        )
    }
}

export default CheckBox