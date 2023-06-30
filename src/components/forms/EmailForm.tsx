import React, {useEffect, useState} from "react";
import FormTitle from "./FormTitle";

interface EmailFormProps {
  email: string;
  onEmailChange: (newEmail: string) => void;
  hasBeenTouchedBefore? : boolean
  setParentValidation? : (valid : boolean) => boolean
  next_button_clicked? : boolean
}

const EmailForm: React.FC<EmailFormProps> = ({email, onEmailChange, setParentValidation, next_button_clicked}) => {
    const [validEmail, setValidEmail] = useState(false);
    const [emptyEmail, setEmptyEmail] = useState(false);
    const [hasBeenTouchedBefore, setHasBeenTouchedBefore] = useState(false)

    const validate = (email : string) => {
        // String has to begin with letters or numbers then have @ then dot and least one letter
        const email_regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        const valid_email = email_regex.test(email)
        // Sets the email state
        onEmailChange(email)
        setValidEmail(valid_email)
        email ? setEmptyEmail(false) : setEmptyEmail(true)

        if (setParentValidation) {
            valid_email && email ? setParentValidation(true) : setParentValidation(false)
        }
    }

    useEffect(() => {
        if (next_button_clicked) {
            setHasBeenTouchedBefore(true)
            validate(email);
        }
    }, [next_button_clicked]);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHasBeenTouchedBefore(true)
        const email = event.target.value
        validate(email)
    }

    return (
        <form className={'needs-validation'} noValidate={true}>
            <div className="mb-3">
                <FormTitle title={"Netfang"} />
                <input
                    placeholder='Netfang'
                    type="email"
                    className={`form-control ${ (emptyEmail && hasBeenTouchedBefore) || (!validEmail && hasBeenTouchedBefore) ? 'is-invalid' : 'is-valid' }`}
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
                {!validEmail && hasBeenTouchedBefore && !emptyEmail && <div className="invalid-feedback">Netfang er á ógildu sniði</div>}
                {emptyEmail && <div className="invalid-feedback">Netfang má ekki vera tómt</div>}
            </div>
        </form>
    );
}

export default EmailForm;
