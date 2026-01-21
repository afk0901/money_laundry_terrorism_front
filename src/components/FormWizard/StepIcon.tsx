import React from "react";
import { FaCheckCircle, FaRegCircle, FaTimesCircle } from "react-icons/fa";

interface StepIconProps {
  stepState: boolean | undefined;
}

const StepIcon: React.FC<StepIconProps> = ({ stepState }) => {
  if (stepState === undefined) {
    return (
      <span id={"empty-step-icon"} style={{ cursor: "pointer", transition: "transform 0.2s ease" }}>
        <FaRegCircle color="#6c757d" size="28" />
      </span>
    );
  }
  return stepState ? (
    <span className={"valid-step"} style={{ cursor: "pointer", transition: "transform 0.2s ease", transform: "scale(1.1)" }}>
      <FaCheckCircle color="#28a745" size="28" style={{ filter: "drop-shadow(0 1px 3px rgba(40, 167, 69, 0.3))" }} />
    </span>
  ) : (
    <span className={"invalid-step"} style={{ cursor: "pointer", transition: "transform 0.2s ease" }}>
      <FaTimesCircle color="#dc3545" size="28" style={{ filter: "drop-shadow(0 1px 3px rgba(220, 53, 69, 0.3))" }} />
    </span>
  );
};

export default StepIcon;
