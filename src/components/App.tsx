import React, {useState} from 'react';
import Card from './Card'
import MoneyLaundryPDFDocument from "./MoneyLaundryPDFDocument";

interface AppProps {}

const App: React.FC<AppProps> = () => {
    const [email, setEmail] = useState<string>('');
    const [customer_employment, setCustomerEmployment] = useState<string>('');
    const [origin_of_funds, setOriginOfFunds] = useState<string>('');
    const [purpose_of_business, setPurposeOfBusiness] = useState<string>('');
    const [political_connection_description, setPoliticalConnectionDescription] = useState<string>('');
    const [risk_level, setRiskLevel] = useState<string>('');
    const [is_real_owner, setIsRealOwner] = useState<boolean>(false);
    const [has_political_connections, setHasPoliticalConnections] = useState<boolean>(false);


    const [shouldProduceDocument, setShouldProduceDocument] = useState(false)

    const produce_document = (should_produce : boolean = true) => {

        should_produce ? setShouldProduceDocument(true) : setShouldProduceDocument(false)
    }

  const handleChange = (stateKey: string) => (newValue: any) => {
        console.log(newValue)
    switch (stateKey) {
      case "email":
          console.log("State email")
        setEmail(newValue);
        break;
      case "customer_employment":
        setCustomerEmployment(newValue);
        break;
      case "origin_of_funds":
        setOriginOfFunds(newValue);
        break;
      case "purpose_of_business":
        setPurposeOfBusiness(newValue);
        break;
      case "political_connection_description":
        setPoliticalConnectionDescription(newValue);
        break;
      case "risk_level":
        setRiskLevel(newValue);
        break;
      case "is_real_owner":
        setIsRealOwner(newValue);
        break;
      case "has_political_connections":
        setHasPoliticalConnections(newValue);
        break;
      default:
        break;
    }
  };


    return (
        <>
            {!shouldProduceDocument && <Card produce_document={produce_document}
                  handleChange={handleChange}
                  email={email}
                  customer_employment={customer_employment}
                  origin_of_funds={origin_of_funds}
                  purpose_of_business={purpose_of_business}
                  political_connection_description={political_connection_description}
                  risk_level={risk_level}
                  is_real_owner={is_real_owner}
                  has_political_connections={has_political_connections} />
            }
                {shouldProduceDocument && <MoneyLaundryPDFDocument produce_document={produce_document}
                                                                   documentUrl={"https://moneylaundrybucket.s3.amazonaws.com/0901972749-1REUNION787898.pdf?AWSAccessKeyId=AKIAYA7REZGI5BM4BONX&Signature=sljjD2H0PrrNb4cAz4rbvB2Fo%2Bo%3D&Expires=1690357982"} />}
        </>
    );
}

export default App;

