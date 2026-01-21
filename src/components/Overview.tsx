import React from "react";
import FieldRow from "./FieldRow";

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
}) => {
  return (
    <div className="overview-container">
      <h2 className="mb-4 text-center">Allt rétt?</h2>
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <FieldRow label="Netfang" value={email || "Ekkert netfang skráð."} />
          <hr className="my-2" />
          <FieldRow
            label="Starfsheiti viðskiptavinar"
            value={customer_employment || "Ekkert starfsheiti skráð."}
          />
          <hr className="my-2" />
          <FieldRow
            label="Tilgangur og eðli viðskipta"
            value={purpose_of_business || "Engin tilgangur eða eðli viðskipta skráð."}
          />
          <hr className="my-2" />
          <FieldRow
            label="Uppruni fjármagns"
            value={origin_of_funds || "Engin uppruni fjármagns skráður."}
          />
          <hr className="my-2" />
          <FieldRow
            label="Raunverulegir eigendur"
            value={
              is_real_owner ? "Er raunverulegur eigandi" : "Er ekki raunverulegur eigandi"
            }
          />
          <hr className="my-2" />
          <FieldRow
            label="Pólitísk tengsl"
            value={
              has_political_connections
                ? political_connection_description
                : "Engin pólitísk tengsl"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
