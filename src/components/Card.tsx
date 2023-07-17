import React, { useState, FC } from "react";
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

interface CardProps {
    produce_document: () => void
    handleChange: (new_value : string) => void
}

const Card: FC<CardProps> = ({ produce_document, handleChange }) => {

    const [email, setEmail] = useState<string>('');
    const [customer_employment, setCustomerEmployment] = useState<string>('');
    const [origin_of_funds, setOriginOfFunds] = useState<string>('');
    const [purpose_of_business, setPurposeOfBusiness] = useState<string>('');
    const [political_connection_description, setPoliticalConnectionDescription] = useState<string>('');
    const [risk_level, setRiskLevel] = useState<string>('');
    const [is_real_owner, setIsRealOwner] = useState<boolean>(false);
    const [has_political_connections, setHasPoliticalConnections] = useState<boolean>(false);

    Starfsmenn - Kóðagerðinn
    Nýtt félag?
        

    return (
        <div className="card mx-3 my-3">
            <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <div className="card-title text-center">
                    <h2>Áræðanleikakönnun viðskiptamanna</h2>
                    <h6>Einstaklingar</h6>
                </div>
                <InformationProcessingNotice />
                <div className='my-3 d-flex flex-column align-items-center justify-content-center'>
                    <FormWizard produce_document={produce_document}
                                steps={[
                        <EmailForm
                            email={email}
                            onEmailChange={handleChange('email')}
                        />,
                        <CustomerEmployment
                            customerEmployment={customer_employment}
                            onCustomerEmploymentChange={handleChange('customer_employment')}
                        />,
                        <PurposeOfBusiness
                            description={purpose_of_business}
                            onDescriptionChange={handleChange('purpose_of_business')}
                        />,
                        <OriginOfFunds
                            description={origin_of_funds}
                            onDescriptionChange={handleChange('origin_of_funds')}
                        />,
                        <RealOwner
                            is_real_owner={is_real_owner}
                            onIsRealOwnerChange={handleChange('is_real_owner')}
                        />,
                        <PoliticalConnections
                            description={political_connection_description}
                            has_political_connection={has_political_connections}
                            onHasPoliticalConnectionChange={handleChange('has_political_connections')}
                            onDescriptionChange={handleChange('political_connection_description')}
                        />,
                        <RiskLevel
                            risk_level={risk_level}
                            onRiskLevelChange={handleChange('risk_level')}
                        />,
                        <Overview {...{email, customer_employment, origin_of_funds, purpose_of_business, political_connection_description, risk_level, is_real_owner, has_political_connections}} />
                    ]
                    } />
                </div>
            </div>
        </div>
    );
}

export default Card;
