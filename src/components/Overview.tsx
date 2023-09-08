import React from "react";

class Overview extends React.Component<any, any>{
    render() {
        return <>
            <h1>Allt rétt?</h1>
            <h5>Netfang</h5>
            {this.props.email ? this.props.email : "Ekkert netfang skráð."}
            <h5>Tilgangur og eðli viðskipta</h5>
            {this.props.purpose_of_business ? this.props.purpose_of_business :
                "Engin tilgangur eða eðli viðskipta skráð."}
            <h5>Uppruni fjármagns</h5>
            {this.props.origin_of_funds ? this.props.origin_of_funds : "Engin uppruni fjármagns skráður."}
            <h5>Raunverulegir eigendur</h5>
            {this.props.is_real_owner ? "Er raunverulegur eigandi" : "Er ekki raunverulegur eigandi"}
            <h5>Pólitísk tengsl</h5>
            {this.props.has_political_connections ?
                this.props.political_connection_description : "Engin pólitísk tengsl"}
            <h5>Áhætta af viðskiptum með hliðsjón af áhættumati</h5>

            {this.props.risk_level === "low" ?
                "Lítil" :  this.props.risk_level === "medium" ? "Miðlungs" :
                this.props.risk_level === "high" ? "Mikil" : "Lítil "}
        </>
    }
}

export default Overview