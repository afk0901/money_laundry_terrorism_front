import React from 'react';
import StepIcon from './StepIcon';

interface StepProps {
    stepState: boolean | undefined;
    id: string;
    onClick: () => void;
}

const Step: React.FC<StepProps> = ({ stepState, onClick, id}) => (
    <div className="d-flex align-items-center" onClick={onClick} id={id}>
        <StepIcon stepState={stepState} />
    </div>
);

export default Step;
