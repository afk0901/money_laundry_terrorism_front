import React from "react";
import InformationProcessingNotice from "./InformationProcessingNotice";
import EmailForm from "./forms/EmailForm";
import PurposeOfBusiness from "./forms/PurposeOfBusiness";
import OriginOfFunds from "./forms/OriginOfFunds";
import RealOwner from "./forms/RealOwner";
import PoliticalConnections from "./forms/PoliticalConnections";
import Overview from "./Overview";
import FormWizard from "./FormWizard/FormWizard";
import CustomerEmployment from "./forms/CustomerEmployment";

interface CardProps {
  email: string;
  customer_employment: string;
  origin_of_funds: string;
  purpose_of_business: string;
  political_connection_description: string;
  is_real_owner: boolean;
  has_political_connections: boolean;

  produce_document: () => void;
  handleChange: (state_key: string) => (new_value: any) => void;
}

const Card: React.FC<CardProps> = ({
  email,
  customer_employment,
  origin_of_funds,
  purpose_of_business,
  political_connection_description,
  is_real_owner,
  has_political_connections,
  produce_document,
  handleChange,
}: CardProps) => {
  return (
    <div className="card mx-3 my-3">
      <div className="card-body d-flex flex-column align-items-center justify-content-center">
        <div className="card-title text-center">
          <h2>Áræðanleikakönnun viðskiptamanna</h2>
          <h6>Einstaklingar</h6>
        </div>
        <InformationProcessingNotice />
        <div className="my-3 d-flex flex-column align-items-center justify-content-center">
          <FormWizard
            produce_document={produce_document}
            steps={[
              <EmailForm
                key="email"
                email={email}
                onEmailChange={handleChange("email")}
              />,
              <CustomerEmployment
                key="customer_employment"
                customerEmployment={customer_employment}
                onCustomerEmploymentChange={handleChange("customer_employment")}
              />,
              <PurposeOfBusiness
                key="purpose_of_business"
                description={purpose_of_business}
                onDescriptionChange={handleChange("purpose_of_business")}
              />,
              <OriginOfFunds
                key="origin_of_funds"
                description={origin_of_funds}
                onDescriptionChange={handleChange("origin_of_funds")}
              />,
              <RealOwner
                key="is_real_owner"
                is_real_owner={is_real_owner}
                onIsRealOwnerChange={handleChange("is_real_owner")}
              />,
              <PoliticalConnections
                key="political_connection_description"
                description={political_connection_description}
                has_political_connection={has_political_connections}
                onHasPoliticalConnectionChange={handleChange(
                  "has_political_connections",
                )}
                onDescriptionChange={handleChange(
                  "political_connection_description",
                )}
              />,
              <Overview
                key="overview"
                {...{
                  email,
                  customer_employment,
                  origin_of_funds,
                  purpose_of_business,
                  political_connection_description,
                  is_real_owner,
                  has_political_connections,
                }}
              />,
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
