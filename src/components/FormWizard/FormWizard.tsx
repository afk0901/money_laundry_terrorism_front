import React, { useState } from 'react';
import Step from './Step';

interface FormWizardProps {
    steps: React.ReactElement<{ isValid: () => boolean; }>[];
}

const FormWizard: React.FC<FormWizardProps> = ({ steps }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [stepStates, setStepStates] = useState<(boolean | undefined)[]>(Array(steps.length).fill(undefined));

    const goToStep = (step: number) => {
        if (stepStates[currentStep] || step < currentStep) {
            setCurrentStep(step);
        }
    };

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            const isValid = steps[currentStep].props.isValid();
            setStepStates(prev => {
                const newStepStates = [...prev];
                newStepStates[currentStep] = isValid;
                return newStepStates;
            });
            if (isValid) setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const submit = () => {
        if (stepStates.every(state => state === true)) {
            console.log("Form submitted");
        } else {
            console.log("Form incomplete");
        }
    };

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center mt-5">
                {steps.map((step, index) => (
                    <>
                        <Step stepState={stepStates[index]} onClick={() => goToStep(index)} />
                        {index < steps.length - 1 && <div className="border-bottom border-dark mx-2" style={{ width: '50px' }} />}
                    </>
                ))}
            </div>
            <div className="mt-5">
                {steps[currentStep]}
            </div>
            {currentStep > 0 && <button className="btn btn-primary" onClick={prevStep}>Previous</button>}
            {currentStep < steps.length - 1 ? (
                <button className="btn btn-primary ml-2" onClick={nextStep}>Next</button>
            ) : (
                <button className="btn btn-primary ml-2" onClick={submit}>Submit</button>
            )}
        </div>
    );
};

export default FormWizard;
