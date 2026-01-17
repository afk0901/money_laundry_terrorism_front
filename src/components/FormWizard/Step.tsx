import React from "react";
import StepIcon from "./StepIcon";

interface StepProps {
  stepState: boolean | undefined;
  id: string;
  onClick: () => void;
}

const Step: React.FC<StepProps> = ({ stepState, onClick, id }) => (
  <div
    className="d-flex align-items-center ms-1"
    onClick={onClick}
    id={id}
    data-testid={id}
  >
    <StepIcon stepState={stepState} />
  </div>
);

export default Step;
