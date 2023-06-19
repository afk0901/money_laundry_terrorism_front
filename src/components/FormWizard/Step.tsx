import React from 'react';
import StepIcon from './StepIcon';

interface StepProps {
    stepState: boolean | undefined;
    onClick: () => void;
}

const Step: React.FC<StepProps> = ({ stepState, onClick }) => (
    <div className="d-flex align-items-center" onClick={onClick}>
        <StepIcon stepState={stepState} />
    </div>
);

export default Step;
