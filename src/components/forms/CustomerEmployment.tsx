import React, {useState} from "react";
import FormTitle from "./FormTitle";

interface CustomerEmploymentProps {
    customerEmployment: string;
    onCustomerEmploymentChange: (newEmployment: string) => void;
    setParentValidation? : (valid : boolean) => boolean
}

const CustomerEmployment: React.FC<CustomerEmploymentProps> = ({
    customerEmployment,
    onCustomerEmploymentChange,
    setParentValidation
}) => {
    const [emptyJob, setEmptyJob] = useState(false);

    const validate = (customer_employment : string) => {
        if(!customer_employment){
            setEmptyJob(true)
            if(setParentValidation) {setParentValidation(false)}
        }

        else {
            setEmptyJob(false)
            if(setParentValidation) {setParentValidation(true)}
        }
    }

    const handleCustomerEmploymentChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        const job = event.target.value
        validate(job)
        onCustomerEmploymentChange(job)
    }

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
                />
                {emptyJob && <div className="invalid-feedback">Atvinna viðskiptavinar má ekki vera tómt</div>}
            </div>
        </form>
    );
}

export default CustomerEmployment;
