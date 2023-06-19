import React from 'react';
import { FaCheckCircle, FaRegCircle, FaTimesCircle } from 'react-icons/fa';

interface StepIconProps {
    stepState: boolean | undefined;
}

const StepIcon: React.FC<StepIconProps> = ({ stepState }) => {
    if (stepState === undefined) {
        return <FaRegCircle color="grey" size="25" />;
    }
    return stepState ? <FaCheckCircle color="green" size="25" /> : <FaTimesCircle color="red" size="25" />;
};

export default StepIcon;
