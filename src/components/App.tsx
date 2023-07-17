import React, {useState} from 'react';
import Card from './Card'
import MoneyLaundryPDFDocument from "./MoneyLaundryPDFDocument";

interface AppProps {}

const App: React.FC<AppProps> = () => {
    const [shouldProduceDocument, setShouldProduceDocument] = useState(false)

    const produce_document = () => {
        setShouldProduceDocument(true)
    }

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

     const handleChange = (stateKey: string) => (newValue: any) => {
        this.setState({ [stateKey]: newValue } as Pick<AppState, keyof CardState>);
    }

    return (
        <>
            {!shouldProduceDocument && <Card {

                handleChange={handleChange} produce_document={produce_document}} />}
            {shouldProduceDocument && <MoneyLaundryPDFDocument />}
        </>
    );
}

export default App;

