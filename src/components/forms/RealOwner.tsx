import React, {useCallback, useEffect} from "react";
import CheckBox from "./additional_forms/CheckBox";
import FormTitle from "./FormTitle";

interface RealOwnerProps {
    is_real_owner: boolean;
    onIsRealOwnerChange: (newValue: boolean) => void;
    setParentValidation?: (valid: boolean) => void;
}

const RealOwner: React.FC<RealOwnerProps> = ({
    is_real_owner,
    onIsRealOwnerChange,
    setParentValidation,
}) => {

    // Using useCallback to prevent unnecessary re-renders
    const handleIsRealOwnerChange = useCallback((newValue: boolean) => {
        onIsRealOwnerChange(newValue);

    }, [onIsRealOwnerChange]);

    // Letting the parent know that the form is valid, no matter what
    //as it's optional.

    useEffect(() => {
        if(setParentValidation){
            console.log("Valid");
            setParentValidation(true);
        }
    }, [setParentValidation]);

    return(
        <>
            <FormTitle title={'Raunverulegir eigendur'} />
            <CheckBox
                question={'Er viðskiptavinur Raunverulegur eigandi?'}
                checked={is_real_owner}
                onCheckboxChange={handleIsRealOwnerChange}
            />
        </>
    );
};

export default RealOwner;
