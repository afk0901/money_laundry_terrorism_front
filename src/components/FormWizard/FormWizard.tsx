import React, { useState } from 'react';
import Step from './Step';
import './stepbar.css';

interface FormWizardProps {
    steps: React.ReactElement<{ setParentValidation: (isValid: boolean) => void; shouldValidate?: boolean, next_button_clicked : boolean}>[];
}

const FormWizard: React.FC<FormWizardProps> = ({ steps }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [stepStates, setStepStates] = useState<(boolean | undefined)[]>(Array(steps.length).fill(undefined));
    const [shouldValidateCurrentForm, setShouldValidateCurrentForm] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [nextButtonClicked, setnextButtonClicked] = useState(false)

    const stepLabels = [
        'Netfang',
        'Atvinna viðskiptavinar',
        'Tilgangur og eðli viðskipta',
        'Uppruni fjármagns',
        'Raunverulegir eigendur',
        'Pólitísk tengsl',
        'Áhætta af viðskiptum',
        'Yfirlit'
    ];

    const setParentValidation = (valid: boolean) => {
        setIsValid(valid);
    }

    const goToStep = (step: number) => {
        setShouldValidateCurrentForm(false);
        setCurrentStep(step);
    };

    const nextStep = () => {
        setnextButtonClicked(true)
        if (currentStep < steps.length - 1) {
            // Setting new step states, valid step, invalid step or neither invalid nor valid step (undefined)

            setStepStates(prev => {
                const newStepStates = [...prev];
                newStepStates[currentStep] = isValid;
                return newStepStates;
             });
             if (isValid) {
                 setShouldValidateCurrentForm(false);
                 setCurrentStep(currentStep + 1);

                 // Resetting the nextButtonClicked state
                 setnextButtonClicked(false)
            }
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setShouldValidateCurrentForm(false);
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
        <div className="container">
            <div className="d-flex justify-content-center align-items-center flex-column flex-md-row mt-5">
                {steps.map((step, index) => (
                    <div className="step-container" key={index}>
                        <div className={`step-label text-center me-1 ${stepStates[index] ? 'completed' : ''} ${currentStep === index ? 'active' : ''}`}>
                            {stepLabels[index]}</div>
                        <Step stepState={stepStates[index]} onClick={() => goToStep(index)} data_test_id={`step-${index}`}/>
                        {index < steps.length - 1 && <div className="border-bottom border-dark mx-2 step-line d-none d-md-block" />}
                    </div>
                ))}
            </div>
            <div className="mt-5">
                {/*Adding a new shouldValidate prop that should notify the component if it should validate or not.
                    This is done because we need to validate only when the next button is clicked.
                */}
                {React.cloneElement(steps[currentStep], { shouldValidate: shouldValidateCurrentForm, setParentValidation,
                    next_button_clicked: nextButtonClicked }
                )}
            </div>
            <div className="d-flex justify-content-between">
                {currentStep > 0 && <button className="btn btn-primary" onClick={prevStep}>Previous</button>}
                {currentStep < steps.length - 1 ? (
                    <button className="btn btn-primary ml-2" onClick={() => { setShouldValidateCurrentForm(true); nextStep(); }}>Next</button>
                ) : (
                    <button className="btn btn-primary ml-2" onClick={submit}>Submit</button>
                )}
            </div>
        </div>
    );
};

export default FormWizard;
