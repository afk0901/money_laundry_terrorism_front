import React, { useCallback, useEffect, useState } from "react";
import FormTitle from "./FormTitle";

interface EmailFormProps {
  email: string;
  onEmailChange: (newEmail: string) => void;
  hasBeenTouchedBefore?: boolean;
  setParentValidation?: (valid: boolean) => void;
  next_button_clicked?: boolean;
}

const EmailForm: React.FC<EmailFormProps> = ({
  email,
  onEmailChange,
  setParentValidation,
  next_button_clicked,
}) => {
  const [validEmail, setValidEmail] = useState(false);
  const [emptyEmail, setEmptyEmail] = useState(false);

  // Preventing validation error to appear if a user has not typed anything in
  const [hasBeenTouchedBefore, setHasBeenTouchedBefore] = useState(false);

  // validate checks the provided email against a regex pattern and
  // updates the component and parent validation state accordingly.

  const validate = useCallback(
    (email: string) => {
      // String has to begin with letters or numbers then have @ then dot and least one letter
      const email_regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      const valid_email = email_regex.test(email);
      // Sets the email state
      onEmailChange(email);
      setValidEmail(valid_email);
      email ? setEmptyEmail(false) : setEmptyEmail(true);

      // Notify the parent if the form is valid or not, so we can go to the next step.
      if (setParentValidation) {
        valid_email && email
          ? setParentValidation(true)
          : setParentValidation(false);
      }
    },
    [setValidEmail, setEmptyEmail, onEmailChange, setParentValidation],
  );

  // Validate the email whenever it changes or the next button is clicked.
  useEffect(() => {
    if (next_button_clicked) {
      validate(email);
    }
  }, [email, next_button_clicked, validate]);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Update touched state to show validation errors after first input.
    setHasBeenTouchedBefore(true);
    const email = event.target.value;
    validate(email);
  };

  return (
    <form className={"needs-validation"} noValidate={true}>
      <div className="mb-3">
        <FormTitle title={"Netfang"} />
        <input
          placeholder="Netfang"
          type="email"
          className={"form-control"}
          value={email}
          onChange={handleEmailChange}
          required
        />
        {!validEmail && hasBeenTouchedBefore && !emptyEmail && (
          <div className="invalid-feedback d-block">
            Netfang er á ógildu sniði
          </div>
        )}
        {emptyEmail && (
          <div className="invalid-feedback d-block">
            Netfang má ekki vera tómt
          </div>
        )}
      </div>
    </form>
  );
};

export default EmailForm;
