import React from "react";
import InformationProcessingNotice from "./InformationProcessingNotice";
import MultiStep from "react-multistep";
import EmailForm from "./forms/EmailForm";
import PurposeOfBusiness from "./forms/PurposeOfBusiness";
import OriginOfFunds from "./forms/OriginOfFunds";
import RealOwner from "./forms/RealOwner";
import PoliticalConnections from "./forms/PoliticalConnections";
import RiskLevel from "./forms/RiskLevel";
import Overview from "./Overview";
import CustomerEmployment from "./forms/CustomerEmployment";


class Card extends React.Component<any, any>{
    state = {
        email: "",
        customer_employment: "",
        origin_of_funds: "",
        purpose_of_business: "",
        political_connection_description: "",
        risk_level: "",

        is_real_owner : false,
        has_political_connections: false
    }
    // Setting the state here as it's needed for the overview in the end of the process.
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


    render() {
        return <>
                <div className={"card mx-3 my-3"}>
                    <div className={"card-body"}>
                        <div className={"card-title"}>
                            <h2>Áræðanleikakönnun viðskiptamanna</h2>
                            <h6>Einstaklingar</h6>
                        </div>
                        <InformationProcessingNotice />
                        <div className={'my-3'}>
                        <MultiStep activeStep={0}>
                            <EmailForm email={this.state.email}
                                       emailFormChange={this.emailFormChange}/>

                            <CustomerEmployment customer_employment={this.state.customer_employment} customerEmploymentFormChange={this.customerEmploymentFormChange}/>

                            <PurposeOfBusiness description={this.state.purpose_of_business}
                                               purposeOfBusinessFormChange={this.purposeOfBusinessFormChange}/>

                            <OriginOfFunds description={this.state.origin_of_funds}
                                           originOfFundsFormChange={this.originsOfFundsFormChange}/>

                            <RealOwner realOwnerFormChange={this.realOwnerFormChange}
                                       is_real_owner={this.state.is_real_owner}/>

                            <PoliticalConnections description={this.state.political_connection_description}
                                                  politicalConnectionFormChange={this.politicalConnectionsFormChange}
                                                  has_political_connection={this.state.has_political_connections}
                                                  political_connections_descriptionFormChange={this.politicalConnectionDescriptionFormChange}
                            />

                            <RiskLevel description={this.state.risk_level} risk_level={this.state.risk_level} riskLevelFormChange={this.riskLevelFormChange}/>

                            <Overview email={this.state.email}
                                      purpose_of_business={this.state.purpose_of_business}
                                      origin_of_funds={this.state.origin_of_funds}
                                      is_real_owner={this.state.is_real_owner}
                                      has_political_connections={this.state.has_political_connections}
                                      political_connection_description={this.state.political_connection_description}
                                      risk_level={this.state.risk_level}
                            />

                        </MultiStep>
                            </div>
                    </div>
                </div>
            {/*Send the state to the server if all state is filled */}
            </>
    }
}

export default Card