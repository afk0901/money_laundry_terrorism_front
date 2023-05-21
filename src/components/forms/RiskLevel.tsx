import React from "react";
import FormTitle from "./FormTitle";

class RiskLevel extends React.Component<any, any> {
    render() {
        return <>
            <FormTitle title={'Áhætta af viðskiptum með hliðsjón af áhættumati'} />
            <p>Hvar fellur viðskiptamaður í áhættumatið og hver er áhættan af fyrirhuguðum
                viðskiptum.
            </p>
            <select name={"risk_level"} value={this.props.risk_level} onChange={this.props.riskLevelFormChange}>
                <option value={"low"}>Lítil</option>
                <option value={"medium"}>Miðlungs</option>
                <option value={"high"}>Mikil</option>
            </select>
        </>
    }
}

export default RiskLevel