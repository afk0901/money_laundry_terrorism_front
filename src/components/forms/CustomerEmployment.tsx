import React from "react";
import FormTitle from "./FormTitle";

class CustomerEmployment extends React.Component<any, any>{
    render() {
        return <form>
                <div className="mb-3">
                    <FormTitle title={"Atvinna viðskiptavinar"}></FormTitle>
                    <input placeholder='Atvinna viðskiptavinar' type="text" className="form-control"
                    value={this.props.customer_employment} onChange={this.props.customerEmploymentFormChange}
                    />
                </div>
            </form>
    }
}

export default CustomerEmployment