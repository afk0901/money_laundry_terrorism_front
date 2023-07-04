import EmailForm from "../../../components/forms/EmailForm";
import CustomerEmployment from "../../../components/forms/CustomerEmployment";
import {ReactElement} from "react";
import {render} from "@testing-library/react";
import FormWizard from "../../../components/FormWizard/FormWizard";

/**
 * Test double object called on OnChange. Does not return anything.
 */
const handleChange = () => {}

/**
 * Returns the EmailForm component, value being the input value.
 *
 * @param value - the input value, in this case the email.
 * If no value is present, it's considered to be the empty value.
 *
 */
export const email_component = (value : string = '') => {
  return <EmailForm email={value} onEmailChange={handleChange}/>
}

/**
 * Returns the CustomerEmployment component, value being the input value.
 *
 * @param value - the input value, in this case the customer employment.
 * If no value is present, it's considered to be the empty value.
 *
 */
export const customer_employment_component = (value : string = '') => {
  return <CustomerEmployment
      customerEmployment={value}
      onCustomerEmploymentChange={handleChange}
  />
}

/**
 * Renders the component among the FormWizard.
 *
 * @param component - the component to render in the FormWizard component.
 */
export const render_component_with_form_wizard = (component : ReactElement) => {
  render(<FormWizard steps={[component, component]}/>)
}

module.exports = {email_component, customer_employment_component, render_component_with_form_wizard}
