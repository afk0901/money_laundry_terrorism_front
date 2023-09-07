import React, {useCallback, useEffect, useState} from "react";
import FormTitle from "./FormTitle";

interface CustomerEmploymentProps {
    customerEmployment: string;
    onCustomerEmploymentChange: (newEmployment: string) => void;
    setParentValidation? : (valid : boolean) => void
    next_button_clicked? : boolean
}

const CustomerEmployment: React.FC<CustomerEmploymentProps> = ({
    customerEmployment,
    onCustomerEmploymentChange,
    setParentValidation,
    next_button_clicked
}) => {
    const [emptyJob, setEmptyJob] = useState(false);

    // Validates if the input is empty.
    // Updates the component and parent validation state accordingly.

    const validate = useCallback((customer_employment : string) => {
        !customer_employment ? setEmptyJob(true) : setEmptyJob(false)

        // Notify the parent if the form is valid or not, so we can go to the next step.
        if(setParentValidation) {
            customer_employment ? setParentValidation(true) :
                                  setParentValidation(false)
        }

    }, [setEmptyJob, setParentValidation])

    const handleCustomerEmploymentChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        const job = event.target.value
        validate(job)
        onCustomerEmploymentChange(job)
    }

    // Validate the customer employment whenever it changes or the next button is clicked.
    useEffect(() => {
        if(next_button_clicked) {
            validate(customerEmployment)
        }
    }, [customerEmployment, next_button_clicked, validate]);

    return (
        <form>
            <div className="mb-3">
                <FormTitle title={"Atvinna viðskiptavinar"} />
                <input
                    placeholder='Atvinna viðskiptavinar'
                    type="text"
                    className={`form-control ${ (emptyJob) ? 'is-invalid' : 'is-valid'}`}
                    value={customerEmployment}
                    onChange={handleCustomerEmploymentChange}
                    required
                    id={'customer-job'}
                />
                {emptyJob && <div className="invalid-feedback">Atvinna viðskiptavinar má ekki vera tómt</div>}
            </div>
        </form>
    );
}

export default CustomerEmployment;
