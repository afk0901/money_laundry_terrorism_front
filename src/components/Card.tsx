import React from "react";
import InformationProcessingNotice from "./InformationProcessingNotice";
import EmailForm from "./forms/EmailForm";
import PurposeOfBusiness from "./forms/PurposeOfBusiness";
import OriginOfFunds from "./forms/OriginOfFunds";
import RealOwner from "./forms/RealOwner";
import PoliticalConnections from "./forms/PoliticalConnections";
import RiskLevel from "./forms/RiskLevel";
import Overview from "./Overview";
import CustomerEmployment from "./forms/CustomerEmployment";
import FormWizard from "./FormWizard/FormWizard";

interface CardProps {}

interface CardState {
    email: string,
    customer_employment: string,
    origin_of_funds: string,
    purpose_of_business: string,
    political_connection_description: string,
    risk_level: string,
    is_real_owner : boolean,
    has_political_connections: boolean,

}

class Card extends React.Component<CardProps, CardState>{
    state = {

        // The data for the overview page
        email: "",
        customer_employment: "",
        origin_of_funds: "",
        purpose_of_business: "",
        political_connection_description: "",
        risk_level: "",

        is_real_owner : false,
        has_political_connections: false,
    }

    // Take these methods and put them in separate modules to provide better cohesion

    emailFormChange = (evt: any) => {
        this.setState({email : evt.target.value})
    }

    customerEmploymentFormChange = (evt: any) => {
        this.setState({ customer_employment : evt.target.value})
    }

    originsOfFundsFormChange = (evt : any) => {
        this.setState({origin_of_funds : evt.target.value})
    }

    purposeOfBusinessFormChange = (evt: any) => {
        this.setState({purpose_of_business : evt.target.value})
    }

    realOwnerFormChange = (evt: any) => {
        this.setState({is_real_owner : evt.target.checked })
    }

    politicalConnectionsFormChange = (evt: any) => {
        this.setState({
            has_political_connections : evt.target.checked
        })
    }

    politicalConnectionDescriptionFormChange = (evt : any) => {
        this.setState({
            political_connection_description : evt.target.value
        })
    }

    riskLevelFormChange = (evt: any) => {
        this.setState({risk_level : evt.target.value})
    }

    // handleNextClick = (evt: any) => {
    //     //Avoiding mutating the state directly by making a reference
    //     // to a new object.
    //     let active_step = {active_step : this.state.active_step}
    //     this.setState({active_step : active_step.active_step + 1})
    // }
    //
    // handleBackClick = (evt: any) => {
    //     let active_step = {active_step : this.state.active_step}
    //     this.setState({active_step : active_step.active_step - 1})
    // }

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
                        <EmailForm email={this.state.email}
                            emailFormChange={this.emailFormChange}
                            title={"Netfang"}
                            isValid={() => { return true; }} />,
                        <CustomerEmployment customer_employment={this.state.customer_employment}
                            customerEmploymentFormChange={this.customerEmploymentFormChange}
                            title={"Atvinna viðskiptavinar"}
                            isValid={() => { return false; }} />,
                        <PurposeOfBusiness description={this.state.purpose_of_business}
                            purposeOfBusinessFormChange={this.purposeOfBusinessFormChange}
                            title={"Tilgangur og eðli viðskipta"}
                            isValid={() => { return true; }} />,
                        <OriginOfFunds description={this.state.origin_of_funds}
                            originOfFundsFormChange={this.originsOfFundsFormChange}
                            isValid={() => { return true; }} />,
                        <RealOwner realOwnerFormChange={this.realOwnerFormChange}
                            is_real_owner={this.state.is_real_owner}
                            isValid={() => { return true; }} />,
                        <PoliticalConnections description={this.state.political_connection_description}
                            politicalConnectionFormChange={this.politicalConnectionsFormChange}
                            has_political_connection={this.state.has_political_connections}
                            political_connections_descriptionFormChange={this.politicalConnectionDescriptionFormChange}
                            isValid={() => { return true; }} />,
                        <RiskLevel description={this.state.risk_level} risk_level={this.state.risk_level}
                            riskLevelFormChange={this.riskLevelFormChange}
                            isValid={() => { return true; }} />,
                        <Overview email={this.state.email}
                            purpose_of_business={this.state.purpose_of_business}
                            origin_of_funds={this.state.origin_of_funds}
                            is_real_owner={this.state.is_real_owner}
                            has_political_connections={this.state.has_political_connections}
                            political_connection_description={this.state.political_connection_description}
                            risk_level={this.state.risk_level}
                        />
                    ]} />
                </div>
            </div>
        </div>
    );
}

}

export default Card