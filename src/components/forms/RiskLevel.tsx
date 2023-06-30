import React, {ChangeEvent, FunctionComponent, useCallback, useEffect} from "react";
import FormTitle from "./FormTitle";

interface RiskLevelProps {
    risk_level: string;
    onRiskLevelChange: (newValue: string) => void;
    setParentValidation? : (valid: boolean) => void;
}

const RiskLevel: FunctionComponent<RiskLevelProps> = ({risk_level, onRiskLevelChange,
                                                          setParentValidation,
                                                          }) => {

    // Using useCallback to prevent unnecessary re-renders
    const handleRiskLevelChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
        onRiskLevelChange(event.target.value);
    }, [onRiskLevelChange]);

    // Validate the email whenever it changes or the next button is clicked.
    useEffect(() => {
        if(setParentValidation){setParentValidation(true)}
    }, [setParentValidation]);

    return (
        <>
            <FormTitle title={'Áhætta af viðskiptum með hliðsjón af áhættumati'} />
            <p>Hvar fellur viðskiptamaður í áhættumatið og hver er áhættan af fyrirhuguðum
                viðskiptum.
            </p>
            <select
                name={"risk_level"}
                value={risk_level}
                onChange={handleRiskLevelChange}
            >
                <option value={"low"}>Lítil</option>
                <option value={"medium"}>Miðlungs</option>
                <option value={"high"}>Mikil</option>
            </select>
        </>
    );
}

export default RiskLevel;
