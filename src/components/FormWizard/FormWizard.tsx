import React, { useState } from "react";
import Step from "./Step";
import "./stepbar.css";

interface FormWizardProps {
  steps: React.ReactElement<{
    setParentValidation: (isValid: boolean) => void;
    shouldValidate?: boolean;
    next_button_clicked: boolean;
  }>[];
  produce_document: () => void;
}

const FormWizard: React.FC<FormWizardProps> = ({ steps, produce_document }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepStates, setStepStates] = useState<(boolean | undefined)[]>(
    Array(steps.length).fill(undefined)
  );
  const [shouldValidateCurrentForm, setShouldValidateCurrentForm] =
    useState(false);
  const [isValid, setIsValid] = useState(false);
  const [nextButtonClicked, setnextButtonClicked] = useState(false);
  const [disabledNextButton, setDisabledNextButton] = useState(false);

  const stepLabels = [
    "Netfang",
    "Atvinna viðskiptavinar",
    "Tilgangur og eðli viðskipta",
    "Uppruni fjármagns",
    "Raunverulegir eigendur",
    "Pólitísk tengsl",
    "Yfirlit",
  ];

  const setParentValidation = (valid: boolean) => {
    setIsValid(valid);
  };

  const disableNextForStepIfAnyStepInvalid = (
    step: number,
    currentStepStates: (boolean | undefined)[]
  ) => {
    const prevSteps = currentStepStates.slice(0, -2);
    const hasInvalidSteps = prevSteps.some((state) => state !== true);
    const isLastStep = step === prevSteps.length;
    setDisabledNextButton(hasInvalidSteps && isLastStep);
  };

  const goToStep = (
    step: number,
    currentStepStates?: (boolean | undefined)[]
  ) => {
    
    setShouldValidateCurrentForm(false);
    setnextButtonClicked(false);
    setCurrentStep(step);
    disableNextForStepIfAnyStepInvalid(step, currentStepStates || stepStates);
  };

  const updateCurrentStepState = (valid: boolean) => {
    const newStepStates = [...stepStates];
    newStepStates[currentStep] = valid;
    setStepStates(newStepStates);
    return newStepStates;
  };

  const nextStep = () => {

    setnextButtonClicked(true);
    const lastStep = currentStep >= steps.length - 1;
    const nextStepIndex = currentStep + 1;
    
    if (lastStep) return;
    const newStepStates = updateCurrentStepState(isValid);
    if (!isValid) return;

    setIsValid(true);
    goToStep(nextStepIndex , newStepStates);
    setIsValid(false);
    setnextButtonClicked(false);
  };

  const prevStep = () => {
    goToStep(currentStep - 1);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center flex-column flex-md-row mt-5">
        {steps.map((step, index) => {
          const stepClasses = `step-label text-center me-1 ${
            stepStates[index] ? "completed" : ""
          } ${currentStep === index ? "active" : ""}`;
          return (
            <div className="step-container" key={index}>
              <div className={stepClasses}>{stepLabels[index]}</div>
              <Step
                stepState={stepStates[index]}
                onClick={() => goToStep(index)}
                id={`step-${index}`}
              />
              {index < steps.length - 1 && (
                <div className="border-bottom border-dark mx-2 step-line d-none d-md-block" />
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-5">
        {React.cloneElement(steps[currentStep], {
          shouldValidate: shouldValidateCurrentForm,
          setParentValidation,
          next_button_clicked: nextButtonClicked,
        })}
      </div>
      <div className="d-flex justify-content-between">
        {currentStep > 0 && (
          <button className="btn btn-primary" id="back" onClick={prevStep}>
            Til baka
          </button>
        )}
        {currentStep < steps.length - 1 ? (
          <button
            className="btn btn-primary ml-2"
            id="next"
            disabled={disabledNextButton}
            onClick={() => {
              setShouldValidateCurrentForm(true);
              nextStep();
            }}
          >
            Næst
          </button>
        ) : (
          <button
            className="btn btn-primary ml-2 produce_document_butt"
            onClick={produce_document}
          >
            Framkalla skjal
          </button>
        )}
      </div>
    </div>
  );
};

export default FormWizard;
