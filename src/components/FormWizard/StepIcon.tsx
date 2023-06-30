import React from 'react';
import { FaCheckCircle, FaRegCircle, FaTimesCircle } from 'react-icons/fa';

interface StepIconProps {
    stepState: boolean | undefined;
}

const StepIcon: React.FC<StepIconProps> = ({ stepState }) => {
    if (stepState === undefined) {
        return <span data-testid={"empty-step-icon"}><FaRegCircle color="grey" size="25" /></span>;
    }
    return stepState ? <FaCheckCircle color="green" size="25" /> : <span data-testid={"invalid-step"}><FaTimesCircle color="red" size="25" /></span>;
};

export default StepIcon;
