import React, {useCallback, useEffect} from "react";
import CheckBox from "./additional_forms/CheckBox"
import FormTitle from "./FormTitle";

interface PoliticalConnectionsProps {
    description: string;
    has_political_connection: boolean;
    onDescriptionChange: (newDescription: string) => void;
    onHasPoliticalConnectionChange: (newCheckState: boolean) => void;
    next_button_clicked? : boolean;
    setParentValidation? : (valid: boolean) => void;
}

const PoliticalConnections: React.FC<PoliticalConnectionsProps> = ({
    description,
    has_political_connection,
    onDescriptionChange,
    onHasPoliticalConnectionChange,
    next_button_clicked,
    setParentValidation
}) => {

    // Using useCallback to prevent unnecessary re-renders
    const handleHasPoliticalChange = useCallback((newValue: boolean) => {
        onHasPoliticalConnectionChange(newValue);
    }, [onHasPoliticalConnectionChange]);

    // Letting the parent know that the form is valid, no matter what
    // as it's optional.

    useEffect(() => {
        // If the checkbox is empty, then notify the parent that the form is valid.
        if(!has_political_connection && setParentValidation){
            setParentValidation(true);
        }
        else {
            if (setParentValidation && description === '') {setParentValidation(false)}
        }

    }, [setParentValidation, has_political_connection, description]);

    return (
        <>
            <FormTitle title={'Pólitísk tengsl'} />

            <CheckBox
                question={'Er viðskiptavinur með pólítísk tengsl?'}
                description={description}
                onDescriptionChange={onDescriptionChange}
                onCheckboxChange={handleHasPoliticalChange}
                checked={has_political_connection}
                description_placeholder={"Sláðu inn nánari upplýsingar um tengslin"}
                invalid_description_message={"Slá verður inn pólitísk tengsl eða afhaka við að þau séu til staðar"}
                next_button_clicked={next_button_clicked}
                setParentValidation={setParentValidation}
            />
        </>
    );
}

export default PoliticalConnections;
