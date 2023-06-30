import React from 'react';
import StepIcon from './StepIcon';

interface StepProps {
    stepState: boolean | undefined;
    data_test_id: string;
    onClick: () => void;
}

const Step: React.FC<StepProps> = ({ stepState, onClick, data_test_id}) => (
    <div className="d-flex align-items-center" onClick={onClick} data-testid={data_test_id}>
        <StepIcon stepState={stepState} />
    </div>
);

export default Step;
