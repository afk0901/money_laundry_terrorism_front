import React from "react";

interface MoneyLaundryPDFDocumentProps {
    email : string,
    purpose_of_business : string,
    origins_of_funds : string,
    is_rel_owner : boolean,
    has_political_connections: boolean,
    political_connection_description : string
}

const MoneyLaundryPDFDocument: React.FC<MoneyLaundryPDFDocumentProps> = () => {
    return (
        <div data-testid={'money_laundry_terrorism_document'}></div>
    )
}

export default MoneyLaundryPDFDocument