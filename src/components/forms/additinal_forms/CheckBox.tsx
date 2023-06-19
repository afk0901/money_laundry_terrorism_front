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
                       onChange={this.props.onCheckboxChange}
                       checked={this.props.checked}
                />
                <label>
                    {this.props.question}
                </label>
                </div>
                {this.props.checked && this.props.onDescriptionChange
                    && <DescriptionForm description={this.props.description}
                                        onDescriptionChange={this.props.onDescriptionChange}
                                        placeholder={this.props.description_placeholder}
                    />}
            </>
        )
    }
}

export default CheckBox