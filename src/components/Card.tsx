import React from "react";
import InformationProcessingNotice from "./InformationProcessingNotice";
import EmailForm from "./forms/EmailForm";
import PurposeOfBusiness from "./forms/PurposeOfBusiness";
import OriginOfFunds from "./forms/OriginOfFunds";
import RealOwner from "./forms/RealOwner";
import PoliticalConnections from "./forms/PoliticalConnections";
import RiskLevel from "./forms/RiskLevel";
import Overview from "./Overview";
import FormWizard from "./FormWizard/FormWizard";
import CustomerEmployment from "./forms/CustomerEmployment";

interface CardProps {}

interface CardState {
    email: string,
    customer_employment: string,
    origin_of_funds: string,
    purpose_of_business: string,
    political_connection_description: string,
    risk_level: string,
    is_real_owner: boolean,
    has_political_connections: boolean
}

class Card extends React.Component<CardProps, CardState>{
    state: CardState = {
        email: "",
        customer_employment: "",
        origin_of_funds: "",
        purpose_of_business: "",
        political_connection_description: "",
        risk_level: "",
        is_real_owner: false,
        has_political_connections: false
    }

    handleChange = (stateKey: string) => (newValue: any) => {
        this.setState({ [stateKey]: newValue } as Pick<CardState, keyof CardState>);
    }

    render() {
        return (
            <div className="card mx-3 my-3">
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                    <div className="card-title text-center">
                        <h2>Áræðanleikakönnun viðskiptamanna</h2>
                        <h6>Einstaklingar</h6>
                    </div>
                    <InformationProcessingNotice />
                    <div className='my-3 d-flex flex-column align-items-center justify-content-center'>
                        <FormWizard steps={[
                            <EmailForm
                                email={this.state.email}
                                onEmailChange={this.handleChange("email")}
                            />,

                            <CustomerEmployment
                                customerEmployment={this.state.customer_employment}
                                onCustomerEmploymentChange={this.handleChange("customer_employment")}
                            />,
                            <PurposeOfBusiness
                                description={this.state.purpose_of_business}
                                onDescriptionChange={this.handleChange("purpose_of_business")}
                            />,
                            <OriginOfFunds
                                description={this.state.origin_of_funds}
                                onDescriptionChange={this.handleChange("origin_of_funds")}
                            />,
                            <RealOwner
                                is_real_owner={this.state.is_real_owner}
                                onIsRealOwnerChange={this.handleChange("is_real_owner")}
                            />,
                            <PoliticalConnections
                                description={this.state.political_connection_description}
                                has_political_connection={this.state.has_political_connections}
                                onHasPoliticalConnectionChange={this.handleChange("has_political_connections")}
                                onDescriptionChange={this.handleChange("political_connection_description")}
                            />,
                            <RiskLevel
                                risk_level={this.state.risk_level}
                                onRiskLevelChange={this.handleChange("risk_level")}
                                isValid={() => { return true; }}
                            />,
                            <Overview {...this.state} />
                        ]} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
