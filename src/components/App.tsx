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
    const [shouldProduceDocument, setShouldProduceDocument] = useState(false);
    const [documentURL, setDocumentURL] = useState<string>("F.pdf");

    /**
     * Decides if the PDF document should be produced or not. Sets the should_produce state/hook
     * depending on that.
     *
     * @param should_produce - Sets the ShouldProduce state/hook to the should_produce value
     *
     */
    const produce_document = (should_produce : boolean = true) => {
      
      should_produce ? setShouldProduceDocument(true) : setShouldProduceDocument(false)
    }

    // Note to self (As this is a personal project, I allow myself to make notes in the code.):
    //
    // How Higher order functions and closures work in javascript.
    //
    // Definition: Higher order functions are functions that accept function as a parameter or returns function.
    //
    // Definition: Closure is a function that has access to all the variables, and remembers them, of one or more outer functions.
    // Meaning it has access to its own local scope, any parent scopes and global scopes when defined.
    //
    // This is very powerful as we can store results when we are not ready yet and then call the rest.
    //
    // In our case, these are closures, that is, a function defined inside a function that has access
    // to its outer scopes, global and outer functions scopes.
    //
    // When we call it with stateKey then the outer function returns the inner function,
    // but, didn't execute the inner function yet.  Only returns the function.
    //
    // Next, if we store the result somewhere for example in a variable or function parameters, props even here in React,
    // then we can treat it as the inner function (newValue) as it's returning the inner function.
    //
    // Simply put, it's a function that returns a function in our case, but it remembers the values that we used
    // from the outer function as it has already prepared the function when it's returned but not executed.
    //
    // This way, we can set the stateKey and call the inner function later.

  const handleChange = (stateKey: string) => (newValue: any) => {
    switch (stateKey) {
      case "email":
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
                {shouldProduceDocument && <MoneyLaundryPDFDocument 
                                          produce_document={produce_document}
                                          documentUrl={documentURL} />}
        </>
    );
}

export default App;

