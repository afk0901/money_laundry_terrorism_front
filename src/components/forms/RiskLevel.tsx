import React from "react";
import FormTitle from "./FormTitle";

interface RiskLevelProps {
    risk_level: string;
    onRiskLevelChange: (newValue: string) => void;
    isValid: () => boolean;
}

class RiskLevel extends React.Component<RiskLevelProps> {
    render() {
        return (
            <>
                <FormTitle title={'Áhætta af viðskiptum með hliðsjón af áhættumati'} />
                <p>Hvar fellur viðskiptamaður í áhættumatið og hver er áhættan af fyrirhuguðum
                    viðskiptum.
                </p>
                <select
                    name={"risk_level"}
                    value={this.props.risk_level}
                    onChange={(e) => this.props.onRiskLevelChange(e.target.value)}
                >
                    <option value={"low"}>Lítil</option>
                    <option value={"medium"}>Miðlungs</option>
                    <option value={"high"}>Mikil</option>
                </select>
            </>
        );
    }
}

export default RiskLevel;
