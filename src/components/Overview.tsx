import React from "react";

interface OverviewProps {
    email: string;
    customer_employment: string;
    origin_of_funds: string;
    purpose_of_business: string;
    political_connection_description: string;
    is_real_owner: boolean;
    has_political_connections: boolean;
}

const Overview: React.FC<OverviewProps> = ({
    email,
    customer_employment,
    origin_of_funds,
    purpose_of_business,
    political_connection_description,
    is_real_owner,
    has_political_connections,
}) => (
    <>
        <h1>Allt rétt?</h1>
        <h5>Netfang</h5>
        {email ? email : "Ekkert netfang skráð."}
        <h5>Starfsheiti viðskiptamanns</h5>
        {customer_employment ? customer_employment : "Ekkert starfsheiti skráð."}
        <h5>Tilgangur og eðli viðskipta</h5>
        {purpose_of_business ? purpose_of_business : "Engin tilgangur eða eðli viðskipta skráð."}
        <h5>Uppruni fjármagns</h5>
        {origin_of_funds ? origin_of_funds : "Engin uppruni fjármagns skráður."}
        <h5>Raunverulegir eigendur</h5>
        {is_real_owner ? "Er raunverulegur eigandi" : "Er ekki raunverulegur eigandi"}
        <h5>Pólitísk tengsl</h5>
        {has_political_connections ? political_connection_description : "Engin pólitísk tengsl"}
    </>
);

export default Overview;